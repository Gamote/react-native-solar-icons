import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSoundwaveSquare = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M12.75 7a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0zm-5 2a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zm10 1a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSoundwaveSquare;
