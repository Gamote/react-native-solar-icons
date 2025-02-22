import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSquareAcademicCap = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M14.2172 3.49965C12.7962 2.83345 11.2037 2.83345 9.78272 3.49965L3.0916 6.63659C2.0156 7.14105 1.73507 8.56352 2.25 9.54666L2.25 14.5C2.25 14.9142 2.58579 15.25 3 15.25C3.41421 15.25 3.75 14.9142 3.75 14.5V10.672L9.78281 13.5003C11.2038 14.1665 12.7963 14.1665 14.2173 13.5003L20.9084 10.3634C22.3639 9.68105 22.3639 7.31899 20.9084 6.63664L14.2172 3.49965Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M5 11.2583L9.78281 13.5006C11.2038 14.1668 12.7963 14.1668 14.2173 13.5006L19 11.2583V16.6255C19 17.6335 18.4965 18.5773 17.6147 19.0656C16.1463 19.8788 13.796 21.0001 12 21.0001C10.204 21.0001 7.8537 19.8788 6.38533 19.0656C5.5035 18.5773 5 17.6335 5 16.6255V11.2583Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgSquareAcademicCap;
