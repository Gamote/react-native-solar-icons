import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRepeatOneMinimalistic = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.71597 3.20277C8.98843 2.93241 9.43017 2.93241 9.70263 3.20277L11.5631 5.04893C11.7626 5.24692 11.8223 5.5447 11.7143 5.8034C11.6063 6.06209 11.352 6.23077 11.0698 6.23077H9.2093C5.99834 6.23077 3.39535 8.81374 3.39535 12C3.39535 15.1862 5.99857 17.7692 9.20956 17.7692H9.67442C10.0597 17.7692 10.3721 18.0792 10.3721 18.4615C10.3721 18.8439 10.0597 19.1538 9.67442 19.1538H9.20956C5.22801 19.1538 2 15.951 2 12C2 8.04904 5.22771 4.84615 9.2093 4.84615H9.38543L8.71597 4.18184C8.44351 3.91148 8.44351 3.47314 8.71597 3.20277Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.6279 5.53846C13.6279 5.15611 13.9403 4.84615 14.3256 4.84615H14.7907C18.7723 4.84615 22 8.04904 22 12C22 15.951 18.7723 19.1538 14.7907 19.1538H14.6146L15.284 19.8182C15.5565 20.0885 15.5565 20.5269 15.284 20.7972C15.0116 21.0676 14.5698 21.0676 14.2974 20.7972L12.4369 18.9511C12.2374 18.7531 12.1777 18.4553 12.2857 18.1966C12.3937 17.9379 12.6481 17.7692 12.9302 17.7692H14.7907C18.0017 17.7692 20.6047 15.1863 20.6047 12C20.6047 8.81374 18.0017 6.23077 14.7907 6.23077H14.3256C13.9403 6.23077 13.6279 5.92081 13.6279 5.53846Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M5.48828 11.9999C5.48828 9.96072 7.1542 8.30762 9.20921 8.30762H14.7906C16.8456 8.30762 18.5115 9.96072 18.5115 11.9999C18.5115 14.0391 16.8456 15.6922 14.7906 15.6922H9.20921C7.1542 15.6922 5.48828 14.0391 5.48828 11.9999Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgRepeatOneMinimalistic;
