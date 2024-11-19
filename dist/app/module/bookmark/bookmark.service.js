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
exports.bookmarkServices = void 0;
const bookmark_model_1 = require("./bookmark.model");
const createBookmarkIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bookmark_model_1.Bookmark.create(payload);
    return result;
});
const getBookmarkFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bookmark_model_1.Bookmark.find();
    return result;
});
const updateBookmarkIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bookmark_model_1.Bookmark.findByIdAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
const deleteBookmarkFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bookmark_model_1.Bookmark.findByIdAndDelete({ _id: id });
    return result;
});
exports.bookmarkServices = {
    createBookmarkIntoDB,
    getBookmarkFromDB,
    updateBookmarkIntoDB,
    deleteBookmarkFromDB,
};
