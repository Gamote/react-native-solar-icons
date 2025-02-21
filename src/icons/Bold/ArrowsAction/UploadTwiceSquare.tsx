import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUploadTwiceSquare = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM9.25 17C9.25 17.4142 8.91421 17.75 8.5 17.75C8.08579 17.75 7.75 17.4142 7.75 17V12.0715L6.57617 13.4801C6.31099 13.7983 5.83807 13.8413 5.51986 13.5762C5.20165 13.311 5.15866 12.8381 5.42383 12.5199L7.92383 9.51986C8.06633 9.34887 8.27742 9.25 8.5 9.25C8.72259 9.25 8.93367 9.34887 9.07617 9.51986L11.5762 12.5199C11.8413 12.8381 11.7983 13.311 11.4801 13.5762C11.1619 13.8413 10.689 13.7983 10.4238 13.4801L9.25 12.0715V17ZM15.5 17.75C15.9142 17.75 16.25 17.4142 16.25 17V12.0715L17.4238 13.4801C17.689 13.7983 18.1619 13.8413 18.4801 13.5762C18.7983 13.311 18.8413 12.8381 18.5762 12.5199L16.0762 9.51986C15.9337 9.34887 15.7226 9.25 15.5 9.25C15.2774 9.25 15.0663 9.34887 14.9238 9.51986L12.4238 12.5199C12.1587 12.8381 12.2017 13.311 12.5199 13.5762C12.8381 13.8413 13.311 13.7983 13.5762 13.4801L14.75 12.0715V17C14.75 17.4142 15.0858 17.75 15.5 17.75ZM6 7.75C5.58579 7.75 5.25 7.41421 5.25 7C5.25 6.58579 5.58579 6.25 6 6.25H18C18.4142 6.25 18.75 6.58579 18.75 7C18.75 7.41421 18.4142 7.75 18 7.75H6Z"
      fill="black"
    />
  </Svg>
);
export default SvgUploadTwiceSquare;
