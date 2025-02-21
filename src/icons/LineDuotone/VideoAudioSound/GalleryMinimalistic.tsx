import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGalleryMinimalistic = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Circle
      opacity={0.5}
      cx={16}
      cy={8}
      r={2}
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      opacity={0.5}
      d="M5 13.307L5.81051 12.5542C6.73658 11.6941 8.18321 11.7424 9.04988 12.6623L11.6974 15.4727C12.2356 16.0439 13.1166 16.1209 13.7457 15.6516C14.6522 14.9753 15.9144 15.0522 16.7322 15.8334L19 18"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgGalleryMinimalistic;
