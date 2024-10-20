// pages/api/getTweets.js
import { TwitterApi } from 'twitter-api-v2';

const twitterClient = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_KEY_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

export const twitter = twitterClient.readOnly;

export default async function handler(req, res) {
  try {
    const { keyword, startTime, endTime } = req.query;

    // Fetch tweets based on query, keyword, and time filter
    const response = await twitter.v2.search({
      query: keyword,
      start_time: startTime, 
      end_time: endTime, 
      max_results: 100,
    });

    const tweets = response.data.data;
    res.status(200).json(tweets);
  } catch (error) {
    console.error('Error fetching tweets:', error);
    res.status(500).json({ error: 'Failed to fetch tweets' });
  }
}
