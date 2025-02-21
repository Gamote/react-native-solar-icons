import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgListHeartMinimalistic = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H20C20.4142 5.25 20.75 5.58579 20.75 6C20.75 6.41421 20.4142 6.75 20 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6ZM20.772 8.42848C22.007 8.89026 22.75 10.1453 22.75 11.7147C22.75 12.8757 22.0511 13.9574 21.3168 14.7961C20.5591 15.6614 19.6381 16.4085 18.9549 16.912C18.9283 16.9316 18.9015 16.9515 18.8745 16.9716C18.5029 17.2478 18.0824 17.5603 17.5 17.5603C16.9176 17.5603 16.4971 17.2478 16.1255 16.9716C16.0985 16.9515 16.0717 16.9316 16.0451 16.912C15.3619 16.4085 14.4409 15.6614 13.6832 14.7961C12.9489 13.9574 12.25 12.8757 12.25 11.7148C12.25 10.1453 12.993 8.89027 14.228 8.42848C15.2709 8.03852 16.4575 8.29174 17.5 9.10194C18.5425 8.29174 19.7291 8.03852 20.772 8.42848ZM20.2467 9.83347C19.7295 9.64009 18.9049 9.74331 18.0359 10.6309C17.8948 10.7749 17.7017 10.8561 17.5 10.8561C17.2983 10.8561 17.1052 10.7749 16.9641 10.6309C16.0951 9.7433 15.2705 9.64009 14.7533 9.83347C14.2445 10.0237 13.75 10.607 13.75 11.7148C13.75 12.3064 14.1328 13.0325 14.8118 13.808C15.4675 14.5568 16.2914 15.2302 16.935 15.7045C17.178 15.8836 17.3008 15.972 17.399 16.0252C17.4645 16.0606 17.4832 16.0605 17.4976 16.0603C17.4984 16.0603 17.4992 16.0603 17.5 16.0603C17.5008 16.0603 17.5016 16.0603 17.5024 16.0603C17.5168 16.0605 17.5355 16.0606 17.601 16.0252C17.6992 15.972 17.822 15.8836 18.065 15.7045C18.7086 15.2302 19.5325 14.5568 20.1882 13.808C20.8672 13.0326 21.25 12.3064 21.25 11.7147C21.25 10.607 20.7555 10.0237 20.2467 9.83347ZM2.25 11C2.25 10.5858 2.58579 10.25 3 10.25H9C9.41421 10.25 9.75 10.5858 9.75 11C9.75 11.4142 9.41421 11.75 9 11.75H3C2.58579 11.75 2.25 11.4142 2.25 11ZM2.25 16C2.25 15.5858 2.58579 15.25 3 15.25H10C10.4142 15.25 10.75 15.5858 10.75 16C10.75 16.4142 10.4142 16.75 10 16.75H3C2.58579 16.75 2.25 16.4142 2.25 16Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgListHeartMinimalistic;
