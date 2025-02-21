import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTextItalic = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.9826 1.2502H9C8.58579 1.2502 8.25 1.58598 8.25 2.0002C8.25 2.41441 8.58579 2.7502 9 2.7502H13.992L8.44198 21.2502H3C2.58579 21.2502 2.25 21.586 2.25 22.0002C2.25 22.4144 2.58579 22.7502 3 22.7502H8.98314C8.9946 22.7505 9.00604 22.7505 9.01744 22.7502H15C15.4142 22.7502 15.75 22.4144 15.75 22.0002C15.75 21.586 15.4142 21.2502 15 21.2502H10.008L15.558 2.7502H21C21.4142 2.7502 21.75 2.41441 21.75 2.0002C21.75 1.58598 21.4142 1.2502 21 1.2502H15.0169C15.0054 1.24993 14.994 1.24993 14.9826 1.2502Z"
      fill="black"
    />
  </Svg>
);
export default SvgTextItalic;
