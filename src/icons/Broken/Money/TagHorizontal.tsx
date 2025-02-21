import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTagHorizontal = (props: SvgProps) => (
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
      d="M13.358 21c2.227 0 3.341 0 4.27-.533.93-.532 1.52-1.509 2.701-3.462l.681-1.126c.993-1.643 1.49-2.465 1.49-3.379s-.497-1.736-1.49-3.379l-.68-1.126c-1.181-1.953-1.771-2.93-2.701-3.462C16.699 4 15.585 4 13.358 4h-2.637C9.683 4 8.783 4 8 4.024m-4.296 1.22C2.5 6.49 2.5 8.495 2.5 12.5s0 6.01 1.204 7.255c.998 1.033 2.501 1.209 5.196 1.239M7.5 7.995V17"
    />
  </Svg>
);
export default SvgTagHorizontal;
