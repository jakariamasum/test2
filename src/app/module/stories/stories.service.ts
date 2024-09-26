import { TStory } from "./stories.interface";
import { Story } from "./stories.model";

const createStoryIntoDB = async (payload: TStory) => {
  const result = await Story.create(payload);
  return result;
};

const getStoriesFromDB = async () => {
  const result = await Story.find()
    .populate({
      path: "category",
      select: "title _id",
    })
    .populate({
      path: "subCategory",
      select: "title _id",
    });
  return result;
};
const getSingleStoryFromDB = async (id: string) => {
  const result = await Story.findById({ _id: id })
    .populate({
      path: "category",
      select: "title _id",
    })
    .populate({
      path: "subCategory",
      select: "title _id",
    });
  return result;
};
const updateStoryInDB = async (id: string, payload: Partial<TStory>) => {
  const result = await Story.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  })
    .populate({
      path: "category",
      select: "title _id",
    })
    .populate({
      path: "subCategory",
      select: "title _id",
    });
  return result;
};
export const storiesServices = {
  createStoryIntoDB,
  getStoriesFromDB,
  getSingleStoryFromDB,
  updateStoryInDB,
};
