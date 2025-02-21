import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTextField = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M7.88383 7.75C7.48429 7.74996 7.11779 7.74992 6.81782 7.78733C6.48915 7.82833 6.13878 7.9242 5.83756 8.19187C5.78618 8.23753 5.73753 8.28618 5.69187 8.33756C5.4242 8.63878 5.32833 8.98915 5.28733 9.31782C5.24992 9.61779 5.24996 9.98428 5.25 10.3838L5.25001 10.425C5.25001 10.8392 5.58579 11.175 6.00001 11.175C6.41422 11.175 6.75001 10.8392 6.75001 10.425C6.75001 9.97047 6.75137 9.69931 6.7758 9.50348C6.80023 9.30765 7.00348 9.2758 7.00348 9.2758C7.19931 9.25137 7.47047 9.25001 7.92501 9.25001H8.25001V14.75H7.00001C6.58579 14.75 6.25001 15.0858 6.25001 15.5C6.25001 15.9142 6.58579 16.25 7.00001 16.25H11C11.4142 16.25 11.75 15.9142 11.75 15.5C11.75 15.0858 11.4142 14.75 11 14.75H9.75001V9.25001H10.075C10.5295 9.25001 10.8007 9.25137 10.9965 9.2758C10.9965 9.2758 11.1998 9.30765 11.2242 9.50348C11.2486 9.69931 11.25 9.97047 11.25 10.425C11.25 10.8392 11.5858 11.175 12 11.175C12.4142 11.175 12.75 10.8392 12.75 10.425L12.75 10.3838C12.7501 9.98428 12.7501 9.61779 12.7127 9.31782C12.6717 8.98915 12.5758 8.63878 12.3081 8.33756C12.2625 8.28618 12.2138 8.23753 12.1624 8.19187C11.8612 7.9242 11.5109 7.82833 11.1822 7.78733C10.8822 7.74992 10.5157 7.74996 10.1162 7.75H7.88383Z"
      fill="black"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.0564 3.25H9.94358C8.10583 3.24998 6.65019 3.24997 5.51098 3.40314C4.33856 3.56076 3.38961 3.89288 2.64124 4.64124C1.89288 5.38961 1.56076 6.33856 1.40314 7.51098C1.24997 8.65019 1.24998 10.1058 1.25 11.9436V12.0564C1.24998 13.8942 1.24997 15.3498 1.40314 16.489C1.56076 17.6614 1.89288 18.6104 2.64124 19.3588C3.38961 20.1071 4.33856 20.4392 5.51098 20.5969C6.65018 20.75 8.1058 20.75 9.94354 20.75H14.0564C15.8942 20.75 17.3498 20.75 18.489 20.5969C19.6614 20.4392 20.6104 20.1071 21.3588 19.3588C22.1071 18.6104 22.4392 17.6614 22.5969 16.489C22.75 15.3498 22.75 13.8942 22.75 12.0565V11.9436C22.75 10.1059 22.75 8.65018 22.5969 7.51098C22.4392 6.33856 22.1071 5.38961 21.3588 4.64124C20.6104 3.89288 19.6614 3.56076 18.489 3.40314C17.3498 3.24997 15.8942 3.24998 14.0564 3.25ZM3.7019 5.7019C4.12511 5.27869 4.70476 5.02502 5.71085 4.88976C6.73851 4.75159 8.09318 4.75 10 4.75H14C15.9068 4.75 17.2615 4.75159 18.2892 4.88976C19.2952 5.02502 19.8749 5.27869 20.2981 5.7019C20.7213 6.12511 20.975 6.70476 21.1102 7.71085C21.2484 8.73851 21.25 10.0932 21.25 12C21.25 13.9068 21.2484 15.2615 21.1102 16.2892C20.975 17.2952 20.7213 17.8749 20.2981 18.2981C19.8749 18.7213 19.2952 18.975 18.2892 19.1102C17.2615 19.2484 15.9068 19.25 14 19.25H10C8.09318 19.25 6.73851 19.2484 5.71085 19.1102C4.70476 18.975 4.12511 18.7213 3.7019 18.2981C3.27869 17.8749 3.02502 17.2952 2.88976 16.2892C2.75159 15.2615 2.75 13.9068 2.75 12C2.75 10.0932 2.75159 8.73851 2.88976 7.71085C3.02502 6.70476 3.27869 6.12511 3.7019 5.7019Z"
      fill="black"
    />
  </Svg>
);
export default SvgTextField;
