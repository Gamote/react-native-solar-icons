import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCase = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M3 12C3 15.7712 3 19.6569 4.31802 20.8284C5.63604 22 7.75736 22 12 22C16.2426 22 18.364 22 19.682 20.8284C21 19.6569 21 15.7712 21 12"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M14.6603 14.2019L20.6676 12.3997C21.2631 12.2211 21.5609 12.1317 21.7498 11.9176C21.7866 11.8759 21.8199 11.8312 21.8492 11.784C22 11.5415 22 11.2307 22 10.6089C22 8.15877 22 6.9337 21.327 6.10659C21.1977 5.94763 21.0524 5.80233 20.8934 5.67298C20.0663 5 18.8412 5 16.3911 5H7.60893C5.15877 5 3.9337 5 3.10659 5.67298C2.94763 5.80233 2.80233 5.94763 2.67298 6.10659C2 6.9337 2 8.15877 2 10.6089C2 11.2307 2 11.5415 2.15078 11.784C2.18015 11.8312 2.21341 11.8759 2.25021 11.9176C2.43915 12.1317 2.7369 12.2211 3.3324 12.3997L9.33968 14.2019"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M6.5 5C7.32344 4.97913 8.15925 4.45491 8.43944 3.68032C8.44806 3.65649 8.4569 3.62999 8.47457 3.57697L8.50023 3.5C8.54241 3.37344 8.56351 3.31014 8.58608 3.254C8.87427 2.53712 9.54961 2.05037 10.3208 2.00366C10.3812 2 10.4479 2 10.5814 2H13.4191C13.5525 2 13.6192 2 13.6796 2.00366C14.4508 2.05037 15.1262 2.53712 15.4144 3.254C15.4369 3.31014 15.458 3.37343 15.5002 3.5L15.5259 3.57697C15.5435 3.62968 15.5524 3.65656 15.561 3.68032C15.8412 4.45491 16.6766 4.97913 17.5 5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M14 12.5H10C9.72386 12.5 9.5 12.7239 9.5 13V15.1615C9.5 15.3659 9.62448 15.5498 9.8143 15.6257L10.5144 15.9058C11.4681 16.2872 12.5319 16.2872 13.4856 15.9058L14.1857 15.6257C14.3755 15.5498 14.5 15.3659 14.5 15.1615V13C14.5 12.7239 14.2761 12.5 14 12.5Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgCase;
