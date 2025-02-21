import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDiplomaVerified = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M7 17.998c-2.175-.012-3.353-.108-4.121-.877C2 16.243 2 14.828 2 12V8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h8c2.828 0 4.243 0 5.121.879.49.49.707 1.146.803 2.121M16.5 17.998l.82-.002c1.972-.021 3.072-.145 3.801-.875C22 16.243 22 14.828 22 12V9M9 6h6M7 9.5h2m8 0h-4.5"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M10.89 13.945a1.71 1.71 0 0 1 2.22 0c.273.234.614.375.973.403a1.71 1.71 0 0 1 1.569 1.57c.028.358.17.698.403.973a1.71 1.71 0 0 1 0 2.218 1.7 1.7 0 0 0-.403.973 1.71 1.71 0 0 1-1.57 1.57c-.358.028-.699.169-.973.402a1.71 1.71 0 0 1-2.218 0 1.7 1.7 0 0 0-.974-.403 1.71 1.71 0 0 1-1.568-1.569 1.7 1.7 0 0 0-.404-.973 1.71 1.71 0 0 1 0-2.219 1.7 1.7 0 0 0 .404-.973 1.71 1.71 0 0 1 1.568-1.569c.36-.028.7-.17.974-.403Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.5 18.2.857.8 2.143-2"
    />
  </Svg>
);
export default SvgDiplomaVerified;
