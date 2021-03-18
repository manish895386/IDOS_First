import { useState } from "react";
import HttpClient from "../../Utilities/HttpClient";

function useHTTP() {
  const [error, setError] = useState(false);
  async function initiateRequest(
    endPoint,
    method,
    body,
    postSuccessFunction,
    postErrorFunction,
    customHeaders
  ) {
    try {
      setError(false);
      // if (!hideLoading) setLoading(true);
      const responseData = await HttpClient.request(
        endPoint,
        method,
        body,
        customHeaders
      );

      postSuccessFunction(responseData);
      setError(false);
    } catch (error) {
      postErrorFunction(error);
      setError(true);
    }
  }

  async function downloadRequest(
    endPoint,
    postSuccessFunction,
    postErrorFunction,
    customHeaders
  ) {
    try {
      setError(false);
      const responseData = await HttpClient.downloadRequest(
        endPoint,
        customHeaders
      );

      const responseBlob = await responseData.blob();
      postSuccessFunction(responseBlob);
      setError(false);
    } catch (error) {
      postErrorFunction(error);
      setError(true);
    }
  }

  return { initiateRequest, error, downloadRequest };
}

export default useHTTP;
