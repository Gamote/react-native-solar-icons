import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVideoLibrary = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.98966 10.91C10.4482 10.609 11.0657 10.5541 11.6048 10.8884L14.9764 12.9785C15.5136 13.3116 15.75 13.8874 15.75 14.4102C15.75 14.933 15.5136 15.5088 14.9764 15.8418L11.6048 17.932C11.0657 18.2662 10.4482 18.2114 9.98966 17.9103C9.539 17.6144 9.25 17.0934 9.25 16.5003V12.32C9.25 11.727 9.539 11.2059 9.98966 10.91ZM10.8129 12.1639C10.7945 12.176 10.75 12.2203 10.75 12.32V16.5003C10.75 16.6 10.7945 16.6443 10.8129 16.6564L10.8142 16.6572L14.186 14.5669C14.2072 14.5538 14.25 14.5085 14.25 14.4102C14.25 14.3118 14.2072 14.2665 14.186 14.2534L10.8145 12.1633L10.8129 12.1639Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.69935 1.25001C8.4795 1.24995 8.31094 1.2499 8.16359 1.26571C6.80943 1.41104 5.77295 2.52304 5.71005 3.87007C4.51917 4.22559 3.67058 5.3275 3.65528 6.5913C3.05445 6.77164 2.53621 7.05606 2.11196 7.51432C1.45997 8.21857 1.25792 9.08649 1.25023 10.1003C1.24283 11.075 1.41651 12.3067 1.63219 13.8363L2.07118 16.9499C2.23979 18.146 2.37676 19.1176 2.58989 19.879C2.81286 20.6756 3.14152 21.331 3.75003 21.8349C4.35372 22.3347 5.06993 22.5502 5.91647 22.6518C6.73501 22.75 7.76474 22.75 9.04682 22.75H14.9531C16.2352 22.75 17.265 22.75 18.0835 22.6518C18.9301 22.5502 19.6463 22.3347 20.25 21.8349C20.8585 21.331 21.1871 20.6756 21.4101 19.879C21.6232 19.1176 21.7602 18.146 21.9288 16.9499L22.3678 13.8363C22.5835 12.3067 22.7572 11.075 22.7498 10.1003C22.7421 9.08649 22.54 8.21857 21.888 7.51432C21.4637 7.05595 20.9453 6.77151 20.3443 6.59118C20.3289 5.3275 19.4805 4.22571 18.2897 3.87013C18.2268 2.52307 17.1903 1.41104 15.8362 1.26571C15.6888 1.2499 15.5203 1.24995 15.3004 1.25001H8.69935ZM18.8105 6.32781C18.6734 5.72018 18.1306 5.25001 17.4617 5.25001H6.53787C5.86896 5.25001 5.32618 5.72019 5.18902 6.32785C6.11481 6.24999 7.24973 6.25 8.61594 6.25001H15.384C16.75 6.25 17.8848 6.24999 18.8105 6.32781ZM16.7677 3.75001C16.6611 3.22633 16.2263 2.8162 15.6761 2.75715C15.6198 2.75111 15.5396 2.75001 15.2588 2.75001H8.74099C8.46013 2.75001 8.37993 2.75111 8.32365 2.75715C7.77344 2.8162 7.33862 3.22633 7.2321 3.75001H16.7677ZM3.21267 8.53336C3.51557 8.20618 3.97106 7.98917 4.85612 7.87145C5.75726 7.75159 6.96357 7.75001 8.67239 7.75001H15.3276C17.0364 7.75001 18.2427 7.75159 19.1439 7.87145C20.0289 7.98917 20.4844 8.20618 20.7873 8.53336C21.0832 8.85293 21.2436 9.28782 21.2498 10.1117C21.2563 10.9618 21.1002 12.0828 20.8738 13.6883L20.4509 16.6883C20.2731 17.9491 20.1486 18.821 19.9656 19.4747C19.7894 20.1042 19.582 20.4405 19.2934 20.6795C18.9999 20.9225 18.6058 21.0784 17.9048 21.1625C17.1861 21.2488 16.2465 21.25 14.9046 21.25H9.09536C7.75347 21.25 6.81393 21.2488 6.09519 21.1625C5.39417 21.0784 5.00014 20.9225 4.70664 20.6795C4.41795 20.4405 4.21058 20.1042 4.03437 19.4747C3.8514 18.821 3.7269 17.9491 3.54913 16.6883L3.12616 13.6883C2.89981 12.0828 2.74373 10.9618 2.75018 10.1117C2.75644 9.28782 2.91681 8.85293 3.21267 8.53336Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgVideoLibrary;
