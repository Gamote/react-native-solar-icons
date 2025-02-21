import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLightbulb = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M4.5 9.5a7.5 7.5 0 1 1 12.501 5.59c-1.12 1.003-1.68 1.505-1.832 1.69-.487.601-.508.65-.63 1.413-.039.237-.039.593-.039 1.307 0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C13.402 22 12.935 22 12 22s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549c-.201-.348-.201-.815-.201-1.75 0-.713 0-1.07-.038-1.307-.123-.763-.144-.812-.631-1.412-.151-.186-.712-.688-1.832-1.692A7.48 7.48 0 0 1 4.5 9.5Z"
    />
    <Path stroke="#000" strokeWidth={1.5} d="M14.5 19.5h-5" opacity={0.5} />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 17v-2m0 0a2 2 0 0 0 1.732-1M12 15a2 2 0 0 1-1.732-1"
      opacity={0.5}
    />
  </Svg>
);
export default SvgLightbulb;
