import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDumbbellSmall = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.4161 6.25006C17.4438 6.25009 17.4718 6.25012 17.5 6.25012C17.5282 6.25012 17.5562 6.25009 17.5839 6.25006C17.9647 6.24965 18.2932 6.24931 18.5823 6.32678C19.3588 6.53483 19.9653 7.14132 20.1733 7.91777L19.4714 8.10585L20.1733 7.91777C20.2508 8.20692 20.2505 8.53545 20.2501 8.91624C20.25 8.94392 20.25 8.97188 20.25 9.00012V9.26133C21.6516 9.38764 22.75 10.5656 22.75 12.0001C22.75 13.4346 21.6516 14.6126 20.25 14.7389V15.0001C20.25 15.0284 20.25 15.0563 20.2501 15.084C20.2505 15.4648 20.2508 15.7933 20.1733 16.0825C19.9653 16.8589 19.3588 17.4654 18.5823 17.6735C18.2932 17.7509 17.9647 17.7506 17.5839 17.7502C17.5562 17.7501 17.5282 17.7501 17.5 17.7501C17.4718 17.7501 17.4438 17.7501 17.4161 17.7502C17.0353 17.7506 16.7068 17.7509 16.4177 17.6735C15.6412 17.4654 15.0347 16.8589 14.8267 16.0825C14.7492 15.7933 14.7495 15.4648 14.7499 15.084C14.75 15.0563 14.75 15.0284 14.75 15.0001V12.7501H9.25V15.0001C9.25 15.0284 9.25003 15.0563 9.25006 15.084C9.25046 15.4648 9.25081 15.7933 9.17333 16.0825C8.96528 16.8589 8.3588 17.4654 7.58234 17.6735C7.2932 17.7509 6.96467 17.7506 6.58388 17.7502C6.5562 17.7501 6.52824 17.7501 6.5 17.7501C6.47176 17.7501 6.4438 17.7501 6.41612 17.7502C6.03533 17.7506 5.7068 17.7509 5.41766 17.6735C4.6412 17.4654 4.03472 16.8589 3.82667 16.0825C3.74919 15.7933 3.74954 15.4648 3.74994 15.084C3.74997 15.0563 3.75 15.0284 3.75 15.0001V14.7389C2.34837 14.6126 1.25 13.4346 1.25 12.0001C1.25 10.5656 2.34837 9.38764 3.75 9.26133V9.00012C3.75 8.97188 3.74997 8.94392 3.74994 8.91623C3.74954 8.53544 3.74919 8.20692 3.82667 7.91777C4.03472 7.14132 4.6412 6.53483 5.41766 6.32678C5.7068 6.24931 6.03533 6.24966 6.41612 6.25006C6.4438 6.25009 6.47176 6.25012 6.5 6.25012C6.52824 6.25012 6.5562 6.25009 6.58388 6.25006C6.96467 6.24966 7.2932 6.24931 7.58234 6.32678C8.3588 6.53483 8.96528 7.14132 9.17333 7.91777C9.25081 8.20692 9.25046 8.53544 9.25006 8.91623C9.25003 8.94392 9.25 8.97188 9.25 9.00012V11.2501H14.75V9.00012C14.75 8.97188 14.75 8.94392 14.7499 8.91623C14.7495 8.53544 14.7492 8.20692 14.8267 7.91777C15.0347 7.14132 15.6412 6.53483 16.4177 6.32678C16.7068 6.24931 17.0353 6.24965 17.4161 6.25006ZM3.75 10.7751C3.17944 10.8909 2.75 11.3954 2.75 12.0001C2.75 12.6049 3.17944 13.1093 3.75 13.2251V10.7751ZM20.25 13.2251C20.8206 13.1093 21.25 12.6049 21.25 12.0001C21.25 11.3954 20.8206 10.8909 20.25 10.7751V13.2251ZM17.5 7.75012C16.9867 7.75012 16.8772 7.75656 16.8059 7.77567C16.5471 7.84502 16.3449 8.04718 16.2756 8.306L15.5511 8.11189L16.2756 8.306C16.2564 8.37733 16.25 8.48684 16.25 9.00012V15.0001C16.25 15.5134 16.2564 15.6229 16.2756 15.6942C16.3449 15.9531 16.5471 16.1552 16.8059 16.2246C16.8772 16.2437 16.9867 16.2501 17.5 16.2501C18.0133 16.2501 18.1228 16.2437 18.1941 16.2246C18.4529 16.1552 18.6551 15.9531 18.7244 15.6942C18.7436 15.6229 18.75 15.5134 18.75 15.0001V9.00012C18.75 8.48684 18.7436 8.37734 18.7244 8.306C18.6551 8.04718 18.4529 7.84502 18.1941 7.77567C18.1228 7.75656 18.0133 7.75012 17.5 7.75012ZM6.5 7.75012C5.98673 7.75012 5.87722 7.75656 5.80589 7.77567C5.54707 7.84502 5.34491 8.04718 5.27556 8.306L5.27556 8.306C5.25644 8.37734 5.25 8.48684 5.25 9.00012L5.25 15.0001C5.25 15.5134 5.25644 15.6229 5.27556 15.6942C5.34491 15.9531 5.54707 16.1552 5.80589 16.2246L5.61177 16.949L5.80589 16.2246C5.87722 16.2437 5.98673 16.2501 6.5 16.2501C7.01327 16.2501 7.12278 16.2437 7.19411 16.2246L7.38823 16.949L7.19411 16.2246C7.45293 16.1552 7.65509 15.9531 7.72444 15.6942C7.74356 15.6229 7.75 15.5134 7.75 15.0001V9.00012C7.75 8.48685 7.74356 8.37734 7.72444 8.306C7.65509 8.04718 7.45293 7.84502 7.19411 7.77567C7.12278 7.75656 7.01327 7.75012 6.5 7.75012Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgDumbbellSmall;
