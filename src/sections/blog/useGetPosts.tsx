import axios from "axios";
import { useEffect, useState } from "react";
import {
  stripHtmlTags,
  extractImageLink,
  extractSentences,
  decodeAmpersand,
} from "../../utils";

export type dataType = {
  author: string;
  category: string[];
  content: string;
  description: string;
  enclosure: {};
  guid: string;
  image: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  title: string;
};

const useGetPosts = () => {
  const [data, setData] = useState<dataType[] | null>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mun1013"
        );

        const d = [...response.data.items];
        const formattedData = d.map((item) => ({
          ...item,
          image: extractImageLink(item.content),
          content: extractSentences(stripHtmlTags(item.content)) + "......",
          title: decodeAmpersand(item.title),
        }));
        setData(formattedData);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { data, loading, error };
};

export default useGetPosts;
