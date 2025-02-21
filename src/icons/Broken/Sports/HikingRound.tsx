import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHikingRound = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle cx={11.5} cy={4.5} r={2.5} stroke="black" strokeWidth={1.5} />
    <Path
      d="M9 17.5C9 17.5 8.57441 19.1192 8 20C7.39661 20.9252 6 22 6 22"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M10.2099 12.901L10.9561 12.9756L10.9561 12.9756L10.2099 12.901ZM10.1413 13.5871L9.39498 13.5125L9.39498 13.5125L10.1413 13.5871ZM18.5767 10.8528L18.0965 10.2766L18.0965 10.2766L18.5767 10.8528ZM19.4801 11.0762C19.7983 10.811 19.8413 10.3381 19.5761 10.0199C19.311 9.70165 18.838 9.65866 18.5198 9.92383L19.4801 11.0762ZM11.2041 15.7526L10.8066 16.3886L10.8066 16.3886L11.2041 15.7526ZM11.5374 15.9609L11.9349 15.3249L11.9349 15.3249L11.5374 15.9609ZM14.2573 20.3926L15.0044 20.3261L15.0044 20.3261L14.2573 20.3926ZM13.6533 22.0665C13.69 22.4791 14.0542 22.7838 14.4668 22.747C14.8794 22.7103 15.1841 22.3461 15.1474 21.9335L13.6533 22.0665ZM13 11.5L12.6141 12.1431C12.6306 12.153 12.6474 12.1622 12.6646 12.1708L13 11.5ZM9.46359 12.8264L9.39498 13.5125L10.8875 13.6617L10.9561 12.9756L9.46359 12.8264ZM19.0568 11.4289L19.4801 11.0762L18.5198 9.92383L18.0965 10.2766L19.0568 11.4289ZM10.8066 16.3886L11.1399 16.5969L11.9349 15.3249L11.6016 15.1166L10.8066 16.3886ZM13.5103 20.4591L13.6533 22.0665L15.1474 21.9335L15.0044 20.3261L13.5103 20.4591ZM12.6646 12.1708C14.7535 13.2153 17.2626 12.9241 19.0568 11.4289L18.0965 10.2766C16.7602 11.3902 14.8913 11.6071 13.3354 10.8292L12.6646 12.1708ZM11.1399 16.5969C12.4916 17.4417 13.369 18.8713 13.5103 20.4591L15.0044 20.3261C14.8215 18.2701 13.6852 16.4188 11.9349 15.3249L11.1399 16.5969ZM9.39498 13.5125C9.28007 14.6616 9.82723 15.7765 10.8066 16.3886L11.6016 15.1166C11.1062 14.807 10.8294 14.243 10.8875 13.6617L9.39498 13.5125ZM10.9561 12.9756C11.0363 12.1741 11.9234 11.7287 12.6141 12.1431L13.3858 10.8569C11.7518 9.87643 9.65321 10.9302 9.46359 12.8264L10.9561 12.9756Z"
      fill="black"
    />
    <Path
      d="M19 15V8M19 22V19"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M9 10L6.6114 10.1437C5.87495 10.1881 5.24941 10.6999 5.05846 11.4143C4.89043 12.043 5.09113 12.713 5.57688 13.1448L7.66367 15"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgHikingRound;
