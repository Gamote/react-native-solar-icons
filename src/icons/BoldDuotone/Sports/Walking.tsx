import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWalking = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5278 10.7532C12.4897 10.7505 12.4419 10.75 12.2698 10.75H11.1787L11.0875 11.6615C10.9135 13.4019 10.8529 14.1013 11.0084 14.7631C11.1639 15.4248 11.5295 16.024 12.4604 17.5048L15.0353 21.6009C15.2557 21.9515 15.1501 22.4145 14.7995 22.635C14.4488 22.8554 13.9858 22.7498 13.7653 22.3992L11.1905 18.3032C11.166 18.2642 11.1418 18.2256 11.1178 18.1875C10.2829 16.8599 9.76777 16.0407 9.54818 15.1061C9.3286 14.1716 9.42504 13.2086 9.58134 11.6482C9.58583 11.6034 9.59037 11.5581 9.59495 11.5123L9.67108 10.7509C9.16991 10.7535 8.79917 10.7632 8.49986 10.7995C8.12265 10.8453 7.94672 10.925 7.8221 11.025C7.69748 11.1249 7.58154 11.2794 7.45502 11.6377C7.32169 12.0153 7.20688 12.526 7.036 13.295L6.73206 14.6627C6.6422 15.0671 6.24157 15.322 5.83722 15.2321C5.43287 15.1423 5.17792 14.7417 5.26778 14.3373L5.58148 12.9257C5.73998 12.2123 5.8734 11.6118 6.04061 11.1382C6.21804 10.6357 6.45972 10.1948 6.88351 9.85489C7.3073 9.51494 7.79013 9.37466 8.31915 9.31046C8.81767 9.24996 9.43284 9.24998 10.1636 9.25L12.2698 9.25001C12.2781 9.25001 12.2863 9.25 12.2944 9.25C12.4305 9.24998 12.5362 9.24996 12.635 9.25705C13.749 9.33692 14.7041 10.0826 15.0517 11.1439C15.0826 11.2381 15.1082 11.3407 15.1412 11.4727L15.1471 11.4966C15.2033 11.7211 15.22 11.7848 15.2354 11.8294C15.4457 12.4354 16.0806 12.7839 16.7048 12.6359C16.7506 12.6251 16.8134 12.605 17.0329 12.5318L17.7627 12.2885C18.1557 12.1575 18.5804 12.3699 18.7114 12.7628C18.8424 13.1558 18.63 13.5805 18.2371 13.7115L17.5072 13.9548C17.4963 13.9585 17.4855 13.9621 17.4748 13.9656C17.3028 14.023 17.1708 14.067 17.0508 14.0955C15.6776 14.4211 14.2808 13.6543 13.8183 12.321C13.7779 12.2045 13.7442 12.0695 13.7002 11.8936C13.6975 11.8827 13.6947 11.8716 13.6919 11.8604C13.6502 11.6934 13.6381 11.6472 13.6263 11.6109C13.4682 11.1285 13.0341 10.7895 12.5278 10.7532Z"
      fill="black"
    />
    <Path
      opacity={0.5}
      d="M14 4.5C14 5.88071 12.8807 7 11.5 7C10.1193 7 9 5.88071 9 4.5C9 3.11929 10.1193 2 11.5 2C12.8807 2 14 3.11929 14 4.5Z"
      fill="black"
    />
    <Path
      opacity={0.5}
      d="M9.4161 16.876C9.76075 17.1058 9.85388 17.5715 9.62412 17.9161L6.62412 22.4161C6.39435 22.7608 5.9287 22.8539 5.58405 22.6241C5.23941 22.3944 5.14628 21.9287 5.37604 21.5841L8.37604 17.0841C8.60581 16.7394 9.07146 16.6463 9.4161 16.876Z"
      fill="black"
    />
  </Svg>
);
export default SvgWalking;
