import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgEndCall = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 12.8619L8 13.4784C8 14.3306 7.42329 15.0825 6.57997 15.3296L4.57997 15.9157C3.29561 16.2921 2 15.3625 2 14.0645L2 12.1416C2 11.6527 2.1247 11.1706 2.44083 10.7891C3.17325 9.9051 4.87862 8.28193 8 7.4777V12.8619ZM16 12.8619V13.2501C16 14.2065 16.7227 15.0194 17.7004 15.1626L19.7004 15.4557C20.9105 15.6331 22 14.7269 22 13.5431V11.4184C22 10.8315 21.8162 10.2543 21.3703 9.85616C20.5528 9.12609 18.8785 7.97555 16 7.3822V12.8619Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M12 11.3965C16 11.3965 16 12.862 16 12.862V7.3823C14.862 7.14773 13.5359 7.00024 12 7.00024C10.4641 7.00024 9.13797 7.1846 8 7.4778V12.862C8 12.862 8 11.3965 12 11.3965Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgEndCall;
