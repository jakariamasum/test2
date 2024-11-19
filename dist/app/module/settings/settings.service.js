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
exports.settingServices = void 0;
const settings_model_1 = require("./settings.model");
const createSettingIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield settings_model_1.Setting.create(payload);
    return result;
});
const getSettingsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield settings_model_1.Setting.find();
    return result;
});
const updateSettingsIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield settings_model_1.Setting.findByIdAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
const deleteSettingsFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield settings_model_1.Setting.findByIdAndDelete({ _id: id });
    return result;
});
exports.settingServices = {
    createSettingIntoDB,
    getSettingsFromDB,
    updateSettingsIntoDB,
    deleteSettingsFromDB,
};
