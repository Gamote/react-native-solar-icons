import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHiking = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.5 2.75C10.5335 2.75 9.75 3.5335 9.75 4.5C9.75 5.4665 10.5335 6.25 11.5 6.25C12.4665 6.25 13.25 5.4665 13.25 4.5C13.25 3.5335 12.4665 2.75 11.5 2.75ZM8.25 4.5C8.25 2.70507 9.70507 1.25 11.5 1.25C13.2949 1.25 14.75 2.70507 14.75 4.5C14.75 6.29493 13.2949 7.75 11.5 7.75C9.70507 7.75 8.25 6.29493 8.25 4.5ZM19 7.25C19.4142 7.25 19.75 7.58579 19.75 8V10.4943C19.75 10.4978 19.75 10.5014 19.75 10.5049V22C19.75 22.4142 19.4142 22.75 19 22.75C18.5858 22.75 18.25 22.4142 18.25 22V12.1014C17.7655 12.5057 17.38 12.8203 16.9431 12.9798C16.334 13.2022 15.666 13.2022 15.0569 12.9798C14.6042 12.8146 14.2068 12.4828 13.6972 12.0574C13.6666 12.0319 13.6356 12.006 13.6042 11.9798L13.5229 11.912C13.2914 11.7191 13.2006 11.6439 13.0529 11.5412C12.7954 11.362 12.2966 11.1095 11.9998 11.0081C11.9453 10.9894 11.9036 10.9746 11.8715 10.9625C11.8657 10.9602 11.8595 10.9578 11.853 10.9553C11.6736 10.911 11.5571 10.8829 11.4671 10.8656C11.4166 10.856 11.3884 10.8526 11.3754 10.8515C11.3709 10.8529 11.3646 10.8552 11.3563 10.8586C11.3301 10.8695 11.297 10.8872 11.2625 10.9116C11.228 10.9359 11.2001 10.9611 11.1811 10.9822C11.1722 10.992 11.1672 10.9987 11.1649 11.0019C11.1621 11.0092 11.1583 11.0215 11.1534 11.0496C11.1439 11.1029 11.1364 11.1738 11.1217 11.3208L10.9595 12.9425C10.866 13.8771 10.8554 14.127 10.9207 14.3356C10.9589 14.4577 11.0156 14.5732 11.0888 14.6781C11.2139 14.8574 11.4181 15.0019 12.2146 15.4997C12.2501 15.5219 12.2853 15.5438 12.3199 15.5655C13.1158 16.0625 13.6671 16.4067 14.0654 16.9015C14.2651 17.1497 14.4324 17.4222 14.5632 17.7127C14.8241 18.2918 14.8814 18.9392 14.9642 19.8739C14.9678 19.9146 14.9715 19.9558 14.9752 19.9976L15.1474 21.9335C15.1841 22.3461 14.8794 22.7103 14.4669 22.747C14.0543 22.7838 13.6901 22.4791 13.6533 22.0665L13.4811 20.1306C13.3826 19.0236 13.3394 18.6479 13.1956 18.3287C13.1171 18.1545 13.0167 17.9909 12.8969 17.842C12.6774 17.5693 12.362 17.3607 11.4196 16.7717C11.3819 16.7481 11.3447 16.7249 11.3079 16.702C10.6781 16.3092 10.1822 16 9.85885 15.5368C9.69775 15.306 9.57303 15.0519 9.48904 14.7833C9.32044 14.2441 9.37917 13.6626 9.45375 12.9242C9.45811 12.8811 9.46252 12.8374 9.46694 12.7932L9.6291 11.1716C9.63069 11.1557 9.63225 11.1397 9.63383 11.1236C9.65637 10.8934 9.68125 10.6394 9.80332 10.3722C9.93937 10.0745 10.1771 9.84157 10.3979 9.68582C10.6187 9.53007 10.9178 9.38431 11.244 9.35606C11.428 9.34012 11.5998 9.36376 11.7495 9.39245C11.8932 9.42 12.0647 9.46243 12.2563 9.50983L12.2817 9.51611C12.2836 9.5166 12.2915 9.51858 12.3005 9.52104C12.3051 9.5223 12.3155 9.52519 12.3286 9.5293C12.3373 9.53203 12.3708 9.54258 12.4111 9.56067C12.4163 9.563 12.423 9.56608 12.431 9.56995C12.4439 9.57455 12.4615 9.58069 12.4849 9.58868C12.9137 9.73524 13.5377 10.0511 13.9096 10.3099C14.1147 10.4527 14.2517 10.5668 14.4711 10.7496L14.4831 10.7597L14.5645 10.8275C15.213 11.3679 15.3971 11.5072 15.5713 11.5708C15.8482 11.6719 16.1518 11.6719 16.4287 11.5708C16.6029 11.5072 16.787 11.3679 17.4355 10.8275L18.25 10.1487V8C18.25 7.58579 18.5858 7.25 19 7.25ZM12.3752 10.9443C12.3723 10.9454 12.3704 10.9462 12.3697 10.9464C12.3677 10.9472 12.3665 10.9476 12.3663 10.9477C12.366 10.9478 12.3695 10.9465 12.3752 10.9443ZM11.8291 9.54724C11.8298 9.54696 11.8305 9.54669 11.8311 9.54645C11.8356 9.54471 11.8444 9.54139 11.838 9.54381C11.8372 9.54412 11.8338 9.54538 11.8291 9.54724ZM8.71151 9.76283C8.8425 10.1558 8.63013 10.5805 8.23717 10.7115L6.56517 11.2688C6.07836 11.4311 5.75 11.8867 5.75 12.3998C5.75 12.4836 5.79731 12.5601 5.87221 12.5976L8.33541 13.8292C8.70589 14.0144 8.85606 14.4649 8.67082 14.8354C8.48558 15.2059 8.03507 15.3561 7.66459 15.1708L5.20139 13.9392C4.61832 13.6477 4.25 13.0517 4.25 12.3998C4.25 11.241 4.9915 10.2123 6.09083 9.84582L7.76283 9.28849C8.15579 9.1575 8.58053 9.36987 8.71151 9.76283ZM9.41603 16.876C9.76067 17.1057 9.8538 17.5714 9.62404 17.916L6.62404 22.416C6.39427 22.7607 5.92862 22.8538 5.58397 22.624C5.23933 22.3943 5.1462 21.9286 5.37596 21.584L8.37596 17.084C8.60573 16.7393 9.07138 16.6462 9.41603 16.876Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgHiking;
