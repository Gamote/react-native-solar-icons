import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCassette = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      opacity={0.5}
      d="M13.5 13.75C13.5 12.5074 14.5074 11.5 15.75 11.5C16.9926 11.5 18 12.5074 18 13.75C18 14.9926 16.9926 16 15.75 16C14.5074 16 13.5 14.9926 13.5 13.75Z"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      opacity={0.5}
      d="M6 13.75C6 12.5074 7.00736 11.5 8.25 11.5C9.49264 11.5 10.5 12.5074 10.5 13.75C10.5 14.9926 9.49264 16 8.25 16C7.00736 16 6 14.9926 6 13.75Z"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      d="M17.5 4.5L16.9733 5.90449C16.5025 7.15997 16.2671 7.7877 15.7532 8.14385C15.2393 8.5 14.5688 8.5 13.228 8.5H10.772C9.43116 8.5 8.76073 8.5 8.24681 8.14385C7.73289 7.7877 7.49749 7.15997 7.02669 5.90449L6.5 4.5"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.5}
      d="M12 4V8.5"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgCassette;
