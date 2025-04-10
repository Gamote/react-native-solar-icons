import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTornado = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 6C16.9706 6 21 5.32843 21 4.5C21 3.97993 19.412 3.52168 17 3.25259M12 3C7.02944 3 3 3.67157 3 4.5C3 5.08895 5.03656 5.59863 8 5.84408"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M20 8C20 8 17.2089 9 11.7241 9C6.23938 9 4 8 4 8"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M16 14C16 14 14.7424 14.5 12 14.5C9.25762 14.5 8 14 8 14"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M13 17C11.6484 17 10.6575 16.8786 10 16.7554M16 16.5C15.6982 16.6031 15.3714 16.7045 15 16.7887"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M11.7188 19.4609C12.103 19.4853 12.5297 19.5 13.0002 19.5C13.5738 19.5 14.0662 19.456 14.5002 19.3857"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M18 11C18 11 17.4848 12 12 12M6 11C6 11 6.21904 11.4251 7.8918 11.721"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M13 22C13 22 13.3047 22 13.5 22"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgTornado;
