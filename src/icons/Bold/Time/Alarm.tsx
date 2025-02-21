import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAlarm = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22C16.8362 22 20.7567 18.1162 20.7567 13.3253C20.7567 8.53446 16.8362 4.65069 12 4.65069C7.16383 4.65069 3.24334 8.53446 3.24334 13.3253C3.24334 18.1162 7.16383 22 12 22ZM12 8.74705C12.403 8.74705 12.7297 9.0707 12.7297 9.46994V13.0259L14.9484 15.2238C15.2334 15.5061 15.2334 15.9638 14.9484 16.2461C14.6634 16.5284 14.2014 16.5284 13.9164 16.2461L11.484 13.8365C11.3472 13.7009 11.2703 13.5171 11.2703 13.3253V9.46994C11.2703 9.0707 11.597 8.74705 12 8.74705Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.2405 2.33986C8.45409 2.67841 8.3502 3.1244 8.00844 3.33599L4.11657 5.74562C3.77481 5.95722 3.32461 5.8543 3.11102 5.51574C2.89742 5.17718 3.00131 4.7312 3.34307 4.5196L7.23494 2.10998C7.5767 1.89838 8.0269 2.0013 8.2405 2.33986Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.7595 2.33985C15.9731 2.0013 16.4233 1.89838 16.7651 2.10998L20.6569 4.5196C20.9987 4.7312 21.1026 5.17719 20.889 5.51574C20.6754 5.8543 20.2252 5.95722 19.8834 5.74562L15.9916 3.33599C15.6498 3.1244 15.5459 2.67841 15.7595 2.33985Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgAlarm;
