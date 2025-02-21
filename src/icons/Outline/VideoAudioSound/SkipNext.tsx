import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSkipNext = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.27769 1.7555C5.1348 1.01747 3.83955 1.13428 2.86078 1.80371C1.89423 2.46477 1.25 3.64507 1.25 5.03297V18.9672C1.25 20.3551 1.89423 21.5354 2.86078 22.1965C3.83956 22.8659 5.1348 22.9827 6.2777 22.2447L17.0667 15.2775C18.217 14.5347 18.75 13.2342 18.75 12.0001C18.75 10.7659 18.217 9.46544 17.0667 8.72261L6.27769 1.7555ZM2.75 5.03297C2.75 4.11167 3.17287 3.40753 3.70757 3.04182C4.23005 2.68448 4.87022 2.63219 5.46397 3.0156L16.253 9.98271C16.8895 10.3938 17.25 11.1637 17.25 12.0001C17.25 12.8364 16.8895 13.6064 16.253 14.0174L5.46397 20.9846C4.87023 21.368 4.23005 21.3157 3.70758 20.9583C3.17287 20.5926 2.75 19.8885 2.75 18.9672L2.75 5.03297Z"
      fill="black"
    />
    <Path
      d="M22.75 5.00008C22.75 4.58586 22.4142 4.25008 22 4.25008C21.5858 4.25008 21.25 4.58586 21.25 5.00008V19.0001C21.25 19.4143 21.5858 19.7501 22 19.7501C22.4142 19.7501 22.75 19.4143 22.75 19.0001V5.00008Z"
      fill="black"
    />
  </Svg>
);
export default SvgSkipNext;
