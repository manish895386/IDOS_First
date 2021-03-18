import React, { Fragment } from "react";

function AppVisibilityToggle({ visible, children }) {
  return visible ? children : <Fragment />;
}

export default AppVisibilityToggle;
