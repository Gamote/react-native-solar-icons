import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCupStar = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M12.0002 16C6.24021 16 5.21983 10.2595 5.03907 5.70647C4.98879 4.43998 4.96365 3.80673 5.43937 3.22083C5.91508 2.63494 6.48445 2.53887 7.62318 2.34674C8.74724 2.15709 10.2166 2 12.0002 2C13.7837 2 15.2531 2.15709 16.3771 2.34674C17.5159 2.53887 18.0852 2.63494 18.5609 3.22083C19.0367 3.80673 19.0115 4.43998 18.9612 5.70647C18.7805 10.2595 17.7601 16 12.0002 16Z"
      fill={props.primaryColor}
    />
    <Path
      d="M17.6404 12.422L20.4569 10.8572C21.2093 10.4392 21.5855 10.2302 21.7927 9.87809C21.9999 9.52598 21.9999 9.09561 21.9999 8.23487L21.9999 8.16234C22 7.11873 22 6.59692 21.7168 6.20408C21.4337 5.81124 20.9387 5.64623 19.9486 5.31621L19 5L18.9831 5.08464C18.9784 5.27391 18.9702 5.48006 18.9612 5.70645C18.8729 7.93085 18.5842 10.4387 17.6404 12.422Z"
      fill={props.primaryColor}
    />
    <Path
      d="M5.03907 5.70647C5.12739 7.93096 5.41612 10.4389 6.36008 12.4223L3.54305 10.8572C2.79063 10.4392 2.41442 10.2302 2.20723 9.87809C2.00004 9.52598 2.00003 9.09561 2 8.23487L2 8.16234C1.99997 7.11874 1.99996 6.59692 2.2831 6.20408C2.56624 5.81124 3.06126 5.64623 4.05132 5.31621L4.99994 5L5.01728 5.08671C5.02196 5.27541 5.03011 5.4809 5.03907 5.70647Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.25 22C5.25 21.5858 5.58579 21.25 6 21.25H18C18.4142 21.25 18.75 21.5858 18.75 22C18.75 22.4142 18.4142 22.75 18 22.75H6C5.58579 22.75 5.25 22.4142 5.25 22Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M15.4577 21.25H8.54248L8.8393 19.5002C8.93278 19.0327 9.3432 18.6963 9.81988 18.6963H14.1803C14.657 18.6963 15.0674 19.0327 15.1609 19.5002L15.4577 21.25Z"
      fill={props.primaryColor}
    />
    <Path
      d="M12.0002 16.0002C11.7406 16.0002 11.4907 15.9885 11.25 15.9658V18.6963H12.75V15.9658C12.5094 15.9885 12.2596 16.0002 12.0002 16.0002Z"
      fill={props.primaryColor}
    />
    <Path
      d="M11.1459 6.02251C11.5259 5.34084 11.7159 5 12 5C12.2841 5 12.4741 5.34084 12.8541 6.02251L12.9524 6.19887C13.0603 6.39258 13.1143 6.48944 13.1985 6.55334C13.2827 6.61725 13.3875 6.64097 13.5972 6.68841L13.7881 6.73161C14.526 6.89857 14.895 6.98205 14.9828 7.26432C15.0706 7.54659 14.819 7.84072 14.316 8.42898L14.1858 8.58117C14.0429 8.74833 13.9714 8.83191 13.9392 8.93531C13.9071 9.03872 13.9179 9.15023 13.9395 9.37327L13.9592 9.57632C14.0352 10.3612 14.0733 10.7536 13.8435 10.9281C13.6136 11.1025 13.2682 10.9435 12.5773 10.6254L12.3986 10.5431C12.2022 10.4527 12.1041 10.4075 12 10.4075C11.8959 10.4075 11.7978 10.4527 11.6014 10.5431L11.4227 10.6254C10.7318 10.9435 10.3864 11.1025 10.1565 10.9281C9.92674 10.7536 9.96476 10.3612 10.0408 9.57632L10.0605 9.37327C10.0821 9.15023 10.0929 9.03872 10.0608 8.93531C10.0286 8.83191 9.95713 8.74833 9.81418 8.58117L9.68403 8.42898C9.18097 7.84072 8.92945 7.54659 9.01723 7.26432C9.10501 6.98205 9.47396 6.89857 10.2119 6.73161L10.4028 6.68841C10.6125 6.64097 10.7173 6.61725 10.8015 6.55334C10.8857 6.48944 10.9397 6.39258 11.0476 6.19887L11.1459 6.02251Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgCupStar;
