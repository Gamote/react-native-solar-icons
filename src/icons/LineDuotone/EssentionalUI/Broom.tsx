import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBroom = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M12.728 5.536a4 4 0 1 1 5.657 5.657M3.58 12.979l-.667-1.096C2.04 10.175 2.6 7.965 4.408 7.011c.854-.45 1.81-.88 2.761-1.15 2.86-.818 5.366-.519 5.366-.519l6.043 6.044s.3 2.505-.518 5.365c-.272.95-.7 1.908-1.15 2.761-.955 1.807-3.164 2.368-4.873 1.496l-1.096-.667a22 22 0 0 1-7.361-7.362Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m20.506 3.414-2.121 2.121"
      opacity={0.5}
    />
  </Svg>
);
export default SvgBroom;
