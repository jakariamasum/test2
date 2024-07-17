import { Router } from "express";
import { languageRoutes } from "../module/language/language.route";
import { userRoutes } from "../module/user/user.route";
import { settingRoutes } from "../module/settings/settings.route";

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
    path: "/settings",
    route: settingRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
