import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTurntableMusicNote = (props: SvgProps) => (
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
      d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m19.995-2c-.03-3.413-.219-5.295-1.46-6.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464c-.973.974-1.3 2.343-1.409 4.536M19 20v-8"
    />
    <Circle cx={17} cy={20} r={2} stroke="#000" strokeWidth={1.5} />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M22 15a3 3 0 0 1-3-3"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"
    />
  </Svg>
);
export default SvgTurntableMusicNote;
