import { Router } from "express";
import { languageRoutes } from "../module/language/language.route";
import { userRoutes } from "../module/user/user.route";

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
