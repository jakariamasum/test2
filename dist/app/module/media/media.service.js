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
exports.mediaServices = void 0;
const media_model_1 = require("./media.model");
const createmediaIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield media_model_1.Media.create(payload);
    return result;
});
const getMediaFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield media_model_1.Media.find();
    return result;
});
const updateMediaIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield media_model_1.Media.findByIdAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
const deleteMediaFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield media_model_1.Media.findByIdAndDelete({ _id: id });
    return result;
});
exports.mediaServices = {
    createmediaIntoDB,
    getMediaFromDB,
    updateMediaIntoDB,
    deleteMediaFromDB,
};
