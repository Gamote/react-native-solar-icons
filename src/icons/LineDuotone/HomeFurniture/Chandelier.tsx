import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChandelier = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M9 4h6" />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M16 11.2a1.2 1.2 0 0 1 1.2-1.2h3.6a1.2 1.2 0 0 1 1.2 1.2V13a3 3 0 1 1-6 0z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 4v12.5m0 0a3.5 3.5 0 1 0 7 0v-.056m-7 .056a3.5 3.5 0 1 1-7 0v-.056"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M8 10.857A.857.857 0 0 0 7.143 10H2.857a.857.857 0 0 0-.857.857V13a3 3 0 1 0 6 0z"
    />
  </Svg>
);
export default SvgChandelier;
