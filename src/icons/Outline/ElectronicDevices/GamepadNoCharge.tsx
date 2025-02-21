import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGamepadNoCharge = (props: SvgProps) => (
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
      d="M5.658 3.454c.506-.18 1.02-.204 1.445-.204h.612c1.033 0 2.04.32 2.883.917l.502.355a1.56 1.56 0 0 0 1.8 0l.502-.355a5 5 0 0 1 2.883-.917h.612c.426 0 .94.024 1.445.204 1.443.512 2.584 1.688 3.336 3.591.744 1.884 1.126 4.52 1.066 8.07-.013.75-.106 1.59-.395 2.346-.291.767-.802 1.49-1.66 1.9a3.95 3.95 0 0 1-1.716.389 3.4 3.4 0 0 1-3.284-2.279.75.75 0 1 1 1.43-.449c.12.379.667 1.228 1.854 1.228.408 0 .763-.096 1.07-.242.415-.2.707-.561.905-1.08.201-.53.285-1.176.296-1.838.058-3.457-.32-5.87-.961-7.494-.634-1.604-1.503-2.395-2.443-2.729-.256-.09-.56-.117-.943-.117h-.612c-.722 0-1.427.224-2.017.641l-.502.356a3.06 3.06 0 0 1-3.532 0l-.502-.356a3.5 3.5 0 0 0-2.017-.641h-.612c-.384 0-.687.027-.943.117-.94.334-1.809 1.125-2.443 2.73-.641 1.623-1.02 4.036-.961 7.493.011.662.095 1.308.296 1.837.198.52.49.882.906 1.08.306.147.661.243 1.069.243 1.187 0 1.734-.85 1.853-1.228a.75.75 0 0 1 1.431.45 3.4 3.4 0 0 1-3.284 2.278 3.95 3.95 0 0 1-1.716-.39c-.859-.41-1.369-1.132-1.66-1.899-.289-.756-.382-1.596-.395-2.346-.06-3.55.322-6.186 1.066-8.07.752-1.903 1.893-3.08 3.336-3.591M7.5 8.25a.75.75 0 0 1 .75.75v.75H9a.75.75 0 0 1 0 1.5h-.75V12a.75.75 0 0 1-1.5 0v-.75H6a.75.75 0 0 1 0-1.5h.75V9a.75.75 0 0 1 .75-.75m1.97 9.28a.75.75 0 1 1 1.06-1.06L12 17.94l1.47-1.47a.75.75 0 1 1 1.06 1.06L13.06 19l1.47 1.47a.75.75 0 1 1-1.06 1.06L12 20.06l-1.47 1.47a.75.75 0 1 1-1.06-1.06L10.94 19z"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M19 10.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M16 10.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M16.75 8a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M16.75 11a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5"
    />
  </Svg>
);
export default SvgGamepadNoCharge;
