import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRadar2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13.3584 6.93033C12.604 6.72817 11.8458 6.70116 11.1255 6.82338C10.7171 6.89267 10.3299 6.61779 10.2606 6.20941C10.1913 5.80103 10.4662 5.41381 10.8745 5.34452C11.8033 5.18693 12.7796 5.22232 13.7466 5.48144C17.3467 6.44608 19.4832 10.1465 18.5186 13.7466C17.5539 17.3467 13.8535 19.4832 10.2534 18.5186C6.65325 17.5539 4.51679 13.8535 5.48144 10.2534C5.67232 9.54098 5.97096 8.8846 6.35561 8.29795C6.80849 7.60723 7.71251 7.56491 8.27405 8.01941L12.4718 11.417C12.7938 11.6776 12.8436 12.1499 12.583 12.4718C12.3224 12.7938 11.8501 12.8436 11.5282 12.583L9.39091 10.8531C9.2365 11.2038 9.15089 11.5916 9.15089 12C9.15089 13.5735 10.4265 14.8491 12 14.8491C13.5735 14.8491 14.8491 13.5735 14.8491 12C14.8491 10.4265 13.5735 9.15089 12 9.15089C11.5858 9.15089 11.25 8.81511 11.25 8.40089C11.25 7.98668 11.5858 7.65089 12 7.65089C14.4019 7.65089 16.3491 9.59805 16.3491 12C16.3491 14.4019 14.4019 16.3491 12 16.3491C9.59805 16.3491 7.65089 14.4019 7.65089 12C7.65089 11.2339 7.8495 10.5131 8.19774 9.8874L7.48915 9.31389C7.2486 9.7184 7.0586 10.1629 6.93033 10.6416C6.1801 13.4415 7.84168 16.3194 10.6416 17.0697C13.4415 17.8199 16.3194 16.1583 17.0697 13.3584C17.8199 10.5585 16.1583 7.68056 13.3584 6.93033Z"
      fill="black"
    />
  </Svg>
);
export default SvgRadar2;
