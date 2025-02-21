import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTreadmill = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={15} cy={4} r={2} stroke="#000" strokeWidth={1.5} />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M11 16v-1.633a1.85 1.85 0 0 0-.666-1.422l-.996-.83a1.59 1.59 0 0 1-.106-2.346l1.654-1.654a1.067 1.067 0 0 0-.335-1.736 4.27 4.27 0 0 0-3.943.304L4.5 8"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m7 14-.328.328c-.578.579-.868.867-1.235 1.02-.368.152-.776.152-1.594.152H3M12.5 10h3"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.489 22H3.087a1.087 1.087 0 0 1-.188-2.157l16.157-2.828A2.511 2.511 0 1 1 19.489 22Z"
    />
    <Path
      fill="#000"
      d="m19.292 8.889-.742-.111zm1.585-1.664.147.735zm1.27.51a.75.75 0 1 0-.294-1.47zm-3.405 9.876 1.291-8.61-1.483-.223-1.292 8.61zm2.282-9.651 1.123-.225-.294-1.47-1.123.224zM20.034 9c.052-.352.084-.555.123-.701a.6.6 0 0 1 .046-.128l-1.085-1.035c-.227.238-.34.51-.41.776-.066.246-.11.547-.158.866zm.696-2.51c-.316.062-.614.12-.857.199a1.73 1.73 0 0 0-.755.447l1.086 1.034.012-.007a.6.6 0 0 1 .113-.046c.145-.046.346-.087.695-.157z"
      opacity={0.5}
    />
  </Svg>
);
export default SvgTreadmill;
