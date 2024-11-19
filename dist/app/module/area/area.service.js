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
exports.areaServices = void 0;
const area_model_1 = require("./area.model");
const createAreaIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield area_model_1.Area.create(payload);
    return result;
});
const getAllAreaFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield area_model_1.Area.find().populate("city");
    return result;
});
const updateaAreaIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield area_model_1.Area.findByIdAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
const updateaAreaStatusIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield area_model_1.Area.findByIdAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
exports.areaServices = {
    createAreaIntoDB,
    getAllAreaFromDB,
    updateaAreaIntoDB,
    updateaAreaStatusIntoDB,
};
