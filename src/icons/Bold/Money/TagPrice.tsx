import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTagPrice = (props: SvgProps) => (
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
      d="m16.137 4.728 1.83 1.83C20.656 9.248 22 10.592 22 12.262c0 1.671-1.344 3.015-4.033 5.704-2.69 2.69-4.034 4.034-5.705 4.034-1.67 0-3.015-1.344-5.704-4.033l-1.83-1.83c-1.545-1.546-2.318-2.318-2.605-3.321-.288-1.003-.042-2.068.45-4.197l.283-1.228c.413-1.792.62-2.688 1.233-3.302s1.51-.82 3.302-1.233l1.228-.284c2.13-.491 3.194-.737 4.197-.45 1.003.288 1.775 1.061 3.32 2.606m-4.99 9.6c-.673-.672-.668-1.638-.265-2.403a.75.75 0 0 1 1.04-1.046c.34-.18.713-.276 1.085-.272a.75.75 0 0 1-.014 1.5.88.88 0 0 0-.609.277c-.387.387-.286.775-.177.884.11.109.497.21.884-.177.784-.784 2.138-1.044 3.005-.177.673.673.668 1.639.265 2.404a.75.75 0 0 1-1.04 1.045 2.2 2.2 0 0 1-1.472.232.75.75 0 1 1 .302-1.47c.177.037.463-.021.708-.266.387-.388.286-.775.177-.884-.11-.109-.497-.21-.884.177-.784.784-2.138 1.044-3.005.176m-1.126-4.035a2 2 0 1 0-2.829-2.828 2 2 0 0 0 2.829 2.828"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgTagPrice;
