import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChandelier = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.25 4.75V16.5C11.25 18.0188 10.0188 19.25 8.5 19.25C6.98122 19.25 5.75 18.0188 5.75 16.5V15.9055H4.25V16.5C4.25 18.8472 6.15279 20.75 8.5 20.75C9.95165 20.75 11.2333 20.0222 12 18.9116C12.7667 20.0222 14.0484 20.75 15.5 20.75C17.8472 20.75 19.75 18.8472 19.75 16.5V15.9055H18.25V16.5C18.25 18.0188 17.0188 19.25 15.5 19.25C13.9812 19.25 12.75 18.0188 12.75 16.5V4.75H11.25Z"
      fill={props.primaryColor}
    />
    <Path
      d="M9 3.25C8.58579 3.25 8.25 3.58579 8.25 4C8.25 4.41421 8.58579 4.75 9 4.75H11.25H12.75H15C15.4142 4.75 15.75 4.41421 15.75 4C15.75 3.58579 15.4142 3.25 15 3.25H9Z"
      fill={props.primaryColor}
    />
    <Path
      d="M16 13C16 14.3979 16.9561 15.5725 18.25 15.9055H19.75C21.0439 15.5725 22 14.3979 22 13V11.2C22 10.5373 21.4627 10 20.8 10H17.2C16.5373 10 16 10.5373 16 11.2V13Z"
      fill={props.primaryColor}
    />
    <Path
      d="M2 13C2 14.3979 2.95608 15.5725 4.25 15.9055H5.75C7.04392 15.5725 8 14.3979 8 13V10.8571C8 10.3838 7.61624 10 7.14286 10H2.85714C2.38376 10 2 10.3838 2 10.8571V13Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgChandelier;
