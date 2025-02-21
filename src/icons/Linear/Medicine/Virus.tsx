import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVirus = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12.0565 18.9998C15.9224 19.031 19.031 15.9224 18.9998 12.0565C18.9686 8.19062 15.8094 5.03143 11.9435 5.00023C8.07765 4.96904 4.96904 8.07765 5.00023 11.9435C5.03143 15.8094 8.19062 18.9686 12.0565 18.9998Z"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M18 6L16.95 7.05003"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path d="M5 5L7 7" stroke="black" strokeWidth={1.5} strokeLinecap="round" />
    <Path
      d="M17.0498 18.0498L16.5 17.5"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M6 19.0498L7.05003 17.9998"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M16.5 13C16.5 14.1046 15.6046 15 14.5 15C13.3954 15 12.5 14.1046 12.5 13C12.5 11.8954 13.3954 11 14.5 11C15.6046 11 16.5 11.8954 16.5 13Z"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      d="M11 9C11 9.55228 10.5523 10 10 10C9.44772 10 9 9.55228 9 9C9 8.44772 9.44772 8 10 8C10.5523 8 11 8.44772 11 9Z"
      stroke="black"
      strokeWidth={1.5}
    />
    <Circle cx={9} cy={13} r={1} fill="black" />
    <Circle cx={19.5} cy={4.5} r={1.5} stroke="black" strokeWidth={1.5} />
    <Circle
      r={1.5}
      transform="matrix(-1 0 0 1 3.5 3.5)"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      d="M2 12C2 12.8284 2.67157 13.5 3.5 13.5C4.32843 13.5 5 12.8284 5 12C5 11.1716 4.32843 10.5 3.5 10.5C2.67157 10.5 2 11.1716 2 12Z"
      stroke="black"
      strokeWidth={1.5}
    />
    <Circle
      r={1.5}
      transform="matrix(1 0 0 -1 18.5498 19.5498)"
      stroke="black"
      strokeWidth={1.5}
    />
    <Circle
      cx={4.5}
      cy={20.5}
      r={1.5}
      transform="rotate(-180 4.5 20.5)"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      d="M13.5 3.5C13.5 4.32843 12.8284 5 12 5C11.1716 5 10.5 4.32843 10.5 3.5C10.5 2.67157 11.1716 2 12 2C12.8284 2 13.5 2.67157 13.5 3.5Z"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      d="M19.5 13.4999C20.3284 13.4999 21 12.8283 21 11.9999C21 11.1715 20.3284 10.4999 19.5 10.4999C19.3247 10.4999 19.1564 10.53 19 10.5852V13.4145C19.1564 13.4698 19.3247 13.4999 19.5 13.4999Z"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      d="M10.5853 19C10.7912 19.5826 11.3469 20.0001 12 20.0001C12.6531 20.0001 13.2088 19.5826 13.4147 19L10.5853 19Z"
      stroke="black"
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgVirus;
