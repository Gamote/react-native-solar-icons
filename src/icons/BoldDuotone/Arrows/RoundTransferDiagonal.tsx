import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRoundTransferDiagonal = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M2 12C2 17.5228 6.47715 22 12 22C13.8526 22 15.5875 21.4962 17.0752 20.6182C17.0775 20.6169 17.0797 20.6156 17.0819 20.6143C17.5169 20.3571 17.9308 20.0679 18.3202 19.7499C20.5661 17.9162 22 15.1255 22 12C22 6.47715 17.5228 2 12 2C10.1443 2 8.40658 2.50549 6.91715 3.38628C6.88285 3.40657 6.84867 3.42705 6.81464 3.44773C6.41584 3.69005 6.03533 3.95947 5.67568 4.25345C3.43217 6.08725 2 8.87638 2 12Z"
      fill="black"
    />
    <Path
      d="M13.1285 7.50055V10.0881L6.91725 3.38672C6.48105 3.64467 6.06613 3.93482 5.67578 4.25389L13.3285 12.5104C13.5382 12.7367 13.8651 12.8114 14.1524 12.6988C14.4396 12.5861 14.6285 12.3091 14.6285 12.0005V7.50055C14.6285 7.08633 14.2928 6.75055 13.8785 6.75055C13.4643 6.75055 13.1285 7.08633 13.1285 7.50055Z"
      fill="black"
    />
    <Path
      d="M10.4208 11.4823C10.2091 11.2607 9.88389 11.1902 9.59944 11.3043C9.31499 11.4183 9.12854 11.6939 9.12854 12.0004V16.5004C9.12854 16.9146 9.46432 17.2504 9.87854 17.2504C10.2928 17.2504 10.6285 16.9146 10.6285 16.5004V13.8711L17.0753 20.6187C17.5128 20.3605 17.9289 20.0699 18.3203 19.7503L10.4208 11.4823Z"
      fill="black"
    />
  </Svg>
);
export default SvgRoundTransferDiagonal;
