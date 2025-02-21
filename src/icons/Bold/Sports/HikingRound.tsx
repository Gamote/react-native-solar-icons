import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHikingRound = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M14 4.5C14 5.88071 12.8807 7 11.5 7C10.1193 7 9.00002 5.88071 9.00002 4.5C9.00002 3.11929 10.1193 2 11.5 2C12.8807 2 14 3.11929 14 4.5Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 7.25C19.4142 7.25 19.75 7.58579 19.75 8V10.4943C19.75 10.4978 19.75 10.5014 19.75 10.5049V22C19.75 22.4142 19.4142 22.75 19 22.75C18.5858 22.75 18.25 22.4142 18.25 22V11.9941C16.5565 12.9799 14.456 13.0665 12.6646 12.1708C12.6474 12.1622 12.6306 12.153 12.6142 12.1431C11.9234 11.7287 11.0363 12.1741 10.9562 12.9756L10.8876 13.6617C10.8295 14.243 11.1062 14.807 11.6016 15.1166L11.9349 15.3249C13.6853 16.4188 14.8215 18.2701 15.0044 20.3261L15.1475 21.9335C15.1842 22.3461 14.8795 22.7103 14.4669 22.747C14.0543 22.7838 13.6901 22.4791 13.6534 22.0665L13.5103 20.4591C13.3691 18.8713 12.4916 17.4417 11.1399 16.5969L10.8066 16.3886C9.82728 15.7765 9.28011 14.6616 9.39503 13.5125L9.46364 12.8264C9.65219 10.9409 11.7282 9.88835 13.3582 10.8404C14.9095 11.605 16.7667 11.3848 18.0966 10.2766L18.25 10.1487V8C18.25 7.58579 18.5858 7.25 19 7.25ZM9.74866 9.95495C9.77355 10.3684 9.45854 10.7238 9.04507 10.7486L6.65647 10.8924C6.24345 10.9172 5.89088 11.2045 5.78305 11.608C5.68811 11.9632 5.80172 12.3411 6.07521 12.5843L8.162 14.4395C8.47157 14.7147 8.49942 15.1887 8.22421 15.4983C7.949 15.8079 7.47494 15.8357 7.16538 15.5605L5.07859 13.7053C4.38057 13.0848 4.09278 12.1229 4.33391 11.2207C4.60798 10.1952 5.50649 9.45887 6.56637 9.39509L8.95497 9.25135C9.36843 9.22647 9.72378 9.54148 9.74866 9.95495ZM9.19067 16.7746C9.59128 16.8799 9.83068 17.29 9.72538 17.6906L9.00002 17.5C9.72538 17.6906 9.72538 17.6906 9.72538 17.6906L9.72477 17.693L9.72354 17.6976L9.71921 17.7137L9.70332 17.7718C9.68957 17.8213 9.66957 17.892 9.64386 17.9791C9.59254 18.153 9.51789 18.3942 9.42418 18.665C9.24254 19.1898 8.96838 19.8881 8.62823 20.4097C8.27084 20.9577 7.70977 21.5113 7.27708 21.903C7.05383 22.1051 6.8509 22.2763 6.70353 22.3973C6.62969 22.4579 6.56941 22.5062 6.52702 22.5398L6.47728 22.579L6.46342 22.5897L6.45817 22.5938C6.45817 22.5938 6.45743 22.5944 6.0131 22.017L6.45817 22.5938C6.12991 22.8464 5.65827 22.7857 5.40565 22.4574C5.15308 22.1292 5.21432 21.6585 5.5424 21.4058V21.4058L5.54467 21.404L5.55442 21.3964L5.5954 21.3642C5.63174 21.3354 5.68528 21.2925 5.7518 21.2379C5.88516 21.1284 6.06908 20.9732 6.27041 20.7909C6.68688 20.4139 7.1258 19.9675 7.37181 19.5903C7.60607 19.2311 7.8319 18.6794 8.00667 18.1744C8.09116 17.9303 8.15881 17.7117 8.20523 17.5544C8.22839 17.476 8.24613 17.4133 8.2579 17.3708L8.27098 17.3231L8.27402 17.3117L8.27464 17.3094V17.3094C8.38003 16.9089 8.79014 16.6694 9.19067 16.7746Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgHikingRound;
