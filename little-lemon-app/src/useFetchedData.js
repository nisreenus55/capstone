import { useEffect } from "react";
import { useState } from "react";

const useFetchedData = ({ reserveDate }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const date = new Date();
      const formattedDate = date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });

      console.log(formattedDate);
      const queryParams = {
        date: reserveDate,
      };
      const queryString = new URLSearchParams(queryParams).toString();

      const apiUrl ="https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js";

      const fullUrl = `${apiUrl}?${queryString}`;

      try {
        const response = await fetch(fullUrl);
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
        console.log('done')
      }
    };

    fetchData();
  }, []);

  return { data, error, loading };
};

export default useFetchedData;
