import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWomen = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle opacity={0.5} cx={12} cy={9} r={7} fill={props.primaryColor} />
    <Path
      d="M11.25 15.9604V17.7502H9.5C9.08579 17.7502 8.75 18.0859 8.75 18.5002C8.75 18.9144 9.08579 19.2502 9.5 19.2502H11.25V22.0002C11.25 22.4144 11.5858 22.7502 12 22.7502C12.4142 22.7502 12.75 22.4144 12.75 22.0002V19.2502H14.5C14.9142 19.2502 15.25 18.9144 15.25 18.5002C15.25 18.0859 14.9142 17.7502 14.5 17.7502L12.75 17.7502V15.9604C12.5036 15.9867 12.2534 16.0002 12 16.0002C11.7466 16.0002 11.4964 15.9867 11.25 15.9604Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgWomen;
