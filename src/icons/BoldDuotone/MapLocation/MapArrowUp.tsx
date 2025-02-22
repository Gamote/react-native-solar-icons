import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMapArrowUp = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M8.0374 9.85761C7.78266 9.73024 7.47314 9.84107 7.35714 10.1012L3.16447 19.5029C2.49741 20.9987 3.97865 22.5503 5.36641 21.8093L11.2701 18.6573C11.7293 18.4121 12.2697 18.4121 12.7289 18.6573L18.6326 21.8093C20.0204 22.5503 21.5016 20.9987 20.8346 19.5029L19.2629 15.9785C19.0743 15.5557 18.7448 15.2113 18.3307 15.0043L8.0374 9.85761Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M8.6095 8.46721C8.37019 8.34755 8.26749 8.06071 8.37646 7.81635L10.5271 2.99379C11.1174 1.67004 12.8818 1.67004 13.4722 2.99379L17.4401 11.8915C17.6313 12.3202 17.1797 12.7523 16.7598 12.5424L8.6095 8.46721Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgMapArrowUp;
