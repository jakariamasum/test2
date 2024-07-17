import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { bookmarkValidations } from "./bookmark.validate";
import { bookmarkControllers } from "./bookmark.controller";

const router = express.Router();
router.post(
  "/",
  validateRequest(bookmarkValidations.createBookmarkValidationSchema),
  bookmarkControllers.createBookmark
);
router.get("/", bookmarkControllers.getBookmarks);
router.put(
  "/:bookmark_id",
  validateRequest(bookmarkValidations.updateBookmarkValidationSchema),
  bookmarkControllers.updateBookmark
);
router.delete("/:bookmark_id", bookmarkControllers.deleteBookmark);

export const bookmarkRoutes = router;
