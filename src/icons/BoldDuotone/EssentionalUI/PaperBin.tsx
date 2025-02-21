import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPaperBin = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M3.03365 8.89004C2.55311 5.68645 2.31285 4.08466 3.21049 3.04233C4.10813 2 5.72784 2 8.96727 2H15.033C18.2724 2 19.8922 2 20.7898 3.04233C21.6874 4.08466 21.4472 5.68646 20.9666 8.89004L19.7666 16.89C19.401 19.3276 19.2182 20.5464 18.3743 21.2732C17.5303 22 16.2979 22 13.833 22H10.1673C7.7024 22 6.46997 22 5.62604 21.2732C4.78211 20.5464 4.59929 19.3276 4.23365 16.89L3.03365 8.89004Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.51749 12.1152L3.22748 10.1817L5.07185 8.13244L3.68941 6.75H2.72976C2.66028 6.18322 2.61559 5.68747 2.60669 5.25H21.3937C21.3848 5.68747 21.3402 6.18322 21.2707 6.75H20.3107L18.9283 8.13244L20.7729 10.182L20.483 12.1148L18.8826 13.8219L20.0516 14.9909L19.7749 16.8355L17.8562 14.9168L15.9794 16.9187L17.3107 18.25H19.5563C19.4584 18.8397 19.3613 19.3331 19.2423 19.75H4.75815C4.63908 19.3331 4.54202 18.8397 4.44418 18.25H6.68941L8.02076 16.9187L6.14398 14.9168L4.2255 16.8352L3.94881 14.9906L5.11753 13.8219L3.51749 12.1152ZM6.07669 7.01596L5.81073 6.75H6.31605L6.07669 7.01596ZM7.13881 8.07809L8.33409 6.75H9.68941L10.9394 8L9.00007 9.93934L7.13881 8.07809ZM12.0001 6.93934L11.8107 6.75H12.1894L12.0001 6.93934ZM13.0607 8L14.3107 6.75H15.666L16.8613 8.07809L15.0001 9.93934L13.0607 8ZM17.9235 7.01596L17.6841 6.75H18.1894L17.9235 7.01596ZM16.0607 11L17.8662 9.19457L19.4817 10.9896L17.8214 12.7607L16.0607 11ZM15.0001 12.0607L16.795 13.8555L14.9182 15.8574L13.0607 14L15.0001 12.0607ZM12.0001 15.0607L13.8917 16.9523L12.6751 18.25H11.325L10.1084 16.9523L12.0001 15.0607ZM15.1894 18.25H14.7312L14.9529 18.0135L15.1894 18.25ZM9.0472 18.0135L9.26889 18.25H8.81073L9.0472 18.0135ZM10.9394 14L9.08197 15.8574L7.20519 13.8555L9.00007 12.0607L10.9394 14ZM7.93941 11L6.17874 12.7607L4.51841 10.9896L6.13398 9.19457L7.93941 11ZM12.0001 12.9393L10.0607 11L12.0001 9.06066L13.9394 11L12.0001 12.9393Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgPaperBin;
