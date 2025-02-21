import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgObjectScan = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.94358 1.25L10 1.25C10.4142 1.25 10.75 1.58579 10.75 2C10.75 2.41421 10.4142 2.75 10 2.75C8.09318 2.75 6.73851 2.75159 5.71085 2.88976C4.70476 3.02502 4.12511 3.27869 3.7019 3.7019C3.27869 4.12511 3.02502 4.70476 2.88976 5.71085C2.75159 6.73851 2.75 8.09318 2.75 10C2.75 10.4142 2.41421 10.75 2 10.75C1.58579 10.75 1.25 10.4142 1.25 10L1.25 9.94358C1.24998 8.10582 1.24997 6.65019 1.40314 5.51098C1.56076 4.33856 1.89288 3.38961 2.64124 2.64124C3.38961 1.89288 4.33856 1.56076 5.51098 1.40314C6.65019 1.24997 8.10582 1.24998 9.94358 1.25ZM18.2892 2.88976C17.2615 2.75159 15.9068 2.75 14 2.75C13.5858 2.75 13.25 2.41421 13.25 2C13.25 1.58579 13.5858 1.25 14 1.25L14.0564 1.25C15.8942 1.24998 17.3498 1.24997 18.489 1.40314C19.6614 1.56076 20.6104 1.89288 21.3588 2.64124C22.1071 3.38961 22.4392 4.33856 22.5969 5.51098C22.75 6.65019 22.75 8.10583 22.75 9.94359V10C22.75 10.4142 22.4142 10.75 22 10.75C21.5858 10.75 21.25 10.4142 21.25 10C21.25 8.09318 21.2484 6.73851 21.1102 5.71085C20.975 4.70476 20.7213 4.12511 20.2981 3.7019C19.8749 3.27869 19.2952 3.02502 18.2892 2.88976ZM2 13.25C2.41421 13.25 2.75 13.5858 2.75 14C2.75 15.9068 2.75159 17.2615 2.88976 18.2892C3.02502 19.2952 3.27869 19.8749 3.7019 20.2981C4.12511 20.7213 4.70476 20.975 5.71085 21.1102C6.73851 21.2484 8.09318 21.25 10 21.25C10.4142 21.25 10.75 21.5858 10.75 22C10.75 22.4142 10.4142 22.75 10 22.75H9.94359C8.10583 22.75 6.65019 22.75 5.51098 22.5969C4.33856 22.4392 3.38961 22.1071 2.64124 21.3588C1.89288 20.6104 1.56076 19.6614 1.40314 18.489C1.24997 17.3498 1.24998 15.8942 1.25 14.0564L1.25 14C1.25 13.5858 1.58579 13.25 2 13.25ZM22 13.25C22.4142 13.25 22.75 13.5858 22.75 14V14.0564C22.75 15.8942 22.75 17.3498 22.5969 18.489C22.4392 19.6614 22.1071 20.6104 21.3588 21.3588C20.6104 22.1071 19.6614 22.4392 18.489 22.5969C17.3498 22.75 15.8942 22.75 14.0564 22.75H14C13.5858 22.75 13.25 22.4142 13.25 22C13.25 21.5858 13.5858 21.25 14 21.25C15.9068 21.25 17.2615 21.2484 18.2892 21.1102C19.2952 20.975 19.8749 20.7213 20.2981 20.2981C20.7213 19.8749 20.975 19.2952 21.1102 18.2892C21.2484 17.2615 21.25 15.9068 21.25 14C21.25 13.5858 21.5858 13.25 22 13.25Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M10 5.5H14C15.8856 5.5 16.8284 5.5 17.4142 6.08579C17.9642 6.63575 17.9978 7.5004 17.9999 9.16448L18 12.0167V14.5C18 16.3856 18 17.3284 17.4142 17.9142C16.8284 18.5 15.8856 18.5 14 18.5H10C8.11438 18.5 7.17157 18.5 6.58579 17.9142C6 17.3284 6 16.3856 6 14.5V12.0167L6.00013 9.16449C6.00219 7.5004 6.03582 6.63575 6.58579 6.08579C7.17157 5.5 8.11438 5.5 10 5.5Z"
      fill={props.primaryColor}
    />
    <Path
      d="M18.3693 9.29994C18.2513 9.25455 18.1281 9.20929 17.9999 9.16445C16.1667 8.38595 11.2002 7.29605 6.00013 9.16446C5.87187 9.20929 5.74878 9.25456 5.63078 9.29994C4.9385 9.5662 4.42459 9.83556 4.07665 10.0443C3.90273 10.1487 3.77043 10.2378 3.67815 10.3037C3.63202 10.3367 3.59589 10.3638 3.56958 10.3842C3.55642 10.3943 3.54572 10.4028 3.53745 10.4094L3.52685 10.418L3.52291 10.4213L3.52128 10.4226L3.51988 10.4238C3.20167 10.689 3.15868 11.1619 3.42385 11.4801C3.68807 11.7971 4.15855 11.841 4.47672 11.579L4.4871 11.5708C4.49868 11.5619 4.51958 11.546 4.55001 11.5243C4.61086 11.4808 4.7098 11.4137 4.84839 11.3306C5.12545 11.1643 5.56153 10.9337 6.16925 10.7C7.38289 10.2332 9.29159 9.74995 12 9.74995C14.7085 9.74995 16.6172 10.2332 17.8308 10.7C18.4385 10.9337 18.8746 11.1643 19.1516 11.3306C19.2902 11.4137 19.3892 11.4808 19.45 11.5243C19.4805 11.546 19.5014 11.5619 19.5129 11.5708L19.5233 11.579C19.8415 11.841 20.312 11.7971 20.5762 11.4801C20.8414 11.1619 20.7984 10.689 20.4802 10.4238L20 10.9999C20.4802 10.4238 20.4788 10.4226 20.4788 10.4226L20.4771 10.4213L20.4732 10.418L20.4626 10.4094C20.4543 10.4028 20.4436 10.3943 20.4305 10.3842C20.4041 10.3638 20.368 10.3367 20.3219 10.3037C20.2296 10.2378 20.0973 10.1487 19.9234 10.0443C19.5755 9.83556 19.0615 9.5662 18.3693 9.29994Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgObjectScan;
