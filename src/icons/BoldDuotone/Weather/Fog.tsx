import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFog = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path fill="#000" d="M8 21.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z" />
    <Path
      fill="#000"
      d="M12.476 2C9.32 2 6.762 4.528 6.762 7.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765c0 .522.096 1.023.271 1.485h18.92A5.57 5.57 0 0 0 22 12.353c0-2.472-1.607-4.573-3.845-5.338C17.837 4.194 15.415 2 12.476 2"
      opacity={0.5}
    />
    <Path fill="#000" d="M2 15.249a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5z" />
    <Path
      fill="#000"
      d="M5 18.25a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5z"
      opacity={0.5}
    />
  </Svg>
);
export default SvgFog;
