import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMonitorSmartphone = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.94358 1.25L15.5344 1.25C16.6726 1.24999 17.5745 1.24999 18.3005 1.31174C19.0431 1.3749 19.6701 1.50674 20.2391 1.81087C21.0677 2.25373 21.7463 2.93234 22.1891 3.76087C22.4933 4.32985 22.6251 4.95693 22.6883 5.69952C22.75 6.42548 22.75 7.32741 22.75 8.46554V8.5C22.75 8.91421 22.4142 9.25 22 9.25C21.5858 9.25 21.25 8.91421 21.25 8.5C21.25 7.31978 21.2494 6.4816 21.1937 5.82665C21.1387 5.18101 21.0344 4.78261 20.8662 4.46796C20.5632 3.90107 20.0989 3.43677 19.532 3.13376C19.2174 2.96557 18.819 2.86126 18.1734 2.80634C17.5184 2.75063 16.6802 2.75 15.5 2.75H10C8.09318 2.75 6.73851 2.75159 5.71085 2.88976C4.70476 3.02502 4.12511 3.27869 3.7019 3.7019C3.27869 4.12511 3.02503 4.70476 2.88976 5.71085C2.75159 6.73851 2.75 8.09318 2.75 10V11C2.75 11.459 2.75016 11.8736 2.75371 12.25H11C11.4142 12.25 11.75 12.5858 11.75 13C11.75 13.4142 11.4142 13.75 11 13.75H2.80673C2.81924 13.9063 2.83451 14.0533 2.85315 14.1919C2.9518 14.9257 3.13225 15.3142 3.40901 15.591C3.68577 15.8678 4.07435 16.0482 4.80812 16.1469C5.56347 16.2484 6.56459 16.25 8 16.25H11C11.4142 16.25 11.75 16.5858 11.75 17V22C11.75 22.4142 11.4142 22.75 11 22.75H8C7.58579 22.75 7.25 22.4142 7.25 22C7.25 21.5858 7.58579 21.25 8 21.25H10.25V17.75H7.94513C6.57754 17.75 5.47522 17.75 4.60825 17.6335C3.70814 17.5125 2.95027 17.2536 2.34835 16.6517C1.74643 16.0497 1.48754 15.2919 1.36652 14.3918C1.31805 14.0312 1.28974 13.6299 1.2732 13.1858C1.25805 13.1264 1.25 13.0641 1.25 13C1.25 12.9518 1.25454 12.9047 1.26323 12.859C1.24998 12.3176 1.24999 11.7174 1.25 11.0549L1.25 9.94358C1.24998 8.10582 1.24997 6.65019 1.40314 5.51098C1.56076 4.33856 1.89288 3.38961 2.64124 2.64124C3.38961 1.89288 4.33856 1.56076 5.51098 1.40314C6.65019 1.24997 8.10582 1.24998 9.94358 1.25ZM17.948 10.25H18.052C18.9505 10.25 19.6997 10.2499 20.2945 10.3299C20.9223 10.4143 21.4891 10.6 21.9445 11.0555C22.4 11.5109 22.5857 12.0777 22.6701 12.7055C22.7501 13.3003 22.75 14.0495 22.75 14.948V18.052C22.75 18.9505 22.7501 19.6997 22.6701 20.2945C22.5857 20.9223 22.4 21.4891 21.9445 21.9445C21.4891 22.4 20.9223 22.5857 20.2945 22.6701C19.6997 22.7501 18.9505 22.75 18.052 22.75H17.948C17.0495 22.75 16.3003 22.7501 15.7055 22.6701C15.0777 22.5857 14.5109 22.4 14.0555 21.9445C13.6 21.4891 13.4143 20.9223 13.3299 20.2945C13.2499 19.6997 13.25 18.9505 13.25 18.052V14.948C13.25 14.0495 13.2499 13.3003 13.3299 12.7055C13.4143 12.0777 13.6 11.5109 14.0555 11.0555C14.5109 10.6 15.0777 10.4143 15.7055 10.3299C16.3003 10.2499 17.0495 10.25 17.948 10.25ZM15.9054 11.8165C15.4439 11.8786 15.2464 11.9858 15.1161 12.1161C14.9858 12.2464 14.8786 12.4439 14.8165 12.9054C14.7516 13.3884 14.75 14.036 14.75 15V18C14.75 18.964 14.7516 19.6116 14.8165 20.0946C14.8786 20.5561 14.9858 20.7536 15.1161 20.8839C15.2464 21.0142 15.4439 21.1214 15.9054 21.1835C16.3884 21.2484 17.036 21.25 18 21.25C18.964 21.25 19.6116 21.2484 20.0946 21.1835C20.5561 21.1214 20.7536 21.0142 20.8839 20.8839C21.0142 20.7536 21.1214 20.5561 21.1835 20.0946C21.2484 19.6116 21.25 18.964 21.25 18V15C21.25 14.036 21.2484 13.3884 21.1835 12.9054C21.1214 12.4439 21.0142 12.2464 20.8839 12.1161C20.7536 11.9858 20.5561 11.8786 20.0946 11.8165C19.6116 11.7516 18.964 11.75 18 11.75C17.036 11.75 16.3884 11.7516 15.9054 11.8165ZM16.25 20C16.25 19.5858 16.5858 19.25 17 19.25H19C19.4142 19.25 19.75 19.5858 19.75 20C19.75 20.4142 19.4142 20.75 19 20.75H17C16.5858 20.75 16.25 20.4142 16.25 20Z"
      fill="black"
    />
  </Svg>
);
export default SvgMonitorSmartphone;
