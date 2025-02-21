import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAsteroid = (props: SvgProps) => (
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
      d="M12 2C6.477 2 2 6.477 2 12q0 .668.085 1.312a10.01 10.01 0 0 0 7.298 8.342c.834.226 1.711.346 2.617.346 4.879 0 8.941-3.494 9.823-8.116q.175-.917.177-1.884a9.98 9.98 0 0 0-3.682-7.752A9.96 9.96 0 0 0 12 2Z"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M2.085 13.312a6 6 0 0 1 7.297 8.342M21.823 13.885a6.002 6.002 0 0 1-3.505-9.637"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M16 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
    />
  </Svg>
);
export default SvgAsteroid;
