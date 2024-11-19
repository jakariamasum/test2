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
exports.pageServices = void 0;
const page_model_1 = require("./page.model");
const createPageIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield page_model_1.Page.create(payload);
    return result;
});
const getPageFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield page_model_1.Page.find();
    return result;
});
const getPageByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield page_model_1.Page.findOne({ _id: id });
    return result;
});
const getPageByLanguageFromDB = (language) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield page_model_1.Page.findOne({ language: language });
    return result;
});
const updatePageIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield page_model_1.Page.findByIdAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
const deletePageFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield page_model_1.Page.findByIdAndDelete({ _id: id });
    return result;
});
exports.pageServices = {
    createPageIntoDB,
    getPageFromDB,
    updatePageIntoDB,
    deletePageFromDB,
    getPageByLanguageFromDB,
    getPageByIdFromDB,
};
