import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTextItalicCircle = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M10.6667 6.25H13.3162C13.3273 6.24975 13.3384 6.24975 13.3495 6.25H16C16.4142 6.25 16.75 6.58579 16.75 7C16.75 7.41421 16.4142 7.75 16 7.75H13.9095L11.6429 16.25H13.3333C13.7475 16.25 14.0833 16.5858 14.0833 17C14.0833 17.4142 13.7475 17.75 13.3333 17.75H10.6838C10.6727 17.7502 10.6616 17.7502 10.6505 17.75H8C7.58579 17.75 7.25 17.4142 7.25 17C7.25 16.5858 7.58579 16.25 8 16.25H10.0905L12.3571 7.75H10.6667C10.2525 7.75 9.91667 7.41421 9.91667 7C9.91667 6.58579 10.2525 6.25 10.6667 6.25Z"
      fill="black"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z"
      fill="black"
    />
  </Svg>
);
export default SvgTextItalicCircle;
