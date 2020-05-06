import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

const WithSpinner = WrappedComponent => {
  console.log("<>>", WrappedComponent);
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

// const WithSpinner = WrappedComponent => {
//   let { isLoading, ...otherProps } = WrappedComponent;
//   console.log(" wl ", WrappedComponent);
//   const Spinner = isLoading ? (
//     <SpinnerOverlay>
//       <SpinnerContainer />
//     </SpinnerOverlay>
//   ) : (
//     <WrappedComponent {...otherProps} />
//   );

//   return Spinner;
// };

export default WithSpinner;
