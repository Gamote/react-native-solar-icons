import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSmartSpeaker = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M3 14.0497C3.65349 14.6194 5.48704 16.0839 10 16.4272M21 14C20.3975 14.5537 18.6386 16.0763 14.0106 16.4272"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M15.5 16C14.9178 14.2522 13.8467 13.5 12 13.5C10.1533 13.5 9.08225 14.2522 8.5 16"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M8 4.41146C7.67967 4.68689 7.5 5.08468 7.5 5.41146C7.5 6.56493 9.23858 7.41146 12 7.41146C14.7614 7.41146 16.5 6.56493 16.5 5.41146C16.5 5.08468 16.3203 4.77543 16 4.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M21 12C21.0013 13.7425 20.9053 15.4852 20.712 17.2199L20.6948 17.3739C20.4473 19.5951 18.7041 21.357 16.48 21.6342L15.5738 21.7471C15.079 21.8088 14.8316 21.8396 14.5845 21.8654C12.866 22.0449 11.1335 22.0449 9.41505 21.8654C9.16792 21.8396 8.92051 21.8088 8.42569 21.7471L7.41019 21.6206C5.24868 21.3512 3.55266 19.6422 3.30532 17.4844C2.89823 13.9329 2.89823 10.3467 3.30532 6.79516L3.32102 6.65818C3.56225 4.55367 5.15124 2.85176 7.23936 2.4614L7.4544 2.4212C10.4585 1.8596 13.541 1.8596 16.5451 2.42119L16.8681 2.48157C18.8934 2.86019 20.4367 4.50764 20.6774 6.54809C20.7345 7.03145 20.7839 7.51548 20.8258 8"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgSmartSpeaker;
