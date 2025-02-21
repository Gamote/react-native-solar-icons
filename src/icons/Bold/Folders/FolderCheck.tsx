import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFolderCheck = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.06935 5.25839C2 5.62595 2 6.06722 2 6.94975V14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14V11.7979C22 9.16554 22 7.84935 21.2305 6.99383C21.1598 6.91514 21.0849 6.84024 21.0062 6.76946C20.1506 6 18.8345 6 16.2021 6H15.8284C14.6747 6 14.0979 6 13.5604 5.84678C13.2651 5.7626 12.9804 5.64471 12.7121 5.49543C12.2237 5.22367 11.8158 4.81578 11 4L10.4497 3.44975C10.1763 3.17633 10.0396 3.03961 9.89594 2.92051C9.27652 2.40704 8.51665 2.09229 7.71557 2.01738C7.52976 2 7.33642 2 6.94975 2C6.06722 2 5.62595 2 5.25839 2.06935C3.64031 2.37464 2.37464 3.64031 2.06935 5.25839ZM14.4983 11.4394C14.8079 11.7146 14.8357 12.1887 14.5606 12.4983L11.8939 15.4983C11.7516 15.6584 11.5476 15.75 11.3333 15.75C11.1191 15.75 10.9151 15.6584 10.7728 15.4983L9.43944 13.9983C9.16426 13.6887 9.19214 13.2146 9.50173 12.9394C9.81131 12.6643 10.2854 12.6921 10.5606 13.0017L11.3333 13.8711L13.4394 11.5017C13.7146 11.1921 14.1887 11.1643 14.4983 11.4394Z"
      fill="black"
    />
  </Svg>
);
export default SvgFolderCheck;
