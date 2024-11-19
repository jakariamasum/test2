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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const news_service_1 = require("./news.service");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const category_service_1 = require("../category/category.service");
const user_service_1 = require("../user/user.service");
const createNews = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield news_service_1.newsServices.createNewsIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "News created successfully!",
        data: result,
    });
}));
const getNews = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = req.query, { lang } = _a, searchParams = __rest(_a, ["lang"]);
    const result = yield news_service_1.newsServices.getNewsFromDB(lang, searchParams);
    if (!result) {
        throw new AppError_1.default(404, "No data found");
    }
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "News retrived successfully!",
        data: result,
    });
}));
const getStories = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("hit hre story");
    const result = yield news_service_1.newsServices.getStoriesFromDB();
    if (!result) {
        throw new AppError_1.default(404, "No data found");
    }
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Stories retrived successfully!",
        data: result,
    });
}));
const getVideos = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield news_service_1.newsServices.getVideoesFromDB();
    if (!result) {
        throw new AppError_1.default(404, "No data found");
    }
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Videos retrived successfully!",
        data: result,
    });
}));
const getNewsByLanguage = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { lang } = req.params;
    const result = yield news_service_1.newsServices.getNewsByLanguageFromDB(lang);
    if (!result) {
        throw new AppError_1.default(404, "No data found");
    }
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "News retrived successfully!",
        data: result,
    });
}));
const getSingleNewsById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield news_service_1.newsServices.getSingleNewsFromDB(id);
    if (!result) {
        throw new AppError_1.default(404, "No data found");
    }
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "News retrived successfully!",
        data: result,
    });
}));
const getNewsByCategory = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { category_id } = req.params;
    const { lang } = req.query;
    const result = yield news_service_1.newsServices.getNewsByCategoryFromDB(category_id, lang);
    if (!result) {
        throw new AppError_1.default(404, "No data found");
    }
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "News retrived successfully!",
        data: result,
    });
}));
const getNewsBySubCategory = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { sub_category_id } = req.params;
    const { lang } = req.query;
    const result = yield news_service_1.newsServices.getNewsBySubCategoryFromDB(sub_category_id, lang);
    if (!result) {
        throw new AppError_1.default(404, "No data found");
    }
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "News retrived successfully!",
        data: result,
    });
}));
const getNewsByCategoryIds = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { categories } = req.body;
    if (!categories || !Array.isArray(categories) || categories.length === 0) {
        throw new AppError_1.default(400, "Invalid category IDs provided");
    }
    const result = [];
    for (const category of categories) {
        // Extract the category ID
        const categoryId = category.catId;
        const categoryData = yield category_service_1.categoryServices.getSingleCategoryFromDB(categoryId);
        if (categoryData) {
            const posts = yield news_service_1.newsServices.getNewsByCategoryFromDB(categoryId);
            result.push({ category: categoryData, posts });
        }
    }
    if (result.length === 0) {
        throw new AppError_1.default(404, "No data found");
    }
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "News retrieved successfully!",
        data: result,
    });
}));
const getNewsByUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.decoded;
    if (userId) {
        const user = yield user_service_1.userServices.getSingleUserFromDB(userId);
        if (!user) {
            throw new AppError_1.default(404, "No user found");
        }
        const id = user._id;
        const result = yield news_service_1.newsServices.getNewsByUserFromDB(id);
        if (!result) {
            throw new AppError_1.default(404, "No data found");
        }
        (0, sendResponse_1.default)(res, {
            success: true,
            statusCode: http_status_1.default.OK,
            message: "News retrived successfully!",
            data: result,
        });
    }
    if (!userId) {
        throw new AppError_1.default(404, "Unauthorized");
    }
}));
const updateNews = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { news_id } = req.params;
    const result = yield news_service_1.newsServices.updateNewsIntoDB(news_id, req.body);
    if (!result) {
        throw new AppError_1.default(404, "No data found");
    }
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "News updated successfully!",
        data: result,
    });
}));
const deleteNews = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { news_id } = req.params;
    const result = yield news_service_1.newsServices.deleteNewsFromDB(news_id);
    if (!result) {
        throw new AppError_1.default(404, "No data found");
    }
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "News delete successfully!",
        data: result,
    });
}));
exports.newsControllers = {
    createNews,
    getNews,
    getNewsByLanguage,
    getNewsByCategory,
    getNewsBySubCategory,
    getNewsByUser,
    updateNews,
    deleteNews,
    getNewsByCategoryIds,
    getSingleNewsById,
    getStories,
    getVideos,
};
