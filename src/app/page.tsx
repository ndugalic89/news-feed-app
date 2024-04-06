'use client';

import { useState } from "react";
import { useFetchNews } from "../../api/hooks/useFetchNews";
import Parser from "rss-parser";
import Search from "./components/Search";

export default function Home() {
  const [feedItems, setFeedItems] = useState<Parser.Item[]>([]);

  const handleUrl = async (url: string) => {
    const data = await useFetchNews(url);
    if (data) {
      const parser = new Parser();
      const feed = await parser.parseString(data);
      setFeedItems(feed.items);
      console.log(feed.items)
    }
  }

  const getFeedItems = feedItems.map((item: any, index) => {
    return (
      <div key={index}>
        <div>{item.title}</div>
        <div dangerouslySetInnerHTML={{ __html: item["content"]! }}></div>
        
        <br />
      </div>
    );
  })

  return (
    <div className="min-h-screen">
      <div className="flex justify-between bg-gradient-to-tr from-gray-200">
        <Search handleUrl={(url: string) => handleUrl(url)} />
        <div>login, dark/light mode, etc</div>
      </div>
      <div className="flex">
        <div className="w-1/4 bg-gray-500 p-3">favorites</div>
        <div className="w-3/4 bg-gray-400 p-3">
          {getFeedItems}
        </div>
      </div>
    </div>
    // <div className="min-h-screen bg-gradient-to-tr from-gray-200 to-gray-300 py-10 px-40">
    //   <div className="relative flex items-center">
    //     <input 
    //       type="text" 
    //       className="peer relative h-10 w-full rounded-md bg-gray-50 pl-4 pr-20 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg" 
    //       placeholder='Enter RSS url'
    //       value={text}
    //       onChange={handleInput}
    //     />
    //     <button 
    //       className="absolute right-2 h-7 w-16 rounded-md bg-blue-200 text-xs font-semibold text-white transition-all duration-200 ease-in-out group-focus-within:bg-blue-400 group-focus-within:hover:bg-blue-600"
    //       onClick={handleUrl}
    //     >
    //       Get RSS
    //     </button>
    //   </div>
    //   <div>
    //     
    //   </div>
    // </div>
  );
}
