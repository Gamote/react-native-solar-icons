import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUploadTwiceSquare = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
      fill={props.primaryColor}
    />
    <Path
      d="M6.00002 7.75C5.58581 7.75 5.25002 7.41421 5.25002 7C5.25002 6.58579 5.58581 6.25 6.00002 6.25H18C18.4142 6.25 18.75 6.58579 18.75 7C18.75 7.41421 18.4142 7.75 18 7.75H6.00002Z"
      fill={props.primaryColor}
    />
    <Path
      d="M8.50002 17.75C8.91423 17.75 9.25002 17.4142 9.25002 17V12.0715L10.4239 13.4801C10.689 13.7983 11.1619 13.8413 11.4802 13.5762C11.7984 13.311 11.8414 12.8381 11.5762 12.5199L9.07618 9.51986C8.93369 9.34887 8.7226 9.25 8.50002 9.25C8.27743 9.25 8.06635 9.34887 7.92385 9.51986L5.42385 12.5199C5.15868 12.8381 5.20167 13.311 5.51988 13.5762C5.83809 13.8413 6.31101 13.7983 6.57618 13.4801L7.75002 12.0715L7.75002 17C7.75002 17.4142 8.0858 17.75 8.50002 17.75Z"
      fill={props.primaryColor}
    />
    <Path
      d="M15.5 17.75C15.9142 17.75 16.25 17.4142 16.25 17L16.25 12.0715L17.4239 13.4801C17.689 13.7983 18.1619 13.8413 18.4802 13.5762C18.7984 13.311 18.8414 12.8381 18.5762 12.5199L16.0762 9.51986C15.9337 9.34887 15.7226 9.25 15.5 9.25C15.2774 9.25 15.0663 9.34887 14.9239 9.51986L12.4239 12.5199C12.1587 12.8381 12.2017 13.311 12.5199 13.5762C12.8381 13.8413 13.311 13.7983 13.5762 13.4801L14.75 12.0715L14.75 17C14.75 17.4142 15.0858 17.75 15.5 17.75Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgUploadTwiceSquare;
