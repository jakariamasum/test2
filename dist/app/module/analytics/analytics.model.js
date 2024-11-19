"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Analytics = void 0;
const mongoose_1 = require("mongoose");
const analyticsSchema = new mongoose_1.Schema({
    news_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
    },
    views: {
        type: Number,
        required: true,
    },
    likes: {
        type: Number,
        required: true,
    },
    dislikes: {
        type: Number,
        required: true,
    },
    comments_count: {
        type: Number,
        required: true,
    },
});
exports.Analytics = (0, mongoose_1.model)("Analytic", analyticsSchema);
