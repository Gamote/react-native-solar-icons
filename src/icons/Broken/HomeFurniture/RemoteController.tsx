import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRemoteController = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M19 15V9C19 6.19108 19 4.78661 18.3259 3.77772C18.034 3.34096 17.659 2.96596 17.2223 2.67412C16.2134 2 14.8089 2 12 2C9.19108 2 7.78661 2 6.77772 2.67412C6.34096 2.96596 5.96596 3.34096 5.67412 3.77772C5.08522 4.65907 5.01077 5.8423 5.00136 8M18.8096 19C18.7098 19.4816 18.5577 19.8753 18.3259 20.2223C18.034 20.659 17.659 21.034 17.2223 21.3259C16.2134 22 14.8089 22 12 22C9.19108 22 7.78661 22 6.77772 21.3259C6.34096 21.034 5.96596 20.659 5.67412 20.2223C5 19.2134 5 17.8089 5 15V12"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M15 15.5C15 17.1569 13.6569 18.5 12 18.5C10.3431 18.5 9 17.1569 9 15.5C9 13.8431 10.3431 12.5 12 12.5C13.6569 12.5 15 13.8431 15 15.5Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M9 5.5H15"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Circle cx={9} cy={9} r={1} fill={props.primaryColor} />
    <Circle cx={12} cy={9} r={1} fill={props.primaryColor} />
    <Circle cx={15} cy={9} r={1} fill={props.primaryColor} />
  </Svg>
);
export default SvgRemoteController;
