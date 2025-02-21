import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChefHatHeart = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M5.586 21.414c-.503-.502-.574-2.017-.584-3.414h13.996c-.01 1.397-.081 2.912-.584 3.414C17.828 22 16.886 22 15 22H9c-1.886 0-2.828 0-3.414-.586"
    />
    <Path
      fill="#000"
      d="M2 10a5 5 0 0 1 5.737-4.946 4.502 4.502 0 0 1 8.526 0Q16.623 5 17 5a5 5 0 0 1 2 9.584V18H5v-3.416A5 5 0 0 1 2 10"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M11.043 13.67C10.165 13.024 9 11.984 9 11c0-1.673 1.65-2.297 3-1.005 1.35-1.292 3-.668 3 1.005 0 .985-1.165 2.025-2.043 2.67-.42.307-.63.461-.957.461-.328 0-.537-.154-.957-.462"
    />
  </Svg>
);
export default SvgChefHatHeart;
