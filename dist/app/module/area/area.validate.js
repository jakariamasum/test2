"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areaValidations = void 0;
const zod_1 = require("zod");
const createAreaSchemaValidation = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string(),
        city: zod_1.z.string(),
    }),
});
const updateAreaSchemaValidation = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        city: zod_1.z.string().optional(),
    }),
});
exports.areaValidations = {
    createAreaSchemaValidation,
    updateAreaSchemaValidation,
};
