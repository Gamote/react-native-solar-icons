import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBolt = (props: SvgProps) => (
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
      d="M13.926 9.705c-.379-.371-.379-.963-.379-2.148v-.31c0-3.285 0-4.927-.923-5.21s-1.913 1.056-3.892 3.734L5.67 9.914c-1.285 1.739-1.928 2.608-1.574 3.291l.018.034c.375.673 1.485.673 3.704.673 1.233 0 1.85 0 2.236.363"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="m13.926 9.706.02.019c.387.364 1.003.364 2.236.364 2.22 0 3.329 0 3.703.672l.019.034c.354.684-.289 1.553-1.574 3.29l-3.062 4.144c-1.98 2.678-2.969 4.017-3.892 3.734-.924-.283-.924-1.925-.923-5.21v-.31c0-1.184 0-1.777-.379-2.148l-.02-.02"
      opacity={0.5}
    />
  </Svg>
);
export default SvgBolt;
