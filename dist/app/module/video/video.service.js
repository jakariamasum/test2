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
exports.videoServices = void 0;
const video_model_1 = require("./video.model");
const createVideoIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield video_model_1.Video.create(payload);
    return result;
});
const getAllVideoFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const videos = yield video_model_1.Video.aggregate([
        {
            $lookup: {
                from: "categories",
                localField: "category.category",
                foreignField: "_id",
                as: "category.category",
            },
        },
        {
            $unwind: {
                path: "$category.category",
                preserveNullAndEmptyArrays: true,
            },
        },
        {
            $lookup: {
                from: "categories",
                localField: "category.subCategory",
                foreignField: "_id",
                as: "category.subCategory",
            },
        },
        {
            $unwind: {
                path: "$category.subCategory",
                preserveNullAndEmptyArrays: true,
            },
        },
    ]);
    return videos;
});
const getSingleVideo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const video = yield video_model_1.Video.findOne({ _id: id });
    return video;
});
const updateVideoIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield video_model_1.Video.findByIdAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
const deleteVideoFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield video_model_1.Video.findByIdAndDelete({ _id: id });
    return result;
});
exports.videoServices = {
    createVideoIntoDB,
    getAllVideoFromDB,
    getSingleVideo,
    updateVideoIntoDB,
    deleteVideoFromDB,
};
