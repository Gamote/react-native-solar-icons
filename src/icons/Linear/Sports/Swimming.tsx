import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSwimming = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M22 15.7723C20.4123 15.3982 19.5955 14.4791 18.9199 13.4569C18.4965 12.8163 17.5655 12.8553 17.1055 13.4701C16.0541 14.8757 14.4844 15.9999 12 15.9999C9.49345 15.9999 7.91806 14.5695 6.86651 13.2234C6.42721 12.6611 5.58617 12.6686 5.20168 13.2697C4.50078 14.3655 3.68402 15.3755 2 15.7723"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M22 20.7723C20.4123 20.3982 19.5955 19.4791 18.9199 18.4569C18.4965 17.8163 17.5655 17.8553 17.1055 18.4701C16.0541 19.8757 14.4844 20.9999 12 20.9999C9.49345 20.9999 7.91806 19.5695 6.86651 18.2234C6.42721 17.6611 5.58617 17.6686 5.20168 18.2697C4.50078 19.3655 3.68402 20.3755 2 20.7723"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4 11.5L7.47693 9.41382C8.27334 8.93597 8.4485 7.85657 7.84407 7.15139L6.85636 5.99906C6.37314 5.4353 6.40542 4.59455 6.93046 4.06952C7.51004 3.48994 8.45844 3.51955 9.00074 4.13415L15.5 11.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17 8C18.3807 8 19.5 6.88071 19.5 5.5C19.5 4.11929 18.3807 3 17 3C15.6193 3 14.5 4.11929 14.5 5.5C14.5 6.88071 15.6193 8 17 8Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgSwimming;
