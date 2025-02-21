import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSyringe = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M17.7374 13.5354L17.207 13.005L17.207 13.005L17.7374 13.5354ZM17.0909 14.1818L17.6212 14.7121L17.6212 14.7121L17.0909 14.1818ZM14.9091 16.3636L15.4394 16.894L15.4394 16.894L14.9091 16.3636ZM13.4545 17.8182L12.9242 17.2879L12.9242 17.2879L13.4545 17.8182ZM6.71215 11.0758C7.00504 10.7829 7.00504 10.308 6.71215 10.0151C6.41926 9.72223 5.94438 9.72223 5.65149 10.0151L6.71215 11.0758ZM19.0239 11.9763L18.3191 11.7198L18.3191 11.7198L19.0239 11.9763ZM19.7287 10.3127C19.587 9.92343 19.1566 9.72274 18.7674 9.86441C18.3781 10.0061 18.1775 10.4365 18.3191 10.8257L19.7287 10.3127ZM14.9899 6.26263L14.4596 6.79296L14.4596 6.79296L14.9899 6.26263ZM13.4308 4.97611L13.6873 4.27134L13.6873 4.27134L13.4308 4.97611ZM10.4646 6.26263L9.93432 5.7323L9.93432 5.7323L10.4646 6.26263ZM12.0237 4.97611L11.7672 4.27134L11.7672 4.27134L12.0237 4.97611ZM16.3636 7.63636L15.8333 8.16669C16.1262 8.45959 16.6011 8.45959 16.894 8.16669L16.3636 7.63636ZM19.4697 7.43942C19.7626 7.73231 20.2374 7.73231 20.5303 7.43942C20.8232 7.14653 20.8232 6.67165 20.5303 6.37876L19.4697 7.43942ZM17.6212 3.46967C17.3283 3.17678 16.8535 3.17678 16.5606 3.46967C16.2677 3.76256 16.2677 4.23744 16.5606 4.53033L17.6212 3.46967ZM3.46967 19.4697C3.17678 19.7626 3.17678 20.2374 3.46967 20.5303C3.76256 20.8232 4.23744 20.8232 4.53033 20.5303L3.46967 19.4697ZM12.5541 12.9479C12.2612 12.655 11.7863 12.655 11.4934 12.9479C11.2005 13.2408 11.2005 13.7157 11.4934 14.0086L12.5541 12.9479ZM12.7424 18.5303C13.0353 18.8232 13.5102 18.8232 13.8031 18.5303C14.096 18.2374 14.096 17.7626 13.8031 17.4697L12.7424 18.5303ZM12.1571 15.8237C11.8642 15.5308 11.3894 15.5308 11.0965 15.8237C10.8036 16.1166 10.8036 16.5915 11.0965 16.8844L12.1571 15.8237ZM8.46967 7.19694C8.17678 7.48984 8.17678 7.96471 8.46967 8.2576C8.76256 8.5505 9.23744 8.5505 9.53033 8.2576L8.46967 7.19694ZM17.207 13.005L16.5606 13.6515L17.6212 14.7121L18.2677 14.0657L17.207 13.005ZM16.5606 13.6515L14.3788 15.8333L15.4394 16.894L17.6212 14.7121L16.5606 13.6515ZM14.3788 15.8333L12.9242 17.2879L13.9849 18.3485L15.4394 16.894L14.3788 15.8333ZM6.71215 17.2879C4.99673 15.5724 4.99673 12.7912 6.71215 11.0758L5.65149 10.0151C3.35029 12.3163 3.35029 16.0473 5.65149 18.3485L6.71215 17.2879ZM12.9242 17.2879C12.8719 17.3401 12.8187 17.3908 12.7647 17.4398L13.7719 18.5513C13.8442 18.4858 13.9152 18.4182 13.9849 18.3485L12.9242 17.2879ZM12.7647 17.4398C11.0409 19.0017 8.37533 18.951 6.71215 17.2879L5.65149 18.3485C7.88298 20.58 11.4584 20.6476 13.7719 18.5513L12.7647 17.4398ZM18.2677 14.0657C18.6365 13.6969 18.9429 13.3912 19.1736 13.1227C19.4095 12.8482 19.6068 12.5675 19.7287 12.2328L18.3191 11.7198C18.285 11.8135 18.2159 11.9356 18.0359 12.1451C17.8508 12.3606 17.592 12.6201 17.207 13.005L18.2677 14.0657ZM18.3191 10.8257C18.4242 11.1145 18.4242 11.431 18.3191 11.7198L19.7287 12.2328C19.9544 11.6126 19.9544 10.9328 19.7287 10.3127L18.3191 10.8257ZM15.5202 5.7323C15.1515 5.36353 14.8457 5.05708 14.5772 4.82636C14.3027 4.59053 14.0221 4.39317 13.6873 4.27134L13.1743 5.68088C13.2681 5.71501 13.3901 5.78407 13.5997 5.96408C13.8151 6.1492 14.0746 6.40802 14.4596 6.79296L15.5202 5.7323ZM10.995 6.79296C11.3799 6.40802 11.6394 6.1492 11.8549 5.96408C12.0644 5.78407 12.1864 5.71501 12.2802 5.68088L11.7672 4.27134C11.4325 4.39317 11.1518 4.59053 10.8774 4.82636C10.6088 5.05708 10.3031 5.36353 9.93432 5.7323L10.995 6.79296ZM13.6873 4.27134C13.0672 4.04562 12.3874 4.04562 11.7672 4.27134L12.2802 5.68088C12.569 5.57578 12.8855 5.57578 13.1743 5.68088L13.6873 4.27134ZM16.894 8.16669L19.0758 5.98488L18.0151 4.92422L15.8333 7.10603L16.894 8.16669ZM18.0151 5.98488L19.4697 7.43942L20.5303 6.37876L19.0758 4.92422L18.0151 5.98488ZM19.0758 4.92422L17.6212 3.46967L16.5606 4.53033L18.0151 5.98488L19.0758 4.92422ZM5.65149 17.2879L3.46967 19.4697L4.53033 20.5303L6.71215 18.3485L5.65149 17.2879ZM17.6212 13.6515L10.3485 6.37876L9.28785 7.43942L16.5606 14.7121L17.6212 13.6515ZM15.4394 15.8333L12.5541 12.9479L11.4934 14.0086L14.3788 16.894L15.4394 15.8333ZM13.8031 17.4697L13.7986 17.4652L12.7379 18.5259L12.7424 18.5303L13.8031 17.4697ZM13.7986 17.4652L12.1571 15.8237L11.0965 16.8844L12.7379 18.5259L13.7986 17.4652ZM9.53033 8.2576L10.3485 7.43942L9.28785 6.37876L8.46967 7.19694L9.53033 8.2576ZM10.3485 7.43942L10.995 6.79296L9.93432 5.7323L9.28785 6.37876L10.3485 7.43942ZM14.4596 6.79296L15.8333 8.16669L16.894 7.10603L15.5202 5.7323L14.4596 6.79296Z"
      fill="black"
    />
  </Svg>
);
export default SvgSyringe;
