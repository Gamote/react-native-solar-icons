import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFog = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M8 21.25C7.58579 21.25 7.25 21.5858 7.25 22C7.25 22.4142 7.58579 22.75 8 22.75H16C16.4142 22.75 16.75 22.4142 16.75 22C16.75 21.5858 16.4142 21.25 16 21.25H8Z"
      fill="black"
    />
    <Path
      opacity={0.5}
      d="M12.4762 2C9.32028 2 6.7619 4.52827 6.7619 7.64706C6.7619 8.33687 6.88706 8.9978 7.11616 9.60887C6.8475 9.55673 6.56983 9.52941 6.28571 9.52941C3.91878 9.52941 2 11.4256 2 13.7647C2 14.2873 2.09578 14.7878 2.27095 15.25H21.1917C21.705 14.403 22 13.412 22 12.3529C22 9.88113 20.393 7.78024 18.1551 7.01498C17.8371 4.19371 15.4159 2 12.4762 2Z"
      fill="black"
    />
    <Path
      d="M2 15.249C1.58579 15.249 1.25 15.5848 1.25 15.999C1.25 16.4132 1.58579 16.749 2 16.749L22 16.7488C22.4142 16.7488 22.75 16.413 22.75 15.9988C22.75 15.5846 22.4142 15.2488 22 15.2488L2 15.249Z"
      fill="black"
    />
    <Path
      opacity={0.5}
      d="M5 18.25C4.58579 18.25 4.25 18.5858 4.25 19C4.25 19.4142 4.58579 19.75 5 19.75H19C19.4142 19.75 19.75 19.4142 19.75 19C19.75 18.5858 19.4142 18.25 19 18.25H5Z"
      fill="black"
    />
  </Svg>
);
export default SvgFog;
