import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUpload = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M22 16v-1c0-2.829 0-4.242-.879-5.121S18.828 9 16 9H8C5.17 9 3.757 9 2.878 9.88 2 10.757 2 12.17 2 14.998V16c0 2.828 0 4.242.879 5.121C3.757 22 5.172 22 8 22h8c2.828 0 4.243 0 5.121-.879S22 18.828 22 16"
      opacity={0.5}
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M12 15.75a.75.75 0 0 0 .75-.75V4.027l1.68 1.961a.75.75 0 1 0 1.14-.976l-3-3.5a.75.75 0 0 0-1.14 0l-3 3.5a.75.75 0 1 0 1.14.976l1.68-1.96V15c0 .414.336.75.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgUpload;
