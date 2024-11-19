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
exports.analyticsServices = void 0;
const analytics_model_1 = require("./analytics.model");
const createAnalyticsIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield analytics_model_1.Analytics.create(payload);
    return result;
});
const getAnalyticsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield analytics_model_1.Analytics.find();
    return result;
});
const updateAnalyticsIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield analytics_model_1.Analytics.findByIdAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
const deleteAnalyticsFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield analytics_model_1.Analytics.findByIdAndDelete({ _id: id });
    return result;
});
exports.analyticsServices = {
    createAnalyticsIntoDB,
    getAnalyticsFromDB,
    updateAnalyticsIntoDB,
    deleteAnalyticsFromDB,
};
