import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPodcast = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M10.8373 10.5455C10.8373 10.1439 10.5249 9.81827 10.1396 9.81827H8.5815C8.90471 8.15846 10.3124 6.90918 12.0001 6.90918C13.6877 6.90918 15.0955 8.15846 15.4187 9.81827H12.9303C12.545 9.81827 12.2326 10.1439 12.2326 10.5455C12.2326 10.9472 12.545 11.2728 12.9303 11.2728H15.4885V12.7274H12.9303C12.545 12.7274 12.2326 13.053 12.2326 13.4546C12.2326 13.8563 12.545 14.1819 12.9303 14.1819H15.4187C15.1412 15.6067 14.0646 16.729 12.6978 17.0183V19.2728C12.6978 19.6745 12.3854 20.0001 12.0001 20.0001C11.6148 20.0001 11.3024 19.6745 11.3024 19.2728V17.0183C9.93558 16.729 8.85895 15.6067 8.5815 14.1819H10.1396C10.5249 14.1819 10.8373 13.8563 10.8373 13.4546C10.8373 13.053 10.5249 12.7274 10.1396 12.7274H8.51172V11.2728H10.1396C10.5249 11.2728 10.8373 10.9472 10.8373 10.5455Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M12 4C8.67054 4 5.94634 6.70128 5.73422 10.1161C5.38211 9.92573 4.98218 9.81818 4.55814 9.81818C3.14532 9.81818 2 11.0121 2 12.4848V14.4242C2 15.897 3.14532 17.0909 4.55814 17.0909C4.60616 17.0909 4.65388 17.0895 4.70125 17.0868V17.0909C6.03503 17.0909 7.11628 15.9638 7.11628 14.5734V10.5454C7.11628 7.73382 9.30279 5.45455 12 5.45455C14.6972 5.45455 16.8837 7.73382 16.8837 10.5454V14.5734C16.8837 15.9638 17.9649 17.0909 19.2987 17.0909V17.0868C19.3461 17.0895 19.3938 17.0909 19.4419 17.0909C20.8547 17.0909 22 15.897 22 14.4242V12.4848C22 11.0121 20.8547 9.81818 19.4419 9.81818C19.0178 9.81818 18.6179 9.92574 18.2657 10.1161C18.0536 6.70129 15.3294 4 12 4Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgPodcast;
