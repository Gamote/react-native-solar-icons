import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUsbSquare = (props: SvgProps) => (
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
      d="m13.53 6.47-1-1a.75.75 0 0 0-1.06 0l-1 1a.75.75 0 0 0 .78 1.237v5.035a3 3 0 0 0-.22-.08l-1.403-.44a1.25 1.25 0 0 1-.877-1.192v-.448a1.75 1.75 0 1 0-1.5 0v.448a2.75 2.75 0 0 0 1.93 2.624l1.403.439a.95.95 0 0 1 .667.907v.418a1.75 1.75 0 1 0 1.645.078.95.95 0 0 1 .522-.403l1.403-.439a2.75 2.75 0 0 0 1.93-2.624v-.322c.2-.039.433-.123.634-.324.236-.236.311-.516.341-.735.025-.188.025-.41.025-.614v-.07c0-.205 0-.426-.025-.614-.03-.219-.105-.5-.341-.735a1.24 1.24 0 0 0-.735-.341c-.188-.025-.41-.025-.614-.025h-.07c-.205 0-.426 0-.614.025-.219.03-.5.105-.735.341a1.24 1.24 0 0 0-.341.735 5 5 0 0 0-.025.615v.068c0 .206 0 .427.025.615.03.219.105.5.341.735.2.2.434.285.634.324v.322a1.25 1.25 0 0 1-.877 1.193l-1.404.438q-.112.035-.219.08V7.708a.75.75 0 0 0 .78-1.237"
    />
  </Svg>
);
export default SvgUsbSquare;
