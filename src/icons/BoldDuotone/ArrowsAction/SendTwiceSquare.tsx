import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSendTwiceSquare = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
      fill={props.primaryColor}
    />
    <Path
      d="M17.75 8.50002C17.75 8.08581 17.4142 7.75002 17 7.75002L12.0715 7.75002L13.4801 6.57619C13.7983 6.31101 13.8413 5.83809 13.5762 5.51988C13.311 5.20167 12.8381 5.15868 12.5199 5.42385L9.51986 7.92385C9.34887 8.06635 9.25 8.27743 9.25 8.50002C9.25 8.7226 9.34887 8.93369 9.51986 9.07618L12.5199 11.5762C12.8381 11.8414 13.311 11.7984 13.5762 11.4802C13.8413 11.1619 13.7983 10.689 13.4801 10.4239L12.0715 9.25002H17C17.4142 9.25002 17.75 8.91423 17.75 8.50002Z"
      fill={props.primaryColor}
    />
    <Path
      d="M17.75 15.5C17.75 15.0858 17.4142 14.75 17 14.75H12.0715L13.4801 13.5762C13.7983 13.311 13.8413 12.8381 13.5762 12.5199C13.311 12.2017 12.8381 12.1587 12.5199 12.4239L9.51986 14.9239C9.34887 15.0663 9.25 15.2774 9.25 15.5C9.25 15.7226 9.34887 15.9337 9.51986 16.0762L12.5199 18.5762C12.8381 18.8414 13.311 18.7984 13.5762 18.4802C13.8413 18.162 13.7983 17.689 13.4801 17.4239L12.0715 16.25H17C17.4142 16.25 17.75 15.9142 17.75 15.5Z"
      fill={props.primaryColor}
    />
    <Path
      d="M7.75 18C7.75 18.4142 7.41421 18.75 7 18.75C6.58579 18.75 6.25 18.4142 6.25 18V6.00002C6.25 5.58581 6.58579 5.25002 7 5.25002C7.41421 5.25002 7.75 5.58581 7.75 6.00002L7.75 18Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgSendTwiceSquare;
