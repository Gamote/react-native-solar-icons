import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgInboxOut = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 1.25C12.1989 1.25 12.3897 1.32902 12.5303 1.46967L15.5303 4.46967C15.8232 4.76256 15.8232 5.23744 15.5303 5.53033C15.2374 5.82322 14.7626 5.82322 14.4697 5.53033L12.75 3.81066V10C12.75 10.4142 12.4142 10.75 12 10.75C11.5858 10.75 11.25 10.4142 11.25 10V3.81066L9.53033 5.53033C9.23744 5.82322 8.76256 5.82322 8.46967 5.53033C8.17678 5.23744 8.17678 4.76256 8.46967 4.46967L11.4697 1.46967C11.6103 1.32902 11.8011 1.25 12 1.25Z"
      fill={props.primaryColor}
    />
    <Path
      d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C21.8063 19.2647 21.9744 17.3219 21.9966 13.75H18.8397C17.8659 13.75 17.6113 13.766 17.3975 13.8644C17.1838 13.9627 17.0059 14.1456 16.3722 14.8849L15.6794 15.6933C15.1773 16.2803 14.7796 16.7453 14.2292 16.9984C13.6789 17.2515 13.067 17.2509 12.2945 17.2501H11.7055C10.933 17.2509 10.3211 17.2515 9.77076 16.9984C9.22038 16.7453 8.82271 16.2803 8.32058 15.6933L7.62784 14.8849C6.9941 14.1456 6.81622 13.9627 6.60245 13.8644C6.38869 13.766 6.13407 13.75 5.16026 13.75H2.00339C2.02561 17.3219 2.19367 19.2647 3.46447 20.5355Z"
      fill={props.primaryColor}
    />
    <Path
      d="M22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.5152 2.44413 18.0616 2.13469 15.6794 2.04085C15.5259 2.0348 15.3686 2.02965 15.2072 2.02526L16.591 3.40901C17.4697 4.28769 17.4697 5.71231 16.591 6.59099C15.9579 7.22405 15.0415 7.40101 14.25 7.12187V10C14.25 11.2426 13.2426 12.25 12 12.25C10.7574 12.25 9.75 11.2426 9.75 10V7.12187C8.95851 7.40101 8.04207 7.22405 7.40901 6.59099C6.53033 5.71231 6.53033 4.28769 7.40901 3.40901L8.78506 2.02547C6.12449 2.09831 4.5495 2.37943 3.46447 3.46447C2 4.92893 2 7.28595 2 12L2.00001 12.25L5.29454 12.2499C6.06705 12.2491 6.67886 12.2485 7.22924 12.5016C7.77961 12.7547 8.17729 13.2197 8.67941 13.8067L9.37216 14.6151C10.0059 15.3544 10.1838 15.5373 10.3975 15.6356C10.6113 15.734 10.8659 15.75 11.8397 15.75H12.1603C13.1341 15.75 13.3887 15.734 13.6025 15.6356C13.8162 15.5373 13.9941 15.3544 14.6278 14.6151L15.3206 13.8067C15.8227 13.2197 16.2204 12.7547 16.7708 12.5016C17.3211 12.2485 17.933 12.2491 18.7055 12.2499L22 12.25L22 12Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgInboxOut;
