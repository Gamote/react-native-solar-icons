import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTeaCup = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5305 1.46967C10.8234 1.76256 10.8234 2.23744 10.5305 2.53033C10.2711 2.78972 10.2711 3.21028 10.5305 3.46967C11.3756 4.31485 11.3756 5.68515 10.5305 6.53033C10.2376 6.82322 9.7627 6.82322 9.46981 6.53033C9.17692 6.23744 9.17692 5.76256 9.46981 5.46967C9.7292 5.21028 9.7292 4.78972 9.46981 4.53033C8.62463 3.68515 8.62463 2.31485 9.46981 1.46967C9.7627 1.17678 10.2376 1.17678 10.5305 1.46967ZM6.03032 2.96967C6.32321 3.26256 6.32321 3.73744 6.03032 4.03033L5.9142 4.14645C5.67095 4.3897 5.64358 4.77479 5.84999 5.05C6.50428 5.92239 6.41752 7.14313 5.64643 7.91421L5.53032 8.03033C5.23742 8.32322 4.76255 8.32322 4.46966 8.03033C4.17676 7.73744 4.17676 7.26256 4.46966 6.96967L4.58577 6.85355C4.82902 6.6103 4.85639 6.22521 4.64999 5.95C3.9957 5.07761 4.08245 3.85687 4.85354 3.08579L4.96966 2.96967C5.26255 2.67678 5.73742 2.67678 6.03032 2.96967ZM15.5303 2.96967C15.8232 3.26256 15.8232 3.73744 15.5303 4.03033L15.4142 4.14645C15.171 4.3897 15.1436 4.77479 15.35 5.05C16.0043 5.92239 15.9175 7.14313 15.1464 7.91421L15.0303 8.03033C14.7374 8.32322 14.2626 8.32322 13.9697 8.03033C13.6768 7.73744 13.6768 7.26256 13.9697 6.96967L14.0858 6.85355C14.329 6.6103 14.3564 6.22521 14.15 5.95C13.4957 5.07761 13.5825 3.85687 14.3535 3.08579L14.4697 2.96967C14.7626 2.67678 15.2374 2.67678 15.5303 2.96967ZM4.64739 9.24998C4.66998 9.24999 4.69289 9.25 4.71614 9.25H15.2838C15.3071 9.25 15.33 9.24999 15.3526 9.24998C15.7152 9.24982 15.9935 9.24969 16.234 9.29246C16.8957 9.4101 17.4691 9.75939 17.8739 10.25H19C21.0711 10.25 22.75 11.9289 22.75 14C22.75 16.0711 21.0711 17.75 19 17.75H17.6477C17.2097 18.8798 16.4487 19.8697 15.4435 20.5864C14.382 21.3432 13.1107 21.75 11.8069 21.75H8.19305C6.88929 21.75 5.61802 21.3432 4.55644 20.5864C3.11564 19.5591 2.17649 17.9704 1.97107 16.2129L1.57038 12.7849C1.56769 12.7618 1.56502 12.739 1.56238 12.7166C1.52012 12.3564 1.4877 12.0801 1.50225 11.8362C1.57799 10.5669 2.51406 9.51505 3.76598 9.29246C4.00652 9.24969 4.28473 9.24982 4.64739 9.24998ZM16.4683 16.4711C16.3334 16.6067 16.25 16.7936 16.25 17C16.25 17.0551 16.2559 17.1088 16.2672 17.1605C15.9371 18.0395 15.3512 18.81 14.5727 19.365C13.7654 19.9406 12.7985 20.25 11.8069 20.25H8.19305C7.20148 20.25 6.23461 19.9406 5.42723 19.365C4.33143 18.5837 3.61716 17.3755 3.46092 16.0388L3.06024 12.6107C3.00642 12.1502 2.99403 12.0187 2.99959 11.9255C3.03402 11.3486 3.4595 10.8705 4.02856 10.7693C4.12041 10.753 4.25251 10.75 4.71614 10.75H15.2838C15.7475 10.75 15.8796 10.753 15.9714 10.7693C16.5405 10.8705 16.966 11.3486 17.0004 11.9255C17.0059 12.0187 16.9936 12.1502 16.9397 12.6107L16.5391 16.0388C16.522 16.1845 16.4983 16.3288 16.4683 16.4711ZM18.0245 16.25H19C20.2426 16.25 21.25 15.2426 21.25 14C21.25 12.7574 20.2426 11.75 19 11.75H18.4912C18.4938 11.7786 18.496 11.8073 18.4977 11.8362C18.5123 12.0801 18.4799 12.3564 18.4376 12.7166C18.435 12.739 18.4323 12.7618 18.4296 12.7849L18.0289 16.2129C18.0275 16.2253 18.026 16.2376 18.0245 16.25Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgTeaCup;
