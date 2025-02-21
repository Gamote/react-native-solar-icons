import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSyringe = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G opacity={0.5}>
      <Path
        d="M17.8044 9.10999L14.8901 6.19562C14.0906 5.39614 13.6908 4.9964 13.2363 4.83096C12.7542 4.6555 12.2258 4.6555 11.7437 4.83096C11.2891 4.9964 10.8894 5.39614 10.0899 6.19562L5.54694 10.7386C3.41664 12.8689 3.41664 16.3228 5.54694 18.4531C7.67724 20.5834 11.1311 20.5834 13.2614 18.4531L17.8044 13.9101C18.6039 13.1107 19.0036 12.7109 19.1691 12.2563C19.3445 11.7743 19.3445 11.2458 19.1691 10.7638C19.0036 10.3092 18.6039 9.90946 17.8044 9.10999Z"
        fill={props.primaryColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5561 3.23301C16.8667 2.92233 17.3705 2.92233 17.6811 3.23301L20.7669 6.31881C21.0776 6.6295 21.0776 7.13322 20.7669 7.4439C20.4563 7.75459 19.9525 7.75459 19.6418 7.4439L16.5561 4.3581C16.2454 4.04742 16.2454 3.5437 16.5561 3.23301Z"
        fill={props.primaryColor}
      />
    </G>
    <Path
      d="M17.7292 13.9852L10.0147 6.27075L8.88965 7.39584L16.6041 15.1103L17.7292 13.9852Z"
      fill={props.primaryColor}
    />
    <Path
      d="M5.02573 17.8496C5.18255 18.0601 5.35652 18.2619 5.54763 18.453C5.73867 18.644 5.94037 18.8179 6.15079 18.9747L4.35812 20.7673C4.04745 21.078 3.54373 21.078 3.23303 20.7673C2.92234 20.4567 2.92232 19.9529 3.23299 19.6422L5.02573 17.8496Z"
      fill={props.primaryColor}
    />
    <Path
      d="M16.9093 8.21492L15.7842 7.08984L17.5359 5.33813L18.661 6.46322L16.9093 8.21492Z"
      fill={props.primaryColor}
    />
    <Path
      d="M15.3671 16.3478C15.3671 16.3478 15.3671 16.3479 15.3671 16.3478L12.3065 13.2872C11.9958 12.9765 11.4921 12.9765 11.1814 13.2872C10.8707 13.5979 10.8707 14.1016 11.1814 14.4123L14.242 17.4729C14.242 17.4729 14.242 17.4729 14.242 17.4729L15.3671 16.3478Z"
      fill={props.primaryColor}
    />
    <Path
      d="M13.6314 18.0836C13.6314 18.0836 13.6314 18.0836 13.6314 18.0836L11.8854 16.3377C11.5748 16.027 11.071 16.027 10.7604 16.3377C10.4497 16.6484 10.4497 17.1521 10.7604 17.4628L12.4323 19.1348C12.7251 18.939 13.0032 18.7118 13.2617 18.4533L13.6314 18.0836Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgSyringe;
