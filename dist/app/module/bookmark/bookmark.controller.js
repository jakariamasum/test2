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
exports.bookmarkControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const bookmark_service_1 = require("./bookmark.service");
const news_service_1 = require("../news/news.service");
const user_service_1 = require("../user/user.service");
const createBookmark = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { news_id, user_id } = req.body;
    const news = yield news_service_1.newsServices.getSingleNewsFromDB(news_id);
    const user = yield user_service_1.userServices.getSingleUserFromDB(user_id);
    if (!news || !user) {
        throw new AppError_1.default(404, "No data found");
    }
    const result = yield bookmark_service_1.bookmarkServices.createBookmarkIntoDB(req.body);
    console.log(result);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Bookmark created successfully!",
        data: result,
    });
}));
const getBookmarks = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bookmark_service_1.bookmarkServices.getBookmarkFromDB();
    if (!result) {
        throw new AppError_1.default(404, "No data found");
    }
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Bookmark retrived successfully!",
        data: result,
    });
}));
const updateBookmark = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookmark_id } = req.params;
    const result = yield bookmark_service_1.bookmarkServices.updateBookmarkIntoDB(bookmark_id, req.body);
    if (!result) {
        throw new AppError_1.default(404, "No data found");
    }
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Bookmark updated successfully!",
        data: result,
    });
}));
const deleteBookmark = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookmark_id } = req.params;
    const result = yield bookmark_service_1.bookmarkServices.deleteBookmarkFromDB(bookmark_id);
    if (!result) {
        throw new AppError_1.default(404, "No data found");
    }
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Bookmark delete successfully!",
        data: result,
    });
}));
exports.bookmarkControllers = {
    createBookmark,
    getBookmarks,
    updateBookmark,
    deleteBookmark,
};
