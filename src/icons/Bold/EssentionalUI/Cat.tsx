import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCat = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.7501 6.40636C10.2698 6.40636 10.1222 6.5625 9.3561 6.5625C8.71769 6.5625 6.80245 5 5.84485 5C4.88724 5 3.77004 5.5625 3.77004 7.1875V9.0625C3.77197 9.55469 3.95081 11.0634 4.65075 10.6602C3.82323 11.6382 3.73963 12.7786 3.751 13.8826C3.52812 13.947 3.30072 14.0196 3.08003 14.095C2.39614 14.3289 1.67085 14.6271 1.3432 14.8387C0.995241 15.0634 0.895339 15.5277 1.12006 15.8756C1.34478 16.2236 1.80903 16.3235 2.15698 16.0988C2.3132 15.9979 2.87823 15.7493 3.56532 15.5144C3.64124 15.4884 3.71731 15.4631 3.79298 15.4386C3.83925 15.8724 3.95408 16.2684 4.12478 16.6292L4.1012 16.6416C3.69148 16.8581 3.31129 17.1067 3.06889 17.2652C3.02694 17.2926 2.98912 17.3173 2.95599 17.3387C2.60803 17.5634 2.50813 18.0277 2.73285 18.3756C2.95757 18.7236 3.42182 18.8235 3.76978 18.5988C3.8109 18.5722 3.85472 18.5436 3.90097 18.5134C4.1463 18.3533 4.45999 18.1485 4.80199 17.9678C4.88218 17.9254 4.95935 17.887 5.03317 17.8524C6.76347 19.4748 9.86991 20 11.7501 20C13.6302 20 16.7367 19.4748 18.467 17.8524C18.5408 17.887 18.6179 17.9254 18.6981 17.9678C19.0401 18.1485 19.3538 18.3533 19.5991 18.5134C19.6454 18.5436 19.6892 18.5722 19.7303 18.5988C20.0783 18.8235 20.5425 18.7236 20.7673 18.3756C20.992 18.0277 20.8921 17.5634 20.5441 17.3387C20.511 17.3173 20.4732 17.2926 20.4312 17.2652C20.1888 17.1067 19.8086 16.8581 19.3989 16.6416L19.3754 16.6292C19.5461 16.2683 19.6609 15.8724 19.7072 15.4385C19.783 15.463 19.8592 15.4884 19.9352 15.5144C20.6223 15.7493 21.1874 15.9979 21.3436 16.0988C21.6915 16.3235 22.1558 16.2236 22.3805 15.8756C22.6052 15.5277 22.5053 15.0634 22.1574 14.8387C21.8297 14.6271 21.1044 14.3289 20.4205 14.095C20.1997 14.0195 19.9722 13.947 19.7492 13.8825C19.7605 12.7785 19.6769 11.6382 18.8494 10.6602C19.5494 11.0634 19.7282 9.55469 19.7302 9.0625V7.18761C19.7302 5.56261 18.613 5.00011 17.6553 5.00011C16.6977 5.00011 14.7825 6.5625 14.1441 6.5625C13.378 6.5625 13.2305 6.40636 11.7501 6.40636ZM11.0745 15.6004C11.2771 15.5314 11.5162 15.5 11.7501 15.5C11.984 15.5 12.223 15.5314 12.4257 15.6004C12.5251 15.6342 12.6467 15.6876 12.7537 15.7738C12.8612 15.8603 13.0001 16.0206 13.0001 16.25C13.0001 16.4794 12.8612 16.6397 12.7537 16.7262C12.6467 16.8124 12.5251 16.8658 12.4257 16.8996C12.223 16.9686 11.984 17 11.7501 17C11.5162 17 11.2771 16.9686 11.0745 16.8996C10.9751 16.8658 10.8535 16.8124 10.7464 16.7262C10.6389 16.6397 10.5001 16.4794 10.5001 16.25C10.5001 16.0206 10.6389 15.8603 10.7464 15.7738C10.8535 15.6876 10.9751 15.6342 11.0745 15.6004ZM13.9201 12.5005C14.0566 12.2721 14.326 12 14.7301 12C15.1342 12 15.4036 12.2721 15.54 12.5005C15.6823 12.7387 15.7501 13.0274 15.7501 13.3125C15.7501 13.5976 15.6823 13.8863 15.54 14.1245C15.4036 14.3529 15.1342 14.625 14.7301 14.625C14.326 14.625 14.0566 14.3529 13.9201 14.1245C13.7778 13.8863 13.7101 13.5976 13.7101 13.3125C13.7101 13.0274 13.7778 12.7387 13.9201 12.5005ZM7.96016 12.5005C8.09658 12.2721 8.36599 12 8.7701 12C9.17421 12 9.44362 12.2721 9.58004 12.5005C9.72234 12.7387 9.79011 13.0274 9.79011 13.3125C9.79011 13.5976 9.72234 13.8863 9.58004 14.1245C9.44362 14.3529 9.17421 14.625 8.7701 14.625C8.36599 14.625 8.09658 14.3529 7.96016 14.1245C7.81786 13.8863 7.75009 13.5976 7.75009 13.3125C7.75009 13.0274 7.81786 12.7387 7.96016 12.5005Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgCat;
