import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHikingMinimalistic = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M14 5.5C14 6.88071 12.8807 8 11.5 8C10.1193 8 9 6.88071 9 5.5C9 4.11929 10.1193 3 11.5 3C12.8807 3 14 4.11929 14 5.5Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 6.25C19.4142 6.25 19.75 6.58579 19.75 7V21C19.75 21.4142 19.4142 21.75 19 21.75C18.5858 21.75 18.25 21.4142 18.25 21V10.9941C16.5564 11.9799 14.456 12.0665 12.6646 11.1708C12.6474 11.1622 12.6306 11.153 12.6141 11.1431C11.9234 10.7287 11.0363 11.1741 10.9561 11.9756L10.8875 12.6617C10.8294 13.243 11.1062 13.807 11.6016 14.1166L11.9349 14.3249C13.6852 15.4188 14.8215 17.2701 15.0044 19.3261L15.1474 20.9335C15.1841 21.3461 14.8794 21.7103 14.4668 21.747C14.0542 21.7838 13.69 21.4791 13.6533 21.0665L13.5103 19.4591C13.369 17.8713 12.4916 16.4417 11.1399 15.5969L10.8066 15.3886C9.82723 14.7765 9.28007 13.6616 9.39498 12.5125L9.46359 11.8264C9.65214 9.9409 11.7281 8.88835 13.3581 9.84044C14.9095 10.605 16.7667 10.3848 18.0965 9.27658L18.25 9.14869V7C18.25 6.58579 18.5858 6.25 19 6.25Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M9.19069 15.7748C9.59129 15.8801 9.83069 16.2902 9.7254 16.6908L9.72479 16.6931L9.72356 16.6978L9.71923 16.7139L9.70334 16.7719C9.68959 16.8215 9.66959 16.8922 9.64388 16.9793C9.59255 17.1531 9.51791 17.3944 9.4242 17.6652C9.24256 18.19 8.9684 18.8883 8.62825 19.4099C8.27086 19.9579 7.70978 20.5114 7.2771 20.9031C7.05385 21.1052 6.85091 21.2765 6.70355 21.3975C6.62971 21.4581 6.56943 21.5064 6.52703 21.54L6.4773 21.5791L6.46344 21.5899L6.45819 21.594C6.12993 21.8466 5.65829 21.7858 5.40567 21.4576C5.1531 21.1294 5.21434 20.6586 5.54242 20.406L5.54468 20.4042L5.55444 20.3966L5.59542 20.3644C5.63176 20.3356 5.6853 20.2927 5.75182 20.2381C5.88518 20.1286 6.0691 19.9734 6.27043 19.7911C6.6869 19.4141 7.12582 18.9677 7.37183 18.5905C7.60608 18.2313 7.83192 17.6796 8.00669 17.1746C8.09118 16.9305 8.15883 16.7119 8.20525 16.5546C8.22841 16.4761 8.24615 16.4134 8.25792 16.371L8.271 16.3232L8.27404 16.3119L8.27466 16.3096C8.38005 15.9091 8.79015 15.6695 9.19069 15.7748Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgHikingMinimalistic;
