import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCart5 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M3.555 14.257c-.718-3.353-1.078-5.03-.177-6.143C4.278 7 5.993 7 9.422 7h5.156c3.43 0 5.143 0 6.044 1.114s.541 2.79-.177 6.143l-.429 2c-.487 2.273-.73 3.409-1.555 4.076S16.474 21 14.15 21h-4.3c-2.324 0-3.486 0-4.31-.667-.826-.667-1.07-1.803-1.556-4.076z"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M8 11.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zM9.25 15a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M14.665 2.33a.75.75 0 0 1 1.006.335l3 6a.75.75 0 1 1-1.342.67l-3-6a.75.75 0 0 1 .335-1.006M9.335 2.33a.75.75 0 0 0-1.006.335l-3 6a.75.75 0 0 0 1.342.67l3-6a.75.75 0 0 0-.336-1.006"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgCart5;
