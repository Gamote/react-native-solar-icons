import * as React from "react";
import Svg, { Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVideoFrame2 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M11.25 2.031A1 1 0 0 0 11 2H7.75v4.25h3.5zM11.25 7.75H2V14q-.001.677.004 1.25h9.246zM11.25 16.75h-3.5V20l.917.001h2.583zM6.25 2.023c-1.61.055-2.588.239-3.274.856-.75.675-.924 1.666-.964 3.371H6.25zM6.25 16.75v3.227c-1.61-.055-2.588-.239-3.274-.856-.59-.53-.823-1.256-.915-2.37z"
    />
    <G fill="#000" opacity={0.5}>
      <Path d="M12.75 7.006V4h3.5v4.25h-3.5zM12.75 16.006V9.75H22V16q.001.677-.004 1.25H12.75zM12.75 21.969A1 1 0 0 0 13 22h3.25v-3.25h-3.5zM17.75 8.25V4.023c1.61.055 2.588.239 3.274.856.75.675.924 1.666.964 3.371zM21.94 18.75h-4.19v3.227c1.61-.055 2.588-.239 3.274-.856.59-.53.823-1.256.915-2.37" />
    </G>
  </Svg>
);
export default SvgVideoFrame2;
