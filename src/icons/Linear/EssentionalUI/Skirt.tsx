import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSkirt = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M2.08066 17.9529L1.36263 17.7362L2.08066 17.9529ZM21.9193 17.9529L22.6374 17.7362L22.6374 17.7362L21.9193 17.9529ZM2.7345 19.8293L3.12037 19.1862L3.12036 19.1862L2.7345 19.8293ZM21.2655 19.8293L20.8796 19.1862L20.8796 19.1862L21.2655 19.8293ZM10.7436 5.59798C10.7977 5.18732 10.5086 4.81054 10.098 4.75643C9.68732 4.70231 9.31054 4.99136 9.25643 5.40202L10.7436 5.59798ZM7.14813 21.402C7.09402 21.8127 7.38306 22.1895 7.79373 22.2436C8.20439 22.2977 8.58116 22.0086 8.63528 21.598L7.14813 21.402ZM14.7436 5.40202C14.6895 4.99136 14.3127 4.70232 13.902 4.75643C13.4914 4.81054 13.2023 5.18732 13.2564 5.59798L14.7436 5.40202ZM15.3647 21.598C15.4188 22.0086 15.7956 22.2977 16.2063 22.2436C16.6169 22.1895 16.906 21.8127 16.8519 21.402L15.3647 21.598ZM7.8917 2.75H16.1083V1.25H7.8917V2.75ZM17.4124 4V5.5H18.9124V4H17.4124ZM18.1624 4.75H5.83756V6.25H18.1624V4.75ZM6.58756 5.5V4H5.08756V5.5H6.58756ZM16.1083 2.75C16.6131 2.75 16.9183 2.75151 17.1379 2.78027C17.2393 2.79353 17.2922 2.80944 17.318 2.81979C17.3298 2.8245 17.335 2.82769 17.3361 2.82843C17.3371 2.82901 17.3374 2.82927 17.3384 2.83026L18.3848 1.75553C18.0711 1.4501 17.6919 1.33998 17.3326 1.29296C16.9929 1.24849 16.5718 1.25 16.1083 1.25V2.75ZM18.9124 4C18.9124 3.55036 18.9141 3.13566 18.8678 2.80014C18.8182 2.44094 18.7013 2.06368 18.3848 1.75553L17.3384 2.83026C17.3391 2.83096 17.3393 2.83117 17.3391 2.83094C17.3389 2.8307 17.3388 2.8305 17.3388 2.83052C17.3388 2.83056 17.3393 2.83128 17.3402 2.83299C17.3411 2.83473 17.3427 2.83779 17.3447 2.84253C17.3533 2.86298 17.3687 2.9099 17.3819 3.00532C17.4108 3.21442 17.4124 3.50683 17.4124 4H18.9124ZM7.8917 1.25C7.4282 1.25 7.00708 1.24849 6.66738 1.29296C6.30811 1.33998 5.92887 1.4501 5.61518 1.75553L6.66158 2.83026C6.66259 2.82927 6.66294 2.82901 6.66386 2.82843C6.66502 2.82769 6.67018 2.8245 6.68196 2.81979C6.7078 2.80944 6.76072 2.79353 6.86207 2.78027C7.08175 2.75151 7.38688 2.75 7.8917 2.75V1.25ZM6.58756 4C6.58756 3.50684 6.58924 3.21442 6.61811 3.00532C6.63129 2.9099 6.64668 2.86298 6.65532 2.84253C6.65733 2.83779 6.65886 2.83473 6.65979 2.83299C6.66071 2.83128 6.6612 2.83056 6.66123 2.83052C6.66124 2.8305 6.6611 2.8307 6.6609 2.83094C6.66071 2.83117 6.66086 2.83096 6.66158 2.83026L5.61518 1.75553C5.29869 2.06367 5.18181 2.44094 5.13221 2.80014C5.08588 3.13566 5.08756 3.55036 5.08756 4H6.58756ZM5.11952 5.28338L1.36263 17.7362L2.7987 18.1695L6.55559 5.71662L5.11952 5.28338ZM22.6374 17.7362L18.8805 5.28338L17.4444 5.71662L21.2013 18.1695L22.6374 17.7362ZM2.34864 20.4724C3.88127 21.392 6.9965 22.75 12 22.75V21.25C7.28315 21.25 4.4329 19.9736 3.12037 19.1862L2.34864 20.4724ZM12 22.75C17.0035 22.75 20.1187 21.392 21.6514 20.4724L20.8796 19.1862C19.5671 19.9736 16.7168 21.25 12 21.25V22.75ZM21.2013 18.1695C21.3371 18.6197 21.1843 19.0034 20.8796 19.1862L21.6514 20.4724C22.6513 19.8725 22.9334 18.7175 22.6374 17.7362L21.2013 18.1695ZM1.36263 17.7362C1.06659 18.7175 1.34869 19.8725 2.34864 20.4724L3.12036 19.1862C2.81574 19.0034 2.66287 18.6197 2.7987 18.1695L1.36263 17.7362ZM9.25643 5.40202L7.14813 21.402L8.63528 21.598L10.7436 5.59798L9.25643 5.40202ZM13.2564 5.59798L15.3647 21.598L16.8519 21.402L14.7436 5.40202L13.2564 5.59798Z"
      fill="black"
    />
  </Svg>
);
export default SvgSkirt;
