import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTrellis = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.5 14V6.13747C20.5 5.74953 20.5 5.55556 20.4822 5.4229C20.359 4.50695 19.8459 3.94509 18.9449 3.73952C18.8144 3.70975 18.5428 3.68506 18 3.63571C16.9981 3.54463 15.8169 3.19591 14.7687 2.81455C13.2754 2.27127 12.5288 1.99963 12 1.99963C11.4712 1.99963 10.7246 2.27127 9.23133 2.81455C8.18314 3.19591 7.00193 3.54463 6 3.63571C5.45709 3.68507 5.18562 3.70974 5.05512 3.73952C4.15409 3.94509 3.64099 4.50695 3.51784 5.4229C3.5 5.55556 3.5 5.74953 3.5 6.13747V14H20.5ZM11.0303 6.46967C11.3232 6.76256 11.3232 7.23744 11.0303 7.53033L10.0303 8.53033C9.73744 8.82322 9.26256 8.82322 8.96967 8.53033C8.67678 8.23744 8.67678 7.76256 8.96967 7.46967L9.96967 6.46967C10.2626 6.17678 10.7374 6.17678 11.0303 6.46967ZM14.0303 7.46967C14.3232 7.76256 14.3232 8.23744 14.0303 8.53033L11.0303 11.5303C10.7374 11.8232 10.2626 11.8232 9.96967 11.5303C9.67678 11.2374 9.67678 10.7626 9.96967 10.4697L12.9697 7.46967C13.2626 7.17678 13.7374 7.17678 14.0303 7.46967ZM15.0303 10.4697C15.3232 10.7626 15.3232 11.2374 15.0303 11.5303L14.0303 12.5303C13.7374 12.8232 13.2626 12.8232 12.9697 12.5303C12.6768 12.2374 12.6768 11.7626 12.9697 11.4697L13.9697 10.4697C14.2626 10.1768 14.7374 10.1768 15.0303 10.4697Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.00023 15H11.25V21H8.00023C7.1228 21 6.38147 21 5.75 20.9738V22C5.75 22.4142 5.41421 22.75 5 22.75C4.58579 22.75 4.25 22.4142 4.25 22V20.8109C3.66924 20.6845 3.23107 20.4735 2.87891 20.1213C2.11053 19.3529 2.01408 18.175 2.00197 16.0001C1.99889 15.4478 2.44795 15 3.00023 15ZM6.25 18C6.25 17.5858 6.58579 17.25 7 17.25L9 17.25C9.41421 17.25 9.75 17.5858 9.75 18C9.75 18.4142 9.41421 18.75 9 18.75L7 18.75C6.58579 18.75 6.25 18.4142 6.25 18Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.0002 21H12.75V15H21.0002C21.5525 15 22.0016 15.4478 21.9985 16.0001C21.9864 18.175 21.8899 19.3529 21.1216 20.1213C20.7693 20.4736 20.331 20.6846 19.75 20.811V22C19.75 22.4142 19.4142 22.75 19 22.75C18.5858 22.75 18.25 22.4142 18.25 22V20.9738C17.6186 21 16.8774 21 16.0002 21ZM15 17.25C14.5858 17.25 14.25 17.5858 14.25 18C14.25 18.4142 14.5858 18.75 15 18.75L17 18.75C17.4142 18.75 17.75 18.4142 17.75 18C17.75 17.5858 17.4142 17.25 17 17.25L15 17.25Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgTrellis;
