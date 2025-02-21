import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPhoneRounded = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.6866 6.4791L10.0376 5.31617C9.15317 3.73144 6.93076 3.54428 5.53781 4.93723C4.7008 5.77423 4.04952 6.7996 4.00655 7.93309C3.95086 9.40215 4.22428 11.6609 5.83644 14.1061L10.1147 9.8278C11.0372 8.90533 11.2723 7.52858 10.6866 6.4791ZM14.1722 13.8853L9.89393 18.1636C12.3391 19.7757 14.5979 20.0491 16.0669 19.9934C17.2004 19.9505 18.2258 19.2992 19.0628 18.4622C20.4557 17.0692 20.2686 14.8468 18.6838 13.9624L17.5209 13.3134C16.4714 12.7277 15.0947 12.9628 14.1722 13.8853Z"
      fill="black"
    />
    <Path
      opacity={0.5}
      d="M11.0245 12.9756C8.99576 10.9468 10.1147 9.82788 10.1147 9.82788L5.83643 14.1061C6.31827 14.8369 6.91971 15.5844 7.66769 16.3324C8.41567 17.0804 9.16311 17.6818 9.89392 18.1636L14.1722 13.8854C14.1722 13.8854 13.0532 15.0043 11.0245 12.9756Z"
      fill="black"
    />
  </Svg>
);
export default SvgPhoneRounded;
