import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPrinter = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path d="M9 10H6" stroke="black" strokeWidth={1.5} strokeLinecap="round" />
    <Path
      d="M19 14L5 14"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Circle cx={17} cy={10} r={1} fill="black" />
    <Path
      d="M15 16.5H9"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path d="M13 19H9" stroke="black" strokeWidth={1.5} strokeLinecap="round" />
    <Path
      d="M22 12C22 14.8284 22 16.2426 21.1213 17.1213C20.48 17.7626 19.5535 17.9359 18 17.9827M6 17.9827C4.44655 17.9359 3.51998 17.7626 2.87868 17.1213C2 16.2426 2 14.8284 2 12C2 9.17157 2 7.75736 2.87868 6.87868C3.75736 6 5.17157 6 8 6H16C18.8284 6 20.2426 6 21.1213 6.87868C21.4211 7.17848 21.6186 7.54062 21.7487 8"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M17.9827 6C17.9359 4.44655 17.7626 3.51998 17.1213 2.87868C16.2426 2 14.8284 2 12 2C9.17157 2 7.75736 2 6.87868 2.87868C6.23738 3.51998 6.06413 4.44655 6.01732 6M18 15V16C18 18.8284 18 20.2426 17.1213 21.1213C16.48 21.7626 15.5535 21.9359 14 21.9827M6 15V16C6 18.8284 6 20.2426 6.87868 21.1213C7.51998 21.7626 8.44655 21.9359 10 21.9827"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgPrinter;
