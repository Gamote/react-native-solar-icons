import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChatRoundLike = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z"
      fill={props.primaryColor}
    />
    <Path
      d="M7.5 11.1083C7.5 12.4767 8.81884 13.9125 10.0286 14.9416C10.8524 15.6425 11.2644 15.993 12 15.993C12.7356 15.993 13.1476 15.6425 13.9714 14.9416C15.1812 13.9125 16.5 12.4767 16.5 11.1083C16.5 8.43115 14.0249 7.43162 12 9.49971C9.97507 7.43162 7.5 8.43115 7.5 11.1083Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgChatRoundLike;
