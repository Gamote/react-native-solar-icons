import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMedalRibbon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path fill="#000" d="M19 9A7 7 0 1 1 5 9a7 7 0 0 1 14 0" />
    <Path
      fill="#000"
      d="m7.093 15.941-.379 1.382c-.628 2.292-.942 3.438-.523 4.065.147.22.344.396.573.513.652.332 1.66-.193 3.675-1.243.67-.35 1.006-.524 1.362-.562a2 2 0 0 1 .398 0c.356.038.691.213 1.362.562 2.015 1.05 3.023 1.575 3.675 1.243.229-.117.426-.293.573-.513.42-.627.105-1.773-.523-4.065l-.379-1.382A8.46 8.46 0 0 1 12 17.5a8.46 8.46 0 0 1-4.907-1.559"
    />
  </Svg>
);
export default SvgMedalRibbon;
