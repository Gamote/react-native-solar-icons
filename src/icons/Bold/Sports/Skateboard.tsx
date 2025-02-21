import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSkateboard = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.58393 6.37604C1.92858 6.14628 2.39423 6.23941 2.624 6.58405L3.43653 7.80286C4.03929 8.707 5.05404 9.25008 6.14069 9.25008H17.8592C18.9459 9.25008 19.9606 8.707 20.5634 7.80285L21.3759 6.58405C21.6057 6.23941 22.0713 6.14628 22.416 6.37604C22.7606 6.60581 22.8538 7.07146 22.624 7.4161L21.8115 8.6349C20.9305 9.95635 19.4474 10.7501 17.8592 10.7501H6.14069C4.55251 10.7501 3.06942 9.95635 2.18845 8.63491L1.37592 7.4161C1.14616 7.07146 1.23929 6.60581 1.58393 6.37604Z"
      fill="black"
    />
    <Path
      d="M8.99996 15.0001C8.99996 16.1046 8.10453 17.0001 6.99996 17.0001C5.89539 17.0001 4.99996 16.1046 4.99996 15.0001C4.99996 13.8955 5.89539 13.0001 6.99996 13.0001C8.10453 13.0001 8.99996 13.8955 8.99996 15.0001Z"
      fill="black"
    />
    <Path
      d="M19 15.0001C19 16.1046 18.1045 17.0001 17 17.0001C15.8954 17.0001 15 16.1046 15 15.0001C15 13.8955 15.8954 13.0001 17 13.0001C18.1045 13.0001 19 13.8955 19 15.0001Z"
      fill="black"
    />
  </Svg>
);
export default SvgSkateboard;
