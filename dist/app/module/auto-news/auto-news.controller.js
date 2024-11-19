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
exports.AutoNewsControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const auto_news_service_1 = require("./auto-news.service");
const createAutoNews = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auto_news_service_1.AutoNewsServices.createAutoNewsIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Auto News created successfully!",
        data: result,
    });
}));
const getAllAutoNews = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auto_news_service_1.AutoNewsServices.getAllAutoNewsFromDB();
    console.log(result);
    if (!result) {
        throw new AppError_1.default(404, "No data found");
    }
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Auto News retrived successfully!",
        data: result,
    });
}));
const getLatestAutoNews = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auto_news_service_1.AutoNewsServices.getLatestAutoNews();
    console.log(result);
    if (!result) {
        throw new AppError_1.default(404, "No data found");
    }
    res.send(result);
}));
const updateaAutoNews = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield auto_news_service_1.AutoNewsServices.updateAutoNewsFromDB(id, req.body);
    console.log(result);
    if (!result) {
        throw new AppError_1.default(404, "No data found");
    }
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Auto News updated successfully!",
        data: result,
    });
}));
const deleteAutoNews = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    console.log("deleted id", id);
    const result = yield auto_news_service_1.AutoNewsServices.deleteAutoNewsFromDB(id);
    console.log(result);
    if (!result) {
        throw new AppError_1.default(404, "No data found");
    }
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Auto News deleted successfully!",
        data: result,
    });
}));
exports.AutoNewsControllers = {
    createAutoNews,
    getAllAutoNews,
    updateaAutoNews,
    deleteAutoNews,
    getLatestAutoNews,
};
