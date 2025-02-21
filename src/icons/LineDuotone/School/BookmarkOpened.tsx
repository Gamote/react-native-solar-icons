import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBookmarkOpened = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      d="M14 6H10C7.19974 6 5.79961 6 4.73005 6.54497C3.78924 7.02433 3.02433 7.78924 2.54497 8.73005C2 9.79961 2 11.1997 2 14C2 16.8003 2 18.2004 2.54497 19.27C3.02433 20.2108 3.78924 20.9757 4.73005 21.455C5.79961 22 7.19974 22 10 22H14C16.8003 22 18.2004 22 19.27 21.455C20.2108 20.9757 20.9757 20.2108 21.455 19.27C22 18.2004 22 16.8003 22 14C22 11.1997 22 9.79961 21.455 8.73005C20.9757 7.78924 20.2108 7.02433 19.27 6.54497C18.2004 6 16.8003 6 14 6Z"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      opacity={0.5}
      d="M17 6V10.8076C17 11.7825 17 12.27 16.8709 12.5607C16.5766 13.2233 15.8506 13.5805 15.1461 13.4095C14.8369 13.3344 14.4507 13.037 13.6782 12.4422C13.2421 12.1064 13.024 11.9385 12.797 11.8398C12.2886 11.619 11.7114 11.619 11.203 11.8398C10.976 11.9385 10.7579 12.1064 10.3218 12.4422C9.5493 13.037 9.16307 13.3344 8.85391 13.4095C8.14942 13.5805 7.42342 13.2233 7.12914 12.5607C7 12.27 7 11.7825 7 10.8076V6"
      stroke="black"
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgBookmarkOpened;
