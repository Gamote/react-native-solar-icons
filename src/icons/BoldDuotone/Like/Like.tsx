import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLike = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M20.2696 16.265L20.9751 12.1852C21.1514 11.1662 20.3677 10.2342 19.3348 10.2342H14.1537C13.6402 10.2342 13.2491 9.77328 13.3323 9.26598L13.9949 5.22142C14.1026 4.56435 14.0719 3.892 13.9047 3.24752C13.7662 2.71364 13.3543 2.28495 12.8126 2.11093L12.6676 2.06435C12.3402 1.95918 11.9829 1.98365 11.6742 2.13239C11.3344 2.29611 11.0859 2.59473 10.9938 2.94989L10.518 4.78374C10.3667 5.36723 10.1462 5.93045 9.86194 6.46262C9.44659 7.24017 8.8044 7.86246 8.13687 8.43769L6.69813 9.67749C6.29247 10.0271 6.07944 10.5506 6.1256 11.0844L6.93776 20.4771C7.01226 21.3386 7.73256 22 8.59634 22H13.245C16.7263 22 19.6973 19.5744 20.2696 16.265Z"
      fill="black"
    />
    <Path
      opacity={0.5}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.96767 9.48508C3.36893 9.46777 3.71261 9.76963 3.74721 10.1698L4.71881 21.4063C4.78122 22.1281 4.21268 22.7502 3.48671 22.7502C2.80289 22.7502 2.25 22.1954 2.25 21.5129V10.2344C2.25 9.83275 2.5664 9.5024 2.96767 9.48508Z"
      fill="black"
    />
  </Svg>
);
export default SvgLike;
