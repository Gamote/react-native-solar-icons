import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLibrary = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M19.562 7C19.7906 5.69523 18.7866 4.5 17.4619 4.5H6.53812C5.21347 4.5 4.20946 5.69523 4.43809 7"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M17.5001 4.5C17.5284 4.24092 17.5426 4.11135 17.5429 4.00435C17.5451 2.98072 16.774 2.12064 15.7563 2.01142C15.6499 2 15.5195 2 15.2589 2H8.74111C8.48047 2 8.35014 2 8.24375 2.01142C7.22596 2.12064 6.45493 2.98072 6.45716 4.00434C6.45739 4.11135 6.47158 4.2409 6.49995 4.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M15 18H9"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M2.38351 13.793C1.93748 10.6294 1.71447 9.04765 2.66232 8.02383C3.61017 7 5.29758 7 8.67239 7H15.3276C18.7024 7 20.3898 7 21.3377 8.02383C22.2855 9.04765 22.0625 10.6294 21.6165 13.793L21.1935 16.793C20.8437 19.2739 20.6689 20.5143 19.7717 21.2572C18.8745 22 17.5512 22 14.9046 22H9.09536C6.44881 22 5.12553 22 4.22834 21.2572C3.33115 20.5143 3.15626 19.2739 2.80648 16.793L2.38351 13.793Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgLibrary;
