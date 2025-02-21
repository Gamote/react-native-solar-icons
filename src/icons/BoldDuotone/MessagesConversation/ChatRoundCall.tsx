import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChatRoundCall = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z"
      fill="black"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9999 6.77539C11.5443 6.77539 11.1749 7.14476 11.1749 7.60039V16.4004C11.1749 16.856 11.5443 17.2254 11.9999 17.2254C12.4555 17.2254 12.8249 16.856 12.8249 16.4004V7.60039C12.8249 7.14476 12.4555 6.77539 11.9999 6.77539Z"
      fill="black"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5999 8.97539C7.14427 8.97539 6.7749 9.34476 6.7749 9.80039V14.2004C6.7749 14.656 7.14427 15.0254 7.5999 15.0254C8.05554 15.0254 8.4249 14.656 8.4249 14.2004V9.80039C8.4249 9.34476 8.05554 8.97539 7.5999 8.97539Z"
      fill="black"
    />
    <Path
      d="M15.5749 9.80039C15.5749 9.34476 15.9443 8.97539 16.3999 8.97539C16.8555 8.97539 17.2249 9.34476 17.2249 9.80039V14.2004C17.2249 14.656 16.8555 15.0254 16.3999 15.0254C15.9443 15.0254 15.5749 14.656 15.5749 14.2004V9.80039Z"
      fill="black"
    />
  </Svg>
);
export default SvgChatRoundCall;
