import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHeartBroken = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M15.038 18.911C17.981 16.591 22 14.001 22 9.137S16.5.826 12 5.501l-1.118 2.235c-.182.365-.273.547-.229.726.044.18.21.298.542.535l1.916 1.368c.416.297.624.446.65.664s-.14.413-.472.8l-1.686 1.968c-.286.334-.43.5-.422.696s.163.351.474.662l.945.945c.195.195.293.293.328.42s.002.261-.065.53L12 20.5c1 0 2-.77 3.038-1.589"
    />
    <Path
      fill="#000"
      d="M8.106 18.247C5.298 16.084 2 13.542 2 9.137 2 4.274 7.5.826 12 5.501l-1.118 2.235c-.182.365-.273.547-.229.726.044.18.21.298.542.535l1.916 1.368c.416.297.624.446.65.664s-.14.413-.472.8l-1.686 1.968c-.286.334-.43.5-.422.696s.163.351.474.662l.945.945c.195.195.293.293.328.42s.002.261-.065.53L12 20.5c-1 0-2-.77-3.038-1.589q-.417-.328-.856-.664"
      opacity={0.5}
    />
  </Svg>
);
export default SvgHeartBroken;
