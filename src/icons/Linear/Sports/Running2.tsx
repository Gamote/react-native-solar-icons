import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRunning2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle cx={18.5} cy={4.5} r={2.5} stroke="black" strokeWidth={1.5} />
    <Path
      d="M9 17L7.99923 18.2009C7.262 19.0856 6.89338 19.5279 6.38945 19.764C5.88552 20 5.30973 20 4.15813 20H3"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M13.65 22.0001C13.65 22.4143 13.9858 22.7501 14.4 22.7501C14.8142 22.7501 15.15 22.4143 15.15 22.0001H13.65ZM12.5646 16.246L13.0175 15.6482L13.0175 15.6482L12.5646 16.246ZM13.749 17.2613L14.3362 16.7947L14.3362 16.7947L13.749 17.2613ZM14.3059 18.382L15.0324 18.1956L15.0324 18.1956L14.3059 18.382ZM13.5042 11.5552C13.8107 11.2766 13.8333 10.8022 13.5546 10.4957C13.276 10.1892 12.8017 10.1667 12.4952 10.4453L13.5042 11.5552ZM10.852 13.1647L11.5552 13.4255L11.5552 13.4255L10.852 13.1647ZM10.9217 14.7203L10.2446 15.0429L10.2446 15.0429L10.9217 14.7203ZM13.65 19.9391V22.0001H15.15V19.9391H13.65ZM12.1117 16.8438C12.7753 17.3466 12.9989 17.5229 13.1617 17.7278L14.3362 16.7947C14.0279 16.4067 13.6189 16.1038 13.0175 15.6482L12.1117 16.8438ZM15.15 19.9391C15.15 19.1846 15.1555 18.6756 15.0324 18.1956L13.5794 18.5683C13.6445 18.8219 13.65 19.1065 13.65 19.9391H15.15ZM13.1617 17.7278C13.3585 17.9755 13.5008 18.2619 13.5794 18.5683L15.0324 18.1956C14.9014 17.6849 14.6642 17.2076 14.3362 16.7947L13.1617 17.7278ZM12.4952 10.4453C12.0756 10.8268 11.5504 11.2816 11.1412 11.6689C10.9318 11.867 10.7314 12.0671 10.5678 12.2557C10.4193 12.4268 10.2412 12.6547 10.1488 12.9039L11.5552 13.4255C11.5475 13.4463 11.5693 13.3902 11.7008 13.2387C11.8172 13.1046 11.9768 12.9434 12.1723 12.7583C12.5728 12.3792 13.0368 11.9801 13.5042 11.5552L12.4952 10.4453ZM13.0175 15.6482C12.53 15.2789 12.1997 15.028 11.962 14.8164C11.7285 14.6085 11.6411 14.4867 11.5988 14.3977L10.2446 15.0429C10.4117 15.3937 10.6681 15.6728 10.9647 15.9368C11.2571 16.1971 11.6436 16.4892 12.1117 16.8438L13.0175 15.6482ZM10.1488 12.9039C9.89048 13.6006 9.92502 14.3721 10.2446 15.0429L11.5988 14.3977C11.4535 14.0928 11.4378 13.7421 11.5552 13.4255L10.1488 12.9039Z"
      fill="black"
    />
    <Path
      d="M5.43568 8.82067L5.06517 8.16858L5.06517 8.16858L5.43568 8.82067ZM3.62949 8.98431C3.26935 9.18893 3.14328 9.64677 3.34791 10.0069C3.55253 10.367 4.01037 10.4931 4.37051 10.2885L3.62949 8.98431ZM13.4066 7.35719L13.1211 8.05073L13.1211 8.05073L13.4066 7.35719ZM10.4467 6.64289L10.3924 5.89487L10.3924 5.89487L10.4467 6.64289ZM21 12.75C21.4142 12.75 21.75 12.4142 21.75 12C21.75 11.5858 21.4142 11.25 21 11.25V12.75ZM15.7681 9.53622L15.0973 9.87163L15.0973 9.87163L15.7681 9.53622ZM5.06517 8.16858L3.62949 8.98431L4.37051 10.2885L5.80619 9.47277L5.06517 8.16858ZM13.6921 6.66365C12.3481 6.1104 11.6111 5.80624 10.3924 5.89487L10.5011 7.39092C11.3248 7.33103 11.7575 7.48943 13.1211 8.05073L13.6921 6.66365ZM5.80619 9.47277C8.30813 8.05121 9.35849 7.47401 10.5011 7.39092L10.3924 5.89487C8.83282 6.00827 7.4432 6.81743 5.06517 8.16858L5.80619 9.47277ZM19.7546 12.75H21V11.25H19.7546V12.75ZM15.0973 9.87163C15.9793 11.6357 17.7823 12.75 19.7546 12.75V11.25C18.3505 11.25 17.0669 10.4567 16.4389 9.20082L15.0973 9.87163ZM16.4389 9.20082C15.8611 8.0451 14.8765 7.15119 13.6921 6.66365L13.1211 8.05073C13.9811 8.40473 14.6864 9.04993 15.0973 9.87163L16.4389 9.20082Z"
      fill="black"
    />
  </Svg>
);
export default SvgRunning2;
