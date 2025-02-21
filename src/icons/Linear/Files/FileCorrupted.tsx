import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFileCorrupted = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M13 2.5V5C13 7.35702 13 8.53553 13.7322 9.26777C14.4645 10 15.643 10 18 10H22"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M15.3973 4.05365L14.8957 4.6112L14.8957 4.6112L15.3973 4.05365ZM19.3574 7.61654L18.8558 8.1741L18.8558 8.1741L19.3574 7.61654ZM21.6604 10.1541L20.9753 10.4593L20.9753 10.4593L21.6604 10.1541ZM3.17196 20.8284L3.7022 20.298L3.7022 20.298L3.17196 20.8284ZM20.8346 20.8284L20.3043 20.298L20.3043 20.298L20.8346 20.8284ZM18.291 12.8571L18.707 12.233L18.707 12.233L18.291 12.8571ZM21.7207 12.8571L21.3048 12.233L21.3048 12.233L21.7207 12.8571ZM9.71681 12.8571L9.30088 12.233L9.30088 12.233L9.71681 12.8571ZM12.2891 12.8571L12.705 12.233L12.705 12.233L12.2891 12.8571ZM6.28712 12.8571L5.87118 13.4812L5.87118 13.4812L6.28712 12.8571ZM3.71485 12.8571L3.29892 12.233L3.29891 12.233L3.71485 12.8571ZM18.291 16.8571L18.707 16.233L18.707 16.233L18.291 16.8571ZM21.7207 16.8571L22.1367 17.4812L22.1367 17.4812L21.7207 16.8571ZM15.7188 16.8571L15.3028 16.233L15.3028 16.233L15.7188 16.8571ZM12.2891 16.8571L12.705 16.233L12.705 16.233L12.2891 16.8571ZM9.71681 16.8571L9.30088 16.233L9.30088 16.233L9.71681 16.8571ZM15.7188 12.8571L15.3028 12.233L15.3028 12.233L15.7188 12.8571ZM6.28712 16.8571L5.87118 17.4812L5.87118 17.4812L6.28712 16.8571ZM3.71485 16.8571L3.29892 16.233L3.29892 16.233L3.71485 16.8571ZM3.08865 17.2745L3.50458 17.8986L3.50458 17.8986L3.08865 17.2745ZM2.27827 19.1149L3.00783 18.941L3.00783 18.941L2.27827 19.1149ZM21.9717 16.9978L22.721 17.0288L22.721 17.0288L21.9717 16.9978ZM21.9999 12.3273L22.7498 12.3134L22.7498 12.3134L21.9999 12.3273ZM2.21436 18.0728L2.91237 18.3472L2.91237 18.3472L2.21436 18.0728ZM2.00613 12.2421L2.75153 12.1591L2.75153 12.1591L2.00613 12.2421ZM3.45978 13.0198L3.80416 13.686L3.80416 13.686L3.45978 13.0198ZM14.0039 21.25H10.0026V22.75H14.0039V21.25ZM2.75 11.9397V10H1.25V11.9397H2.75ZM14.8957 4.6112L18.8558 8.1741L19.859 7.05899L15.899 3.49609L14.8957 4.6112ZM18.8558 8.1741C20.2096 9.39219 20.7093 9.86209 20.9753 10.4593L22.3455 9.84888C21.9194 8.89231 21.1144 8.18844 19.859 7.05899L18.8558 8.1741ZM10.0324 2.75C11.6147 2.75 12.2119 2.76157 12.7442 2.96576L13.2814 1.56527C12.4294 1.23843 11.5011 1.25 10.0324 1.25V2.75ZM15.899 3.49609C14.8126 2.51868 14.1334 1.89209 13.2814 1.56527L12.7442 2.96576C13.2766 3.16999 13.7256 3.55847 14.8957 4.6112L15.899 3.49609ZM10.0026 21.25C8.09518 21.25 6.74004 21.2484 5.712 21.1102C4.70551 20.975 4.12559 20.7213 3.7022 20.298L2.64171 21.3588C3.39028 22.1072 4.33946 22.4393 5.51219 22.5969C6.66337 22.7516 8.13758 22.75 10.0026 22.75V21.25ZM14.0039 22.75C15.869 22.75 17.3432 22.7516 18.4943 22.5969C19.6671 22.4393 20.6163 22.1072 21.3648 21.3588L20.3043 20.298C19.8809 20.7213 19.301 20.975 18.2945 21.1102C17.2665 21.2484 15.9114 21.25 14.0039 21.25V22.75ZM2.75 10C2.75 8.09317 2.75159 6.73853 2.8898 5.71088C3.02511 4.70484 3.27884 4.12521 3.7022 3.70199L2.64171 2.64116C1.89311 3.38951 1.56087 4.33848 1.40319 5.51094C1.24841 6.66181 1.25 8.13559 1.25 10H2.75ZM10.0324 1.25C8.15737 1.25 6.67597 1.24842 5.52009 1.40307C4.34322 1.56053 3.39086 1.89225 2.64171 2.64116L3.7022 3.70199C4.12501 3.27932 4.70671 3.02526 5.719 2.88982C6.75227 2.75158 8.11512 2.75 10.0324 2.75V1.25ZM17.8751 13.4812C19.1654 14.3412 20.8464 14.3412 22.1367 13.4812L21.3048 12.233C20.5183 12.7572 19.4935 12.7572 18.707 12.233L17.8751 13.4812ZM10.1327 13.4812C10.6597 13.1301 11.3462 13.1301 11.8731 13.4812L12.705 12.233C11.6743 11.5461 10.3316 11.5461 9.30088 12.233L10.1327 13.4812ZM5.87118 13.4812C7.16149 14.3412 8.84243 14.3412 10.1327 13.4812L9.30088 12.233C8.51433 12.7572 7.48959 12.7572 6.70305 12.233L5.87118 13.4812ZM4.13078 13.4812C4.65772 13.1301 5.34425 13.1301 5.87118 13.4812L6.70305 12.233C5.67234 11.5461 4.32962 11.5461 3.29892 12.233L4.13078 13.4812ZM17.8751 17.4812C19.1654 18.3412 20.8464 18.3412 22.1367 17.4812L21.3048 16.233C20.5183 16.7572 19.4935 16.7572 18.707 16.233L17.8751 17.4812ZM16.1347 17.4812C16.6616 17.1301 17.3482 17.1301 17.8751 17.4812L18.707 16.233C17.6763 15.5461 16.3335 15.5461 15.3028 16.233L16.1347 17.4812ZM11.8731 17.4812C13.1635 18.3412 14.8444 18.3412 16.1347 17.4812L15.3028 16.233C14.5163 16.7572 13.4916 16.7572 12.705 16.233L11.8731 17.4812ZM10.1327 17.4812C10.6597 17.1301 11.3462 17.1301 11.8731 17.4812L12.705 16.233C11.6743 15.5461 10.3316 15.5461 9.30088 16.233L10.1327 17.4812ZM16.1347 13.4812C16.6616 13.1301 17.3482 13.1301 17.8751 13.4812L18.707 12.233C17.6763 11.5461 16.3335 11.5461 15.3028 12.233L16.1347 13.4812ZM5.87118 17.4812C7.16149 18.3412 8.84243 18.3412 10.1327 17.4812L9.30088 16.233C8.51433 16.7572 7.48959 16.7572 6.70305 16.233L5.87118 17.4812ZM11.8731 13.4812C13.1635 14.3412 14.8444 14.3412 16.1347 13.4812L15.3028 12.233C14.5163 12.7572 13.4916 12.7572 12.705 12.233L11.8731 13.4812ZM4.13078 17.4812C4.65772 17.1301 5.34424 17.1301 5.87118 17.4812L6.70305 16.233C5.67234 15.5461 4.32962 15.5461 3.29892 16.233L4.13078 17.4812ZM3.50458 17.8986L4.13078 17.4812L3.29892 16.233L2.67271 16.6504L3.50458 17.8986ZM1.54871 19.2888C1.74368 20.1067 2.07472 20.792 2.64171 21.3588L3.7022 20.298C3.3767 19.9726 3.15509 19.5587 3.00783 18.941L1.54871 19.2888ZM21.2223 16.9667C21.145 18.8313 20.8923 19.7103 20.3043 20.298L21.3648 21.3588C22.3944 20.3296 22.643 18.9115 22.721 17.0288L21.2223 16.9667ZM22.7498 12.3134C22.7314 11.3207 22.665 10.566 22.3455 9.84888L20.9753 10.4593C21.1627 10.88 21.2321 11.3707 21.25 12.3412L22.7498 12.3134ZM22.1367 13.4812C22.5227 13.224 22.7585 12.7861 22.7498 12.3134L21.25 12.3412C21.2491 12.2936 21.2726 12.2545 21.3048 12.233L22.1367 13.4812ZM2.67272 16.6504C2.43437 16.8092 2.19984 16.964 2.01644 17.1213C1.81381 17.2951 1.63153 17.5054 1.51635 17.7984L2.91237 18.3472C2.91455 18.3416 2.91655 18.3375 2.92285 18.3293C2.93099 18.3187 2.95008 18.2967 2.99299 18.2599C3.09145 18.1754 3.23663 18.0771 3.50458 17.8986L2.67272 16.6504ZM3.00783 18.941C2.94379 18.6723 2.91452 18.5425 2.90515 18.4445C2.89892 18.3793 2.90528 18.3652 2.91237 18.3472L1.51635 17.7984C1.29891 18.3515 1.44462 18.8521 1.54871 19.2888L3.00783 18.941ZM22.1367 17.4812C21.7395 17.7459 21.2022 17.4512 21.2223 16.9667L22.721 17.0288C22.752 16.2805 21.9217 15.8219 21.3048 16.233L22.1367 17.4812ZM1.25 11.9397C1.25 12.0786 1.24872 12.217 1.26074 12.325L2.75153 12.1591C2.75254 12.1681 2.75135 12.1627 2.75067 12.1201C2.75002 12.0794 2.75 12.0246 2.75 11.9397H1.25ZM3.29891 12.233C3.22823 12.2801 3.18264 12.3105 3.1484 12.3325C3.11256 12.3556 3.10735 12.3577 3.11539 12.3535L3.80416 13.686C3.90065 13.6361 4.0151 13.5583 4.13078 13.4812L3.29891 12.233ZM1.26074 12.325C1.39654 13.5453 2.71386 14.2496 3.80416 13.686L3.11539 12.3535C2.95911 12.4343 2.7709 12.3331 2.75153 12.1591L1.26074 12.325Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgFileCorrupted;
