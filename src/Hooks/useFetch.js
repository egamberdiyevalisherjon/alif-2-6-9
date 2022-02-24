import { useEffect, useState } from "react";

function useFetch(url) {
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState(null);

  useEffect(() => {
    setRes(null);
    let unmounted = false;
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          if (!unmounted) {
            setLoading(false);
            setRes(data);
          }
        }, 2000);
      });

    return () => {
      unmounted = true;
    };
  }, [url]);

  return {
    loading,
    res,
  };
}

export default useFetch;
