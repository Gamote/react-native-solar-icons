import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCursor = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.4334 16.4643L12.6361 15.2616L15.2616 12.6361L16.4643 11.4334C17.6955 10.2022 18.3111 9.58656 18.1658 8.92489C18.0204 8.26322 17.2035 7.96225 15.5696 7.3603L10.1205 5.35271C6.86106 4.15187 5.23136 3.55146 4.39141 4.39141C3.55146 5.23136 4.15187 6.86106 5.3527 10.1205L7.3603 15.5696C7.96225 17.2035 8.26322 18.0204 8.92489 18.1658C9.58656 18.3111 10.2022 17.6955 11.4334 16.4643Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M12.6357 15.2618L16.574 19.2001C16.9818 19.6079 17.1857 19.8117 17.4132 19.906C17.7164 20.0316 18.0572 20.0316 18.3605 19.906C18.5879 19.8117 18.7918 19.6078 19.1996 19.2001C19.6074 18.7923 19.8113 18.5884 19.9055 18.3609C20.0311 18.0577 20.0311 17.7169 19.9055 17.4137C19.8113 17.1862 19.6074 16.9823 19.1996 16.5745L15.2613 12.6362L12.6357 15.2618Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgCursor;
