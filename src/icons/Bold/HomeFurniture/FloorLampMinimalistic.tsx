import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFloorLampMinimalistic = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M14.599 3C14.08 2.402 13.11 2 12 2s-2.08.402-2.599 1zM12.749 7.955c1.998-.24 3.61-1.426 4.099-2.97C17.014 4.457 16.552 4 16 4H8c-.552 0-1.014.458-.847.984.488 1.545 2.1 2.731 4.098 2.971L11.25 8v6.407a5 5 0 0 0-.387-.334l-.011-.01-3.887-2.777-.076-.057a3.13 3.13 0 0 0-.26-2.836c-.305-.48-.968-.398-1.318.05L2.78 11.685c-.35.447-.274 1.117.26 1.304a3.05 3.05 0 0 0 2.97-.546l.07.053 3.876 2.77a3.39 3.39 0 0 1 1.295 2.637v3.347H9a.75.75 0 0 0 0 1.5h6a.75.75 0 1 0 0-1.5h-2.25V8q0-.022-.002-.045M2.157 10.857l2.212-2.831a2.04 2.04 0 0 0-1.93.76 2.08 2.08 0 0 0-.282 2.07"
    />
  </Svg>
);
export default SvgFloorLampMinimalistic;
