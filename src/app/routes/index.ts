import { Router } from "express";
import { languageRoutes } from "../module/language/language.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/language",
    route: languageRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
