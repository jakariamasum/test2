"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cron_1 = require("cron");
const axios_1 = __importDefault(require("axios"));
const xml2js_1 = require("xml2js"); // Ensure this is imported
const auto_news_service_1 = require("./module/auto-news/auto-news.service");
const news_service_1 = require("./module/news/news.service");
// Function to check if the last update time has exceeded the specified duration
const checkAndFetchNewsForAutoNews = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const autoPosts = yield auto_news_service_1.AutoNewsServices.getAllAutoNews();
        if (!autoPosts || autoPosts.length === 0) {
            console.log("No AutoNews records found.");
            return;
        }
        const currentTime = new Date();
        for (const autoPost of autoPosts) {
            const durationInMs = parseInt(autoPost.duration || "0");
            const timeDifferenceInMinutes = (currentTime.getTime() - new Date(autoPost.lastCheck).getTime()) /
                (1000 * 60);
            if (timeDifferenceInMinutes > durationInMs) {
                // Update the last check time in the database (uncomment if needed)
                yield auto_news_service_1.AutoNewsServices.updateAutoNewsFromDB(autoPost._id.toString(), {
                    lastCheck: currentTime,
                });
                // Fetch and save news for this autoPost
                yield fetchAndSaveNews(autoPost);
            }
        }
    }
    catch (error) {
        console.error("Error in checkAndFetchNewsForAutoNews:", error);
    }
});
// Function to fetch news
const fetchNews = (link) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(link);
        const xmlText = response.data;
        // console.log("xml text", response.data);
        const parsedResult = yield (0, xml2js_1.parseStringPromise)(xmlText, {
            explicitArray: false,
        });
        const items = parsedResult.rss.channel.item;
        const newsArray = Array.isArray(items) ? items : [items];
        // Map items to the desired format and add sourceBy
        const formattedNewsArray = newsArray.map((item, index) => {
            var _a;
            return ({
                newsId: item.newsId || index,
                title: item.title,
                description: item.description,
                image: ((_a = item["media:content"]) === null || _a === void 0 ? void 0 : _a.$.url) || "",
                sourceBy: item.link,
            });
        });
        // Filter out news items that already exist in the database by sourceBy
        const filteredNewsArray = [];
        for (const newsItem of formattedNewsArray) {
            const existingNews = yield news_service_1.newsServices.getNewsBySourceFromDB(newsItem.sourceBy);
            if (!existingNews || existingNews.length === 0) {
                filteredNewsArray.push(newsItem);
            }
        }
        return filteredNewsArray;
    }
    catch (error) {
        console.error("Error fetching news:", error);
        return [];
    }
});
// Function to fetch and save news for a specific autoPost item
const fetchAndSaveNews = (autoPost) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newsArray = yield fetchNews(autoPost.link); // Call fetchNews with the correct link
        // console.log("news array", newsArray);
        if (newsArray && newsArray.length > 0) {
            for (const newsItem of newsArray) {
                // Spread existing `newsItem` data and add additional fields from `autoPost`
                const finalNewsItem = Object.assign(Object.assign({}, newsItem), { category: {
                        category: autoPost.category,
                        subCategory: autoPost.subcategory,
                    }, subcategory: autoPost.subcategory, lang: autoPost.language, author: autoPost.author, status: autoPost.status || "pending", publishedDate: new Date() });
                yield news_service_1.newsServices.createNewsIntoDB(finalNewsItem);
            }
            console.log("News saved successfully for", autoPost.link);
        }
    }
    catch (error) {
        console.error("Error fetching or saving news:", error);
    }
});
// Set up cron job to run every 5 minute
const job = new cron_1.CronJob("*/5 * * * *", () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Running cron job");
    yield checkAndFetchNewsForAutoNews();
}));
exports.default = job;
