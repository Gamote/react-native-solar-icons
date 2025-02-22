import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTextItalicCircle = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
      fill={props.primaryColor}
    />
    <Path
      d="M10.6667 6.25019H13.3162C13.3273 6.24994 13.3384 6.24994 13.3495 6.25019H16C16.4142 6.25019 16.75 6.58597 16.75 7.00019C16.75 7.4144 16.4142 7.75019 16 7.75019H13.9095L11.6429 16.2502H13.3333C13.7475 16.2502 14.0833 16.586 14.0833 17.0002C14.0833 17.4144 13.7475 17.7502 13.3333 17.7502H10.6838C10.6727 17.7504 10.6616 17.7504 10.6505 17.7502H8C7.58579 17.7502 7.25 17.4144 7.25 17.0002C7.25 16.586 7.58579 16.2502 8 16.2502H10.0905L12.3571 7.75019H10.6667C10.2525 7.75019 9.91667 7.4144 9.91667 7.00019C9.91667 6.58597 10.2525 6.25019 10.6667 6.25019Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgTextItalicCircle;
