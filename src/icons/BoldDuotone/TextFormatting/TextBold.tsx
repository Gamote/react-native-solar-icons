import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTextBold = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 4.6087C4 2.61567 5.61567 1 7.6087 1H12C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13H4V4.6087ZM7.6087 3C6.72024 3 6 3.72024 6 4.6087V11H12C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3H7.6087Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M4 12.9998V19.941C4 21.6303 5.36948 22.9998 7.05882 22.9998H14C17.3137 22.9998 20 20.3135 20 16.9998C20 14.4257 18.3791 12.2303 16.1022 11.3784C15.0293 12.384 13.5866 12.9998 12 12.9998H14C16.2091 12.9998 18 14.7907 18 16.9998C18 19.209 16.2091 20.9998 14 20.9998H7.05882C6.47405 20.9998 6 20.5258 6 19.941V12.9998H4Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgTextBold;
