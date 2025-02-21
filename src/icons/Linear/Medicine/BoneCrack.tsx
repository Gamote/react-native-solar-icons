import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBoneCrack = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M14.1375 2.73779C13.3942 3.48102 13.0092 4.77646 13.2896 5.7897C13.438 6.32603 13.4622 6.97541 13.0687 7.3689L7.36893 13.0687C6.97544 13.4622 6.32606 13.438 5.78973 13.2895C4.77649 13.0092 3.48105 13.3942 2.73782 14.1374C1.7541 15.1212 1.7541 16.7161 2.73782 17.6998C3.72155 18.6835 5.31649 18.6835 6.30021 17.6998C5.31649 18.6835 5.31649 20.2785 6.30021 21.2622C7.28394 22.2459 8.87887 22.2459 9.8626 21.2622C10.6058 20.519 10.9909 19.2235 10.7105 18.2103C10.5621 17.674 10.5378 17.0246 10.9313 16.6311L16.6311 10.9313C17.0246 10.5378 17.674 10.562 18.2103 10.7105C19.2236 10.9908 20.519 10.6058 21.2622 9.86257C22.246 8.87884 22.246 7.28391 21.2622 6.30018C20.2785 5.31645 18.6836 5.31646 17.6999 6.30018C18.6836 5.31646 18.6836 3.72152 17.6998 2.73779C16.7161 1.75407 15.1212 1.75407 14.1375 2.73779Z"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.2322 10.2322V12.3535L12.3536 11.6464V13.0606L14.9997 12.4999"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgBoneCrack;
