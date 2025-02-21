import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCompass = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM13.8489 9.18125C13.244 9.34164 12.4287 9.66626 11.2543 10.136C10.7129 10.3526 10.6121 10.4036 10.538 10.4686C10.5134 10.4902 10.4902 10.5134 10.4686 10.538C10.4036 10.6121 10.3526 10.7129 10.136 11.2543C9.66626 12.4287 9.34164 13.244 9.18125 13.8489C9.01425 14.4789 9.0961 14.6399 9.12239 14.6786C9.17553 14.7568 9.24298 14.8242 9.32118 14.8774C9.35986 14.9037 9.52089 14.9855 10.1508 14.8185C10.7558 14.6581 11.571 14.3335 12.7454 13.8637C13.2868 13.6472 13.3876 13.5961 13.4617 13.5311L13.9562 14.095L13.4617 13.5311C13.4864 13.5095 13.5095 13.4864 13.5311 13.4617L14.095 13.9562L13.5311 13.4617C13.5961 13.3876 13.6472 13.2868 13.8637 12.7454C14.3335 11.571 14.6581 10.7558 14.8185 10.1508C14.9855 9.52089 14.9037 9.35986 14.8774 9.32118C14.8242 9.24298 14.7568 9.17553 14.6786 9.12239C14.6399 9.0961 14.4789 9.01425 13.8489 9.18125ZM13.4646 7.73134C14.1544 7.54845 14.9007 7.45976 15.5217 7.88173C15.7563 8.04115 15.9586 8.2435 16.118 8.47811C16.54 9.09908 16.4513 9.84532 16.2684 10.5352C16.0817 11.2394 15.7215 12.14 15.2766 13.2522L15.2565 13.3025C15.2452 13.3307 15.234 13.3586 15.223 13.3864C15.0598 13.7958 14.9155 14.1582 14.6589 14.4507C14.5941 14.5246 14.5246 14.5941 14.4507 14.6589C14.1582 14.9155 13.7958 15.0598 13.3864 15.223C13.3587 15.234 13.3307 15.2452 13.3025 15.2564L13.024 14.5601L13.3025 15.2565L13.2522 15.2766C12.14 15.7215 11.2394 16.0817 10.5352 16.2684C9.84532 16.4513 9.09908 16.54 8.47811 16.118L8.89964 15.4977L8.47811 16.118C8.2435 15.9586 8.04115 15.7563 7.88173 15.5217C7.45976 14.9007 7.54845 14.1544 7.73134 13.4646C7.91804 12.7603 8.27829 11.8597 8.72318 10.7476L8.74331 10.6973C8.75458 10.6691 8.76572 10.6411 8.77677 10.6134C8.93992 10.2039 9.08429 9.8416 9.34085 9.54904C9.40562 9.47517 9.47517 9.40562 9.54904 9.34085C9.8416 9.08429 10.2039 8.93992 10.6134 8.77677C10.6411 8.76572 10.6691 8.75458 10.6973 8.74331L10.7476 8.72318C11.8598 8.27828 12.7603 7.91804 13.4646 7.73134Z"
      fill="black"
    />
  </Svg>
);
export default SvgCompass;
