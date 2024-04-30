import React, { useEffect, useState } from "react";

const IndexPage = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 2000);
  }, []);
  return <></>;
};

export default IndexPage;
