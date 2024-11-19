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
exports.SubCategoryServices = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const subcategory_model_1 = require("./subcategory.model");
const createSubCategoryIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield subcategory_model_1.SubCategory.create(payload);
    return result;
});
const getSubCategoryFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield subcategory_model_1.SubCategory.find({ type: "news" });
    return result;
});
const getSubCategoryByCategoryFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const objectId = new mongoose_1.default.Types.ObjectId(id);
    const result = yield subcategory_model_1.SubCategory.find({ category: objectId, type: "news" });
    return result;
});
const getSubCategoryByLangFromDB = (lang) => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    if (lang === "story" || lang === "video") {
        result = yield subcategory_model_1.SubCategory.find({ type: lang });
    }
    else {
        result = yield subcategory_model_1.SubCategory.find({ lang, type: "news" });
    }
    return result;
});
const getVideoOrStoriesSubCategoryFromDB = (type) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield subcategory_model_1.SubCategory.find({ type: type });
    console.log(type, result);
    return result;
});
const updateSubCategoryIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield subcategory_model_1.SubCategory.findByIdAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
const deleteSubCategoryFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield subcategory_model_1.SubCategory.findByIdAndDelete({ _id: id });
    return result;
});
exports.SubCategoryServices = {
    createSubCategoryIntoDB,
    getSubCategoryFromDB,
    getSubCategoryByLangFromDB,
    getVideoOrStoriesSubCategoryFromDB,
    updateSubCategoryIntoDB,
    deleteSubCategoryFromDB,
    getSubCategoryByCategoryFromDB,
};
