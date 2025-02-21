import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWadOfMoney = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M15 5L9 5C6.19108 5 4.78661 5 3.77772 5.67412C3.34096 5.96596 2.96596 6.34096 2.67412 6.77772C2 7.78661 2 9.19108 2 12C2 14.8089 2 16.2134 2.67412 17.2223C2.96596 17.659 3.34096 18.034 3.77772 18.3259C4.12468 18.5577 4.51843 18.7098 5 18.8096M9 19H15C17.8089 19 19.2134 19 20.2223 18.3259C20.659 18.034 21.034 17.659 21.3259 17.2223C22 16.2134 22 14.8089 22 12C22 9.19108 22 7.78661 21.3259 6.77772C21.034 6.34096 20.659 5.96596 20.2223 5.67412C19.8753 5.44229 19.4816 5.29018 19 5.19039"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M9 9C7.34315 9 6 10.3431 6 12C6 13.6569 7.34315 15 9 15"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M15 9C16.6569 9 18 10.3431 18 12C18 13.6569 16.6569 15 15 15"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M9 5V19"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M15 5V19"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgWadOfMoney;
