import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCashOut = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M5.88889 3.75C6.3031 3.75 6.63889 3.41421 6.63889 3C6.63889 2.58579 6.3031 2.25 5.88889 2.25V3.75ZM10 2.25C9.58579 2.25 9.25 2.58579 9.25 3C9.25 3.41421 9.58579 3.75 10 3.75V2.25ZM18.1111 3.75C19.8214 3.75 21.25 5.19049 21.25 7.02036H22.75C22.75 4.40946 20.6964 2.25 18.1111 2.25V3.75ZM5.88889 2.25C3.30359 2.25 1.25 4.40946 1.25 7.02036H2.75C2.75 5.19049 4.17864 3.75 5.88889 3.75V2.25ZM21.25 7.02036C21.25 8.68726 20.0607 10.0357 18.557 10.2581L18.7764 11.7419C21.0419 11.4069 22.75 9.40421 22.75 7.02036H21.25ZM5.44305 10.2581C3.93934 10.0357 2.75 8.68726 2.75 7.02036H1.25C1.25 9.40422 2.95811 11.4069 5.22362 11.7419L5.44305 10.2581ZM10 3.75H18.1111V2.25H10V3.75Z"
      fill={props.primaryColor}
    />
    <Path
      d="M12 9V14M12 14L14 11.6667M12 14L10 11.6667"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5 10C5 8.11438 5 7.17157 5.58579 6.58579C6.17157 6 7.11438 6 9 6H15C16.8856 6 17.8284 6 18.4142 6.58579C19 7.17157 19 8.11438 19 10V16C19 17.8856 19 18.8284 18.4142 19.4142C17.8284 20 16.8856 20 15 20H9C7.11438 20 6.17157 20 5.58579 19.4142C5 18.8284 5 17.8856 5 16V10Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M5 17H13M19 17H17"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgCashOut;
