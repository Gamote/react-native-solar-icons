import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFilter = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M22 5.81464V6.50445C22 7.5423 22 8.06122 21.7404 8.49139C21.4808 8.92157 21.0065 9.18856 20.058 9.72252L17.145 11.3624C16.5085 11.7206 16.1903 11.8997 15.9625 12.0976C15.488 12.5095 15.1959 12.9935 15.0636 13.5871C15 13.8722 15 14.2058 15 14.8729V17.5424C15 19.4518 15 20.4066 14.3321 20.8244C13.6641 21.2421 12.7248 20.8749 10.8462 20.1405C9.95128 19.7907 9.50385 19.6158 9.25192 19.2613C9 18.9067 9 18.4519 9 17.5424L9 14.8729C9 14.2058 9 13.8722 8.93644 13.5871C8.80408 12.9935 8.51199 12.5095 8.03751 12.0976C7.80967 11.8997 7.49146 11.7206 6.85504 11.3624L3.94202 9.72252C2.99347 9.18855 2.5192 8.92157 2.2596 8.49139C2 8.06122 2 7.5423 2 6.50445V5.81464"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      opacity={0.5}
      d="M22 5.81466C22 4.48782 22 3.8244 21.5607 3.4122C21.1213 3 20.4142 3 19 3H5C3.58579 3 2.87868 3 2.43934 3.4122C2 3.8244 2 4.48782 2 5.81466"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgFilter;
