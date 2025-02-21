import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFullScreenSquare = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M10.004 6.75a.75.75 0 0 0-.013-1.5c-.85.007-1.577.034-2.179.152-.623.122-1.167.351-1.613.797s-.675.99-.797 1.613c-.118.602-.145 1.328-.152 2.179a.75.75 0 0 0 1.5.013c.007-.856.035-1.454.124-1.904.084-.428.212-.666.386-.84s.412-.302.84-.386c.45-.088 1.048-.117 1.904-.124M14.007 5.25a.75.75 0 1 0-.013 1.5c.856.007 1.454.035 1.903.124.429.084.666.212.84.386.175.174.303.412.387.84.088.45.116 1.048.124 1.904a.75.75 0 0 0 1.5-.013c-.008-.85-.034-1.577-.152-2.179-.122-.623-.352-1.167-.798-1.613s-.99-.675-1.612-.797c-.603-.118-1.329-.145-2.18-.152M6.75 13.994a.75.75 0 0 0-1.5.013c.007.85.034 1.577.152 2.179.122.623.351 1.167.797 1.613s.99.675 1.613.797c.602.119 1.328.145 2.179.152a.75.75 0 0 0 .013-1.5c-.856-.007-1.454-.036-1.904-.123-.428-.084-.666-.213-.84-.387s-.302-.412-.386-.84c-.088-.45-.117-1.048-.124-1.904M18.748 14.007a.75.75 0 1 0-1.5-.013c-.008.856-.036 1.454-.124 1.904-.084.428-.212.666-.386.84s-.412.303-.84.387c-.45.087-1.048.116-1.904.123a.75.75 0 1 0 .013 1.5c.85-.007 1.576-.034 2.179-.152.623-.122 1.166-.351 1.612-.797s.676-.99.798-1.613c.118-.602.144-1.328.151-2.179"
    />
  </Svg>
);
export default SvgFullScreenSquare;
