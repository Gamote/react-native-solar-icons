import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArchive = (props: SvgProps) => (
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
      d="M9 12c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54c.184-.077.417-.077.883-.077h3c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077h-3c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C9 12.699 9 12.466 9 12Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M20.5 7v6c0 3.771 0 5.657-1.172 6.828S16.271 21 12.5 21h-1m-8-14v6c0 3.771 0 5.657 1.172 6.828.704.705 1.668.986 3.144 1.098M12 3H4c-.943 0-1.414 0-1.707.293S2 4.057 2 5s0 1.414.293 1.707S3.057 7 4 7h16c.943 0 1.414 0 1.707-.293S22 5.943 22 5s0-1.414-.293-1.707S20.943 3 20 3h-4"
    />
  </Svg>
);
export default SvgArchive;
