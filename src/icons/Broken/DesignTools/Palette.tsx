import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPalette = (props: SvgProps) => (
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
      d="M2 8V6c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C3.9 2 4.6 2 6 2s2.1 0 2.635.272a2.5 2.5 0 0 1 1.093 1.093C10 3.9 10 4.6 10 6v12c0 1.4 0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.092C8.1 22 7.4 22 6 22s-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C2 20.1 2 19.4 2 18v-6M7 19H5"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M13.314 4.93 11.172 7.07c-.578.578-.867.867-1.02 1.235C10 8.673 10 9.082 10 9.9v9.657l8.97-8.971c.99-.99 1.486-1.485 1.671-2.056a2.5 2.5 0 0 0 0-1.545c-.185-.57-.68-1.066-1.67-2.056s-1.486-1.485-2.056-1.67a2.5 2.5 0 0 0-1.545 0c-.571.185-1.066.68-2.056 1.67Z"
    />
    <Path
      fill="#000"
      d="M18 22v-.75zm0-8v.75zm4 4h-.75zm-.273 2.635-.668-.34zm-1.092 1.092-.34-.668zm1.092-6.362-.668.34zm-1.092-1.092-.34.668zM13 22.75a.75.75 0 0 0 0-1.5zm4-1.5a.75.75 0 0 0 0 1.5zm-1.5-6.5H18v-1.5h-2.5zM21.25 18c0 .712 0 1.202-.032 1.58-.03.371-.085.57-.159.715l1.337.68c.199-.39.28-.809.317-1.272.038-.454.037-1.015.037-1.703zM18 22.75c.688 0 1.249 0 1.703-.037.463-.037.882-.118 1.273-.317l-.681-1.337c-.145.074-.344.13-.714.16-.38.03-.869.031-1.581.031zm3.06-2.456a1.75 1.75 0 0 1-.765.765l.68 1.337a3.25 3.25 0 0 0 1.42-1.42zM22.75 18c0-.688 0-1.249-.037-1.703-.037-.463-.118-.882-.317-1.273l-1.337.682c.074.144.13.343.16.713.03.38.031.869.031 1.581zM18 14.75c.712 0 1.202 0 1.58.032.371.03.57.085.715.159l.68-1.337c-.39-.199-.809-.28-1.272-.317-.454-.038-1.015-.037-1.703-.037zm4.396.274a3.25 3.25 0 0 0-1.42-1.42l-.681 1.337c.329.167.596.435.764.765zM13 21.25H6v1.5h7zm5 0h-1v1.5h1z"
    />
  </Svg>
);
export default SvgPalette;
