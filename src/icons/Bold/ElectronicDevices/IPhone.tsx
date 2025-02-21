import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgIPhone = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 9.80145V13.8676C20 17.7013 20 19.6181 18.8284 20.809C17.6569 22 15.7712 22 12 22C8.22876 22 6.34315 22 5.17157 20.809C4 19.6181 4 17.7013 4 13.8676V9.80145C4 5.96782 4 4.051 5.17157 2.86005C5.54739 2.47801 5.99669 2.21852 6.55813 2.04228C6.91142 1.93137 7.28557 2.08933 7.5 2.39265C7.55391 2.47485 7.60506 2.55304 7.65377 2.62751C8.28829 3.59749 8.50937 3.93544 9.02215 4.25936C9.13195 4.32871 9.24604 4.39078 9.36371 4.44518C9.95547 4.71873 10.637 4.71873 12 4.71873C13.363 4.71873 14.0445 4.71873 14.6363 4.44518C14.754 4.39078 14.8681 4.32871 14.9778 4.25936C15.4906 3.93544 15.7117 3.59749 16.3462 2.62752C16.3949 2.55305 16.4461 2.47485 16.5 2.39265C16.6992 2.08835 17.0639 1.92644 17.4105 2.03256C17.9866 2.20895 18.4456 2.47093 18.8284 2.86005C20 4.051 20 5.96782 20 9.80145ZM9 18.2294C8.58579 18.2294 8.25 18.567 8.25 18.9835C8.25 19.4 8.58579 19.7376 9 19.7376H15C15.4142 19.7376 15.75 19.4 15.75 18.9835C15.75 18.567 15.4142 18.2294 15 18.2294H9Z"
      fill="black"
    />
  </Svg>
);
export default SvgIPhone;
