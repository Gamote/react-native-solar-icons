import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBill = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M17.625 20.5917C18.2666 20.0473 19.2334 20.0473 19.875 20.5917C20.3109 20.9616 21 20.6662 21 20.1094V3.89059C21 3.33383 20.3109 3.03842 19.875 3.40832C19.2334 3.95274 18.2666 3.95274 17.625 3.40832C16.9834 2.86389 16.0166 2.86389 15.375 3.40832C14.7334 3.95274 13.7666 3.95274 13.125 3.40832C12.4834 2.86389 11.5166 2.86389 10.875 3.40832C10.2334 3.95274 9.26659 3.95274 8.625 3.40832C7.98341 2.86389 7.01659 2.86389 6.375 3.40832C5.73341 3.95274 4.76659 3.95274 4.125 3.40832C3.68909 3.03842 3 3.33383 3 3.89059V20.1094C3 20.6662 3.68909 20.9616 4.125 20.5917C4.76659 20.0473 5.73341 20.0473 6.375 20.5917C7.01659 21.1361 7.98341 21.1361 8.625 20.5917C9.26659 20.0473 10.2334 20.0473 10.875 20.5917C11.5166 21.1361 12.4834 21.1361 13.125 20.5917C13.7666 20.0473 14.7334 20.0473 15.375 20.5917C16.0166 21.1361 16.9834 21.1361 17.625 20.5917Z"
      fill={props.primaryColor}
    />
    <Path
      d="M6.75 15.5C6.75 15.0858 7.08579 14.75 7.5 14.75H16.5C16.9142 14.75 17.25 15.0858 17.25 15.5C17.25 15.9142 16.9142 16.25 16.5 16.25H7.5C7.08579 16.25 6.75 15.9142 6.75 15.5Z"
      fill={props.primaryColor}
    />
    <Path
      d="M6.75 12C6.75 11.5858 7.08579 11.25 7.5 11.25H16.5C16.9142 11.25 17.25 11.5858 17.25 12C17.25 12.4142 16.9142 12.75 16.5 12.75H7.5C7.08579 12.75 6.75 12.4142 6.75 12Z"
      fill={props.primaryColor}
    />
    <Path
      d="M6.75 8.5C6.75 8.08579 7.08579 7.75 7.5 7.75H16.5C16.9142 7.75 17.25 8.08579 17.25 8.5C17.25 8.91421 16.9142 9.25 16.5 9.25H7.5C7.08579 9.25 6.75 8.91421 6.75 8.5Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgBill;
