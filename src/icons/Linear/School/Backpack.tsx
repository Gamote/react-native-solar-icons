import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBackpack = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M3 10.9111C3 10.8181 3 10.7716 3.00057 10.7302C3.0385 7.98009 4.94139 5.60791 7.61778 4.97431C7.65803 4.96478 7.70344 4.95469 7.79425 4.93451C7.87787 4.91592 7.91968 4.90663 7.96109 4.89763C10.6226 4.31863 13.3774 4.31863 16.0389 4.89763C16.0803 4.90663 16.1221 4.91592 16.2057 4.93451C16.2966 4.95469 16.342 4.96478 16.3822 4.97431C19.0586 5.60791 20.9615 7.98009 20.9994 10.7302C21 10.7716 21 10.8181 21 10.9111V16.375C21 18.493 19.529 20.3268 17.4615 20.7862C13.8644 21.5856 10.1356 21.5856 6.53853 20.7862C4.47101 20.3268 3 18.493 3 16.375V10.9111Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M17.5 15.5V17"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M15.9585 4.5C15.7205 3.08114 14.4865 2 13 2H11C9.51353 2 8.27954 3.08114 8.0415 4.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M3 14C8.72979 16.5466 15.2702 16.5466 21 14"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M10 13H14"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgBackpack;
