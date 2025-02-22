import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWaterdrop = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M11.6115 22H12.3885C17.1445 22 21 18.0569 21 13.1928V12.9281C21 8.31651 18.2715 4.16347 14.0967 2.42077C12.7527 1.85974 11.2473 1.85974 9.90329 2.42077C5.72854 4.16347 3 8.31651 3 12.9281V13.1928C3 18.0569 6.85549 22 11.6115 22Z"
      fill={props.primaryColor}
    />
    <Path
      d="M12.0663 5.96126C12.2401 6.33722 12.0763 6.78293 11.7003 6.95679C10.1548 7.6715 8.90701 9.12514 8.3295 10.9497C8.20451 11.3447 7.78305 11.5635 7.38814 11.4385C6.99324 11.3135 6.77443 10.892 6.89942 10.4971C7.59142 8.31077 9.10582 6.50399 11.0707 5.59533C11.4467 5.42146 11.8924 5.5853 12.0663 5.96126Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgWaterdrop;
