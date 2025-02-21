import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStarFall = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M10.277 16.5153C10.2817 16.4054 10.4637 16.3618 10.5176 16.4576C10.771 16.9073 11.2031 17.5687 11.6935 17.8694C12.1838 18.1701 12.9692 18.2554 13.4849 18.2773C13.5948 18.282 13.6384 18.4639 13.5426 18.5179C13.0929 18.7712 12.4315 19.2034 12.1308 19.6937C11.8301 20.1841 11.7448 20.9695 11.7229 21.4851C11.7182 21.595 11.5363 21.6386 11.4823 21.5428C11.229 21.0931 10.7968 20.4318 10.3065 20.1311C9.81613 19.8304 9.03072 19.745 8.51505 19.7232C8.4052 19.7185 8.36157 19.5365 8.45737 19.4825C8.90707 19.2292 9.56842 18.7971 9.86913 18.3067C10.1698 17.8164 10.2552 17.031 10.277 16.5153Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M18.4921 15.5152C18.4837 15.4056 18.2918 15.3596 18.2346 15.4535C18.0623 15.736 17.8138 16.0769 17.5376 16.2463C17.2614 16.4157 16.8449 16.4825 16.515 16.508C16.4053 16.5165 16.3593 16.7083 16.4532 16.7656C16.7357 16.9379 17.0767 17.1863 17.246 17.4625C17.4154 17.7387 17.4823 18.1552 17.5078 18.4852C17.5162 18.5948 17.7081 18.6408 17.7653 18.5469C17.9376 18.2644 18.1861 17.9234 18.4623 17.7541C18.7384 17.5847 19.155 17.5178 19.4849 17.4924C19.5945 17.4839 19.6405 17.292 19.5467 17.2348C19.2642 17.0625 18.9232 16.814 18.7538 16.5379C18.5845 16.2617 18.5176 15.8451 18.4921 15.5152Z"
      fill={props.primaryColor}
    />
    <Path
      d="M14.7037 4.00181L14.4614 3.69574C13.5247 2.51266 13.0564 1.92112 12.5115 2.00845C11.9667 2.09577 11.7062 2.80412 11.1851 4.22083L11.0503 4.58735C10.9023 4.98993 10.8282 5.19122 10.6862 5.33897C10.5443 5.48671 10.3504 5.56417 9.96266 5.71911L9.60966 5.86016L9.3618 5.95933C8.16229 6.4406 7.55786 6.71331 7.48069 7.24324C7.39837 7.80849 7.97047 8.29205 9.11468 9.25915L9.4107 9.50935C9.73584 9.78417 9.89842 9.92158 9.99161 10.1089C10.0848 10.2962 10.0981 10.5121 10.1246 10.9441L10.1488 11.3373C10.2421 12.8574 10.2888 13.6174 10.7828 13.8794C11.2768 14.1414 11.8909 13.7319 13.1191 12.9129L13.1191 12.9129L13.4368 12.701C13.7858 12.4683 13.9603 12.3519 14.1599 12.32C14.3595 12.288 14.5616 12.344 14.9657 12.456L15.3336 12.558C16.7558 12.9522 17.4669 13.1493 17.8545 12.746C18.2421 12.3427 18.0495 11.6061 17.6644 10.1328L17.5647 9.75163C17.4553 9.33297 17.4006 9.12364 17.4307 8.91657C17.4609 8.70951 17.5725 8.52816 17.7957 8.16546L17.7957 8.16544L17.999 7.83522C18.7845 6.55883 19.1773 5.92063 18.9229 5.40935C18.6685 4.89806 17.9354 4.85229 16.4691 4.76076L16.0898 4.73708C15.6731 4.71107 15.4648 4.69807 15.2839 4.60208C15.1029 4.5061 14.9698 4.338 14.7037 4.00181L14.7037 4.00181Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M8.835 13.326C6.69772 14.3702 4.91931 16.024 4.24844 18.0002C3.49589 13.2926 4.53976 10.2526 6.21308 8.36328C6.35728 8.658 6.54466 8.902 6.71297 9.09269C7.06286 9.48911 7.56518 9.91347 8.07523 10.3444L8.44225 10.6545C8.51184 10.7134 8.56597 10.7592 8.61197 10.7989C8.61665 10.8632 8.62129 10.9383 8.62727 11.0357L8.65708 11.5212C8.69717 12.1761 8.7363 12.8155 8.835 13.326Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgStarFall;
