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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoNewsServices = void 0;
const auto_news_model_1 = require("./auto-news.model");
const createAutoNewsIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auto_news_model_1.AutoNews.create(payload);
    return result;
});
const getAllAutoNewsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auto_news_model_1.AutoNews.find({ isDeleted: false }).populate("category");
    return result;
});
const getSingleAutoNewsFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auto_news_model_1.AutoNews.findById({ _id: id });
    return result;
});
const updateAutoNewsFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auto_news_model_1.AutoNews.findByIdAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
const deleteAutoNewsFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id);
    // console.log(object);
    const news = yield auto_news_model_1.AutoNews.findById({ _id: id });
    console.log("news", news);
    const result = yield auto_news_model_1.AutoNews.findOneAndUpdate({ _id: id }, { isDeleted: true }, { new: true });
    return result;
});
const getLatestAutoNews = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auto_news_model_1.AutoNews.find().sort({ createdAt: -1 });
    return result[0];
});
const getAllAutoNews = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auto_news_model_1.AutoNews.find().sort({ createdAt: -1 });
    return result;
});
exports.AutoNewsServices = {
    createAutoNewsIntoDB,
    getAllAutoNewsFromDB,
    getSingleAutoNewsFromDB,
    updateAutoNewsFromDB,
    deleteAutoNewsFromDB,
    getLatestAutoNews,
    getAllAutoNews,
};
