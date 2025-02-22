import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBenzeneRing = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M7.02073 6.63792C6.03454 7.22412 5.54145 7.51723 5.27073 8C5 8.48277 5 9.06898 5 10.2414V13.7586C5 14.931 5 15.5172 5.27073 16C5.54145 16.4828 6.03454 16.7759 7.02073 17.3621L9.97927 19.1207C10.9655 19.7069 11.4585 20 12 20C12.5415 20 13.0345 19.7069 14.0207 19.1207L16.9793 17.3621C17.9655 16.7759 18.4585 16.4828 18.7293 16C18.9807 15.5516 18.9986 15.0139 18.9999 14M9.97927 4.87931C10.9655 4.2931 11.4585 4 12 4C12.5415 4 13.0345 4.2931 14.0207 4.87931L16.9793 6.63792C17.9655 7.22412 18.4585 7.51723 18.7293 8C18.9808 8.44845 18.9986 8.98615 18.9999 10.0001"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M5 8L2 6"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19 8L22 6"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5 16L2 18"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 16.8841L16 14.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgBenzeneRing;
