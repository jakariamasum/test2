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
exports.mediaControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const media_service_1 = require("./media.service");
const news_service_1 = require("../news/news.service");
const createMedia = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { news_id } = req.body;
    const news = yield news_service_1.newsServices.getSingleNewsFromDB(news_id);
    if (!news) {
        throw new AppError_1.default(404, "No data found");
    }
    const result = yield media_service_1.mediaServices.createmediaIntoDB(req.body);
    console.log(result);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Media created successfully!",
        data: result,
    });
}));
const getMedia = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield media_service_1.mediaServices.getMediaFromDB();
    if (!result) {
        throw new AppError_1.default(404, "No data found");
    }
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Media retrived successfully!",
        data: result,
    });
}));
const updateMedia = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { media_id } = req.params;
    const result = yield media_service_1.mediaServices.updateMediaIntoDB(media_id, req.body);
    if (!result) {
        throw new AppError_1.default(404, "No data found");
    }
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Media updated successfully!",
        data: result,
    });
}));
const deleteMedia = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { media_id } = req.params;
    const result = yield media_service_1.mediaServices.deleteMediaFromDB(media_id);
    if (!result) {
        throw new AppError_1.default(404, "No data found");
    }
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Media delete successfully!",
        data: result,
    });
}));
exports.mediaControllers = {
    createMedia,
    getMedia,
    updateMedia,
    deleteMedia,
};
