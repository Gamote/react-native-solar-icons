import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPaperclipRounded2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M19.5646 16.1299C22.8118 12.8975 22.8118 7.6567 19.5646 4.4243C16.3175 1.1919 11.0528 1.1919 7.80563 4.4243M15.8899 19.7878C14.2664 21.404 11.634 21.404 10.0104 19.7878C8.38687 18.1716 8.38687 15.5513 10.0104 13.9351L12.9502 11.0087M4.13095 8.08229C1.28968 10.9106 1.28968 15.4963 4.13095 18.3247"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgPaperclipRounded2;
