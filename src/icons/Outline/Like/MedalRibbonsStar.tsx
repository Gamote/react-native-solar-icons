import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMedalRibbonsStar = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2.75C8.54823 2.75 5.75001 5.54822 5.75001 9C5.75001 12.4518 8.54823 15.25 12 15.25C15.4518 15.25 18.25 12.4518 18.25 9C18.25 5.54822 15.4518 2.75 12 2.75ZM4.25001 9C4.25001 4.71979 7.7198 1.25 12 1.25C16.2802 1.25 19.75 4.71979 19.75 9C19.75 9.94098 19.5823 10.8428 19.2752 11.6772L21.5624 14.0454C21.8197 14.3118 22.0341 14.5338 22.1942 14.7187C22.352 14.9009 22.5137 15.1092 22.6092 15.3513C22.9426 16.1961 22.6744 17.1959 21.8702 17.6883C21.639 17.8298 21.3756 17.8885 21.1492 17.9264C20.9176 17.9652 20.6234 17.9963 20.2763 18.033L20.253 18.0355C19.7938 18.084 19.7066 18.0995 19.6473 18.1222C19.4692 18.1905 19.3229 18.3359 19.2505 18.5386C19.225 18.6099 19.2094 18.7116 19.1629 19.1831L19.1607 19.2053C19.1251 19.5664 19.0952 19.869 19.0581 20.1065C19.022 20.3379 18.967 20.601 18.835 20.8321C18.3657 21.654 17.3763 21.9623 16.5181 21.5992C16.2765 21.497 16.0721 21.3259 15.8974 21.1637C15.7187 20.9978 15.5043 20.7758 15.2471 20.5095L15.2275 20.4892L12 17.0893L8.76804 20.4939L8.7529 20.5095C8.49569 20.7758 8.28133 20.9978 8.10263 21.1637C7.92795 21.3259 7.72349 21.497 7.48191 21.5992C6.62371 21.9623 5.63434 21.654 5.16499 20.8321C5.03303 20.601 4.97801 20.3379 4.94188 20.1065C4.90479 19.869 4.87494 19.5664 4.83932 19.2053L4.83713 19.1831C4.79061 18.7116 4.77504 18.6099 4.74954 18.5386C4.67708 18.3359 4.53079 18.1905 4.35268 18.1222C4.29342 18.0995 4.20618 18.084 3.74701 18.0355L3.72374 18.033C3.37659 17.9963 3.0824 17.9652 2.85085 17.9264C2.62443 17.8885 2.36103 17.8298 2.1298 17.6883C1.32561 17.1959 1.05739 16.1961 1.3908 15.3513C1.48633 15.1092 1.64804 14.9009 1.8058 14.7187C1.96595 14.5338 2.18031 14.3118 2.43767 14.0453L4.72485 11.6772C4.41771 10.8428 4.25001 9.94098 4.25001 9ZM5.42759 13.1088L3.53154 15.072C3.25542 15.3578 3.06988 15.5503 2.9397 15.7007C2.81771 15.8415 2.78921 15.896 2.78621 15.9018V15.9018C2.69593 16.1307 2.78559 16.3246 2.90461 16.4036C2.91353 16.4065 2.96442 16.4246 3.09852 16.447C3.2797 16.4773 3.52805 16.5039 3.90478 16.5438C3.92997 16.5464 3.95497 16.5491 3.97977 16.5517C4.3189 16.5871 4.6213 16.6188 4.88954 16.7216C5.48854 16.9512 5.94675 17.4316 6.16198 18.0336C6.25824 18.3028 6.28791 18.6065 6.32253 18.9608C6.32495 18.9855 6.32739 19.0106 6.32989 19.0358C6.36827 19.4249 6.3942 19.6848 6.42392 19.8751C6.44936 20.038 6.46985 20.0902 6.47056 20.0934C6.55038 20.2277 6.71443 20.2942 6.89546 20.2185V20.2185C6.89546 20.2185 6.94547 20.1912 7.08204 20.0644C7.22668 19.9301 7.41189 19.7388 7.68681 19.4541L7.68908 19.4518L10.4091 16.5865C8.31318 16.1493 6.52805 14.8654 5.42759 13.1088ZM13.591 16.5865C15.6868 16.1493 17.472 14.8654 18.5724 13.1088L20.4685 15.072C20.7446 15.3578 20.9301 15.5503 21.0603 15.7007C21.1823 15.8415 21.2108 15.896 21.2138 15.9018V15.9018C21.3041 16.1307 21.2144 16.3246 21.0954 16.4036C21.0865 16.4065 21.0356 16.4246 20.9015 16.447C20.7203 16.4773 20.472 16.5039 20.0952 16.5438C20.07 16.5464 20.045 16.5491 20.0202 16.5517C19.6811 16.5871 19.3787 16.6188 19.1105 16.7216C18.5115 16.9512 18.0533 17.4316 17.838 18.0336C17.7418 18.3028 17.7121 18.6065 17.6775 18.9608C17.6751 18.9855 17.6726 19.0106 17.6701 19.0358C17.6317 19.4249 17.6058 19.6848 17.5761 19.8751C17.5507 20.038 17.5302 20.0902 17.5295 20.0934C17.4493 20.2282 17.2844 20.2946 17.1026 20.2177L17.1047 20.2186C17.1047 20.2186 17.0545 20.1912 16.918 20.0644C16.7733 19.9301 16.5881 19.7388 16.3132 19.4541L16.3109 19.4518L13.591 16.5865ZM12 7.03449C11.9419 7.13513 11.8772 7.25103 11.801 7.38769L11.7027 7.56405C11.6958 7.5765 11.6884 7.59009 11.6804 7.60466C11.6019 7.74827 11.4718 7.9861 11.255 8.15071C11.0336 8.31877 10.7673 8.37659 10.6116 8.4104C10.596 8.41379 10.5815 8.41693 10.5683 8.41992L10.3774 8.46312C10.2022 8.50275 10.0595 8.53509 9.9375 8.56575C10.0169 8.66345 10.12 8.78474 10.254 8.94154L10.3842 9.09372C10.3934 9.10452 10.4035 9.11609 10.4141 9.1284C10.5221 9.25273 10.6963 9.45346 10.7769 9.71261C10.8566 9.96869 10.8291 10.2324 10.8118 10.3988C10.81 10.4154 10.8084 10.431 10.807 10.4456L10.7873 10.6487C10.7691 10.8369 10.7549 10.9872 10.7455 11.1094C10.8497 11.0635 10.9682 11.0089 11.109 10.9441L11.2878 10.8618C11.3001 10.8561 11.3136 10.8498 11.3281 10.8429C11.4717 10.7752 11.7213 10.6575 12 10.6575C12.2787 10.6575 12.5284 10.7752 12.6719 10.8429C12.6864 10.8498 12.6999 10.8561 12.7122 10.8618L12.891 10.9441C13.0318 11.0089 13.1503 11.0635 13.2546 11.1094C13.2451 10.9872 13.2309 10.8369 13.2127 10.6487L13.193 10.4456C13.1916 10.431 13.19 10.4154 13.1882 10.3988C13.1709 10.2324 13.1434 9.96869 13.2231 9.71261C13.3037 9.45346 13.4779 9.25273 13.5859 9.12841C13.5966 9.11609 13.6066 9.10452 13.6158 9.09372L13.746 8.94153C13.8801 8.78474 13.9831 8.66345 14.0625 8.56575C13.9405 8.53509 13.7978 8.50275 13.6226 8.46312L13.4317 8.41992C13.4185 8.41693 13.404 8.41379 13.3884 8.4104C13.2327 8.37659 12.9664 8.31877 12.745 8.15071C12.5282 7.9861 12.3981 7.74828 12.3196 7.60466C12.3117 7.5901 12.3042 7.5765 12.2973 7.56405L12.199 7.38769C12.1228 7.25103 12.0581 7.13513 12 7.03449ZM11.0135 5.79963C11.1857 5.57481 11.4983 5.25 12 5.25C12.5017 5.25 12.8143 5.57481 12.9865 5.79963C13.1508 6.01421 13.3163 6.31124 13.486 6.61577C13.4937 6.62961 13.5014 6.64347 13.5091 6.65734L13.6075 6.83369C13.6303 6.87459 13.6482 6.90677 13.6639 6.9343C13.6912 6.94071 13.723 6.94792 13.7628 6.95691L13.9537 7.0001C13.9693 7.00364 13.9849 7.00717 14.0006 7.0107C14.3284 7.08478 14.6542 7.15839 14.9042 7.25695C15.1804 7.36577 15.5547 7.5777 15.699 8.04161C15.8407 8.49734 15.6618 8.88336 15.5056 9.13146C15.3611 9.36108 15.1414 9.61786 14.9165 9.88074C14.9063 9.89262 14.8962 9.90452 14.886 9.91642L14.7558 10.0686C14.7213 10.1089 14.6954 10.1394 14.6735 10.1657C14.6764 10.202 14.6805 10.2443 14.686 10.3009L14.7057 10.504C14.7072 10.5195 14.7087 10.5349 14.7102 10.5504C14.7444 10.9023 14.7774 11.2424 14.7653 11.5145C14.7526 11.7997 14.6841 12.2315 14.2969 12.5254C13.8975 12.8286 13.4564 12.7626 13.1767 12.6824C12.919 12.6086 12.6144 12.4682 12.3077 12.3269C12.293 12.3201 12.2783 12.3134 12.2636 12.3066L12.0849 12.2243C12.0514 12.2089 12.024 12.1963 12 12.1854C11.9761 12.1963 11.9486 12.2089 11.9151 12.2243L11.7364 12.3066C11.7217 12.3134 11.707 12.3201 11.6923 12.3269C11.3856 12.4682 11.081 12.6086 10.8233 12.6824C10.5436 12.7626 10.1025 12.8286 9.70307 12.5254C9.3159 12.2315 9.24744 11.7997 9.23473 11.5145C9.22261 11.2424 9.25564 10.9023 9.28982 10.5504C9.29132 10.5349 9.29282 10.5195 9.29432 10.504L9.314 10.3009C9.31948 10.2443 9.32357 10.202 9.32655 10.1657C9.30466 10.1394 9.27867 10.1089 9.24418 10.0686L9.11404 9.91642C9.10386 9.90452 9.09368 9.89262 9.08352 9.88074C8.8586 9.61786 8.63891 9.36108 8.49436 9.13146C8.33818 8.88336 8.15934 8.49734 8.30106 8.04161C8.44532 7.5777 8.81963 7.36577 9.09577 7.25695C9.34585 7.15839 9.67164 7.08478 9.99946 7.0107C10.0151 7.00717 10.0307 7.00364 10.0464 7.0001L10.2373 6.95691C10.277 6.94792 10.3088 6.94071 10.3361 6.9343C10.3518 6.90677 10.3698 6.87459 10.3926 6.83369L10.4909 6.65734C10.4986 6.64347 10.5063 6.62961 10.514 6.61576C10.6837 6.31124 10.8492 6.01421 11.0135 5.79963Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgMedalRibbonsStar;
