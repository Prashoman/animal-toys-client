import { useEffect } from "react";

const useTittle = (title) => {
  useEffect(() => {
    document.title = `Animal Toys | ${title}`;
  }, [title]);
};

export default useTittle;
