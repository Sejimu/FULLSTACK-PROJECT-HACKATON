import React, { useEffect } from "react";

function HomePage() {
  useEffect(() => {
    document.body.classList.add("homePage");
    return () => {
      document.body.classList.remove("homePage");
    };
  }, []);
  return <div>HomePage</div>;
}

export default HomePage;
