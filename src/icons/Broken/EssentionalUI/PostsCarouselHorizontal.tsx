import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPostsCarouselHorizontal = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M22 19H21.5C20.1193 19 19 17.8807 19 16.5L19 7.5C19 6.11929 20.1193 5 21.5 5L22 5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M2 19H2.5C3.88071 19 5 17.8807 5 16.5L5 7.5C5 6.11929 3.88071 5 2.5 5L2 5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M14.9998 5.12576C15.387 5.21006 15.6792 5.35074 15.914 5.58554C16.4998 6.17133 16.4998 7.11414 16.4998 8.99976L16.4998 14.9998C16.4998 16.8854 16.4998 17.8282 15.914 18.414C15.3282 18.9998 14.3854 18.9998 12.4998 18.9998L11.4998 18.9998C9.61414 18.9998 8.67133 18.9998 8.08554 18.414C7.49976 17.8282 7.49976 16.8854 7.49976 14.9998L7.49976 8.99976C7.49976 7.11414 7.49976 6.17133 8.08554 5.58554C8.61709 5.054 9.4426 5.00478 10.9998 5.00022"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgPostsCarouselHorizontal;
