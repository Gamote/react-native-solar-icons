import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgIPhone = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9436 1.25H12.0564C13.8942 1.24998 15.3498 1.24997 16.489 1.40314C17.6614 1.56076 18.6104 1.89288 19.3588 2.64124C20.1071 3.38961 20.4392 4.33856 20.5969 5.51098C20.75 6.65019 20.75 8.10583 20.75 9.94359V14.0564C20.75 15.8942 20.75 17.3498 20.5969 18.489C20.4392 19.6614 20.1071 20.6104 19.3588 21.3588C18.6104 22.1071 17.6614 22.4392 16.489 22.5969C15.3498 22.75 13.8942 22.75 12.0564 22.75H11.9436C10.1058 22.75 8.65019 22.75 7.51098 22.5969C6.33856 22.4392 5.38961 22.1071 4.64124 21.3588C3.89288 20.6104 3.56076 19.6614 3.40314 18.489C3.24997 17.3498 3.24998 15.8942 3.25 14.0564V9.94358C3.24998 8.10582 3.24997 6.65019 3.40314 5.51098C3.56076 4.33856 3.89288 3.38961 4.64124 2.64124C5.38961 1.89288 6.33856 1.56076 7.51098 1.40314C8.65019 1.24997 10.1058 1.24998 11.9436 1.25ZM6.81398 3.07317C6.32495 3.21933 5.97972 3.42409 5.7019 3.7019C5.27869 4.12511 5.02502 4.70476 4.88976 5.71085C4.75159 6.73851 4.75 8.09318 4.75 10V14C4.75 15.9068 4.75159 17.2615 4.88976 18.2892C5.02502 19.2952 5.27869 19.8749 5.7019 20.2981C6.12511 20.7213 6.70476 20.975 7.71085 21.1102C8.73851 21.2484 10.0932 21.25 12 21.25C13.9068 21.25 15.2615 21.2484 16.2892 21.1102C17.2952 20.975 17.8749 20.7213 18.2981 20.2981C18.7213 19.8749 18.975 19.2952 19.1102 18.2892C19.2484 17.2615 19.25 15.9068 19.25 14V10C19.25 8.09318 19.2484 6.73851 19.1102 5.71085C18.975 4.70476 18.7213 4.12511 18.2981 3.7019C18.0203 3.42409 17.6751 3.21933 17.186 3.07317C16.5243 4.06685 16.0616 4.75765 15.3737 5.18514C15.2365 5.27042 15.0938 5.34674 14.9468 5.41363C14.2046 5.75112 13.367 5.75069 12.1604 5.75006C12.1077 5.75003 12.0542 5.75 12 5.75C11.9458 5.75 11.8923 5.75003 11.8396 5.75006C10.633 5.75069 9.79542 5.75112 9.05325 5.41363C8.90616 5.34674 8.76355 5.27042 8.62631 5.18514C7.93837 4.75765 7.47571 4.06686 6.81398 3.07317ZM8.45129 2.81609C8.89537 3.45963 9.1279 3.73081 9.418 3.91108C9.50035 3.96225 9.58592 4.00805 9.67417 4.04818C10.0831 4.23412 10.5676 4.25 12 4.25C13.4324 4.25 13.9169 4.23412 14.3258 4.04818C14.4141 4.00804 14.4997 3.96225 14.582 3.91108C14.8721 3.73081 15.1046 3.45963 15.5487 2.81609C14.6285 2.75096 13.4807 2.75 12 2.75C10.5193 2.75 9.37152 2.75096 8.45129 2.81609ZM8.25 19C8.25 18.5858 8.58579 18.25 9 18.25H15C15.4142 18.25 15.75 18.5858 15.75 19C15.75 19.4142 15.4142 19.75 15 19.75H9C8.58579 19.75 8.25 19.4142 8.25 19Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgIPhone;
