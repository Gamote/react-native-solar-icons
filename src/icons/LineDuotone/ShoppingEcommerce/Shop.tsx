import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgShop = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M9.50004 2H14.5L15.1518 8.51737C15.3382 10.382 13.874 12 12 12C10.1261 12 8.66184 10.382 8.8483 8.51737L9.50004 2Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M3.32975 5.35133C3.50783 4.46093 3.59687 4.01573 3.77791 3.65484C4.15938 2.89439 4.84579 2.33168 5.66628 2.10675C6.05567 2 6.50969 2 7.41771 2H9.50002L8.77549 9.24527C8.61911 10.8091 7.30318 12 5.73155 12C3.8011 12 2.35324 10.2339 2.73183 8.34093L3.32975 5.35133Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M20.6703 5.35133C20.4922 4.46093 20.4031 4.01573 20.2221 3.65484C19.8406 2.89439 19.1542 2.33168 18.3337 2.10675C17.9443 2 17.4903 2 16.5823 2H14.5L15.2245 9.24527C15.3809 10.8091 16.6968 12 18.2685 12C20.1989 12 21.6468 10.2339 21.2682 8.34093L20.6703 5.35133Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      opacity={0.5}
      d="M8.75 21.5C8.75 21.9142 9.08579 22.25 9.5 22.25C9.91421 22.25 10.25 21.9142 10.25 21.5H8.75ZM13.75 21.5C13.75 21.9142 14.0858 22.25 14.5 22.25C14.9142 22.25 15.25 21.9142 15.25 21.5H13.75ZM13.75 16.201L14.125 15.5514L14.125 15.5514L13.75 16.201ZM14.299 16.75L13.6495 17.125L13.6495 17.125L14.299 16.75ZM9.70096 16.75L10.3505 17.125L10.3505 17.125L9.70096 16.75ZM10.25 16.201L10.625 16.8505L10.625 16.8505L10.25 16.201ZM12.5 21.25H11.5V22.75H12.5V21.25ZM4.25 14V11H2.75V14H4.25ZM19.75 11V14H21.25V11H19.75ZM11.5 21.25C9.59318 21.25 8.23851 21.2484 7.21085 21.1102C6.20476 20.975 5.62511 20.7213 5.2019 20.2981L4.14124 21.3588C4.88961 22.1071 5.83855 22.4392 7.01098 22.5969C8.16182 22.7516 9.63558 22.75 11.5 22.75V21.25ZM2.75 14C2.75 15.8644 2.74841 17.3382 2.90313 18.489C3.06076 19.6614 3.39288 20.6104 4.14124 21.3588L5.2019 20.2981C4.77869 19.8749 4.52502 19.2952 4.38976 18.2892C4.25159 17.2615 4.25 15.9068 4.25 14H2.75ZM12.5 22.75C14.3644 22.75 15.8382 22.7516 16.989 22.5969C18.1614 22.4392 19.1104 22.1071 19.8588 21.3588L18.7981 20.2981C18.3749 20.7213 17.7952 20.975 16.7892 21.1102C15.7615 21.2484 14.4068 21.25 12.5 21.25V22.75ZM19.75 14C19.75 15.9068 19.7484 17.2615 19.6102 18.2892C19.475 19.2952 19.2213 19.8749 18.7981 20.2981L19.8588 21.3588C20.6071 20.6104 20.9392 19.6614 21.0969 18.489C21.2516 17.3382 21.25 15.8644 21.25 14H19.75ZM10.25 21.5V18.5H8.75V21.5H10.25ZM13.75 18.5V21.5H15.25V18.5H13.75ZM12 16.75C12.4811 16.75 12.7918 16.7507 13.0273 16.7721C13.2524 16.7925 13.3341 16.8269 13.375 16.8505L14.125 15.5514C13.8178 15.3741 13.4918 15.308 13.1626 15.2782C12.8438 15.2493 12.4535 15.25 12 15.25V16.75ZM15.25 18.5C15.25 18.0465 15.2507 17.6562 15.2218 17.3374C15.192 17.0082 15.1259 16.6822 14.9486 16.375L13.6495 17.125C13.6731 17.1659 13.7075 17.2476 13.7279 17.4727C13.7493 17.7082 13.75 18.0189 13.75 18.5H15.25ZM13.375 16.8505C13.489 16.9163 13.5837 17.011 13.6495 17.125L14.9486 16.375C14.7511 16.033 14.467 15.7489 14.125 15.5514L13.375 16.8505ZM10.25 18.5C10.25 18.0189 10.2507 17.7082 10.2721 17.4727C10.2925 17.2476 10.3269 17.1659 10.3505 17.125L9.05144 16.375C8.87407 16.6822 8.80802 17.0082 8.77818 17.3374C8.74928 17.6562 8.75 18.0465 8.75 18.5H10.25ZM12 15.25C11.5465 15.25 11.1562 15.2493 10.8374 15.2782C10.5082 15.308 10.1822 15.3741 9.875 15.5514L10.625 16.8505C10.6659 16.8269 10.7476 16.7925 10.9727 16.7721C11.2082 16.7507 11.5189 16.75 12 16.75V15.25ZM10.3505 17.125C10.4163 17.011 10.511 16.9163 10.625 16.8505L9.875 15.5514C9.53296 15.7489 9.24892 16.033 9.05144 16.375L10.3505 17.125Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgShop;
