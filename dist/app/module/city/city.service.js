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
exports.cityServices = void 0;
const city_model_1 = require("./city.model");
const createCityIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield city_model_1.City.create(payload);
    return result;
});
const getAllCitiesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield city_model_1.City.find();
    return result;
});
const updateCityInDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield city_model_1.City.findByIdAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
exports.cityServices = {
    createCityIntoDB,
    getAllCitiesFromDB,
    updateCityInDB,
};
