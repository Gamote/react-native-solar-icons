import * as React from "react";
import Svg, { Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCassette2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M13.228 8H10.772C9.43116 8 8.76073 8 8.24681 7.64385C7.73289 7.2877 7.49749 6.65997 7.02669 5.40449L6.5 4H17.5L16.9733 5.40449C16.5025 6.65997 16.2671 7.2877 15.7532 7.64385C15.2393 8 14.5688 8 13.228 8Z"
      fill={props.primaryColor}
    />
    <G opacity={0.5}>
      <Path
        d="M13.5 13.75C13.5 14.9926 14.5074 16 15.75 16C16.9926 16 18 14.9926 18 13.75C18 12.5074 16.9926 11.5 15.75 11.5C14.5074 11.5 13.5 12.5074 13.5 13.75Z"
        fill={props.primaryColor}
      />
      <Path
        d="M6 13.75C6 14.9926 7.00736 16 8.25 16C9.49264 16 10.5 14.9926 10.5 13.75C10.5 12.5074 9.49264 11.5 8.25 11.5C7.00736 11.5 6 12.5074 6 13.75Z"
        fill={props.primaryColor}
      />
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C22 17.6569 22 15.7712 22 12C22 8.22876 22 6.34315 20.8284 5.17157C20.0914 4.4345 19.0717 4.16114 17.4776 4.05976L16.9733 5.40449C16.5025 6.65997 16.2671 7.2877 15.7532 7.64385C15.2393 8 14.5688 8 13.228 8H10.772C9.43116 8 8.76073 8 8.24681 7.64385C7.73289 7.2877 7.49749 6.65996 7.02669 5.40449L6.52241 4.05976C4.92835 4.16114 3.90865 4.4345 3.17157 5.17157ZM15.75 16.0002C15.7401 16.0002 15.7599 16.0003 15.75 16.0002C16.9926 16.0002 18 14.9928 18 13.7502C18 12.5076 16.9926 11.5002 15.75 11.5002L8.25 11.5C7.00736 11.5 6 12.5076 6 13.7502C6 14.9928 7.00736 16.0002 8.25 16.0002C8.24012 16.0003 8.25991 16.0002 8.25 16.0002H15.75Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgCassette2;
