import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSliderMinimalisticHorizontal = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.25 2.76923C20.25 3.19407 19.9142 3.53846 19.5 3.53846L4.5 3.53846C4.08579 3.53846 3.75 3.19406 3.75 2.76923C3.75 2.3444 4.08579 2 4.5 2L19.5 2C19.9142 2 20.25 2.3444 20.25 2.76923ZM20.25 21.2308C20.25 21.6556 19.9142 22 19.5 22L4.5 22C4.08579 22 3.75 21.6556 3.75 21.2308C3.75 20.8059 4.08579 20.4615 4.5 20.4615L19.5 20.4615C19.9142 20.4615 20.25 20.8059 20.25 21.2308Z"
      fill={props.primaryColor}
    />
    <Path
      d="M16 5.84619C18.8284 5.84619 20.2426 5.84619 21.1213 6.7474C22 7.64861 22 9.09909 22 12C22 14.901 22 16.3515 21.1213 17.2527C20.2426 18.1539 18.8284 18.1539 16 18.1539L8 18.1539C5.17157 18.1539 3.75736 18.1539 2.87868 17.2527C2 16.3515 2 14.901 2 12C2 9.09909 2 7.64861 2.87868 6.7474C3.75736 5.84619 5.17157 5.84619 8 5.84619L16 5.84619Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgSliderMinimalisticHorizontal;
