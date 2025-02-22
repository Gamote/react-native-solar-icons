import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRadio = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M2 14C2 10.2288 2 8.34315 3.17157 7.17157C4.34315 6 6.22876 6 10 6H14C17.7712 6 19.6569 6 20.8284 7.17157C22 8.34315 22 10.2288 22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 16.25C7.08579 16.25 6.75 16.5858 6.75 17C6.75 17.4142 7.08579 17.75 7.5 17.75C7.91421 17.75 8.25 17.4142 8.25 17C8.25 16.5858 7.91421 16.25 7.5 16.25ZM5.25 17C5.25 15.7574 6.25736 14.75 7.5 14.75C8.74264 14.75 9.75 15.7574 9.75 17C9.75 18.2426 8.74264 19.25 7.5 19.25C6.25736 19.25 5.25 18.2426 5.25 17Z"
      fill={props.primaryColor}
    />
    <Path
      d="M7 9C5.89543 9 5 9.89543 5 11C5 12.1046 5.89543 13 7 13H14.25V11.5C14.25 11.0858 14.5858 10.75 15 10.75C15.4142 10.75 15.75 11.0858 15.75 11.5V13H17C18.1046 13 19 12.1046 19 11C19 9.89543 18.1046 9 17 9H7Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.25 17C12.25 16.5858 12.5858 16.25 13 16.25H18C18.4142 16.25 18.75 16.5858 18.75 17C18.75 17.4142 18.4142 17.75 18 17.75H13C12.5858 17.75 12.25 17.4142 12.25 17Z"
      fill={props.primaryColor}
    />
    <Path
      d="M15.3641 2.65575C15.7262 2.45459 15.8567 1.99799 15.6555 1.6359C15.4543 1.27382 14.9977 1.14336 14.6357 1.34452L6.08789 6.09328C6.96396 6.01308 8.02944 6.00194 9.34378 6.00039L15.3641 2.65575Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgRadio;
