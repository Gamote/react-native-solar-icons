import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCrownMinimalistic = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.7874 3.03525C11.547 3.39205 11.2726 3.95013 10.8609 4.79379L8.6083 9.40976C8.40962 9.81692 8.237 10.1707 8.07186 10.4395C7.90276 10.7147 7.67976 11.0082 7.33239 11.183C7.01895 11.3408 6.6658 11.3987 6.31628 11.3435C5.92299 11.2813 5.62455 11.0579 5.39089 10.8419C5.16437 10.6325 4.91084 10.3438 4.62325 10.0164L4.59837 9.98804C3.98954 9.29494 3.57057 8.81934 3.24607 8.51599C3.08548 8.36587 2.97992 8.28889 2.91504 8.25262C2.91474 8.25246 2.91445 8.25229 2.91415 8.25213C2.88038 8.26445 2.84116 8.28885 2.80246 8.33352C2.80254 8.33347 2.80241 8.33349 2.80246 8.33352C2.80504 8.33487 2.74653 8.45377 2.75015 8.91937C2.75394 9.40668 2.81709 10.0849 2.90848 11.056L3.13768 13.4913C3.32817 15.5153 3.46621 16.9699 3.69767 18.0729C3.92646 19.1632 4.22779 19.8071 4.67638 20.266C5.11394 20.7136 5.67599 20.9697 6.61272 21.1067C7.58004 21.2481 8.84495 21.25 10.6401 21.25H13.3599C15.155 21.25 16.4199 21.2481 17.3872 21.1067C18.324 20.9697 18.886 20.7136 19.3236 20.266C19.7722 19.8071 20.0735 19.1632 20.3023 18.0729C20.5337 16.9699 20.6718 15.5153 20.8623 13.4913L21.0915 11.056C21.1829 10.0849 21.246 9.40668 21.2498 8.91937C21.2534 8.45377 21.1947 8.33484 21.1973 8.33349C21.1977 8.33328 21.1995 8.33582 21.2032 8.34028C21.1627 8.29129 21.1212 8.26506 21.0858 8.25213C21.0855 8.25229 21.0852 8.25246 21.0849 8.25262C21.02 8.28889 20.9145 8.36587 20.7539 8.51599C20.4294 8.81934 20.0104 9.29494 19.4016 9.98804L19.3767 10.0164C19.0891 10.3438 18.8356 10.6325 18.6091 10.8419C18.3754 11.0579 18.077 11.2813 17.6837 11.3435C17.3341 11.3987 16.981 11.3408 16.6676 11.183C16.3202 11.0082 16.0972 10.7147 15.9281 10.4395C15.7629 10.1707 15.5903 9.81688 15.3916 9.40969L13.139 4.79378C12.7273 3.95013 12.453 3.39205 12.2126 3.03525C12.1108 2.88414 12.0408 2.80859 12 2.7722C11.9591 2.80859 11.8892 2.88414 11.7874 3.03525ZM12.044 2.74096C12.044 2.74143 12.0409 2.74333 12.0348 2.74527C12.041 2.74146 12.0441 2.74049 12.044 2.74096ZM11.9652 2.74527C11.9591 2.74333 11.9559 2.74143 11.9559 2.74096C11.9559 2.74049 11.9589 2.74146 11.9652 2.74527ZM10.5433 2.19718C10.845 1.74936 11.2936 1.25 12 1.25C12.7063 1.25 13.1549 1.74935 13.4566 2.19717C13.7628 2.65167 14.0823 3.30648 14.4611 4.08282L16.7239 8.71958C16.943 9.16842 17.0839 9.45523 17.2061 9.65422C17.291 9.79232 17.3373 9.83677 17.3482 9.8462C17.3794 9.86072 17.4086 9.86537 17.4354 9.86347C17.4528 9.85385 17.5014 9.82316 17.5907 9.74055C17.7528 9.59068 17.9546 9.36242 18.2746 8.9981L18.3037 8.96498C18.8764 8.313 19.3442 7.78043 19.7295 7.42022C19.9271 7.23552 20.1348 7.0653 20.353 6.9433C20.5749 6.81924 20.8536 6.71955 21.1716 6.74748C21.6447 6.78903 22.0644 7.02828 22.3588 7.38387C22.7138 7.81286 22.7538 8.41259 22.7498 8.93104C22.7454 9.49109 22.6754 10.2344 22.5885 11.158L22.3512 13.6798C22.1662 15.6455 22.0213 17.185 21.7703 18.381C21.5146 19.5995 21.1302 20.5636 20.3962 21.3145C19.6511 22.0767 18.7357 22.4254 17.6043 22.5909C16.516 22.75 15.1413 22.75 13.4193 22.75H10.5806C8.85864 22.75 7.48397 22.75 6.39567 22.5909C5.2643 22.4254 4.34881 22.0767 3.60375 21.3145C2.86973 20.5636 2.48534 19.5995 2.22965 18.381C1.97867 17.185 1.83378 15.6455 1.64879 13.6798L1.41145 11.158C1.32451 10.2344 1.25455 9.4911 1.25019 8.93104C1.24616 8.41259 1.28612 7.81286 1.64119 7.38387C1.9355 7.02828 2.35527 6.78903 2.82834 6.74748C3.14632 6.71955 3.425 6.81924 3.64693 6.9433C3.86519 7.0653 4.07284 7.23552 4.27042 7.42022C4.65573 7.78042 5.12353 8.31299 5.69622 8.96497L5.72532 8.9981C6.04535 9.36242 6.24714 9.59068 6.40923 9.74055C6.49858 9.82316 6.54717 9.85385 6.56451 9.86347C6.59136 9.86537 6.6205 9.86072 6.65175 9.8462C6.66261 9.83677 6.70897 9.79233 6.79382 9.65422C6.91608 9.45523 7.05699 9.16843 7.27602 8.71959L9.53879 4.08284C9.91761 3.30649 10.2371 2.65167 10.5433 2.19718Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgCrownMinimalistic;
