import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRunning2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle
      cx={18.5}
      cy={4.5}
      r={2.5}
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M9 17L7.99923 18.2009C7.262 19.0856 6.89338 19.5279 6.38945 19.764C5.88552 20 5.30973 20 4.15813 20H3"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M13.6501 22.0001C13.6501 22.4143 13.9859 22.7501 14.4001 22.7501C14.8143 22.7501 15.1501 22.4143 15.1501 22.0001H13.6501ZM12.5646 16.246L13.0175 15.6482L13.0175 15.6482L12.5646 16.246ZM13.749 17.2613L14.3362 16.7947L14.3362 16.7947L13.749 17.2613ZM14.306 18.382L15.0325 18.1956L15.0325 18.1956L14.306 18.382ZM13.5043 11.5552C13.8108 11.2766 13.8333 10.8022 13.5547 10.4957C13.2761 10.1892 12.8017 10.1667 12.4953 10.4453L13.5043 11.5552ZM10.8521 13.1647L11.5553 13.4255L11.5553 13.4255L10.8521 13.1647ZM10.9217 14.7203L10.2446 15.0429L10.2446 15.0429L10.9217 14.7203ZM13.6501 19.9391V22.0001H15.1501V19.9391H13.6501ZM12.1117 16.8438C12.7754 17.3466 12.999 17.5229 13.1618 17.7278L14.3362 16.7947C14.028 16.4067 13.6189 16.1038 13.0175 15.6482L12.1117 16.8438ZM15.1501 19.9391C15.1501 19.1846 15.1556 18.6756 15.0325 18.1956L13.5795 18.5683C13.6445 18.8219 13.6501 19.1065 13.6501 19.9391H15.1501ZM13.1618 17.7278C13.3586 17.9755 13.5009 18.2619 13.5795 18.5683L15.0325 18.1956C14.9015 17.6849 14.6642 17.2076 14.3362 16.7947L13.1618 17.7278ZM12.4953 10.4453C12.0756 10.8268 11.5504 11.2816 11.1412 11.6689C10.9319 11.867 10.7315 12.0671 10.5679 12.2557C10.4194 12.4268 10.2413 12.6547 10.1489 12.9039L11.5553 13.4255C11.5476 13.4463 11.5694 13.3902 11.7009 13.2387C11.8172 13.1046 11.9768 12.9434 12.1724 12.7583C12.5729 12.3792 13.0368 11.9801 13.5043 11.5552L12.4953 10.4453ZM13.0175 15.6482C12.53 15.2789 12.1998 15.028 11.9621 14.8164C11.7285 14.6085 11.6412 14.4867 11.5988 14.3977L10.2446 15.0429C10.4118 15.3937 10.6681 15.6728 10.9648 15.9368C11.2572 16.1971 11.6436 16.4892 12.1117 16.8438L13.0175 15.6482ZM10.1489 12.9039C9.89054 13.6006 9.92508 14.3721 10.2446 15.0429L11.5988 14.3977C11.4536 14.0928 11.4379 13.7421 11.5553 13.4255L10.1489 12.9039Z"
      fill={props.primaryColor}
    />
    <Path
      d="M5.80619 9.47277C6.16633 9.26814 6.2924 8.81031 6.08777 8.45017C5.88315 8.09002 5.42531 7.96395 5.06517 8.16858L5.80619 9.47277ZM3.62949 8.98431C3.26935 9.18893 3.14328 9.64677 3.34791 10.0069C3.55253 10.367 4.01037 10.4931 4.37051 10.2885L3.62949 8.98431ZM13.4066 7.35719L13.1211 8.05073L13.1211 8.05073L13.4066 7.35719ZM10.4467 6.64289L10.3924 5.89487L10.3924 5.89487L10.4467 6.64289ZM21 12.75C21.4142 12.75 21.75 12.4142 21.75 12C21.75 11.5858 21.4142 11.25 21 11.25V12.75ZM15.7681 9.53622L15.0973 9.87163L15.0973 9.87163L15.7681 9.53622ZM8.73808 6.27294C8.34994 6.41759 8.15257 6.8495 8.29722 7.23764C8.44188 7.62577 8.87379 7.82315 9.26192 7.67849L8.73808 6.27294ZM5.06517 8.16858L3.62949 8.98431L4.37051 10.2885L5.80619 9.47277L5.06517 8.16858ZM13.6921 6.66365C12.3481 6.1104 11.6111 5.80624 10.3924 5.89487L10.5011 7.39092C11.3248 7.33103 11.7575 7.48943 13.1211 8.05073L13.6921 6.66365ZM19.7546 12.75H21V11.25H19.7546V12.75ZM15.0973 9.87163C15.9793 11.6357 17.7823 12.75 19.7546 12.75V11.25C18.3505 11.25 17.0669 10.4567 16.4389 9.20082L15.0973 9.87163ZM16.4389 9.20082C15.8611 8.0451 14.8765 7.15119 13.6921 6.66365L13.1211 8.05073C13.9811 8.40473 14.6864 9.04993 15.0973 9.87163L16.4389 9.20082ZM9.26192 7.67849C9.71397 7.51002 10.1059 7.41966 10.5011 7.39092L10.3924 5.89487C9.83019 5.93575 9.29773 6.06436 8.73808 6.27294L9.26192 7.67849Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgRunning2;
