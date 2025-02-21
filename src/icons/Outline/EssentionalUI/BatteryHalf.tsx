import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBatteryHalf = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M7.65563 8.63577C7.45447 8.27368 6.99787 8.14322 6.63578 8.34438C6.27677 8.54383 6.14547 8.99441 6.33934 9.35499L6.34435 9.36522C6.35121 9.37962 6.36433 9.40834 6.38178 9.45198C6.41667 9.53919 6.46909 9.6865 6.52352 9.89878C6.63225 10.3228 6.75002 11.0101 6.75002 12C6.75002 12.9899 6.63225 13.6772 6.52352 14.1012C6.46909 14.3135 6.41667 14.4608 6.38178 14.548C6.36433 14.5917 6.35121 14.6204 6.34435 14.6348L6.33934 14.645C6.14547 15.0056 6.27677 15.4562 6.63578 15.6556C6.99787 15.8568 7.45447 15.7263 7.65563 15.3642L7.00002 15C7.65563 15.3642 7.65545 15.3646 7.65563 15.3642L7.65636 15.3629L7.65713 15.3615L7.6588 15.3585L7.66264 15.3514L7.67228 15.333C7.67953 15.3189 7.6884 15.3012 7.69864 15.2797C7.71913 15.2367 7.74508 15.1787 7.7745 15.1051C7.83336 14.9579 7.90594 14.749 7.97651 14.4738C8.11778 13.9228 8.25001 13.1101 8.25001 12C8.25001 10.8899 8.11778 10.0772 7.97651 9.52622C7.90594 9.251 7.83336 9.04206 7.7745 8.89489C7.74508 8.82135 7.71913 8.76335 7.69864 8.72032C7.6884 8.69881 7.67953 8.68106 7.67228 8.66699L7.66264 8.64864L7.6588 8.64152L7.65713 8.63847L7.65636 8.63708C7.65618 8.63675 7.65563 8.63577 7.00002 9L7.65563 8.63577Z"
      fill="black"
    />
    <Path
      d="M10.1358 8.34438C10.4979 8.14322 10.9545 8.27368 11.1556 8.63577L10.5 9C11.1556 8.63577 11.1555 8.63544 11.1556 8.63577L11.1564 8.63708L11.1571 8.63847L11.1588 8.64152L11.1626 8.64864L11.1723 8.66699C11.1795 8.68106 11.1884 8.69881 11.1986 8.72032C11.2191 8.76335 11.2451 8.82135 11.2745 8.89489C11.3334 9.04206 11.4059 9.251 11.4765 9.52622C11.6178 10.0772 11.75 10.8899 11.75 12C11.75 13.1101 11.6178 13.9228 11.4765 14.4738C11.4059 14.749 11.3334 14.9579 11.2745 15.1051C11.2451 15.1787 11.2191 15.2367 11.1986 15.2797C11.1884 15.3012 11.1795 15.3189 11.1723 15.333L11.1626 15.3514L11.1588 15.3585L11.1571 15.3615L11.1564 15.3629C11.1562 15.3632 11.1556 15.3642 10.5 15L11.1556 15.3642C10.9545 15.7263 10.4979 15.8568 10.1358 15.6556C9.77677 15.4562 9.64547 15.0056 9.83934 14.645L9.84435 14.6348C9.85121 14.6204 9.86433 14.5917 9.88178 14.548C9.91667 14.4608 9.96909 14.3135 10.0235 14.1012C10.1322 13.6772 10.25 12.9899 10.25 12C10.25 11.0101 10.1322 10.3228 10.0235 9.89878C9.96909 9.6865 9.91667 9.53919 9.88178 9.45198C9.86433 9.40834 9.85121 9.37962 9.84435 9.36522L9.83934 9.35499C9.64547 8.99441 9.77677 8.54383 10.1358 8.34438Z"
      fill="black"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.5564 3.25H9.94358C8.10583 3.24998 6.65019 3.24997 5.51098 3.40314C4.33856 3.56076 3.38961 3.89288 2.64124 4.64124C1.89288 5.38961 1.56076 6.33856 1.40314 7.51098C1.24997 8.65019 1.24998 10.1058 1.25 11.9436V12.0564C1.24998 13.8942 1.24997 15.3498 1.40314 16.489C1.56076 17.6614 1.89288 18.6104 2.64124 19.3588C3.38961 20.1071 4.33856 20.4392 5.51098 20.5969C6.65018 20.75 8.1058 20.75 9.94354 20.75H11.5564C13.3942 20.75 14.8498 20.75 15.989 20.5969C17.1614 20.4392 18.1104 20.1071 18.8588 19.3588C19.6071 18.6104 19.9392 17.6614 20.0969 16.489C20.1659 15.9756 20.2038 15.3979 20.2246 14.7499C20.5874 14.7492 20.9197 14.744 21.1972 14.7067C21.5527 14.6589 21.9284 14.5465 22.2374 14.2374C22.5465 13.9284 22.6589 13.5527 22.7067 13.1972C22.7501 12.8744 22.7501 12.4776 22.75 12.0447V11.9552C22.7501 11.5224 22.7501 11.1256 22.7067 10.8028C22.6589 10.4473 22.5465 10.0716 22.2374 9.76256C21.9284 9.45354 21.5527 9.34109 21.1972 9.2933C20.9197 9.25599 20.5874 9.25079 20.2246 9.25009C20.2038 8.60211 20.1659 8.02441 20.0969 7.51098C19.9392 6.33856 19.6071 5.38961 18.8588 4.64124C18.1104 3.89288 17.1614 3.56076 15.989 3.40314C14.8498 3.24997 13.3942 3.24998 11.5564 3.25ZM3.7019 5.7019C4.12511 5.27869 4.70476 5.02502 5.71085 4.88976C6.73851 4.75159 8.09318 4.75 10 4.75H11.5C13.4068 4.75 14.7615 4.75159 15.7892 4.88976C16.7952 5.02502 17.3749 5.27869 17.7981 5.7019C18.2213 6.12511 18.475 6.70476 18.6102 7.71085C18.7484 8.73851 18.75 10.0932 18.75 12C18.75 13.9068 18.7484 15.2615 18.6102 16.2892C18.475 17.2952 18.2213 17.8749 17.7981 18.2981C17.3749 18.7213 16.7952 18.975 15.7892 19.1102C14.7615 19.2484 13.4068 19.25 11.5 19.25H10C8.09318 19.25 6.73851 19.2484 5.71085 19.1102C4.70476 18.975 4.12511 18.7213 3.7019 18.2981C3.27869 17.8749 3.02502 17.2952 2.88976 16.2892C2.75159 15.2615 2.75 13.9068 2.75 12C2.75 10.0932 2.75159 8.73851 2.88976 7.71085C3.02502 6.70476 3.27869 6.12511 3.7019 5.7019ZM20.75 13.2406V10.7594C20.845 10.7638 20.9259 10.7703 20.9973 10.7799C21.0939 10.7929 21.1423 10.8082 21.164 10.8172C21.1691 10.8192 21.1724 10.8209 21.1743 10.8219L21.1768 10.8232L21.1781 10.8257C21.1791 10.8276 21.1808 10.8309 21.1828 10.836C21.1918 10.8577 21.2071 10.9061 21.2201 11.0027C21.2484 11.2134 21.25 11.5074 21.25 12C21.25 12.4926 21.2484 12.7866 21.2201 12.9973C21.2071 13.0939 21.1918 13.1423 21.1828 13.164C21.1808 13.1691 21.1791 13.1724 21.1781 13.1743L21.1768 13.1768L21.1743 13.1781C21.1724 13.1791 21.1691 13.1808 21.164 13.1828C21.1423 13.1918 21.0939 13.2071 20.9973 13.2201C20.9259 13.2297 20.845 13.2362 20.75 13.2406Z"
      fill="black"
    />
  </Svg>
);
export default SvgBatteryHalf;
