import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVolumeCross = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.5145 6.3164C20.892 6.14605 21.3362 6.31403 21.5065 6.6916C21.9736 7.72674 22.5 9.45958 22.5 12C22.5 14.1916 22.1082 15.7829 21.7 16.8442C21.4962 17.374 21.2894 17.7692 21.1275 18.039C21.0466 18.1738 20.977 18.2772 20.9248 18.3504C20.8986 18.3869 20.8769 18.4159 20.8602 18.4375C20.8518 18.4483 20.8448 18.4572 20.8391 18.4643L20.8316 18.4736L20.8286 18.4772L20.8273 18.4788C20.8273 18.4788 20.8262 18.4801 20.25 18L20.8262 18.4801C20.561 18.7983 20.0881 18.8413 19.7699 18.5762C19.4532 18.3123 19.4091 17.8426 19.67 17.5245C19.67 17.5245 19.6718 17.5222 19.6735 17.52C19.6788 17.5132 19.6893 17.4994 19.7042 17.4785C19.7339 17.4368 19.7815 17.3668 19.8413 17.2673C19.9606 17.0683 20.1288 16.751 20.3 16.3058C20.6418 15.4171 21 14.0084 21 12C21 9.67366 20.5194 8.15099 20.1393 7.30849C19.9689 6.93093 20.1369 6.48676 20.5145 6.3164Z"
      fill="black"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.414 9.26566C18.8196 9.18146 19.2166 9.44198 19.3008 9.84754C19.4109 10.378 19.5 11.0889 19.5 12C19.5 13.1101 19.3678 13.9228 19.2265 14.4738C19.1559 14.749 19.0833 14.9579 19.0245 15.1051C18.9951 15.1787 18.9691 15.2367 18.9486 15.2797C18.9384 15.3012 18.9295 15.3189 18.9223 15.333L18.9126 15.3514L18.9088 15.3585L18.9071 15.3615L18.9063 15.3629C18.9063 15.3629 18.9056 15.3642 18.25 15L18.9056 15.3642C18.7045 15.7263 18.2479 15.8568 17.8858 15.6556C17.5268 15.4562 17.3955 15.0056 17.5893 14.645L17.5943 14.6348C17.6012 14.6204 17.6143 14.5917 17.6318 14.548C17.6667 14.4608 17.7191 14.3135 17.7735 14.1012C17.8822 13.6772 18 12.9899 18 12C18 11.1873 17.9206 10.5787 17.8321 10.1525C17.7479 9.74689 18.0084 9.34986 18.414 9.26566Z"
      fill="black"
    />
    <Path
      d="M21.7803 3.53033C22.0732 3.23744 22.0732 2.76256 21.7803 2.46967C21.4874 2.17678 21.0126 2.17678 20.7197 2.46967L16.2705 6.91886C16.2246 6.39532 16.1646 5.93197 16.077 5.52977C15.9052 4.74135 15.6003 4.05581 14.9609 3.60646C14.7259 3.44128 14.4642 3.30809 14.1923 3.21531C13.3741 2.9361 12.5608 3.15928 11.7348 3.56055C10.9212 3.95576 9.93412 4.60663 8.70324 5.41822L8.43647 5.59411C7.98856 5.88944 7.83448 5.98815 7.67513 6.05848C7.50452 6.13378 7.3252 6.18757 7.14132 6.21862C6.96956 6.24762 6.7866 6.25003 6.25008 6.25003L6.08906 6.24998C4.87215 6.24933 4.02659 6.24889 3.27496 6.59664C2.58016 6.9181 1.91141 7.54732 1.54828 8.22128C1.15566 8.94996 1.10959 9.712 1.04409 10.7955L1.03618 10.926C1.01373 11.2943 1 11.6585 1 12C1 12.3416 1.01373 12.7058 1.03618 13.0741L1.04409 13.2045C1.10959 14.2881 1.15566 15.0501 1.54828 15.7788C1.91141 16.4527 2.58016 17.082 3.27496 17.4034C3.88551 17.6859 4.55803 17.7386 5.44121 17.7481L2.71967 20.4697C2.42678 20.7626 2.42678 21.2374 2.71967 21.5303C3.01256 21.8232 3.48744 21.8232 3.78033 21.5303L21.7803 3.53033Z"
      fill="black"
    />
    <Path
      d="M16.5 12C16.5 11.5858 16.1642 11.25 15.75 11.25C15.5554 11.25 15.3781 11.3241 15.2448 11.4457L15.1735 11.5203L9.17494 17.7941C8.82947 18.1554 8.90952 18.7441 9.33893 19.0001C10.3777 19.6808 11.2375 20.2247 11.9704 20.549C12.7127 20.8773 13.4503 21.0379 14.1923 20.7847C14.4642 20.6919 14.7259 20.5588 14.9609 20.3936C15.667 19.8974 15.9659 19.1134 16.1278 18.2139C16.287 17.3296 16.3414 16.1576 16.4092 14.6977L16.4119 14.6402C16.4637 13.5252 16.5 12.552 16.5 12Z"
      fill="black"
    />
  </Svg>
);
export default SvgVolumeCross;
