const NewsAPI = require("newsapi");
const express = require("express");
console.log(process.env.NEWS_API);

const server = express();
const newsapi = new NewsAPI("8d91f48262c44723b1066d64a3747b17");

newsapi.v2
  .sources({
    category: "technology",
    language: "en",
    country: "us",
  })
  .then((response) => {
    console.log(response);
    /*
      {
        status: "ok",
        sources: [...]
      }
    */
  });
server.listen("3001");
