import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCloudStorm = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M10.854 14.51a.75.75 0 0 1-.079 1.058L8.02 17.943h2.266a.75.75 0 0 1 .49 1.318L6.49 22.953a.75.75 0 1 1-.98-1.136l2.756-2.374H6a.75.75 0 0 1-.49-1.319l4.286-3.692a.75.75 0 0 1 1.058.079m4.676.46a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0m2 3.5a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0m-4 1a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M16.286 19C19.442 19 22 16.472 22 13.353c0-2.472-1.607-4.573-3.845-5.338C17.837 5.194 15.415 3 12.476 3 9.32 3 6.762 5.528 6.762 8.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765S3.919 19 6.286 19z"
      opacity={0.5}
    />
  </Svg>
);
export default SvgCloudStorm;
