import React, { useState, useEffect } from "react";
import useHTTP from "../Shared/useHTTP";

function useContactPage() {
  const [contactPageData, setContactPageData] = useState([]);

  const CONTACT_DOCS_API = useHTTP();

  // ******** ContactPage Data *****//

  const getContactData = () => {
    const successHandler = response => {
      const [items] = response.data;

      setContactPageData(response.data);
    };

    const errorHandler = error => {};

    CONTACT_DOCS_API.initiateRequest(
      "/contact_data?_fields[]=contact_content&_fields[]=title&_fields[]=id",
      "GET",
      {},
      successHandler,
      errorHandler
    );
  };

  useEffect(() => {
    getContactData();
  }, []);

  return {
    contactPageData
  };
}

export default useContactPage;
