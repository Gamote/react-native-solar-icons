import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGlobus = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle opacity={0.5} cx={12} cy={10} r={7} fill="black" />
    <Path
      d="M9.60212 8.21316C9.47104 6.75421 8.34593 5.39474 7.79976 4.89737L7.49805 4.63933C8.71505 3.61626 10.2854 3 11.9998 3C13.5491 3 14.9809 3.50337 16.1405 4.3555C16.3044 4.85287 15.9923 5.89211 15.6646 6.38947C15.5459 6.56963 15.2767 6.79329 14.9817 7.0053C14.3163 7.48334 13.4767 7.71978 13.0498 8.6C12.9277 8.85162 12.9329 9.09758 12.9916 9.31138C13.0338 9.46509 13.0608 9.63217 13.0612 9.79558C13.0626 10.324 12.5282 10.7058 11.9998 10.7C10.6248 10.685 9.72465 9.57688 9.60212 8.21316Z"
      fill="black"
    />
    <Path
      d="M13.0057 14.3935C13.6974 13.0901 16.003 13.0901 16.003 13.0901C18.4053 13.065 18.7299 11.6064 18.9468 10.8691C18.5585 14.0061 16.0948 16.4997 12.9722 16.9335C12.7463 16.4582 12.4788 15.3865 13.0057 14.3935Z"
      fill="black"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.0035 1.49982C18.2797 1.19118 18.7539 1.16491 19.0625 1.44116C21.3246 3.4658 22.75 6.41044 22.75 9.687C22.75 15.4384 18.3612 20.1647 12.75 20.6996V21.25H14C14.4142 21.25 14.75 21.5858 14.75 22C14.75 22.4142 14.4142 22.75 14 22.75H10C9.58579 22.75 9.25001 22.4142 9.25001 22C9.25001 21.5858 9.58579 21.25 10 21.25H11.25V20.7415C8.14923 20.621 5.37537 19.2236 3.44116 17.0625C3.16491 16.7539 3.19118 16.2797 3.49982 16.0035C3.80847 15.7272 4.28261 15.7535 4.55886 16.0622C6.31098 18.0198 8.85483 19.25 11.687 19.25C16.9685 19.25 21.25 14.9685 21.25 9.687C21.25 6.85483 20.0198 4.31098 18.0622 2.55886C17.7535 2.28261 17.7272 1.80847 18.0035 1.49982Z"
      fill="black"
    />
  </Svg>
);
export default SvgGlobus;
