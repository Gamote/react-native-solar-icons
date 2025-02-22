import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTextItalic = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 0.999775H14.9768C14.992 0.999425 15.0072 0.999423 15.0225 0.999775H21C21.5523 0.999775 22 1.44749 22 1.99977C22 2.55206 21.5523 2.99977 21 2.99977H15.744H13.656H9C8.44772 2.99977 8 2.55206 8 1.99977C8 1.44749 8.44772 0.999775 9 0.999775ZM8.25597 20.9998H3C2.44772 20.9998 2 21.4475 2 21.9998C2 22.5521 2.44772 22.9998 3 22.9998H8.97753C8.99281 23.0001 9.00805 23.0001 9.02325 22.9998H15C15.5523 22.9998 16 22.5521 16 21.9998C16 21.4475 15.5523 20.9998 15 20.9998H10.344H8.25597Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M13.6559 3L8.25586 21H10.3439L15.7439 3H13.6559Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgTextItalic;
