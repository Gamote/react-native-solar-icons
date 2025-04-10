import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAtom = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.3}
      d="M16.4712 16.4711C21.4099 11.5324 23.4117 5.52701 20.9423 3.05768C18.473 0.588345 12.4676 2.59014 7.52899 7.5288C2.59033 12.4675 0.588547 18.4728 3.05787 20.9422C5.5272 23.4115 11.5326 21.4097 16.4712 16.4711Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.3}
      d="M7.52879 16.4712C2.59013 11.5325 0.588349 5.52715 3.05768 3.05782C5.527 0.588485 11.5324 2.59028 16.471 7.52894C21.4097 12.4676 23.4115 18.473 20.9421 20.9423C18.4728 23.4117 12.4674 21.4099 7.52879 16.4712Z"
      fill={props.primaryColor}
    />
    <Path
      d="M14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgAtom;
