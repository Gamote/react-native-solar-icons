import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSlashCircle = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM14.0184 7.3645C14.1257 6.9644 13.8882 6.55315 13.4881 6.44595C13.088 6.33874 12.6768 6.57618 12.5696 6.97628L9.98137 16.6355C9.87416 17.0356 10.1116 17.4469 10.5117 17.5541C10.9118 17.6613 11.323 17.4239 11.4303 17.0238L14.0184 7.3645Z"
      fill="black"
    />
  </Svg>
);
export default SvgSlashCircle;
