import * as React from "react";
import Svg, { Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgEraser = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M14.9522 3C13.9146 3 13.0796 3.83502 11.4096 5.50506L6.5 10.4146L13.5854 17.5L18.4949 12.5904C20.165 10.9204 21 10.0854 21 9.04776C21 8.01013 20.165 7.1751 18.4949 5.50506C16.8249 3.83502 15.9899 3 14.9522 3Z"
      fill={props.primaryColor}
    />
    <Path
      d="M13.5854 17.4999L6.5 10.4146L5.50506 11.4095C3.83502 13.0795 3 13.9146 3 14.9522C3 15.9898 3.83502 16.8248 5.50506 18.4949C7.1751 20.1649 8.01013 20.9999 9.04776 20.9999C10.0854 20.9999 10.9204 20.1649 12.5904 18.4949L13.5854 17.4999Z"
      fill={props.primaryColor}
    />
    <G opacity={0.5}>
      <Path
        d="M9.03264 21H9C9.01086 21.0003 9.02174 20.9999 9.03264 21Z"
        fill={props.primaryColor}
      />
      <Path
        d="M9.06287 21C9.85928 20.9938 10.5389 20.4938 11.5734 19.5L21 19.5C21.4142 19.5 21.75 19.8358 21.75 20.25C21.75 20.6642 21.4142 21 21 21H9.06287Z"
        fill={props.primaryColor}
      />
    </G>
  </Svg>
);
export default SvgEraser;
