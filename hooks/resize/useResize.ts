import { useEffect, useState } from "react";

const useResize = () => {
  const [hide, setHide] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setHide(false);
      } else {
        setHide(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    hide,
    setHide,
  };
};

export default useResize;
