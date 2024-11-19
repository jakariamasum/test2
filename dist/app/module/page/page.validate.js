"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageValidations = exports.updateFiledsSchema = exports.FiledsSchema = void 0;
const zod_1 = require("zod");
exports.FiledsSchema = zod_1.z.object({
    value: zod_1.z.string(),
    label: zod_1.z.string(),
});
exports.updateFiledsSchema = zod_1.z.object({
    value: zod_1.z.string().optional(),
    label: zod_1.z.string().optional(),
});
const SectionDataSchema = zod_1.z.object({
    backgroundColor: zod_1.z.string().optional(),
    desktopGrid: zod_1.z.string().optional(),
    box: zod_1.z.string().optional(),
    categories: zod_1.z.array(exports.FiledsSchema),
});
const updateSectionDataSchema = zod_1.z.object({
    backgroundColor: zod_1.z.string().optional(),
    desktopGrid: zod_1.z.string().optional(),
    box: zod_1.z.string().optional(),
    categories: zod_1.z.array(exports.updateFiledsSchema).optional(),
});
// Zod schema for RowData
const createRowDataSchema = zod_1.z.object({
    color: zod_1.z.string().optional(),
    backgroundColor: zod_1.z.string().optional(),
    index: zod_1.z.number().optional(),
    sections: zod_1.z.array(SectionDataSchema).optional(),
});
const updateRowDataSchema = zod_1.z.object({
    color: zod_1.z.string().optional(),
    backgroundColor: zod_1.z.string().optional(),
    index: zod_1.z.number().optional(),
    sections: zod_1.z.array(updateSectionDataSchema).optional(),
});
const createPageValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        rows: zod_1.z.array(createRowDataSchema).optional(),
        language: zod_1.z.string(),
    }),
});
const updatePageValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        rows: zod_1.z.array(updateRowDataSchema).optional(),
        language: zod_1.z.string().optional(),
    }),
});
exports.pageValidations = {
    createPageValidationSchema,
    updatePageValidationSchema,
};
