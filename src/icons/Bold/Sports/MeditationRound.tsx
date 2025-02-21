import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMeditationRound = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M14.5 4.5C14.5 5.88071 13.3807 7 12 7C10.6192 7 9.49996 5.88071 9.49996 4.5C9.49996 3.11929 10.6192 2 12 2C13.3807 2 14.5 3.11929 14.5 4.5Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 9.7706C11.6438 9.77062 11.3209 9.7911 11.1389 9.82194L10.2473 9.97209C8.23482 10.311 6.74996 12.0736 6.74996 14.1502C6.74996 15.231 6.21545 16.2435 5.32043 16.8464L5.2192 16.9146C4.96443 17.0862 4.68796 17.2229 4.39706 17.3208L3.23936 17.7108C2.84681 17.843 2.42141 17.6319 2.28919 17.2394C2.15698 16.8469 2.36802 16.4215 2.76056 16.2892L3.91826 15.8993C4.08173 15.8442 4.23741 15.7673 4.38116 15.6705L4.48239 15.6023C4.95999 15.2806 5.24996 14.7364 5.24996 14.1502C5.24996 11.3526 7.25256 8.95532 9.99824 8.49292L10.8882 8.34304V8.34304C11.1926 8.29148 11.6131 8.27062 11.9999 8.2706C12.3867 8.27058 12.8068 8.29133 13.1114 8.34299V8.34299L14.0017 8.49292C16.7474 8.95532 18.75 11.3526 18.75 14.1502C18.75 14.7364 19.0399 15.2806 19.5175 15.6023L19.6188 15.6705C19.7625 15.7673 19.9182 15.8442 20.0817 15.8993L21.2394 16.2892C21.6319 16.4215 21.8429 16.8469 21.7107 17.2394C21.5785 17.6319 21.1531 17.843 20.7606 17.7108L19.6029 17.3208C19.312 17.2229 19.0355 17.0862 18.7807 16.9146L18.6795 16.8464C17.7845 16.2435 17.25 15.231 17.25 14.1502C17.25 12.0736 15.7651 10.311 13.7526 9.97209L12.8608 9.82191C12.679 9.79104 12.3562 9.77059 12 9.7706ZM8.89996 15.55C9.14849 15.2186 9.61859 15.1515 9.94996 15.4C10.2813 15.6485 10.3485 16.1186 10.1 16.45L9.17545 17.6827C9.16811 17.6925 9.16086 17.7021 9.15369 17.7117C9.02727 17.8804 8.92785 18.013 8.81329 18.1328C8.53146 18.4274 8.18764 18.6557 7.80671 18.8011C7.65188 18.8602 7.49105 18.9004 7.28654 18.9514C7.27495 18.9543 7.26322 18.9573 7.25134 18.9602L5.45793 19.4086C5.04185 19.5126 4.74996 19.8865 4.74996 20.3153C4.74996 20.8315 5.16842 21.25 5.68462 21.25H6.36838C7.91429 21.25 9.4185 20.7486 10.6552 19.8211L12.55 18.4C12.8813 18.1515 13.3514 18.2186 13.6 18.55C13.8485 18.8814 13.7813 19.3515 13.45 19.6L12.5453 20.2785L13.0371 20.4629C13.571 20.6631 13.8118 20.7531 14.0537 20.8288C14.7819 21.0564 15.5355 21.193 16.2972 21.2356C16.5503 21.2497 16.8074 21.25 17.3776 21.25H18.3153C18.8315 21.25 19.25 20.8315 19.25 20.3153C19.25 19.8865 18.9581 19.5126 18.542 19.4086L17.0684 19.0402C17.0408 19.0333 17.0135 19.0265 16.9866 19.0198C16.5109 18.9012 16.1356 18.8077 15.8003 18.6143C15.7 18.5565 15.6035 18.4924 15.5113 18.4224C15.203 18.1884 14.9711 17.8788 14.6772 17.4864C14.6606 17.4642 14.6437 17.4417 14.6267 17.4189L13.9 16.45C13.6514 16.1186 13.7186 15.6485 14.05 15.4C14.3813 15.1515 14.8514 15.2186 15.1 15.55L15.8267 16.5189C16.1952 17.0103 16.2982 17.1365 16.4182 17.2276C16.4601 17.2594 16.5039 17.2885 16.5495 17.3148C16.68 17.3901 16.8364 17.436 17.4322 17.585L18.9058 17.9534C19.9896 18.2243 20.75 19.1982 20.75 20.3153C20.75 21.66 19.6599 22.75 18.3153 22.75H17.3524C16.8139 22.75 16.5133 22.75 16.2135 22.7333C15.3282 22.6838 14.4525 22.525 13.6062 22.2605C13.3196 22.1709 13.0382 22.0653 12.534 21.8762L11.1016 21.3391C9.69801 22.2575 8.05368 22.75 6.36838 22.75H5.68462C4.33999 22.75 3.24996 21.66 3.24996 20.3153C3.24996 19.1982 4.0103 18.2243 5.09413 17.9534L6.88754 17.505C7.14323 17.4411 7.21153 17.4227 7.27178 17.3997C7.44493 17.3337 7.60121 17.2299 7.72932 17.096C7.7739 17.0493 7.81731 16.9935 7.97545 16.7827L8.89996 15.55Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgMeditationRound;
