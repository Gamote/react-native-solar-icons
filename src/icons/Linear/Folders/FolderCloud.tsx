import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFolderCloud = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M2 6.94975C2 6.06722 2 5.62595 2.06935 5.25839C2.37464 3.64031 3.64031 2.37464 5.25839 2.06935C5.62595 2 6.06722 2 6.94975 2C7.33642 2 7.52976 2 7.71557 2.01738C8.51665 2.09229 9.27652 2.40704 9.89594 2.92051C10.0396 3.03961 10.1763 3.17633 10.4497 3.44975L11 4C11.8158 4.81578 12.2237 5.22367 12.7121 5.49543C12.9804 5.64471 13.2651 5.7626 13.5604 5.84678C14.0979 6 14.6747 6 15.8284 6H16.2021C18.8345 6 20.1506 6 21.0062 6.76946C21.0849 6.84024 21.1598 6.91514 21.2305 6.99383C22 7.84935 22 9.16554 22 11.7979V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V6.94975Z"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      d="M12.9524 11.8852C13.1907 11.8072 13.4471 11.7647 13.7143 11.7647C13.9762 11.7647 14.2277 11.8055 14.462 11.8806M10.0465 12.8533C9.939 12.8338 9.82793 12.8235 9.71429 12.8235C8.76751 12.8235 8 13.5346 8 14.4118C8 15.2889 8.76751 16 9.71429 16H13.7143C14.9767 16 16 15.0519 16 13.8824C16 12.9554 15.3572 12.1676 14.462 11.8806M10.0465 12.8533C9.95482 12.6242 9.90476 12.3763 9.90476 12.1176C9.90476 10.9481 10.9281 10 12.1905 10C13.3664 10 14.3348 10.8226 14.462 11.8806M10.0465 12.8533C10.2722 12.8944 10.4821 12.9765 10.6667 13.091"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgFolderCloud;
