import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChatSquareArrow = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M11.9853 21.449L12.4736 20.6246C12.8523 19.9853 13.0417 19.6656 13.3458 19.4888C13.65 19.312 14.0329 19.3054 14.7988 19.2922C15.9294 19.2728 16.6386 19.2035 17.2333 18.9574C18.3367 18.5006 19.2134 17.6245 19.6705 16.5218C19.8323 16.1314 19.9177 15.6917 19.9628 15.1156C19.9905 14.7619 20.0044 14.5851 19.9097 14.4418C19.8151 14.2985 19.634 14.2373 19.2718 14.1151C17.8637 13.6398 14.7522 12.4814 13 11C11.0199 9.32594 9.24591 5.94583 8.58192 4.58614C8.44025 4.29603 8.36941 4.15098 8.24608 4.07495C8.12274 3.99892 7.96642 4.00075 7.65377 4.0044C5.84588 4.02553 5.01704 4.13144 4.15034 4.66219C3.54439 5.03327 3.03493 5.54238 2.66361 6.14792C2 7.23009 2 8.70322 2 11.6495V12.5495C2 14.6464 2 15.6948 2.34279 16.5218C2.79985 17.6245 3.67653 18.5006 4.77997 18.9574C5.37469 19.2035 6.08381 19.2728 7.21446 19.2922C7.98034 19.3054 8.36327 19.312 8.66743 19.4888C8.97158 19.6656 9.16093 19.9853 9.53964 20.6246L10.0279 21.449C10.4631 22.1837 11.5502 22.1837 11.9853 21.449Z"
      fill="black"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.7019 1.21748C14.0068 1.50493 14.0037 1.9681 13.695 2.252L12.693 3.17332C13.5647 3.18153 14.4032 3.20131 15.1598 3.24898C15.8105 3.28998 16.4199 3.35263 16.9508 3.45099C17.4709 3.54732 17.972 3.68764 18.37 3.91192C19.1098 4.32879 19.7328 4.90128 20.1872 5.58324C20.6245 6.23934 20.8171 6.98094 20.9095 7.87523C21 8.75016 21 9.84356 21 11.23V11.2685C21 11.6725 20.6482 12 20.2143 12C19.7803 12 19.4286 11.6725 19.4286 11.2685C19.4286 9.83509 19.4277 8.81207 19.3453 8.01543C19.2641 7.23007 19.1094 6.74093 18.8519 6.35459C18.529 5.86996 18.0853 5.4616 17.5564 5.16358C17.3876 5.06845 17.0939 4.96923 16.6442 4.88592C16.2053 4.80463 15.6699 4.74752 15.0537 4.7087C14.3418 4.66384 13.5479 4.64474 12.7059 4.6366L13.695 5.54608C14.0037 5.82998 14.0068 6.29315 13.7019 6.58059C13.3969 6.86804 12.8995 6.87092 12.5907 6.58701L10.2336 4.41951C10.0841 4.28207 10 4.09462 10 3.89904C10 3.70345 10.0841 3.51601 10.2336 3.37857L12.5907 1.21106C12.8995 0.927158 13.3969 0.930033 13.7019 1.21748Z"
      fill="black"
    />
  </Svg>
);
export default SvgChatSquareArrow;
