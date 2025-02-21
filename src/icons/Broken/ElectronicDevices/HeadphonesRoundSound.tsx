import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHeadphonesRoundSound = (props: SvgProps) => (
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
      d="M22 17v-5c0-1.821-.487-3.53-1.338-5M2 18v-6C2 6.477 6.477 2 12 2c1.821 0 3.53.487 5 1.338"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M8 15.187c0-.578 0-.867-.069-1.097a1.53 1.53 0 0 0-1.095-1.059c-.225-.054-.5-.03-1.052.015-.956.079-1.435.118-1.825.27-.899.347-1.585 1.123-1.846 2.088C2 15.823 2 16.324 2 17.328v.186c0 1.03 0 1.544.123 1.979a3.1 3.1 0 0 0 1.588 1.944c.392.195.878.275 1.85.436.645.106.968.16 1.229.106a1.52 1.52 0 0 0 1.119-1C8 20.718 8 20.376 8 19.693zM16 15.187c0-.578 0-.867.069-1.097.16-.531.576-.934 1.095-1.059.225-.054.5-.03 1.051.015.957.079 1.436.118 1.826.27.899.347 1.585 1.123 1.846 2.088.113.419.113.92.113 1.924v.186c0 1.03 0 1.544-.123 1.979a3.1 3.1 0 0 1-1.588 1.944c-.392.195-.878.275-1.85.436-.645.106-.968.16-1.229.106a1.52 1.52 0 0 1-1.119-1C16 20.718 16 20.376 16 19.693z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 6.5v5M15 8v2M9 8v2"
    />
  </Svg>
);
export default SvgHeadphonesRoundSound;
