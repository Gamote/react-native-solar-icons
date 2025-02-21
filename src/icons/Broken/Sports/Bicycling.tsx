import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBicycling = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={15} cy={4} r={2} stroke="#000" strokeWidth={1.5} />
    <Circle cx={6} cy={18} r={3} stroke="#000" strokeWidth={1.5} />
    <Circle cx={18} cy={18} r={3} stroke="#000" strokeWidth={1.5} />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M18.5 10h-2.026c-1.22 0-1.831 0-2.38-.227-.55-.226-.983-.657-1.85-1.517l-.576-.574c-.785-.78-1.178-1.17-1.642-1.128-.465.043-.78.497-1.411 1.406M12 18l.057-.358c.235-1.47.352-2.205.024-2.805s-1.01-.897-2.374-1.492L8.23 12.7c-1.032-.45-1.549-.676-1.678-1.13-.05-.18-.031-.36.05-.57"
    />
  </Svg>
);
export default SvgBicycling;
