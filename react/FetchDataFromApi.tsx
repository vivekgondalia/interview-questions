import React, { useEffect, useState } from "react";
import axios from "axios";

export const FetchDataFromApi = () => {
  const [randomApiData, setRandomApiData] = useState("");

  const fetchRandomData = () => {
    return axios
      .get("https://randomuser.me/api")
      .then((result) => {
        return JSON.stringify(result, null, 2);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchRandomData().then((result) => {
      setRandomApiData(result || "No api data available.");
    });
  }, []);

  return <pre>{randomApiData}</pre>;
};
