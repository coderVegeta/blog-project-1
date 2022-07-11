import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for resource");
          }
          return res.json();
        })

        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })

        .catch((err) => {
          setError(err.message);
          setIsPending(false);
        });
    }, 100);
    return () => console.log("cleanup");
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
