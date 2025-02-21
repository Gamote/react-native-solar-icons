import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSleepingSquare = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.375 4.64952C16.0163 4.85663 15.5576 4.73372 15.3505 4.375C15.1434 4.01628 15.2663 3.55759 15.625 3.35048L19.0891 1.35048C19.3518 1.19881 19.68 1.22032 19.9207 1.40499C20.1614 1.58965 20.2671 1.90111 20.1886 2.19412L19.1931 5.90926L21.0891 4.81459C21.4478 4.60748 21.9065 4.73039 22.1136 5.0891C22.3208 5.44782 22.1978 5.90652 21.8391 6.11362L18.375 8.11362C18.1123 8.2653 17.7841 8.24379 17.5435 8.05912C17.3028 7.87445 17.1971 7.563 17.2756 7.26999L18.271 3.55485L16.375 4.64952Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.6729 6.14954C12.3142 5.94244 12.1912 5.48374 12.3984 5.12503C12.6055 4.76631 13.0642 4.6434 13.4229 4.85051L15.1549 5.85051C15.4176 6.00218 15.5631 6.29717 15.5235 6.59792C15.4839 6.89867 15.267 7.14596 14.974 7.22447L13.991 7.48789L14.1549 7.58256C14.5136 7.78966 14.6366 8.24836 14.4294 8.60708C14.2223 8.9658 13.7636 9.0887 13.4049 8.88159L11.6729 7.88159C11.4102 7.72992 11.2647 7.43493 11.3043 7.13418C11.3439 6.83343 11.5607 6.58614 11.8538 6.50763L12.8368 6.24421L12.6729 6.14954Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.9747 3.01951C13.9168 3.1393 13.8698 3.26381 13.8339 3.39146C12.8228 3.01316 11.657 3.40914 11.0994 4.37507C10.9197 4.68632 10.8228 5.02264 10.8019 5.35854C10.2705 5.71207 9.90347 6.28292 9.81717 6.93844C9.69838 7.8407 10.1348 8.72566 10.9229 9.18068L12.655 10.1807C13.7311 10.802 15.1072 10.4333 15.7285 9.35713C15.8824 9.09059 15.9756 8.80565 16.0123 8.51834C16.1605 8.79803 16.3689 9.04854 16.6304 9.24916C17.3523 9.80315 18.337 9.86769 19.1251 9.41267L20.9065 8.38414C21 9.60864 21 11.1161 21 13C21 17.714 21 20.0711 19.5355 21.5355C18.0711 23 15.714 23 11 23C6.28595 23 3.92893 23 2.46447 21.5355C1 20.0711 1 17.714 1 13C1 8.28595 1 5.92893 2.46447 4.46447C3.92893 3 6.28595 3 11 3C12.1175 3 13.1026 3 13.9747 3.01951ZM13.0576 11.4985C12.7807 11.1905 12.3064 11.1654 11.9985 11.4424C11.6905 11.7194 11.6654 12.1936 11.9424 12.5015C12.6113 13.2453 13.4902 13.75 14.5 13.75C15.5098 13.75 16.3887 13.2453 17.0576 12.5015C17.3346 12.1936 17.3095 11.7194 17.0015 11.4424C16.6936 11.1654 16.2194 11.1905 15.9424 11.4985C15.4775 12.0153 14.9775 12.25 14.5 12.25C14.0226 12.25 13.5225 12.0153 13.0576 11.4985ZM4.99847 11.4424C5.30644 11.1654 5.78065 11.1905 6.05764 11.4985C6.5225 12.0153 7.02255 12.25 7.50001 12.25C7.97746 12.25 8.47751 12.0153 8.94237 11.4985C9.21936 11.1905 9.69357 11.1654 10.0015 11.4424C10.3095 11.7194 10.3346 12.1936 10.0576 12.5015C9.38867 13.2453 8.5098 13.75 7.50001 13.75C6.49021 13.75 5.61135 13.2453 4.94237 12.5015C4.66538 12.1936 4.69049 11.7194 4.99847 11.4424ZM12 17C12 17.5523 11.5523 18 11 18C10.4477 18 10 17.5523 10 17C10 16.4477 10.4477 16 11 16C11.5523 16 12 16.4477 12 17Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgSleepingSquare;
