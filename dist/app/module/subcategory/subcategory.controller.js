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
exports.SubCategoryControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const subcategory_service_1 = require("./subcategory.service");
const createSubCategory = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield subcategory_service_1.SubCategoryServices.createSubCategoryIntoDB(req.body);
    console.log(result);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Sub Category created successfully!",
        data: result,
    });
}));
const getSubCategory = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield subcategory_service_1.SubCategoryServices.getSubCategoryFromDB();
    if (!result) {
        throw new AppError_1.default(404, "No data found");
    }
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Sub-category retrived successfully!",
        data: result,
    });
}));
const getSubCategoryByLang = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { lang } = req.params;
    const result = yield subcategory_service_1.SubCategoryServices.getSubCategoryByLangFromDB(lang);
    if (!result) {
        throw new AppError_1.default(404, "No data found");
    }
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Sub-category retrived successfully!",
        data: result,
    });
}));
const getSubCategoryByCategory = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield subcategory_service_1.SubCategoryServices.getSubCategoryByCategoryFromDB(id);
    if (!result) {
        throw new AppError_1.default(404, "No data found");
    }
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Sub-category retrived successfully!",
        data: result,
    });
}));
const getVideoOrStoriesSubCategory = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { type } = req.query;
    const result = yield subcategory_service_1.SubCategoryServices.getVideoOrStoriesSubCategoryFromDB(type);
    if (!result) {
        throw new AppError_1.default(404, "No data found");
    }
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Sub-category retrived successfully!",
        data: result,
    });
}));
const updateSubCategory = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { category_id } = req.params;
    const result = yield subcategory_service_1.SubCategoryServices.updateSubCategoryIntoDB(category_id, req.body);
    if (!result) {
        throw new AppError_1.default(404, "No data found");
    }
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Sub Category updated successfully!",
        data: result,
    });
}));
const deleteSubCategory = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { category_id } = req.params;
    const result = yield subcategory_service_1.SubCategoryServices.deleteSubCategoryFromDB(category_id);
    if (!result) {
        throw new AppError_1.default(404, "No data found");
    }
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Category delete successfully!",
        data: result,
    });
}));
exports.SubCategoryControllers = {
    createSubCategory,
    getSubCategory,
    getSubCategoryByLang,
    getVideoOrStoriesSubCategory,
    updateSubCategory,
    deleteSubCategory,
    getSubCategoryByCategory,
};
