import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPointOnMap = (props: SvgProps) => (
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
      d="M21 13.162c0-1.043 0-3.565-.283-3.958s-.778-.558-1.768-.888L18 8m3 8.829c0 1.29 0 1.936-.34 2.351-.115.14-.255.26-.413.35-.465.267-1.102.16-2.375-.051-1.256-.21-1.884-.314-2.507-.262q-.329.027-.65.097c-.61.134-1.185.421-2.334.996-1.5.75-2.25 1.125-3.048 1.24q-.36.052-.726.052c-.807-.002-1.595-.265-3.172-.79l-.384-.128c-.99-.33-1.485-.495-1.768-.888S3 18.88 3 17.838V17m0-4.092c0-1.659 0-2.488.488-2.934a1.5 1.5 0 0 1 .281-.203c.515-.287 1.197-.11 2.454.304"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M17.25 11.251c.486-1.157.75-2.39.75-3.55C18 4.551 15.314 2 12 2S6 4.552 6 7.7c0 3.124 1.915 6.769 4.903 8.072a2.76 2.76 0 0 0 2.194 0c.954-.416 1.8-1.071 2.507-1.872"
    />
    <Circle cx={12} cy={8} r={2} stroke="#000" strokeWidth={1.5} />
  </Svg>
);
export default SvgPointOnMap;
