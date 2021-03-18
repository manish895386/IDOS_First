import React, { useState, useEffect, Children } from "react";
import { useHistory, useLocation } from "react-router-dom";
import useHTTP from "../Shared/useHTTP";
import HttpClient from "../../Utilities/HttpClient";
import { async } from "q";

function useLandingPage() {
  const [landingPageData, setLandingPageData] = useState([]);
  const [imageData, setimageData] = useState([]);

  const history = useHistory();
  const LANDING_DOCS_API = useHTTP(HttpClient.LANDING_DOCS_API);
  const ABOUT_DOCS_API = useHTTP(HttpClient.ABOUT_DOCS_API);

  const getImage = async (items, index, type) => {
    const successHandler = async response => {
      let item = response.data.guid.rendered;
      setimageData(imagehookData => {
        let tempData = [...imagehookData];
        tempData[index] = {
          item: items.item,
          [type]: item,
          ...tempData[index]
        };
        return tempData;
      });
    };
    const errorHandler = error => { };
    ABOUT_DOCS_API.initiateRequest(
      type === "webImage"
        ? `/media/${items.image_1}/?_fields[]=guid`
        : type === "mobileImage"
          ? `/media/${items.mobile_image}/?_fields[]=guid`
          : `/media/${items.thumbnail}/?_fields[]=guid`,
      "GET",
      {},
      successHandler,
      errorHandler
    );
  };

  const getMobileImage = (items, index) => {
    console.log(imageData, "object", items);
    const successHandler = response => {
      console.log(
        "getMobileImage======successHandler",
        response.data.guid.rendered
      );
      let item = response.data;

      return new Promise(resolve => {
        resolve(item);
      });
    };

    const errorHandler = error => {
      console.log("error:::::::", error);
    };

    ABOUT_DOCS_API.initiateRequest(
      `/media/${items.mobile_image}/?_fields[]=guid`,
      "GET",
      {},
      successHandler,
      errorHandler
    );
  };

  useEffect(() => {
    configImageArray();
  }, [landingPageData]);

  const configImageArray = () => {
    landingPageData.map((item, index) => {
      getImage(item, index, "webImage");
      getImage(item, index, "mobileImage");
      getImage(item, index, "thumbnailImage");
    });
  };
  const getLandingData = () => {
    const successHandler = response => {
      console.log("landing Data------>>>>>>>", response.data);
      setLandingPageData(response.data);
      let temp = {
        guid: { rendered: "" },
        guidImage: { rendered: "" },
        _links: {
          self: [{ href: "" }],
          replies: [{ embeddable: true, href: "" }]
        }
      };

      let tempObjArray = response.data.map(res => ({
        item: res,
        ...temp
      }));
      setimageData(tempObjArray);
    };

    const errorHandler = error => { };

    LANDING_DOCS_API.initiateRequest(
      "/landing_data?_fields[]=content&_fields[]=title&_fields[]=id&_fields[]=mobile_image&_fields[]=thumbnail&_fields[]=image_1&_fields[]=title_1&_fields[]=content_1&_fields[]=title_2&_fields[]=content_2&_fields[]=title_3&_fields[]=content_3&_fields[]=title_4&_fields[]=content_4&_fields[]=title_5&_fields[]=content_5&_fields[]=title_6&_fields[]=content_6&_fields[]=title_7&_fields[]=content_7&_fields[]=title_8&_fields[]=content_8&_fields[]=title_9&_fields[]=content_9&_fields[]=title_10&_fields[]=content_10&_fields[]=content_11&order=asc",
      "GET",
      {},
      successHandler,
      errorHandler
    );
  };

  const navigateTo = (url, data) => {
    history.push(url, { data: data });
  };

  useEffect(() => {
    getLandingData();
  }, []);

  return {
    landingPageData,
    navigateTo,
    getImage,
    imageData
  };
}

export default useLandingPage;
