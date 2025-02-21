import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStickerSquare = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M22 15C21.4162 15 20.9239 15 20.5 15.0076C19.5724 15.0241 18.9718 15.0768 18.4549 15.2447C16.9327 15.7393 15.7393 16.9327 15.2447 18.4549C15.0768 18.9718 15.0241 19.5724 15.0076 20.5C15 20.9239 15 21.4162 15 22C15.4827 22 15.954 21.9511 16.4092 21.8581L16.4107 21.8578L16.4582 21.8479L16.4617 21.8472L16.5 21.8389C19.162 21.2577 21.2577 19.162 21.8389 16.5C21.9444 16.0168 22 15.5149 22 15Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28596 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28596 22 12C22 13.1283 22 14.1217 21.9799 15C21.4049 15 20.9191 15.0001 20.5 15.0076C19.5724 15.0241 18.9718 15.0768 18.4549 15.2447C16.9327 15.7393 15.7393 16.9327 15.2447 18.4549C15.0768 18.9718 15.0241 19.5724 15.0076 20.5C15.0001 20.9191 15 21.4049 15 21.9799C14.1217 22 13.1283 22 12 22Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgStickerSquare;
