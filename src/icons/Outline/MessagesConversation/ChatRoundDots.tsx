import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChatRoundDots = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M9 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M17 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M22.75 12c0-5.937-4.813-10.75-10.75-10.75S1.25 6.063 1.25 12c0 1.718.404 3.345 1.122 4.787.107.215.13.435.08.62l-.595 2.226c-.408 1.524.986 2.918 2.51 2.51l2.226-.596a.89.89 0 0 1 .62.08A10.7 10.7 0 0 0 12 22.75c5.937 0 10.75-4.813 10.75-10.75M12 2.75a9.25 9.25 0 0 1 0 18.5 9.2 9.2 0 0 1-4.118-.965 2.38 2.38 0 0 0-1.676-.187l-2.227.596a.55.55 0 0 1-.673-.674l.596-2.226a2.38 2.38 0 0 0-.187-1.676A9.2 9.2 0 0 1 2.75 12 9.25 9.25 0 0 1 12 2.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgChatRoundDots;
