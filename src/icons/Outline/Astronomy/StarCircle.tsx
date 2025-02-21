import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStarCircle = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 8.90049C11.8811 9.07699 11.7345 9.33717 11.5164 9.72853L11.3853 9.96367C11.3755 9.98113 11.3655 9.99937 11.3551 10.0183C11.2465 10.2156 11.099 10.4836 10.8555 10.6685C10.6074 10.8568 10.3082 10.9227 10.0944 10.9697C10.0741 10.9742 10.0545 10.9785 10.0359 10.9827L9.78132 11.0403C9.31615 11.1456 9.02625 11.2129 8.83146 11.281C8.9519 11.462 9.15408 11.701 9.48204 12.0845L9.65557 12.2874C9.66833 12.3024 9.68164 12.3178 9.69537 12.3337C9.84312 12.5047 10.0397 12.7322 10.1305 13.0244C10.2204 13.3135 10.19 13.6126 10.1667 13.8412C10.1645 13.8626 10.1624 13.8833 10.1605 13.9034L10.1343 14.1741C10.0874 14.6577 10.0585 14.9706 10.0593 15.1919C10.2516 15.1238 10.5148 15.0042 10.9166 14.8192L11.1549 14.7095C11.1725 14.7014 11.1908 14.6928 11.21 14.6839C11.4078 14.5913 11.6885 14.4599 12 14.4599C12.3115 14.4599 12.5922 14.5913 12.7901 14.6839C12.8092 14.6928 12.8275 14.7014 12.8451 14.7095L13.0834 14.8192C13.4852 15.0042 13.7484 15.1238 13.9407 15.1919C13.9415 14.9706 13.9126 14.6577 13.8657 14.1741L13.8395 13.9034C13.8376 13.8833 13.8355 13.8626 13.8333 13.8412C13.81 13.6126 13.7796 13.3135 13.8695 13.0244C13.9603 12.7322 14.1569 12.5047 14.3046 12.3337C14.3184 12.3178 14.3317 12.3024 14.3444 12.2874L14.518 12.0845C14.8459 11.701 15.0481 11.462 15.1685 11.281C14.9737 11.2129 14.6838 11.1456 14.2187 11.0403L13.9641 10.9827C13.9455 10.9785 13.9259 10.9742 13.9056 10.9697C13.6918 10.9227 13.3926 10.8568 13.1445 10.6685C12.901 10.4836 12.7535 10.2156 12.6449 10.0183C12.6345 9.99937 12.6245 9.98113 12.6147 9.96367L12.4836 9.72853C12.2655 9.33717 12.1189 9.07699 12 8.90049ZM14.1529 15.2502C14.1541 15.2502 14.1547 15.2503 14.1547 15.2503ZM9.84533 15.2503C9.84535 15.2503 9.84594 15.2502 9.84706 15.2502ZM10.8831 7.88484C11.0988 7.60321 11.451 7.25 12 7.25C12.549 7.25 12.9012 7.60321 13.1169 7.88484C13.3245 8.15604 13.5371 8.53751 13.7683 8.9524C13.7768 8.96761 13.7853 8.98287 13.7938 8.99817L13.9249 9.23332C13.9617 9.29934 13.9902 9.35037 14.0155 9.39412C14.0324 9.42352 14.0458 9.44573 14.0565 9.46286C14.0733 9.46751 14.0946 9.47302 14.1219 9.47967C14.1689 9.49111 14.2235 9.50351 14.2952 9.51971L14.5497 9.5773C14.5671 9.58123 14.5844 9.58514 14.6016 9.58905C15.0485 9.69009 15.4657 9.78439 15.7807 9.90852C16.1219 10.043 16.5343 10.2854 16.6932 10.7964C16.8496 11.2992 16.6571 11.7332 16.4626 12.0421C16.2799 12.3323 15.9979 12.662 15.6916 13.0201L15.4844 13.2623C15.4357 13.3193 15.3981 13.3633 15.3662 13.4018C15.3401 13.4334 15.322 13.4562 15.309 13.4734C15.3107 13.5291 15.3179 13.6075 15.3325 13.7587L15.3637 14.0803C15.4102 14.5596 15.4526 14.997 15.4373 15.3415C15.4213 15.6994 15.3369 16.1785 14.9114 16.5015C14.4737 16.8337 13.9847 16.7689 13.6378 16.6695C13.3132 16.5765 12.9231 16.3969 12.5049 16.2042C12.4886 16.1967 12.4724 16.1892 12.4561 16.1817L12.2177 16.072C12.1507 16.0411 12.0994 16.0175 12.0548 15.9979C12.0329 15.9882 12.0149 15.9805 12 15.9744C11.9851 15.9805 11.9671 15.9882 11.9452 15.9979C11.9006 16.0175 11.8493 16.0411 11.7823 16.072L11.5439 16.1817C11.5276 16.1892 11.5114 16.1967 11.4951 16.2042C11.0769 16.3969 10.6868 16.5765 10.3622 16.6695C10.0153 16.7689 9.52629 16.8337 9.08858 16.5015C8.66311 16.1785 8.57866 15.6994 8.56272 15.3415C8.54737 14.997 8.58981 14.5596 8.63631 14.0804L8.66749 13.7587C8.68214 13.6075 8.68928 13.5291 8.69097 13.4734C8.67803 13.4562 8.65995 13.4334 8.63378 13.4018C8.60187 13.3633 8.56431 13.3193 8.51557 13.2623L8.34204 13.0594C8.33081 13.0463 8.3196 13.0332 8.30843 13.0201C8.00207 12.662 7.72006 12.3323 7.53738 12.0421C7.34293 11.7332 7.15045 11.2992 7.3068 10.7964C7.46569 10.2854 7.87805 10.043 8.21935 9.90852C8.53433 9.78439 8.95146 9.69009 9.39837 9.58905C9.41563 9.58514 9.43295 9.58123 9.4503 9.5773L9.70484 9.51971C9.77646 9.50351 9.83113 9.49112 9.87814 9.47967C9.90542 9.47302 9.92669 9.46751 9.94352 9.46287C9.95424 9.44573 9.96756 9.42352 9.98455 9.39412C10.0098 9.35037 10.0383 9.29934 10.0751 9.23332L10.2062 8.99817C10.2147 8.98287 10.2232 8.96761 10.2317 8.95239C10.4629 8.53751 10.6755 8.15603 10.8831 7.88484Z"
      fill="black"
    />
  </Svg>
);
export default SvgStarCircle;
