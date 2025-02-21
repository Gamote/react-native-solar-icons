import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFlashlight = (props: SvgProps) => (
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
      d="M17 2h1c.943 0 1.414 0 1.707.293S20 3.057 20 4v.172c0 .408 0 .613-.076.796s-.22.329-.51.618l-3.242 3.242c-.578.578-.867.868-1.02 1.235-.152.368-.152.776-.152 1.594V19c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C13.398 22 12.932 22 12 22v0c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C9 20.398 9 19.932 9 19v-7.343c0-.818 0-1.226-.152-1.594-.152-.367-.442-.657-1.02-1.235L4.586 5.586c-.29-.29-.434-.434-.51-.618C4 4.785 4 4.58 4 4.172V4c0-.943 0-1.414.293-1.707S5.057 2 6 2h7M15 10H9M12 13v2M4.5 5h15"
    />
  </Svg>
);
export default SvgFlashlight;
