import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgObjectScan = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.94358 1.25L10 1.25C10.4142 1.25 10.75 1.58579 10.75 2C10.75 2.41421 10.4142 2.75 10 2.75C8.09318 2.75 6.73851 2.75159 5.71085 2.88976C4.70476 3.02502 4.12511 3.27869 3.7019 3.7019C3.27869 4.12511 3.02502 4.70476 2.88976 5.71085C2.75159 6.73851 2.75 8.09318 2.75 10C2.75 10.4142 2.41421 10.75 2 10.75C1.58579 10.75 1.25 10.4142 1.25 10L1.25 9.94358C1.24998 8.10582 1.24997 6.65019 1.40314 5.51098C1.56076 4.33856 1.89288 3.38961 2.64124 2.64124C3.38961 1.89288 4.33856 1.56076 5.51098 1.40314C6.65019 1.24997 8.10582 1.24998 9.94358 1.25ZM18.2892 2.88976C17.2615 2.75159 15.9068 2.75 14 2.75C13.5858 2.75 13.25 2.41421 13.25 2C13.25 1.58579 13.5858 1.25 14 1.25L14.0564 1.25C15.8942 1.24998 17.3498 1.24997 18.489 1.40314C19.6614 1.56076 20.6104 1.89288 21.3588 2.64124C22.1071 3.38961 22.4392 4.33856 22.5969 5.51098C22.75 6.65019 22.75 8.10583 22.75 9.94359V10C22.75 10.4142 22.4142 10.75 22 10.75C21.5858 10.75 21.25 10.4142 21.25 10C21.25 8.09318 21.2484 6.73851 21.1102 5.71085C20.975 4.70476 20.7213 4.12511 20.2981 3.7019C19.8749 3.27869 19.2952 3.02502 18.2892 2.88976ZM9.948 4.75H14.052C14.9505 4.74997 15.6997 4.74995 16.2945 4.82991C16.9223 4.91432 17.4891 5.09999 17.9445 5.55546C18.4 6.01093 18.5857 6.57773 18.6701 7.20552C18.7501 7.8003 18.75 8.54952 18.75 9.44801V9.95395C19.2536 10.1679 19.6425 10.3759 19.9234 10.5444C20.0973 10.6487 20.2296 10.7379 20.3219 10.8038C20.368 10.8367 20.4041 10.8639 20.4304 10.8842C20.4436 10.8944 20.4543 10.9029 20.4626 10.9095L20.4732 10.9181L20.4771 10.9213L20.4787 10.9227C20.4791 10.923 20.4801 10.9238 20 11.5L20.4801 10.9238C20.7983 11.189 20.8413 11.6619 20.5762 11.9801C20.3119 12.2972 19.8414 12.341 19.5233 12.079L19.5129 12.0709C19.5013 12.0619 19.4804 12.0461 19.45 12.0244C19.3892 11.9809 19.2902 11.9138 19.1516 11.8306C18.8746 11.6644 18.4385 11.4337 17.8308 11.2C16.6171 10.7332 14.7084 10.25 12 10.25C9.29157 10.25 7.38287 10.7332 6.16923 11.2C5.56152 11.4337 5.12543 11.6644 4.84837 11.8306C4.70978 11.9138 4.61084 11.9809 4.54999 12.0244C4.51957 12.0461 4.49866 12.0619 4.48708 12.0709L4.47671 12.079C4.15854 12.341 3.68806 12.2972 3.42383 11.9801C3.15866 11.6619 3.20165 11.189 3.51986 10.9238L4 11.5C3.51986 10.9238 3.51952 10.9241 3.51986 10.9238L3.52127 10.9227L3.5229 10.9213L3.52683 10.9181L3.53743 10.9095C3.5457 10.9029 3.55641 10.8944 3.56956 10.8842C3.59587 10.8639 3.632 10.8367 3.67813 10.8038C3.77041 10.7379 3.90272 10.6487 4.07663 10.5444C4.35746 10.3759 4.74641 10.1679 5.25 9.95395L5.25 9.448C5.24997 8.54952 5.24995 7.8003 5.32991 7.20552C5.41432 6.57773 5.59999 6.01093 6.05546 5.55546C6.51093 5.09999 7.07773 4.91432 7.70552 4.82991C8.3003 4.74995 9.04952 4.74997 9.948 4.75ZM6.75 9.42643C8.06523 9.0488 9.80125 8.75 12 8.75C14.1987 8.75 15.9348 9.04881 17.25 9.42643C17.2499 8.50287 17.2467 7.87604 17.1835 7.40539C17.1214 6.94393 17.0142 6.74643 16.8839 6.61612C16.7536 6.4858 16.5561 6.37858 16.0946 6.31654C15.6116 6.25159 14.964 6.25 14 6.25H10C9.03599 6.25 8.38843 6.25159 7.90539 6.31654C7.44393 6.37858 7.24643 6.4858 7.11612 6.61612C6.9858 6.74643 6.87858 6.94393 6.81654 7.40539C6.75326 7.87604 6.75012 8.50287 6.75 9.42643ZM2 13.25C2.41421 13.25 2.75 13.5858 2.75 14C2.75 15.9068 2.75159 17.2615 2.88976 18.2892C3.02502 19.2952 3.27869 19.8749 3.7019 20.2981C4.12511 20.7213 4.70476 20.975 5.71085 21.1102C6.73851 21.2484 8.09318 21.25 10 21.25C10.4142 21.25 10.75 21.5858 10.75 22C10.75 22.4142 10.4142 22.75 10 22.75H9.94359C8.10583 22.75 6.65019 22.75 5.51098 22.5969C4.33856 22.4392 3.38961 22.1071 2.64124 21.3588C1.89288 20.6104 1.56076 19.6614 1.40314 18.489C1.24997 17.3498 1.24998 15.8942 1.25 14.0564L1.25 14C1.25 13.5858 1.58579 13.25 2 13.25ZM6 13.25C6.41421 13.25 6.75 13.5858 6.75 14V14.5C6.75 15.464 6.75159 16.1116 6.81654 16.5946C6.87858 17.0561 6.9858 17.2536 7.11612 17.3839C7.24643 17.5142 7.44393 17.6214 7.90539 17.6835C8.38843 17.7484 9.03599 17.75 10 17.75H14C14.964 17.75 15.6116 17.7484 16.0946 17.6835C16.5561 17.6214 16.7536 17.5142 16.8839 17.3839C17.0142 17.2536 17.1214 17.0561 17.1835 16.5946C17.2484 16.1116 17.25 15.464 17.25 14.5V14C17.25 13.5858 17.5858 13.25 18 13.25C18.4142 13.25 18.75 13.5858 18.75 14V14.552C18.75 15.4505 18.7501 16.1997 18.6701 16.7945C18.5857 17.4223 18.4 17.9891 17.9445 18.4445C17.4891 18.9 16.9223 19.0857 16.2945 19.1701C15.6997 19.2501 14.9505 19.25 14.052 19.25H9.94801C9.04952 19.25 8.3003 19.2501 7.70552 19.1701C7.07773 19.0857 6.51093 18.9 6.05546 18.4445C5.59999 17.9891 5.41432 17.4223 5.32991 16.7945C5.24995 16.1997 5.24997 15.4505 5.25 14.552L5.25 14C5.25 13.5858 5.58579 13.25 6 13.25ZM22 13.25C22.4142 13.25 22.75 13.5858 22.75 14V14.0564C22.75 15.8942 22.75 17.3498 22.5969 18.489C22.4392 19.6614 22.1071 20.6104 21.3588 21.3588C20.6104 22.1071 19.6614 22.4392 18.489 22.5969C17.3498 22.75 15.8942 22.75 14.0564 22.75H14C13.5858 22.75 13.25 22.4142 13.25 22C13.25 21.5858 13.5858 21.25 14 21.25C15.9068 21.25 17.2615 21.2484 18.2892 21.1102C19.2952 20.975 19.8749 20.7213 20.2981 20.2981C20.7213 19.8749 20.975 19.2952 21.1102 18.2892C21.2484 17.2615 21.25 15.9068 21.25 14C21.25 13.5858 21.5858 13.25 22 13.25Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgObjectScan;
