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
      d="M11 16v-1.633a1.85 1.85 0 0 0-.666-1.422l-.996-.83a1.59 1.59 0 0 1-.106-2.346l1.654-1.654a1.067 1.067 0 0 0-.335-1.736 4.27 4.27 0 0 0-3.943.304L4.5 8M7 14l-.328.328c-.578.579-.868.867-1.235 1.02-.368.152-.776.152-1.594.152H3M12.5 10h3"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.288 22H3.087a1.087 1.087 0 0 1-.188-2.158l16.157-2.827A2.511 2.511 0 1 1 19.489 22H15"
    />
    <Path
      fill="#000"
      d="m19.292 8.889-.742-.111zm1.585-1.664.147.735zm1.27.51a.75.75 0 1 0-.294-1.47zm-2.904 6.371a.75.75 0 0 0-1.485-.212zm-.854-4.252a.75.75 0 1 0 1.483.223zm2.635-1.894 1.123-.225-.294-1.47-1.123.224zM20.034 9c.052-.352.084-.555.123-.701a.6.6 0 0 1 .046-.128l-1.085-1.035c-.227.238-.34.51-.41.776-.066.246-.11.547-.158.866zm.696-2.51c-.316.062-.614.12-.857.199a1.73 1.73 0 0 0-.755.447l1.086 1.034.012-.007a.6.6 0 0 1 .113-.046c.145-.046.346-.087.695-.157zm-1.988 11.116.5-3.5-1.485-.212-.5 3.5zm1.13-7.53L20.033 9l-1.483-.222-.162 1.076z"
    />
  </Svg>
);
export default SvgTreadmill;
