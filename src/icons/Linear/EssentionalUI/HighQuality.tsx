import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHighQuality = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      d="M6 8V15.619M10.8148 8V15.619M6 12H10.8148M19 16L17.0741 14.4762M16.1111 15.619C15.6637 15.619 15.4399 15.619 15.2539 15.5898C14.4899 15.4695 13.8927 14.997 13.7407 14.3925C13.7037 14.2453 13.7037 14.0683 13.7037 13.7143V9.90476C13.7037 9.55074 13.7037 9.37373 13.7407 9.22653C13.8927 8.62205 14.4899 8.14952 15.2539 8.02928C15.4399 8 15.6637 8 16.1111 8C16.5586 8 16.7823 8 16.9683 8.02928C17.7323 8.14952 18.3295 8.62205 18.4815 9.22653C18.5185 9.37373 18.5185 9.55074 18.5185 9.90476V13.7143C18.5185 14.0683 18.5185 14.2453 18.4815 14.3925C18.3295 14.997 17.7323 15.4695 16.9683 15.5898C16.7823 15.619 16.5586 15.619 16.1111 15.619Z"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgHighQuality;
