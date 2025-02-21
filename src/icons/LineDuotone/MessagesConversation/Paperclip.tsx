import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPaperclip = (props: SvgProps) => (
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
      d="m7.918 17.807 7.89-7.553a2.253 2.253 0 0 0 0-3.284M3 10.035l6.404-6.13c2.653-2.54 6.954-2.54 9.607 0"
    />
    <Path
      fill="#000"
      d="m19.01 13.1.52.541zm-7.948 7.608-.518-.542zm-6.518-6.24.519.542zm7.834-7.499-.519-.541zm7.151-3.607a.75.75 0 1 0-1.037 1.084zm-1.037 9.196-7.948 7.608 1.037 1.083 7.948-7.608zM5.062 15.01l7.834-7.499-1.037-1.083-7.834 7.498zm11.265-8.582a3.253 3.253 0 0 0-4.468 0l1.037 1.083a1.753 1.753 0 0 1 2.394 0zM5.062 20.166a3.53 3.53 0 0 1 0-5.156l-1.037-1.084a5.03 5.03 0 0 0 0 7.323zm5.482 0c-1.51 1.445-3.971 1.445-5.482 0l-1.037 1.083c2.09 2.001 5.466 2.001 7.556 0zm7.948-15.72c2.344 2.244 2.344 5.868 0 8.112l1.037 1.083c2.961-2.834 2.961-7.444 0-10.278z"
      opacity={0.5}
    />
  </Svg>
);
export default SvgPaperclip;
