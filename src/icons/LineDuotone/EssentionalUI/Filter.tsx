import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFilter = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M22 5.815v.69c0 1.037 0 1.556-.26 1.986s-.733.698-1.682 1.232l-2.913 1.64c-.636.358-.955.537-1.182.735a2.68 2.68 0 0 0-.9 1.49c-.063.284-.063.618-.063 1.285v2.67c0 1.909 0 2.864-.668 3.281s-1.607.05-3.486-.684c-.895-.35-1.342-.524-1.594-.879C9 18.907 9 18.451 9 17.542v-2.67c0-.666 0-1-.064-1.285a2.68 2.68 0 0 0-.898-1.49c-.228-.197-.547-.376-1.183-.735l-2.913-1.64c-.949-.533-1.423-.8-1.682-1.23C2 8.061 2 7.541 2 6.503v-.69"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M22 5.815c0-1.327 0-1.99-.44-2.403C21.122 3 20.415 3 19 3H5c-1.414 0-2.121 0-2.56.412S2 4.488 2 5.815"
      opacity={0.5}
    />
  </Svg>
);
export default SvgFilter;
