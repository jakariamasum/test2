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
exports.categoryServices = void 0;
const category_model_1 = require("./category.model");
const createCategoryIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_model_1.Category.create(payload);
    return result;
});
const getCategoriesFromDB = (lang) => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    if (lang === "all") {
        result = yield category_model_1.Category.find({ isDeleted: false });
    }
    else {
        result = yield category_model_1.Category.find({ type: "news", isDeleted: false });
    }
    return result;
});
const getCategoriesByLangFromDB = (lang) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(lang);
    let result;
    if (lang === "all") {
        result = yield category_model_1.Category.find({ type: "news", isDeleted: false });
    }
    else if (lang === "story" || lang === "video") {
        result = yield category_model_1.Category.find({ type: lang, isDeleted: false });
    }
    else {
        result = yield category_model_1.Category.find({ lang, type: "news", isDeleted: false });
    }
    return result;
});
const getVideoOrStoriesCategoryFromDB = (type) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_model_1.Category.find({ type: type, isDeleted: false });
    return result;
});
const getSingleCategoryFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_model_1.Category.findOne({ _id: id });
    return result;
});
const updateCategoryIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_model_1.Category.findByIdAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
const deleteCategoryFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_model_1.Category.findByIdAndUpdate({ _id: id }, { isDeleted: true }, { new: true });
    return result;
});
exports.categoryServices = {
    createCategoryIntoDB,
    getCategoriesFromDB,
    getSingleCategoryFromDB,
    getCategoriesByLangFromDB,
    updateCategoryIntoDB,
    deleteCategoryFromDB,
    getVideoOrStoriesCategoryFromDB,
};
