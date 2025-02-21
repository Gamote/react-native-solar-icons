import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMapArrowRight = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.98744 2.95325C2.67201 2.29971 3.75513 2.01313 4.80282 2.48035L21.3125 9.84285C23.229 10.6975 23.229 13.3032 21.3125 14.1579L4.80282 21.5204C3.75513 21.9876 2.67201 21.701 1.98744 21.0475C1.2971 20.3884 0.978305 19.3122 1.52928 18.2802L4.68131 12.3765L5.34291 12.7298L4.68131 12.3765C4.8086 12.1381 4.8086 11.8626 4.68131 11.6242L1.52928 5.72049C0.978304 4.68853 1.2971 3.6123 1.98744 2.95325ZM3.02323 4.03821C2.74905 4.29996 2.66253 4.65823 2.85249 5.01402L2.19088 5.36725L2.85249 5.01402L6.00452 10.9177C6.36753 11.5976 6.36753 12.4031 6.00452 13.083L2.85249 18.9867C2.66253 19.3425 2.74905 19.7008 3.02323 19.9625C3.30317 20.2298 3.74374 20.3503 4.19189 20.1504L20.7016 12.7879C21.4326 12.4619 21.4327 11.5388 20.7016 11.2128L4.19189 3.8503C3.74374 3.65045 3.30317 3.77096 3.02323 4.03821Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgMapArrowRight;
