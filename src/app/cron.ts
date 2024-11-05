import { CronJob } from "cron";
import axios from "axios";
import { parseStringPromise } from "xml2js"; // Ensure this is imported
import { AutoNewsServices } from "./module/auto-news/auto-news.service";
import { TNews } from "./module/news/news.interface";
import { newsServices } from "./module/news/news.service";

// Function to check if the last update time has exceeded the specified duration
const checkAndFetchNewsForAutoNews = async (): Promise<void> => {
  try {
    const autoPosts = await AutoNewsServices.getAllAutoNews();

    if (!autoPosts || autoPosts.length === 0) {
      console.log("No AutoNews records found.");
      return;
    }
    const currentTime = new Date();

    for (const autoPost of autoPosts) {
      const durationInMs = parseInt(autoPost.duration || "0");
      const timeDifferenceInMinutes =
        (currentTime.getTime() - new Date(autoPost.lastCheck).getTime()) /
        (1000 * 60);

      if (timeDifferenceInMinutes > durationInMs) {
        // Update the last check time in the database (uncomment if needed)
        await AutoNewsServices.updateAutoNewsFromDB(autoPost._id.toString(), {
          lastCheck: currentTime,
        });

        // Fetch and save news for this autoPost
        await fetchAndSaveNews(autoPost);
      }
    }
  } catch (error) {
    console.error("Error in checkAndFetchNewsForAutoNews:", error);
  }
};

// Function to fetch news
const fetchNews = async (link: string): Promise<Partial<TNews>[]> => {
  try {
    const response = await axios.get(link);
    const xmlText = response.data;
    // console.log("xml text", response.data);
    const parsedResult = await parseStringPromise(xmlText, {
      explicitArray: false,
    });
    const items = parsedResult.rss.channel.item;

    const newsArray = Array.isArray(items) ? items : [items];
    
    // Map items to the desired format and add sourceBy
    const formattedNewsArray = newsArray.map((item: any, index: number) => ({
      newsId: item.newsId || index,
      title: item.title,
      description: item.description,
      image: item["media:content"]?.$.url || "",
      sourceBy: item.link,
    }));

    // Filter out news items that already exist in the database by sourceBy
    const filteredNewsArray = [];
    for (const newsItem of formattedNewsArray) {
      const existingNews = await newsServices.getNewsBySourceFromDB(
        newsItem.sourceBy
      );
      if (!existingNews || existingNews.length === 0) {
        filteredNewsArray.push(newsItem);
      }
    }

    return filteredNewsArray;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

// Function to fetch and save news for a specific autoPost item
const fetchAndSaveNews = async (autoPost: any): Promise<void> => {
  try {
    const newsArray = await fetchNews(autoPost.link); // Call fetchNews with the correct link
    // console.log("news array", newsArray);
    if (newsArray && newsArray.length > 0) {
      for (const newsItem of newsArray) {
        // Spread existing `newsItem` data and add additional fields from `autoPost`
        const finalNewsItem = {
          ...newsItem,
          category: {
            category: autoPost.category,
            subCategory: autoPost.subcategory,
          },
          subcategory: autoPost.subcategory,
          lang: autoPost.language,
          author: autoPost.author,
          status: autoPost.status || "pending",
          publishedDate: new Date(),
        };
          await newsServices.createNewsIntoDB(finalNewsItem as TNews);
      }
      console.log("News saved successfully for", autoPost.link);
    }
  } catch (error) {
    console.error("Error fetching or saving news:", error);
  }
};

// Set up cron job to run every 5 minute
const job = new CronJob("*/5 * * * *", async () => {
  console.log("Running cron job");
  await checkAndFetchNewsForAutoNews();
});


export default job;
