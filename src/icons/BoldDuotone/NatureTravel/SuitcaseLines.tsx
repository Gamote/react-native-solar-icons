import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSuitcaseLines = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12.052 1.25H11.948C11.0495 1.24997 10.3003 1.24995 9.70552 1.32991C9.07773 1.41432 8.51093 1.59999 8.05546 2.05546C7.59999 2.51093 7.41432 3.07773 7.32991 3.70552C7.24995 4.3003 7.24997 5.0495 7.25 5.94797L7.25 6.02572C7.70703 6.01076 8.20535 6.00451 8.75 6.00189V6C8.75 5.03599 8.7516 4.38843 8.81654 3.9054C8.87858 3.44393 8.9858 3.24644 9.11612 3.11612C9.24644 2.9858 9.44393 2.87858 9.9054 2.81654C10.3884 2.7516 11.036 2.75 12 2.75C12.964 2.75 13.6116 2.7516 14.0946 2.81654C14.5561 2.87858 14.7536 2.9858 14.8839 3.11612C15.0142 3.24644 15.1214 3.44393 15.1835 3.9054C15.2484 4.38843 15.25 5.03599 15.25 6V6.00189C15.7947 6.00451 16.293 6.01076 16.75 6.02572V5.94801C16.75 5.04954 16.7501 4.3003 16.6701 3.70552C16.5857 3.07773 16.4 2.51093 15.9445 2.05546C15.4891 1.59999 14.9223 1.41432 14.2945 1.32991C13.6997 1.24995 12.9505 1.24997 12.052 1.25Z"
      fill="black"
    />
    <Path
      opacity={0.5}
      d="M2 14C2 10.2288 2 8.34315 3.17157 7.17157C4.34315 6 6.22876 6 10 6H14C17.7712 6 19.6569 6 20.8284 7.17157C22 8.34315 22 10.2288 22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14Z"
      fill="black"
    />
    <Path
      d="M2.07929 17.75C2.04331 17.3007 2.02367 16.8031 2.01294 16.25L21.9871 16.25C21.9764 16.8031 21.9568 17.3007 21.9208 17.75L2.07929 17.75Z"
      fill="black"
    />
    <Path
      d="M21.9208 10.25C21.9568 10.6993 21.9764 11.1969 21.9871 11.75L2.01294 11.75C2.02367 11.1969 2.04331 10.6993 2.07929 10.25H21.9208Z"
      fill="black"
    />
  </Svg>
);
export default SvgSuitcaseLines;
