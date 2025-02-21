import * as React from "react";
import Svg, { Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDocumentsMinimalistic = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M10.75 2h2c2.828 0 4.243 0 5.121.879.879.878.879 2.293.879 5.121v8c0 2.828 0 4.243-.879 5.121-.878.879-2.293.879-5.121.879h-2c-2.828 0-4.243 0-5.121-.879-.879-.878-.879-2.293-.879-5.121V8c0-2.828 0-4.243.879-5.121C6.507 2 7.922 2 10.75 2M8 13a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6A.75.75 0 0 1 8 13m0-4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6A.75.75 0 0 1 8 9m0 8a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3A.75.75 0 0 1 8 17"
      clipRule="evenodd"
    />
    <G fill="#000" fillRule="evenodd" clipRule="evenodd" opacity={0.5}>
      <Path d="M1.75 4.25A.75.75 0 0 1 2.5 5v14A.75.75 0 0 1 1 19V5a.75.75 0 0 1 .75-.75M21.75 4.25a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75" />
    </G>
  </Svg>
);
export default SvgDocumentsMinimalistic;
