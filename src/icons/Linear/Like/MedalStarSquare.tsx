import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMedalStarSquare = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M17 6c0-1.886 0-2.828-.586-3.414S14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586S7 4.114 7 6M11.146 11.023c.38-.682.57-1.023.854-1.023s.474.34.854 1.023l.098.176c.108.194.162.29.246.354.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135s-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303s-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135.084-.064.138-.16.246-.354z"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M14 6h-4c-2.828 0-4.243 0-5.121.879C4 7.757 4 9.172 4 12v1.056c0 2.405 0 3.608.597 4.575.598.966 1.674 1.504 3.825 2.58 1.756.878 2.634 1.317 3.578 1.317s1.822-.439 3.578-1.317c2.151-1.076 3.227-1.614 3.825-2.58.597-.967.597-2.17.597-4.575V12c0-2.828 0-4.243-.879-5.121C18.243 6 16.828 6 14 6Z"
    />
  </Svg>
);
export default SvgMedalStarSquare;
