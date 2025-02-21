import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHomeWiFi = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M6.55017 12.1923C9.56706 8.93595 14.4329 8.93595 17.4498 12.1923C17.7313 12.4961 18.2059 12.5142 18.5097 12.2327C18.8136 11.9512 18.8317 11.4767 18.5502 11.1728C14.9396 7.27576 9.06036 7.27576 5.44983 11.1728C5.16832 11.4767 5.18643 11.9512 5.49029 12.2327C5.79414 12.5142 6.26866 12.4961 6.55017 12.1923Z"
      fill={props.primaryColor}
    />
    <Path
      d="M8.55019 14.3508C10.4625 12.2867 13.5375 12.2867 15.4499 14.3508C15.7314 14.6546 16.2059 14.6727 16.5097 14.3912C16.8136 14.1097 16.8317 13.6352 16.5502 13.3313C14.0442 10.6265 9.95581 10.6265 7.44985 13.3313C7.16834 13.6352 7.18645 14.1097 7.4903 14.3912C7.79415 14.6727 8.26868 14.6546 8.55019 14.3508Z"
      fill={props.primaryColor}
    />
    <Path
      d="M10.5502 16.5097C11.358 15.6379 12.6421 15.6379 13.4499 16.5097C13.7314 16.8136 14.2059 16.8317 14.5098 16.5502C14.8136 16.2687 14.8317 15.7942 14.5502 15.4903C13.1488 13.9777 10.8513 13.9777 9.44987 15.4903C9.16836 15.7942 9.18647 16.2687 9.49032 16.5502C9.79417 16.8317 10.2687 16.8136 10.5502 16.5097Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 1.25024C11.2919 1.25024 10.6485 1.45306 9.95055 1.79248C9.27585 2.12059 8.49642 2.60433 7.52286 3.20857L5.45628 4.49114C4.53509 5.06285 3.79744 5.52065 3.2289 5.95605C2.64015 6.40694 2.18795 6.86614 1.86131 7.46287C1.53535 8.05837 1.38857 8.69199 1.31819 9.44095C1.24999 10.1668 1.24999 11.0544 1.25 12.1675V13.7801C1.24999 15.684 1.24998 17.1868 1.4027 18.3619C1.55937 19.5672 1.88856 20.5403 2.63236 21.3097C3.37958 22.0826 4.33046 22.4279 5.50761 22.5916C6.64849 22.7503 8.10556 22.7503 9.94185 22.7502H14.0581C15.8944 22.7503 17.3515 22.7503 18.4924 22.5916C19.6695 22.4279 20.6204 22.0826 21.3676 21.3097C22.1114 20.5403 22.4406 19.5672 22.5973 18.3619C22.75 17.1868 22.75 15.684 22.75 13.7801V12.1675C22.75 11.0544 22.75 10.1668 22.6818 9.44095C22.6114 8.69199 22.4646 8.05837 22.1387 7.46287C21.8121 6.86614 21.3599 6.40693 20.7711 5.95605C20.2026 5.52065 19.4649 5.06286 18.5437 4.49116L16.4771 3.20856C15.5036 2.60433 14.7241 2.12059 14.0494 1.79248C13.3515 1.45306 12.7081 1.25024 12 1.25024ZM8.27953 4.50436C9.29529 3.87395 10.0095 3.43178 10.6065 3.14144C11.1882 2.85857 11.6002 2.75024 12 2.75024C12.3998 2.75024 12.8118 2.85857 13.3935 3.14144C13.9905 3.43178 14.7047 3.87395 15.7205 4.50436L17.7205 5.74562C18.6813 6.34194 19.3559 6.76159 19.8591 7.14694C20.3487 7.52189 20.6303 7.8313 20.8229 8.1831C21.0162 8.53614 21.129 8.94889 21.1884 9.58128C21.2492 10.2288 21.25 11.0461 21.25 12.2042V13.7252C21.25 15.6962 21.2485 17.1014 21.1098 18.1685C20.9736 19.2166 20.717 19.8246 20.2892 20.2671C19.8649 20.706 19.2871 20.9667 18.2858 21.1059C17.2602 21.2485 15.9075 21.2502 14 21.2502H10C8.09247 21.2502 6.73983 21.2485 5.71422 21.1059C4.71286 20.9667 4.13514 20.706 3.71079 20.2671C3.28301 19.8246 3.02642 19.2166 2.89019 18.1685C2.75149 17.1014 2.75 15.6962 2.75 13.7252V12.2042C2.75 11.0461 2.75076 10.2288 2.81161 9.58128C2.87103 8.94889 2.98385 8.53614 3.17709 8.1831C3.36965 7.8313 3.65133 7.52189 4.14092 7.14694C4.6441 6.76159 5.31869 6.34194 6.27953 5.74562L8.27953 4.50436Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgHomeWiFi;
