import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBag5 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M4.03532 16.9267C4.4971 19.2356 4.72799 20.3901 5.55742 21.07C6.38686 21.75 7.56417 21.75 9.9188 21.75H14.0812C16.4358 21.75 17.6131 21.75 18.4425 21.07C19.272 20.3901 19.5029 19.2356 19.9646 16.9267L20.5646 13.9267C21.2287 10.6063 21.5608 8.94607 20.6606 7.84803C19.7604 6.75 18.0673 6.75 14.6812 6.75H9.3188C5.93263 6.75 4.23954 6.75 3.33936 7.84803C2.43919 8.94607 2.77123 10.6063 3.43532 13.9267L4.03532 16.9267Z"
      fill={props.primaryColor}
    />
    <Circle cx={15} cy={9.75} r={1} fill={props.primaryColor} />
    <Circle cx={9} cy={9.75} r={1} fill={props.primaryColor} />
    <Path
      d="M9.75 5.75C9.75 4.50736 10.7574 3.5 12 3.5C13.2426 3.5 14.25 4.50736 14.25 5.75V6.75H14.6812C15.058 6.75 15.4139 6.75 15.75 6.75151L15.75 5.75C15.75 3.67893 14.0711 2 12 2C9.92893 2 8.25 3.67893 8.25 5.75L8.25 6.75151C8.58613 6.75 8.94198 6.75 9.3188 6.75H9.75V5.75Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgBag5;
