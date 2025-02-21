import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWineglass = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M15.75 21.7499C16.1642 21.7499 16.5 21.4141 16.5 20.9999C16.5 20.5857 16.1642 20.2499 15.75 20.2499V21.7499ZM8.25 20.2499C7.83579 20.2499 7.5 20.5857 7.5 20.9999C7.5 21.4141 7.83579 21.7499 8.25 21.7499V20.2499ZM15.75 20.2499H12V21.7499H15.75V20.2499ZM12 20.2499H8.25V21.7499H12V20.2499ZM6.89474 3.75H17.1053V2.25H6.89474V3.75ZM18.25 4.89474V8H19.75V4.89474H18.25ZM5.75 8V4.89474H4.25V8H5.75ZM12 14.25C8.54822 14.25 5.75 11.4518 5.75 8H4.25C4.25 12.2802 7.71979 15.75 12 15.75V14.25ZM18.25 8C18.25 11.4518 15.4518 14.25 12 14.25V15.75C16.2802 15.75 19.75 12.2802 19.75 8H18.25ZM17.1053 3.75C17.7375 3.75 18.25 4.26252 18.25 4.89474H19.75C19.75 3.43409 18.5659 2.25 17.1053 2.25V3.75ZM6.89474 2.25C5.43409 2.25 4.25 3.43409 4.25 4.89474H5.75C5.75 4.26252 6.26252 3.75 6.89474 3.75V2.25Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M12.75 15.2856C12.75 14.8714 12.4142 14.5356 12 14.5356C11.5858 14.5356 11.25 14.8714 11.25 15.2856H12.75ZM11.25 20.9999C11.25 21.4141 11.5858 21.7499 12 21.7499C12.4142 21.7499 12.75 21.4141 12.75 20.9999H11.25ZM11.25 15.2856V20.9999H12.75V15.2856H11.25Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M5.5 8.99985C5.5 8.99985 7.58115 8.08712 9 7.99985C11.4652 7.84823 12.5348 10.1515 15 9.99985C16.4188 9.91259 18.5 8.99985 18.5 8.99985"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgWineglass;
