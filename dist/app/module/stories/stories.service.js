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
exports.storiesServices = void 0;
const stories_model_1 = require("./stories.model");
const createStoryIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield stories_model_1.Story.create(payload);
    return result;
});
const getStoriesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield stories_model_1.Story.find()
        .populate({
        path: "category",
        select: "title _id",
    })
        .populate({
        path: "subCategory",
        select: "title _id",
    });
    return result;
});
const getSingleStoryFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield stories_model_1.Story.findById({ _id: id })
        .populate({
        path: "category",
        select: "title _id",
    })
        .populate({
        path: "subCategory",
        select: "title _id",
    });
    return result;
});
const updateStoryInDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield stories_model_1.Story.findByIdAndUpdate({ _id: id }, payload, {
        new: true,
    })
        .populate({
        path: "category",
        select: "title _id",
    })
        .populate({
        path: "subCategory",
        select: "title _id",
    });
    return result;
});
const deleteStoryFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield stories_model_1.Story.findByIdAndDelete({ _id: id })
        .populate({
        path: "category",
        select: "title _id",
    })
        .populate({
        path: "subCategory",
        select: "title _id",
    });
    return result;
});
exports.storiesServices = {
    createStoryIntoDB,
    getStoriesFromDB,
    getSingleStoryFromDB,
    updateStoryInDB,
    deleteStoryFromDB,
};
