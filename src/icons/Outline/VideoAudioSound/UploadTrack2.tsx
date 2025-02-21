import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUploadTrack2 = (props: SvgProps) => (
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
      d="M12 2.75a9.25 9.25 0 1 0 1.85 18.315.75.75 0 1 1 .3 1.47q-1.046.213-2.15.215C6.063 22.75 1.25 17.937 1.25 12S6.063 1.25 12 1.25 22.75 6.063 22.75 12q-.002 1.104-.215 2.15a.75.75 0 0 1-1.47-.3A9.25 9.25 0 0 0 12 2.75M13 7c.414 0 .738.345.873.736A2.25 2.25 0 0 0 16 9.25a.75.75 0 0 1 0 1.5 3.73 3.73 0 0 1-2.25-.75v5a2.75 2.75 0 1 1-1.5-2.45v-4.8A.75.75 0 0 1 13 7m-.75 8a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0m5.22-.53a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22V22a.75.75 0 0 1-1.5 0v-5.19l-1.22 1.22a.75.75 0 1 1-1.06-1.06z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgUploadTrack2;
