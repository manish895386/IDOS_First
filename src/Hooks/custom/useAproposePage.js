import React, { useState, useEffect } from "react";
import useHTTP from "../Shared/useHTTP";

function useAproposePage() {
  const [aboutPageData, setAboutPageData] = useState([]);
  const [activeMenu, setActiveMenu] = useState([]);

  const ABOUT_DOCS_API = useHTTP();

  // ******* AboutPage Data ********//

  const getAboutData = () => {
    const successHandler = response => {
      setAboutPageData(response.data);
      setActiveMenu(response.data[0]);
    };

    const errorHandler = error => {};

    ABOUT_DOCS_API.initiateRequest(
      "/about_data?_fields[]=about_name&_fields[]=about_content&_fields[]=title&_fields[]=id&order=asc",
      "GET",
      {},
      successHandler,
      errorHandler
    );
  };

  useEffect(() => {
    getAboutData();
  }, []);

  return {
    aboutPageData,
    activeMenu,
    setActiveMenu,
    setAboutPageData
  };
}

export default useAproposePage;
