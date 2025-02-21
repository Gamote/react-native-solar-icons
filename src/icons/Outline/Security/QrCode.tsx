import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgQrCode = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M5.12911 5.29493C5 5.47689 5 5.73459 5 6.25C5 6.76541 5 7.02311 5.12911 7.20507C5.17467 7.26928 5.23073 7.32534 5.29493 7.37089C5.47689 7.5 5.73459 7.5 6.25 7.5C6.76541 7.5 7.02311 7.5 7.20507 7.37089C7.26928 7.32534 7.32534 7.26928 7.37089 7.20507C7.5 7.02311 7.5 6.76541 7.5 6.25C7.5 5.73459 7.5 5.47689 7.37089 5.29493C7.32534 5.23073 7.26928 5.17467 7.20507 5.12911C7.02311 5 6.76541 5 6.25 5C5.73459 5 5.47689 5 5.29493 5.12911C5.23073 5.17467 5.17467 5.23073 5.12911 5.29493Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.70415 1.29021C9.14651 1.33227 9.55876 1.42353 9.93687 1.65524C10.3069 1.88199 10.618 2.1931 10.8448 2.56313C11.0765 2.94125 11.1677 3.35349 11.2098 3.79585C11.25 4.21899 11.25 4.73995 11.25 5.36422L11.25 6.552C11.25 7.45046 11.2501 8.19971 11.1701 8.79448C11.0857 9.42228 10.9 9.98908 10.4445 10.4445C9.98908 10.9 9.42228 11.0857 8.79448 11.1701C8.19971 11.2501 7.4505 11.25 6.55203 11.25L5.3643 11.25C4.74004 11.25 4.21899 11.25 3.79585 11.2098C3.35349 11.1677 2.94125 11.0765 2.56313 10.8448C2.1931 10.618 1.88199 10.3069 1.65524 9.93687C1.42353 9.55876 1.33227 9.14651 1.29021 8.70415C1.24997 8.281 1.24999 7.76 1.25 7.13571V7.06235C1.24999 6.11229 1.24998 5.34606 1.30863 4.72927C1.36911 4.09318 1.49721 3.53898 1.8026 3.04063C2.11181 2.53605 2.53605 2.11181 3.04063 1.8026C3.53898 1.49721 4.09318 1.36911 4.72927 1.30863C5.34607 1.24998 6.11227 1.24999 7.06233 1.25H7.13569C7.75999 1.24999 8.281 1.24997 8.70415 1.29021ZM8.56217 2.78347C8.21845 2.75079 7.76921 2.75 7.1 2.75C6.10345 2.75 5.4087 2.75079 4.87125 2.80189C4.34496 2.85193 4.04744 2.94487 3.82438 3.08156C3.52163 3.26709 3.26709 3.52163 3.08156 3.82438C2.94487 4.04744 2.85193 4.34496 2.80189 4.87125C2.75079 5.4087 2.75 6.10345 2.75 7.1C2.75 7.76921 2.75079 8.21845 2.78347 8.56217C2.81509 8.89473 2.87119 9.0503 2.9342 9.15312C3.03727 9.32132 3.17868 9.46273 3.34688 9.5658C3.4497 9.62881 3.60527 9.68491 3.93783 9.71653C4.28155 9.74921 4.73079 9.75 5.4 9.75H6.5C7.46401 9.75 8.11157 9.74841 8.59461 9.68347C9.05607 9.62142 9.25357 9.5142 9.38389 9.38389C9.5142 9.25357 9.62142 9.05607 9.68347 8.59461C9.74841 8.11157 9.75 7.46401 9.75 6.5V5.4C9.75 4.73079 9.74921 4.28155 9.71653 3.93783C9.68491 3.60527 9.62881 3.4497 9.5658 3.34688C9.46273 3.17868 9.32132 3.03727 9.15312 2.9342C9.0503 2.87119 8.89473 2.81509 8.56217 2.78347Z"
      fill={props.primaryColor}
    />
    <Path
      d="M16.6291 5.29493C16.5 5.47689 16.5 5.73459 16.5 6.25C16.5 6.76541 16.5 7.02311 16.6291 7.20507C16.6747 7.26928 16.7307 7.32534 16.7949 7.37089C16.9769 7.5 17.2346 7.5 17.75 7.5C18.2654 7.5 18.5231 7.5 18.7051 7.37089C18.7693 7.32534 18.8253 7.26928 18.8709 7.20507C19 7.02311 19 6.76541 19 6.25C19 5.73459 19 5.47689 18.8709 5.29493C18.8253 5.23073 18.7693 5.17467 18.7051 5.12911C18.5231 5 18.2654 5 17.75 5C17.2346 5 16.9769 5 16.7949 5.12911C16.7307 5.17467 16.6747 5.23073 16.6291 5.29493Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.8643 1.25H16.9377C17.8877 1.24999 18.6539 1.24998 19.2707 1.30863C19.9068 1.36911 20.461 1.49721 20.9594 1.8026C21.464 2.11181 21.8882 2.53605 22.1974 3.04063C22.5028 3.53898 22.6309 4.09318 22.6914 4.72927C22.75 5.34607 22.75 6.11227 22.75 7.06234V7.1357C22.75 7.76 22.75 8.281 22.7098 8.70415C22.6677 9.14651 22.5765 9.55876 22.3448 9.93687C22.118 10.3069 21.8069 10.618 21.4369 10.8448C21.0588 11.0765 20.6465 11.1677 20.2042 11.2098C19.781 11.25 19.2601 11.25 18.6359 11.25L17.448 11.25C16.5495 11.25 15.8003 11.2501 15.2055 11.1701C14.5777 11.0857 14.0109 10.9 13.5555 10.4445C13.1 9.98908 12.9143 9.42228 12.8299 8.79448C12.7499 8.1997 12.75 7.45048 12.75 6.552V5.36431C12.75 4.74001 12.75 4.21901 12.7902 3.79585C12.8323 3.35349 12.9235 2.94125 13.1552 2.56313C13.382 2.1931 13.6931 1.88199 14.0631 1.65524C14.4412 1.42353 14.8535 1.33227 15.2959 1.29021C15.719 1.24997 16.24 1.24999 16.8643 1.25ZM15.4378 2.78347C15.1053 2.81509 14.9497 2.87119 14.8469 2.9342C14.6787 3.03727 14.5373 3.17868 14.4342 3.34688C14.3712 3.4497 14.3151 3.60527 14.2835 3.93783C14.2508 4.28155 14.25 4.73079 14.25 5.4V6.5C14.25 7.46401 14.2516 8.11157 14.3165 8.59461C14.3786 9.05607 14.4858 9.25357 14.6161 9.38389C14.7464 9.5142 14.9439 9.62142 15.4054 9.68347C15.8884 9.74841 16.536 9.75 17.5 9.75H18.6C19.2692 9.75 19.7184 9.74921 20.0622 9.71653C20.3947 9.68491 20.5503 9.62881 20.6531 9.5658C20.8213 9.46273 20.9627 9.32132 21.0658 9.15312C21.1288 9.0503 21.1849 8.89473 21.2165 8.56217C21.2492 8.21845 21.25 7.76921 21.25 7.1C21.25 6.10345 21.2492 5.4087 21.1981 4.87125C21.1481 4.34496 21.0551 4.04744 20.9184 3.82438C20.7329 3.52163 20.4784 3.26709 20.1756 3.08156C19.9526 2.94487 19.655 2.85193 19.1288 2.80189C18.5913 2.75079 17.8966 2.75 16.9 2.75C16.2308 2.75 15.7816 2.75079 15.4378 2.78347Z"
      fill={props.primaryColor}
    />
    <Path
      d="M5 17.75C5 17.2346 5 16.9769 5.12911 16.7949C5.17467 16.7307 5.23073 16.6747 5.29493 16.6291C5.47689 16.5 5.73459 16.5 6.25 16.5C6.76541 16.5 7.02311 16.5 7.20507 16.6291C7.26928 16.6747 7.32534 16.7307 7.37089 16.7949C7.5 16.9769 7.5 17.2346 7.5 17.75C7.5 18.2654 7.5 18.5231 7.37089 18.7051C7.32534 18.7693 7.26928 18.8253 7.20507 18.8709C7.02311 19 6.76541 19 6.25 19C5.73459 19 5.47689 19 5.29493 18.8709C5.23073 18.8253 5.17467 18.7693 5.12911 18.7051C5 18.5231 5 18.2654 5 17.75Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.79448 12.8299C9.42228 12.9143 9.98908 13.1 10.4445 13.5555C10.9 14.0109 11.0857 14.5777 11.1701 15.2055C11.2501 15.8003 11.25 16.5495 11.25 17.448L11.25 18.6357C11.25 19.2599 11.25 19.781 11.2098 20.2042C11.1677 20.6465 11.0765 21.0588 10.8448 21.4369C10.618 21.8069 10.3069 22.118 9.93687 22.3448C9.55876 22.5765 9.14651 22.6677 8.70415 22.7098C8.281 22.75 7.76 22.75 7.1357 22.75H7.06234C6.11227 22.75 5.34607 22.75 4.72927 22.6914C4.09318 22.6309 3.53898 22.5028 3.04063 22.1974C2.53605 21.8882 2.11181 21.464 1.8026 20.9594C1.49721 20.461 1.36911 19.9068 1.30863 19.2707C1.24998 18.6539 1.24999 17.8877 1.25 16.9377V16.8643C1.24999 16.24 1.24997 15.719 1.29021 15.2959C1.33227 14.8535 1.42353 14.4412 1.65524 14.0631C1.88199 13.6931 2.1931 13.382 2.56313 13.1552C2.94125 12.9235 3.35349 12.8323 3.79585 12.7902C4.21901 12.75 4.74001 12.75 5.36431 12.75H6.552C7.45048 12.75 8.1997 12.7499 8.79448 12.8299ZM8.59461 14.3165C8.11157 14.2516 7.46401 14.25 6.5 14.25H5.4C4.73079 14.25 4.28155 14.2508 3.93783 14.2835C3.60527 14.3151 3.4497 14.3712 3.34688 14.4342C3.17868 14.5373 3.03727 14.6787 2.9342 14.8469C2.87119 14.9497 2.81509 15.1053 2.78347 15.4378C2.75079 15.7816 2.75 16.2308 2.75 16.9C2.75 17.8966 2.75079 18.5913 2.80189 19.1288C2.85193 19.655 2.94487 19.9526 3.08156 20.1756C3.26709 20.4784 3.52163 20.7329 3.82438 20.9184C4.04744 21.0551 4.34496 21.1481 4.87125 21.1981C5.4087 21.2492 6.10345 21.25 7.1 21.25C7.76921 21.25 8.21845 21.2492 8.56217 21.2165C8.89473 21.1849 9.0503 21.1288 9.15312 21.0658C9.32132 20.9627 9.46273 20.8213 9.5658 20.6531C9.62881 20.5503 9.68491 20.3947 9.71653 20.0622C9.74921 19.7184 9.75 19.2692 9.75 18.6V17.5C9.75 16.536 9.74841 15.8884 9.68347 15.4054C9.62142 14.9439 9.5142 14.7464 9.38389 14.6161C9.25357 14.4858 9.05607 14.3786 8.59461 14.3165Z"
      fill={props.primaryColor}
    />
    <Path
      d="M16.9617 12.75L19 12.75V14.25H17C16.2822 14.25 15.8002 14.2509 15.4328 14.2883C15.078 14.3244 14.914 14.3882 14.8055 14.4607C14.6691 14.5519 14.5519 14.6691 14.4607 14.8055C14.3882 14.914 14.3244 15.078 14.2883 15.4328C14.2509 15.8002 14.25 16.2822 14.25 17H12.75L12.75 16.9617C12.75 16.2921 12.75 15.7333 12.796 15.281C12.8442 14.8075 12.9489 14.3682 13.2135 13.9722C13.4141 13.6719 13.6719 13.4141 13.9722 13.2135C14.3682 12.9489 14.8075 12.8442 15.281 12.796C15.7333 12.75 16.2921 12.75 16.9617 12.75Z"
      fill={props.primaryColor}
    />
    <Path
      d="M12.75 22V19H14.25V22C14.25 22.4142 13.9142 22.75 13.5 22.75C13.0858 22.75 12.75 22.4142 12.75 22Z"
      fill={props.primaryColor}
    />
    <Path
      d="M22.75 13.5C22.75 13.0858 22.4142 12.75 22 12.75C21.5858 12.75 21.25 13.0858 21.25 13.5V17H22.75V13.5Z"
      fill={props.primaryColor}
    />
    <Path
      d="M21.25 19C21.25 19.4762 21.2496 19.7958 21.2327 20.0433C21.2163 20.284 21.1868 20.4012 21.1549 20.4784C21.028 20.7846 20.7846 21.028 20.4784 21.1549C20.4012 21.1868 20.284 21.2163 20.0433 21.2327C19.7958 21.2496 19.4762 21.25 19 21.25H17V22.75H19.0253C19.4697 22.75 19.8408 22.75 20.1454 22.7292C20.4625 22.7076 20.762 22.661 21.0524 22.5407C21.7262 22.2616 22.2616 21.7262 22.5407 21.0524C22.661 20.762 22.7076 20.4625 22.7292 20.1454C22.75 19.8408 22.75 19.4698 22.75 19.0253V19H21.25Z"
      fill={props.primaryColor}
    />
    <Path
      d="M16.1685 16.4444C16 16.6967 16 17.0478 16 17.75C16 18.4522 16 18.8033 16.1685 19.0556C16.2415 19.1648 16.3352 19.2585 16.4444 19.3315C16.6967 19.5 17.0478 19.5 17.75 19.5C18.4522 19.5 18.8033 19.5 19.0556 19.3315C19.1648 19.2585 19.2585 19.1648 19.3315 19.0556C19.5 18.8033 19.5 18.4522 19.5 17.75C19.5 17.0478 19.5 16.6967 19.3315 16.4444C19.2585 16.3352 19.1648 16.2415 19.0556 16.1685C18.8033 16 18.4522 16 17.75 16C17.0478 16 16.6967 16 16.4444 16.1685C16.3352 16.2415 16.2415 16.3352 16.1685 16.4444Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgQrCode;
