"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Media = void 0;
const mongoose_1 = require("mongoose");
const mediaSchema = new mongoose_1.Schema({
    news_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "News",
        required: true,
    },
    media_type: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    caption: {
        type: String,
    },
}, {
    timestamps: true,
});
exports.Media = (0, mongoose_1.model)("Media", mediaSchema);
