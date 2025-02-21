import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBoltCircle = (props: SvgProps) => (
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
      d="m9.213 10.174 2.015-1.605c1.302-1.037 1.953-1.556 2.363-1.3s.197 1.05-.228 2.636l-.04.15c-.154.572-.23.858-.096 1.086l.007.012c.14.226.438.305 1.033.465 1.072.287 1.608.43 1.702.804l.004.019c.083.376-.34.712-1.186 1.386l-2.014 1.604c-1.303 1.037-1.954 1.556-2.364 1.3s-.197-1.05.229-2.636l.04-.15c.153-.572.23-.858.095-1.086l-.007-.012c-.14-.226-.438-.305-1.033-.465-1.072-.287-1.608-.43-1.702-.804l-.004-.019c-.083-.376.34-.712 1.186-1.385Z"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z"
    />
  </Svg>
);
export default SvgBoltCircle;
