import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCreativeCommons = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      d="M11 15.6672C10.475 15.8812 9.89523 16 9.28571 16C6.91878 16 5 14.2091 5 12C5 9.79086 6.91878 8 9.28571 8C9.89523 8 10.475 8.11876 11 8.33283"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M19 15.6672C18.475 15.8812 17.8952 16 17.2857 16C14.9188 16 13 14.2091 13 12C13 9.79086 14.9188 8 17.2857 8C17.8952 8 18.475 8.11876 19 8.33283"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgCreativeCommons;
