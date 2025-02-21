import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFolderFavouriteStar = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M22 14V11.7979C22 9.16554 22 7.84935 21.2305 6.99383C21.1598 6.91514 21.0849 6.84024 21.0062 6.76946C20.1506 6 18.8345 6 16.2021 6H15.8284C14.6747 6 14.0979 6 13.5604 5.84678C13.2651 5.7626 12.9804 5.64471 12.7121 5.49543C12.2237 5.22367 11.8158 4.81578 11 4L10.4497 3.44975C10.1763 3.17633 10.0396 3.03961 9.89594 2.92051C9.27652 2.40704 8.51665 2.09229 7.71557 2.01738C7.52976 2 7.33642 2 6.94975 2C6.06722 2 5.62595 2 5.25839 2.06935C3.64031 2.37464 2.37464 3.64031 2.06935 5.25839C2 5.62595 2 6.06722 2 6.94975V14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14Z"
      fill={props.primaryColor}
    />
    <Path
      d="M12.9524 11.1989L12.8541 11.0225C12.4741 10.3408 12.2841 10 12 10C11.7159 10 11.5259 10.3408 11.1459 11.0225L11.0476 11.1989L11.0476 11.1989C10.9397 11.3926 10.8857 11.4894 10.8015 11.5533C10.7173 11.6172 10.6125 11.641 10.4028 11.6884L10.2119 11.7316C9.47396 11.8986 9.10501 11.982 9.01723 12.2643C8.92945 12.5466 9.18097 12.8407 9.68403 13.429L9.81418 13.5812C9.95713 13.7483 10.0286 13.8319 10.0608 13.9353C10.0929 14.0387 10.0821 14.1502 10.0605 14.3733L10.0408 14.5763C9.96476 15.3612 9.92674 15.7536 10.1565 15.9281C10.3864 16.1025 10.7318 15.9435 11.4227 15.6254L11.6014 15.5431C11.7978 15.4527 11.8959 15.4075 12 15.4075C12.1041 15.4075 12.2022 15.4527 12.3986 15.5431L12.5773 15.6254L12.5773 15.6254C13.2682 15.9435 13.6136 16.1025 13.8435 15.9281C14.0733 15.7536 14.0352 15.3612 13.9592 14.5763L13.9395 14.3733C13.9179 14.1502 13.9071 14.0387 13.9392 13.9353C13.9714 13.8319 14.0429 13.7483 14.1858 13.5812L14.316 13.429C14.819 12.8407 15.0706 12.5466 14.9828 12.2643C14.895 11.982 14.526 11.8986 13.7881 11.7316L13.5972 11.6884C13.3875 11.641 13.2827 11.6172 13.1985 11.5533C13.1143 11.4894 13.0603 11.3926 12.9524 11.1989L12.9524 11.1989Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgFolderFavouriteStar;
