import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPaperclipRounded2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2ZM8.96383 6.86264C11.2024 4.71245 14.8198 4.71245 17.0583 6.86264C19.3139 9.02918 19.3139 12.5548 17.0583 14.7213L14.8535 16.8391C13.5891 18.0536 11.5511 18.0536 10.2867 16.8391C9.0053 15.6083 9.0053 13.5997 10.2867 12.3689L12.0506 10.6747C12.3493 10.3877 12.8241 10.3973 13.111 10.696C13.398 10.9947 13.3884 11.4695 13.0897 11.7564L11.3258 13.4507C10.6589 14.0912 10.6589 15.1168 11.3258 15.7573C12.0097 16.4142 13.1305 16.4142 13.8144 15.7573L16.0192 13.6395C17.6603 12.0633 17.6603 9.52069 16.0192 7.94444C14.3612 6.35185 11.661 6.35185 10.0029 7.94444L7.79812 10.0622C6.40063 11.4045 6.40063 13.5679 7.79812 14.9102C8.09685 15.1972 8.1064 15.6719 7.81947 15.9707C7.53253 16.2694 7.05775 16.279 6.75902 15.992C4.74699 14.0594 4.74699 10.913 6.75902 8.98043L8.96383 6.86264Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgPaperclipRounded2;
