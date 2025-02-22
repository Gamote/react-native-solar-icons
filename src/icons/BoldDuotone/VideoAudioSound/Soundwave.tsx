import * as React from "react";
import Svg, { Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSoundwave = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 3.25C12.4142 3.25 12.75 3.58579 12.75 4L12.75 20C12.75 20.4142 12.4142 20.75 12 20.75C11.5858 20.75 11.25 20.4142 11.25 20L11.25 4C11.25 3.58579 11.5858 3.25 12 3.25ZM4 10.25C4.41421 10.25 4.75 10.5858 4.75 11L4.75 13C4.75 13.4142 4.41421 13.75 4 13.75C3.58579 13.75 3.25 13.4142 3.25 13L3.25 11C3.25 10.5858 3.58579 10.25 4 10.25ZM20 10.25C20.4142 10.25 20.75 10.5858 20.75 11V13C20.75 13.4142 20.4142 13.75 20 13.75C19.5858 13.75 19.25 13.4142 19.25 13V11C19.25 10.5858 19.5858 10.25 20 10.25Z"
      fill={props.primaryColor}
    />
    <G opacity={0.5}>
      <Path
        d="M16.75 7C16.75 6.58579 16.4142 6.25 16 6.25C15.5858 6.25 15.25 6.58579 15.25 7V17C15.25 17.4142 15.5858 17.75 16 17.75C16.4142 17.75 16.75 17.4142 16.75 17V7Z"
        fill={props.primaryColor}
      />
      <Path
        d="M8.75 7C8.75 6.58579 8.41421 6.25 8 6.25C7.58579 6.25 7.25 6.58579 7.25 7V17C7.25 17.4142 7.58579 17.75 8 17.75C8.41421 17.75 8.75 17.4142 8.75 17V7Z"
        fill={props.primaryColor}
      />
    </G>
  </Svg>
);
export default SvgSoundwave;
