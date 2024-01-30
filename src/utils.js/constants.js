const MY_API_KEY = process.env.REACT_APP_API_KEY;

export const YOUTUBE_VEDIO_API =
  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=' +
  MY_API_KEY;

export const config = {
  apiKey: MY_API_KEY,
  baseUrl:
    'https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=10&videoId=',
};

export const YOUTUBE_SEARCH_API =
  'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';
