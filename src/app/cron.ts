import { CronJob } from "cron";
import axios from "axios";
import { parseString } from "xml2js";
import { AutoNewsServices } from "./module/auto-news/auto-news.service";
import { TNews } from "./module/news/news.interface";
import { newsServices } from "./module/news/news.service";

const checkLastUpdateTime = async (): Promise<boolean> => {
  try {
    const autoPost = await AutoNewsServices.getLatestAutoNews();

    const currentTime = new Date();
    const timeDifference =
      currentTime.getTime() - new Date(autoPost.lastCheck).getTime();
    const fiveMinutesInMs = 5 * 60 * 1000;

    if (timeDifference > fiveMinutesInMs) {
      await AutoNewsServices.updateAutoNewsFromDB(autoPost._id.toString(), {
        lastCheck: currentTime,
      });
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error checking last update time:", error);
    return false;
  }
};

// Function to fetch and save news
const fetchAndSaveNews = async (): Promise<void> => {
  try {
    const autoPost = await AutoNewsServices.getLatestAutoNews();
    if (!autoPost) {
      console.error("No AutoPost found. Cannot fetch news.");
      return;
    }

    const newsResponse = await axios.get(
      `https://corsproxy.io/?${autoPost.link}`
    );
    const xmlText = newsResponse.data;

    parseString(xmlText, async (err, result) => {
      if (err) {
        console.error("Error parsing XML:", err);
        return;
      }

      const items = result.rss.channel[0].item;
      const newsArray: Partial<TNews>[] = items.map((item: any) => ({
        title: item.title[0],
        description: item.description[0],
        image: item["media:content"]?.[0]?.$.url || "",
      }));

      try {
        for (const newsItem of newsArray) {
          await newsServices.createNewsIntoDB(newsItem as TNews);
        }
        console.log("News saved successfully");
      } catch (error) {
        console.error("Error saving news:", error);
      }
    });
  } catch (error) {
    console.error("Error fetching or saving news:", error);
  }
};

// Set up cron job
const job = new CronJob("*/5 * * * *", async () => {
  console.log("Running cron job");
  const shouldUpdate = await checkLastUpdateTime();
  if (shouldUpdate) {
    await fetchAndSaveNews();
  }
});

// Start the cron job

export default job;
