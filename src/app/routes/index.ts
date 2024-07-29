import { Router } from "express";
import { languageRoutes } from "../module/language/language.route";
import { userRoutes } from "../module/user/user.route";
import { settingRoutes } from "../module/settings/settings.route";
import { categoryRoutes } from "../module/category/category.route";
import { newsRoutes } from "../module/news/news.route";
import { mediaRoutes } from "../module/media/media.route";
import { analyticsRoutes } from "../module/analytics/analytics.route";
import { pageRoutes } from "../module/page/page.route";
import { bookmarkRoutes } from "../module/bookmark/bookmark.route";
import { subCategoryRoutes } from "../module/subcategory/subcategory.route";
import { cityRoutes } from "../module/city/city.route";
import { areaRoutes } from "../module/area/area.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/user",
    route: userRoutes,
  },
  {
    path: "/language",
    route: languageRoutes,
  },
  {
    path: "/news",
    route: newsRoutes,
  },
  {
    path: "/categories",
    route: categoryRoutes,
  },
  {
    path: "/sub-categories",
    route: subCategoryRoutes,
  },
  {
    path: "/media",
    route: mediaRoutes,
  },
  {
    path: "/analytics",
    route: analyticsRoutes,
  },
  {
    path: "/pages",
    route: pageRoutes,
  },
  {
    path: "/bookmarks",
    route: bookmarkRoutes,
  },
  {
    path: "/settings",
    route: settingRoutes,
  },
  {
    path: "/city",
    route: cityRoutes,
  },
  {
    path: "/area",
    route: areaRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
