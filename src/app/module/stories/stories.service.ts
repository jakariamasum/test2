import { TStory } from "./stories.interface";
import { Story } from "./stories.model";

const createStoryIntoDB = async (payload: TStory) => {
  const result = await Story.create(payload);
  return result;
};

const getStoriesFromDB = async () => {
  const result = await Story.find();
  return result;
};
export const storiesServices = {
  createStoryIntoDB,
  getStoriesFromDB,
};
