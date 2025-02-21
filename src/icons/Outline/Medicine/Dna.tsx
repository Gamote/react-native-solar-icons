import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDna = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.0303 1.46967C15.3232 1.76256 15.3232 2.23744 15.0303 2.53033C14.6145 2.94614 14.2408 3.3883 13.9105 3.8498L15.1172 5.05658C15.4101 5.34948 15.4101 5.82435 15.1172 6.11724C14.8244 6.41014 14.3495 6.41014 14.0566 6.11724L13.1088 5.16942C12.8987 5.58341 12.7203 6.00653 12.5743 6.43458L17.4526 11.3128C17.4894 11.3496 17.5216 11.3893 17.5491 11.4312C17.957 11.293 18.3604 11.1253 18.7558 10.9288L15.748 7.92096C15.4551 7.62806 15.4551 7.15319 15.748 6.86029C16.0409 6.5674 16.5158 6.5674 16.8087 6.86029L20.0845 10.1362C20.5698 9.7945 21.0342 9.40517 21.4697 8.96967C21.7626 8.67678 22.2374 8.67678 22.5303 8.96967C22.8232 9.26256 22.8232 9.73744 22.5303 10.0303C19.9077 12.653 16.2665 13.8839 12.9736 13.2434C13.7235 16.418 12.5739 19.9867 10.0303 22.5303C9.73744 22.8232 9.26256 22.8232 8.96967 22.5303C8.67678 22.2374 8.67678 21.7626 8.96967 21.4697C9.40642 21.0329 9.79308 20.565 10.1279 20.0753L8.77436 18.7217C8.48146 18.4288 8.48146 17.954 8.77436 17.6611C9.06725 17.3682 9.54212 17.3682 9.83502 17.6611L10.8975 18.7235C11.084 18.3209 11.2387 17.9103 11.3608 17.4961C11.3443 17.4823 11.3283 17.4676 11.3128 17.4521L6.50083 12.6401C6.06113 12.7699 5.62552 12.9364 5.19921 13.1388L8.03033 15.9699C8.32322 16.2628 8.32322 16.7377 8.03033 17.0306C7.73744 17.3235 7.26256 17.3235 6.96967 17.0306L3.85751 13.9184C3.3922 14.2425 2.94707 14.6136 2.53033 15.0303C2.23744 15.3232 1.76256 15.3232 1.46967 15.0303C1.17678 14.7374 1.17678 14.2626 1.46967 13.9697C4.01326 11.4261 7.58195 10.2765 10.7566 11.0264C10.1161 7.73352 11.347 4.09234 13.9697 1.46967C14.2626 1.17678 14.7374 1.17678 15.0303 1.46967ZM15.8509 11.8325L12.1675 8.14909C12.0094 9.31845 12.0947 10.4832 12.439 11.561C13.5168 11.9053 14.6815 11.9906 15.8509 11.8325ZM11.3303 12.954C11.629 13.8215 11.7433 14.7542 11.6826 15.7006L8.29943 12.3174C9.24581 12.2567 10.1785 12.371 11.046 12.6697L11.2575 12.7425L11.3303 12.954Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgDna;
