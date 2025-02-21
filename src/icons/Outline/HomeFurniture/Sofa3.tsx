import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSofa3 = (props: SvgProps) => (
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
      d="M11.94 3.25h.12c2.19 0 3.912 0 5.234.182 1.35.187 2.425.58 3.196 1.484q.135.158.255.327c.69.967.81 2.105.664 3.46-.131 1.213-.491 2.713-.958 4.584a2.75 2.75 0 0 1 .299 5.36V20a.75.75 0 0 1-1.5 0v-1.25H4.75V20a.75.75 0 0 1-1.5 0v-1.354a2.751 2.751 0 0 1 .299-5.36c-.467-1.87-.827-3.37-.958-4.582-.147-1.356-.025-2.494.664-3.461q.12-.17.255-.327c.771-.903 1.846-1.297 3.196-1.484C8.028 3.25 9.75 3.25 11.94 3.25m-6.854 10h13.828c.514-2.055.878-3.547 1.004-4.708.129-1.194-.013-1.894-.395-2.428a3 3 0 0 0-.174-.224c-.427-.5-1.071-.807-2.26-.972-1.207-.166-2.826-.168-5.089-.168s-3.882.002-5.088.168c-1.19.165-1.834.472-2.26.972q-.093.108-.175.224c-.382.534-.524 1.234-.395 2.428.126 1.161.49 2.653 1.004 4.708M4 14.75a1.25 1.25 0 1 0 0 2.5h16a1.25 1.25 0 1 0 0-2.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSofa3;
