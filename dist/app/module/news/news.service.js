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
exports.newsServices = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const news_model_1 = __importDefault(require("./news.model"));
const createNewsIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield news_model_1.default.create(payload);
    return result;
});
const getNewsFromDB = (lang, params) => __awaiter(void 0, void 0, void 0, function* () {
    const { dateFrom, dateTo, author, category, status = ["published", "pending"], page = 1, limit = 10, city, } = params;
    console.log(params);
    const query = {};
    if (lang && lang !== "all") {
        query.lang = lang;
    }
    if (status) {
        query.status = { $in: Array.isArray(status) ? status : [status] };
    }
    if (dateFrom || dateTo) {
        query.createdAt = {};
        if (dateFrom) {
            query.createdAt.$gte = new Date(dateFrom);
        }
        if (dateTo) {
            query.createdAt.$lte = new Date(dateTo);
        }
    }
    if (author) {
        query.author = author;
    }
    if (category) {
        query["category.category"] = category;
    }
    if (city) {
        query["location.city"] = city;
    }
    const skip = (page - 1) * limit;
    const [news] = yield Promise.all([
        news_model_1.default.find(query)
            .populate("category.category")
            .populate("author")
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .lean(),
    ]);
    console.log(params);
    return news;
});
const getSingleNewsFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield news_model_1.default.findOne({ _id: id })
        .populate("category.category")
        .populate("author");
    return result;
});
const getNewsByLanguageFromDB = (link) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(link);
    const currentDate = new Date();
    const result = yield news_model_1.default.find({
        $or: [{ lang: link }, { lang: "story" }, { lang: "video" }],
        publishedDate: { $lte: currentDate },
    })
        .populate("category.category")
        .populate("author");
    console.log(result);
    return result;
});
const getNewsByCategoryFromDB = (id, lang) => __awaiter(void 0, void 0, void 0, function* () {
    const objectId = new mongoose_1.default.Types.ObjectId(id);
    let result;
    if (lang !== "all") {
        result = yield news_model_1.default.find({
            "category.category": objectId,
            lang: lang,
            status: "published",
        }).populate("category.category");
    }
    else {
        result = yield news_model_1.default.find({ "category.category": objectId })
            .populate({
            path: "category.category",
        })
            .populate("author");
    }
    console.log(result);
    return result;
});
const getNewsBySubCategoryFromDB = (id, lang) => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    if (lang !== "all") {
        result = yield news_model_1.default.find({
            "category.subCategory": id,
            lang: lang,
            status: "published",
        }).populate("category.category");
    }
    else {
        result = yield news_model_1.default.find({ "category.subCategory": String(id) })
            .populate({
            path: "category.category",
        })
            .populate("author");
    }
    console.log(id, result);
    return result;
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getNewsByUserFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield news_model_1.default.find({ author: id })
        .populate("category.category")
        .populate("author");
    return result;
});
const updateNewsIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield news_model_1.default.findByIdAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
const deleteNewsFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield news_model_1.default.findByIdAndDelete({ _id: id });
    return result;
});
const getStoriesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield news_model_1.default.find({ lang: "story" });
    return result;
});
const getVideoesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield news_model_1.default.find({ lang: "video" });
    return result;
});
const getNewsBySourceFromDB = (source) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield news_model_1.default.find({ sourceBy: source });
    return result;
});
exports.newsServices = {
    createNewsIntoDB,
    getNewsFromDB,
    getSingleNewsFromDB,
    getNewsByLanguageFromDB,
    getNewsByCategoryFromDB,
    getNewsBySubCategoryFromDB,
    getNewsByUserFromDB,
    updateNewsIntoDB,
    deleteNewsFromDB,
    getStoriesFromDB,
    getVideoesFromDB,
    getNewsBySourceFromDB,
};
