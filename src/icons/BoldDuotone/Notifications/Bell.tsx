import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBell = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M18.7491 9V9.7041C18.7491 10.5491 18.9903 11.3752 19.4422 12.0782L20.5496 13.8012C21.5612 15.3749 20.789 17.5139 19.0296 18.0116C14.4273 19.3134 9.57274 19.3134 4.97036 18.0116C3.21105 17.5139 2.43882 15.3749 3.45036 13.8012L4.5578 12.0782C5.00972 11.3752 5.25087 10.5491 5.25087 9.7041V9C5.25087 5.13401 8.27256 2 12 2C15.7274 2 18.7491 5.13401 18.7491 9Z"
      fill={props.primaryColor}
    />
    <Path
      d="M7.24341 18.5449C7.89435 20.5501 9.77792 21.9997 12.0001 21.9997C14.2222 21.9997 16.1058 20.5501 16.7567 18.5449C13.6113 19.1352 10.3888 19.1352 7.24341 18.5449Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgBell;
