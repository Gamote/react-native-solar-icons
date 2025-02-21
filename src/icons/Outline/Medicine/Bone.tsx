import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBone = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.1695 3.26812C16.4787 2.57729 15.3586 2.57729 14.6678 3.26812C14.1001 3.83582 13.8097 4.85724 14.0124 5.58968C14.1024 5.91505 14.1642 6.30487 14.1294 6.69876C14.0944 7.09625 13.9553 7.54295 13.599 7.89923L7.89923 13.599C7.54295 13.9553 7.09625 14.0944 6.69876 14.1294C6.30487 14.1642 5.91505 14.1024 5.58968 14.0124C4.85724 13.8097 3.83582 14.1001 3.26812 14.6678C2.57729 15.3586 2.57729 16.4787 3.26812 17.1695C3.95896 17.8603 5.07902 17.8603 5.76985 17.1695C6.06274 16.8766 6.53762 16.8766 6.83051 17.1695C7.1234 17.4624 7.1234 17.9373 6.83051 18.2302C6.13968 18.921 6.13968 20.041 6.83051 20.7319C7.52134 21.4227 8.64141 21.4227 9.33224 20.7319C9.89993 20.1642 10.1903 19.1428 9.98762 18.4103C9.89758 18.085 9.83581 17.6951 9.87056 17.3012C9.90562 16.9038 10.0447 16.457 10.401 16.1008L16.1008 10.401C16.457 10.0447 16.9037 9.90562 17.3012 9.87056C17.6951 9.83581 18.0849 9.89758 18.4103 9.98762C19.1428 10.1903 20.1642 9.89994 20.7319 9.33224C21.4227 8.64141 21.4227 7.52134 20.7319 6.83051C20.041 6.13968 18.921 6.13968 18.2302 6.83051C17.9373 7.1234 17.4624 7.1234 17.1695 6.83051C16.8766 6.53762 16.8766 6.06274 17.1695 5.76985C17.8603 5.07902 17.8603 3.95896 17.1695 3.26812ZM19.1732 4.82683C19.2612 3.89084 18.9468 2.92416 18.2302 2.20746C16.9535 0.930845 14.8837 0.930845 13.6071 2.20746C12.6884 3.12621 12.2086 4.69568 12.5667 5.98972C12.6251 6.20068 12.6496 6.40371 12.6352 6.56696C12.6212 6.72662 12.5756 6.80135 12.5384 6.83857L6.83857 12.5384C6.80135 12.5756 6.72662 12.6212 6.56696 12.6352C6.40371 12.6496 6.20068 12.6251 5.98972 12.5667C4.69568 12.2086 3.12621 12.6884 2.20746 13.6071C0.930846 14.8837 0.930845 16.9535 2.20746 18.2302C2.92416 18.9468 3.89084 19.2612 4.82683 19.1732C4.73882 20.1092 5.05316 21.0758 5.76985 21.7925C7.04647 23.0692 9.11628 23.0692 10.3929 21.7925C11.3116 20.8738 11.7914 19.3043 11.4333 18.0103C11.3749 17.7993 11.3504 17.5963 11.3648 17.433C11.3788 17.2734 11.4244 17.1986 11.4616 17.1614L17.1614 11.4616C17.1986 11.4244 17.2734 11.3788 17.433 11.3648C17.5963 11.3504 17.7993 11.3749 18.0103 11.4333C19.3043 11.7914 20.8738 11.3116 21.7925 10.3929C23.0692 9.11628 23.0692 7.04647 21.7925 5.76985C21.0758 5.05316 20.1092 4.73882 19.1732 4.82683Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgBone;
