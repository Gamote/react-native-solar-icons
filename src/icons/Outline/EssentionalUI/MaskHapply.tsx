import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMaskHapply = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M7.17 9.335c.124-.247.587-.585 1.33-.585s1.206.338 1.33.585a.75.75 0 1 0 1.34-.67C10.713 7.747 9.604 7.25 8.5 7.25s-2.212.497-2.67 1.415a.75.75 0 1 0 1.34.67M15.5 8.75c-.743 0-1.206.338-1.33.585a.75.75 0 0 1-1.34-.67c.458-.918 1.566-1.415 2.67-1.415s2.212.497 2.67 1.415a.75.75 0 1 1-1.34.67c-.124-.247-.587-.585-1.33-.585"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="m8.835 2.212-1.11-.185c-1.033-.172-1.888-.315-2.57-.331-.716-.017-1.379.098-1.933.567-.553.468-.776 1.104-.876 1.812-.096.675-.096 1.54-.096 2.587V12c0 5.964 4.624 8.814 7.355 9.976l.027.012c.34.144.658.28 1.024.371.386.096.796.137 1.344.137s.958-.04 1.344-.137c.366-.091.684-.227 1.024-.372l.027-.01c2.731-1.163 7.355-4.013 7.355-9.977V6.662c0-1.047 0-1.912-.096-2.587-.1-.709-.323-1.344-.876-1.812-.554-.47-1.217-.584-1.933-.567-.682.016-1.537.159-2.57.331l-1.11.185c-1.664.277-2.414.4-3.165.4s-1.501-.123-3.165-.4M4.192 3.407c.154-.13.384-.225.927-.211.563.013 1.312.136 2.415.32l1.128.188c1.57.262 2.448.408 3.338.408s1.767-.146 3.338-.408l1.128-.188c1.103-.184 1.852-.307 2.415-.32.543-.014.773.08.927.211.154.13.285.342.361.879.08.557.081 1.315.081 2.433V12c0 5.017-3.854 7.495-6.442 8.596-.371.158-.587.248-.827.308-.23.057-.51.092-.981.092s-.751-.035-.981-.092c-.24-.06-.456-.15-.827-.308C7.604 19.495 3.75 17.016 3.75 12V6.719c0-1.118.002-1.876.081-2.433.076-.537.207-.749.361-.879"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M7.957 13.483a.753.753 0 0 0 .028 1.063l.03.027.06.05q.075.062.203.152c.173.118.422.266.751.412.663.29 1.64.563 2.971.563 1.33 0 2.308-.272 2.97-.563.33-.146.58-.294.752-.412a3 3 0 0 0 .262-.202l.02-.018.008-.006.003-.003.001-.002h.001a.75.75 0 0 0-1.026-1.095l-.006.005-.01.008a2 2 0 0 1-.101.076c-.101.069-.268.17-.507.275-.475.21-1.247.437-2.367.437s-1.892-.228-2.367-.437a3 3 0 0 1-.59-.335l-.019-.016-.014-.012a.75.75 0 0 0-1.053.033"
    />
  </Svg>
);
export default SvgMaskHapply;
