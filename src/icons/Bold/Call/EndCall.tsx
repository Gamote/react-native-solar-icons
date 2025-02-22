import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgEndCall = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M8 13.4783L8 12.8618C8 12.8618 8 11.3964 12 11.3964C16 11.3964 16 12.8618 16 12.8618V13.2501C16 14.2065 16.7227 15.0193 17.7004 15.1626L19.7004 15.4557C20.9105 15.633 22 14.7268 22 13.5431V11.4184C22 10.8314 21.8162 10.2543 21.3703 9.85613C20.2296 8.83744 17.4208 7.00012 12 7.00012C6.25141 7.00012 3.44027 9.58281 2.44083 10.789C2.1247 11.1706 2 11.6526 2 12.1416L2 14.0645C2 15.3625 3.29561 16.2921 4.57997 15.9157L6.57997 15.3296C7.42329 15.0825 8 14.3306 8 13.4783Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgEndCall;
