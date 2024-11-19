"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const language_route_1 = require("../module/language/language.route");
const user_route_1 = require("../module/user/user.route");
const settings_route_1 = require("../module/settings/settings.route");
const category_route_1 = require("../module/category/category.route");
const news_route_1 = require("../module/news/news.route");
const media_route_1 = require("../module/media/media.route");
const analytics_route_1 = require("../module/analytics/analytics.route");
const page_route_1 = require("../module/page/page.route");
const bookmark_route_1 = require("../module/bookmark/bookmark.route");
const subcategory_route_1 = require("../module/subcategory/subcategory.route");
const city_route_1 = require("../module/city/city.route");
const area_route_1 = require("../module/area/area.route");
const ads_route_1 = require("../module/ads/ads.route");
const video_route_1 = require("../module/video/video.route");
const stories_route_1 = require("../module/stories/stories.route");
const auto_news_route_1 = require("../module/auto-news/auto-news.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/user",
        route: user_route_1.userRoutes,
    },
    {
        path: "/language",
        route: language_route_1.languageRoutes,
    },
    {
        path: "/news",
        route: news_route_1.newsRoutes,
    },
    {
        path: "/categories",
        route: category_route_1.categoryRoutes,
    },
    {
        path: "/sub-categories",
        route: subcategory_route_1.subCategoryRoutes,
    },
    {
        path: "/media",
        route: media_route_1.mediaRoutes,
    },
    {
        path: "/analytics",
        route: analytics_route_1.analyticsRoutes,
    },
    {
        path: "/pages",
        route: page_route_1.pageRoutes,
    },
    {
        path: "/bookmarks",
        route: bookmark_route_1.bookmarkRoutes,
    },
    {
        path: "/settings",
        route: settings_route_1.settingRoutes,
    },
    {
        path: "/city",
        route: city_route_1.cityRoutes,
    },
    {
        path: "/area",
        route: area_route_1.areaRoutes,
    },
    {
        path: "/ads",
        route: ads_route_1.adsRoutes,
    },
    {
        path: "/videos",
        route: video_route_1.videoRoutes,
    },
    {
        path: "/story",
        route: stories_route_1.storiesRoutes,
    },
    {
        path: "/auto-news",
        route: auto_news_route_1.AutoNewsRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
