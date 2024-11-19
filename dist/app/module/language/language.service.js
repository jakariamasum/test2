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
exports.languageServices = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const page_model_1 = require("../page/page.model");
const language_model_1 = require("./language.model");
const createLanguageIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield mongoose_1.default.startSession();
    try {
        session.startTransaction();
        const newLanguage = yield language_model_1.Language.create([payload], { session });
        const pageInfo = {
            title: newLanguage[0].title,
            language: newLanguage[0].language_code,
            rows: [],
        };
        yield page_model_1.Page.create(pageInfo);
        yield session.commitTransaction();
        return newLanguage[0];
    }
    catch (error) {
        yield session.abortTransaction();
        console.error("Error creating language:", error);
        throw new Error("Failed to create language");
    }
    finally {
        session.endSession();
    }
});
const getAllLanguageFromDB = (lang) => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    if (lang) {
        result = yield language_model_1.Language.findOne({ language_code: lang });
    }
    else {
        result = yield language_model_1.Language.find();
    }
    return result;
});
const updateLanguageIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield language_model_1.Language.findByIdAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
exports.languageServices = {
    createLanguageIntoDB,
    getAllLanguageFromDB,
    updateLanguageIntoDB,
};
