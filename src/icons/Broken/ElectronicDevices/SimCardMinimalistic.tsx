import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSimCardMinimalistic = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c.341 0 .512 0 .686.015.81.07 1.601.399 2.224.921.133.112.257.236.504.483l5.167 5.167c.247.247.37.37.483.504.522.623.85 1.415.92 2.224.016.174.016.345.016.686 0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465c-.973-.973-1.3-2.342-1.409-4.535"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M14.5 13h-5c-.465 0-.697 0-.89.038a2 2 0 0 0-1.572 1.572C7 14.803 7 15.035 7 15.5s0 .697.038.89a2 2 0 0 0 1.572 1.572c.193.038.425.038.89.038h5c.465 0 .697 0 .89-.038a2 2 0 0 0 1.572-1.572c.038-.193.038-.425.038-.89s0-.697-.038-.89a2 2 0 0 0-1.572-1.572C15.197 13 14.965 13 14.5 13Z"
    />
  </Svg>
);
export default SvgSimCardMinimalistic;
