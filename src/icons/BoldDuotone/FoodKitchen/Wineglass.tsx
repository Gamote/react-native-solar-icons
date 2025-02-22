import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWineglass = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M5 4.89474C5 3.8483 5.8483 3 6.89474 3H17.1053C18.1517 3 19 3.8483 19 4.89474V8C19 11.866 15.866 15 12 15C8.13401 15 5 11.866 5 8V4.89474Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.25 20.25H8.25C7.83579 20.25 7.5 20.5858 7.5 21C7.5 21.4142 7.83579 21.75 8.25 21.75H15.75C16.1642 21.75 16.5 21.4142 16.5 21C16.5 20.5858 16.1642 20.25 15.75 20.25H12.75H11.25Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 15C15.5162 15 18.4268 12.4075 18.9248 9.02973C18.5226 9.1868 16.5932 9.91562 15.2308 9.99288C13.9033 10.0681 12.9517 9.53407 12 9C11.0483 8.46593 10.0967 7.93185 8.76923 8.00712C7.39748 8.08491 5.45088 8.82324 5.06714 8.97342C5.54089 12.3787 8.46432 15 12 15Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M12.75 14.9605C12.5037 14.9867 12.2535 15.0002 12.0002 15.0002C11.7468 15.0002 11.4965 14.9867 11.25 14.9604V20.2501H12.75V14.9605Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgWineglass;
