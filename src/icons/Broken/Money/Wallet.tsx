import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWallet = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M6 8H10"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M22 10.5C22 10.4226 22 9.96726 21.9977 9.9346C21.9623 9.43384 21.5328 9.03496 20.9935 9.00214C20.9583 9 20.9167 9 20.8333 9H18.2308C16.4465 9 15 10.3431 15 12C15 13.6569 16.4465 15 18.2308 15H20.8333C20.9167 15 20.9583 15 20.9935 14.9979C21.5328 14.965 21.9623 14.5662 21.9977 14.0654C22 14.0327 22 13.5774 22 13.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Circle cx={18} cy={12} r={1} fill={props.primaryColor} />
    <Path
      d="M13 4C16.7712 4 18.6569 4 19.8284 5.17157C20.6366 5.97975 20.8873 7.1277 20.965 9M10 20H13C16.7712 20 18.6569 20 19.8284 18.8284C20.6366 18.0203 20.8873 16.8723 20.965 15M9 4.00093C5.8857 4.01004 4.23467 4.10848 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C3.82475 19.4816 4.69989 19.7706 6 19.8985"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgWallet;
