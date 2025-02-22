import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTornadoSmall = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 8C16.9706 8 21 7.32843 21 6.5C21 5.97993 19.412 5.52168 17 5.25259M12 5C7.02944 5 3 5.67157 3 6.5C3 7.08895 5.03656 7.59863 8 7.84408"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M20 10C20 10 17.2089 11 11.7241 11C6.23938 11 4 10 4 10"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M16 16C16 16 14.7424 16.5 12 16.5C9.25762 16.5 8 16 8 16"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M13 19C11.6484 19 10.6575 18.8786 10 18.7554M16 18.5C15.6982 18.6031 15.3714 18.7045 15 18.7887"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M18 13C18 13 17.4848 14 12 14M6 13C6 13 6.21904 13.4251 7.8918 13.721"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgTornadoSmall;
