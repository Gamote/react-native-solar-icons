import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBell = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.0001 1.25C7.71986 1.25 4.25007 4.71979 4.25007 9V9.7041C4.25007 10.401 4.04378 11.0824 3.6572 11.6622L2.50859 13.3851C1.1755 15.3848 2.19321 18.1028 4.5118 18.7351C5.26741 18.9412 6.0294 19.1155 6.79581 19.2581L6.79771 19.2632C7.5667 21.3151 9.62201 22.75 12 22.75C14.378 22.75 16.4333 21.3151 17.2023 19.2632L17.2042 19.2581C17.9706 19.1155 18.7327 18.9412 19.4883 18.7351C21.8069 18.1028 22.8246 15.3848 21.4915 13.3851L20.3429 11.6622C19.9564 11.0824 19.7501 10.401 19.7501 9.7041V9C19.7501 4.71979 16.2803 1.25 12.0001 1.25ZM15.3765 19.537C13.1335 19.805 10.8665 19.8049 8.62352 19.5369C9.33447 20.5585 10.571 21.25 12 21.25C13.429 21.25 14.6655 20.5585 15.3765 19.537ZM5.75007 9C5.75007 5.54822 8.54829 2.75 12.0001 2.75C15.4518 2.75 18.2501 5.54822 18.2501 9V9.7041C18.2501 10.6972 18.544 11.668 19.0949 12.4943L20.2435 14.2172C21.0086 15.3649 20.4245 16.925 19.0937 17.288C14.4494 18.5546 9.55073 18.5546 4.90647 17.288C3.57564 16.925 2.9915 15.3649 3.75667 14.2172L4.90527 12.4943C5.45612 11.668 5.75007 10.6972 5.75007 9.7041V9Z"
      fill="black"
    />
  </Svg>
);
export default SvgBell;
