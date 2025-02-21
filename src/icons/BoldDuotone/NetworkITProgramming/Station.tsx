import * as React from "react";
import Svg, { Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStation = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.8326 10.6241C10.3284 10.261 10.0001 9.66883 10.0001 9C10.0001 7.89543 10.8955 7 12.0001 7C13.1047 7 14.0001 7.89543 14.0001 9C14.0001 9.66883 13.6718 10.261 13.1675 10.6241L16.7148 21.7726C16.8232 22.1134 16.676 22.4833 16.363 22.6563C16.0501 22.8294 15.6585 22.7574 15.4276 22.4845L12.0001 18.4338L8.57263 22.4845C8.34165 22.7574 7.95006 22.8294 7.63713 22.6563C7.3242 22.4833 7.17697 22.1134 7.2854 21.7726L10.8326 10.6241ZM12.9826 17.2727L14.1466 18.6485L13.5104 16.6489L12.9826 17.2727ZM12.9746 14.9648C12.9583 14.9809 12.9426 14.9978 12.9276 15.0155L12.0001 16.1116L11.0726 15.0155C11.0576 14.9978 11.0419 14.9809 11.0256 14.9648L12.0001 11.9022L12.9746 14.9648ZM10.4898 16.6489L11.0176 17.2727L9.85354 18.6485L10.4898 16.6489Z"
      fill={props.primaryColor}
    />
    <G opacity={0.4}>
      <Path
        d="M5.46583 2.53086C5.75902 2.23826 5.75949 1.76338 5.46689 1.4702C5.17429 1.17701 4.69941 1.17654 4.40623 1.46914C2.45721 3.41428 1.25 6.10595 1.25 9.07816C1.25 12.0852 2.48564 14.805 4.47497 16.7552C4.77076 17.0451 5.24561 17.0404 5.53557 16.7446C5.82554 16.4488 5.82082 15.974 5.52503 15.684C3.81163 14.0043 2.75 11.6659 2.75 9.07816C2.75 6.5203 3.78722 4.20612 5.46583 2.53086Z"
        fill={props.primaryColor}
      />
      <Path
        d="M19.677 1.55312C19.387 1.25733 18.9122 1.25262 18.6164 1.54258C18.3206 1.83255 18.3159 2.3074 18.6059 2.60319C20.2422 4.27243 21.25 6.55686 21.25 9.07816C21.25 11.6293 20.2182 13.9381 18.5473 15.6123C18.2547 15.9055 18.2552 16.3804 18.5484 16.673C18.8415 16.9656 19.3164 16.9651 19.609 16.6719C21.5491 14.728 22.75 12.0426 22.75 9.07816C22.75 6.14855 21.5771 3.49139 19.677 1.55312Z"
        fill={props.primaryColor}
      />
    </G>
    <G opacity={0.7}>
      <Path
        d="M8.27408 5.62574C8.57652 5.34272 8.59226 4.86811 8.30923 4.56567C8.02621 4.26323 7.5516 4.24749 7.24916 4.53051C6.02148 5.67937 5.25 7.28109 5.25 9.06033C5.25 10.8605 6.03967 12.4787 7.29244 13.6303C7.59739 13.9106 8.07185 13.8906 8.35216 13.5857C8.63248 13.2807 8.61251 12.8063 8.30756 12.526C7.33869 11.6354 6.75 10.4078 6.75 9.06033C6.75 7.72833 7.32517 6.51373 8.27408 5.62574Z"
        fill={props.primaryColor}
      />
      <Path
        d="M16.8033 4.58011C16.5039 4.2938 16.0292 4.30436 15.7429 4.60369C15.4566 4.90302 15.4671 5.37778 15.7664 5.66409C16.6911 6.54855 17.25 7.74727 17.25 9.06033C17.25 10.3889 16.6778 11.6006 15.7333 12.488C15.4315 12.7716 15.4167 13.2462 15.7003 13.5481C15.9839 13.85 16.4586 13.8648 16.7604 13.5811C17.9825 12.4329 18.75 10.8349 18.75 9.06033C18.75 7.30668 18.0005 5.72524 16.8033 4.58011Z"
        fill={props.primaryColor}
      />
    </G>
  </Svg>
);
export default SvgStation;
