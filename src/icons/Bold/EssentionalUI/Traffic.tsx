import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTraffic = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM10.6831 18.6203C11.9925 18.8808 13.3497 18.7471 14.5831 18.2362C15.8165 17.7253 16.8707 16.8601 17.6124 15.7501C18.3541 14.6401 18.75 13.335 18.75 12C18.75 11.5858 18.4142 11.25 18 11.25C17.5858 11.25 17.25 11.5858 17.25 12C17.25 13.0384 16.9421 14.0534 16.3652 14.9167C15.7883 15.7801 14.9684 16.453 14.0091 16.8504C13.0498 17.2477 11.9942 17.3517 10.9758 17.1491C9.95738 16.9466 9.02192 16.4465 8.28769 15.7123C7.55346 14.9781 7.05345 14.0426 6.85088 13.0242C6.64831 12.0058 6.75227 10.9502 7.14963 9.99091C7.54699 9.0316 8.2199 8.21166 9.08326 7.63479C9.94661 7.05791 10.9616 6.75 12 6.75C12.4142 6.75 12.75 6.41421 12.75 6C12.75 5.58579 12.4142 5.25 12 5.25C10.665 5.25 9.35993 5.64588 8.2499 6.38758C7.13987 7.12928 6.27471 8.18349 5.76381 9.41689C5.25292 10.6503 5.11925 12.0075 5.3797 13.3169C5.64015 14.6262 6.28303 15.829 7.22703 16.773C8.17103 17.717 9.37377 18.3599 10.6831 18.6203ZM13.3109 6.04536C13.4741 5.66467 13.915 5.48837 14.2957 5.65159C16.1129 6.4307 17.5693 7.88714 18.3484 9.70428C18.5116 10.085 18.3353 10.5259 17.9546 10.6891C17.5739 10.8524 17.133 10.6761 16.9698 10.2954C16.3424 8.83208 15.1679 7.65761 13.7046 7.03022C13.3239 6.867 13.1476 6.42606 13.3109 6.04536Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgTraffic;
