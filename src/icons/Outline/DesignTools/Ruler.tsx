import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRuler = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.6882 4.14229L14.6516 5.10571C14.9445 5.3986 14.9445 5.87348 14.6516 6.16637C14.3588 6.45926 13.8839 6.45926 13.591 6.16637L12.6269 5.20228L11.5662 6.26294L13.2374 7.93414C13.5303 8.22703 13.5303 8.7019 13.2374 8.9948C12.9445 9.28769 12.4697 9.28769 12.1768 8.9948L10.5056 7.3236L9.44492 8.38426L10.409 9.34835C10.7019 9.64124 10.7019 10.1161 10.409 10.409C10.1161 10.7019 9.64124 10.7019 9.34835 10.409L8.38426 9.44492L7.3236 10.5056L8.9948 12.1768C9.28769 12.4697 9.28769 12.9445 8.9948 13.2374C8.7019 13.5303 8.22703 13.5303 7.93414 13.2374L6.26294 11.5662L5.20228 12.6269L6.16637 13.591C6.45926 13.8839 6.45926 14.3588 6.16637 14.6516C5.87348 14.9445 5.3986 14.9445 5.10571 14.6516L4.14229 13.6882C3.67802 14.1568 3.34308 14.5094 3.10761 14.818C2.81761 15.1981 2.75 15.422 2.75 15.6157C2.75 15.8094 2.81762 16.0334 3.10761 16.4135C3.41081 16.8109 3.87892 17.2812 4.5757 17.978L6.022 19.4243C6.71878 20.1211 7.18914 20.5892 7.58653 20.8924C7.96662 21.1824 8.19057 21.25 8.38426 21.25C8.57795 21.25 8.8019 21.1824 9.18198 20.8924C9.57938 20.5892 10.0497 20.1211 10.7465 19.4243L19.4243 10.7465C20.1211 10.0497 20.5892 9.57938 20.8924 9.18198C21.1824 8.8019 21.25 8.57795 21.25 8.38426C21.25 8.19057 21.1824 7.96662 20.8924 7.58653C20.5892 7.18914 20.1211 6.71878 19.4243 6.022L17.978 4.5757C17.2812 3.87892 16.8109 3.41081 16.4135 3.10761C16.0334 2.81762 15.8094 2.75 15.6157 2.75C15.422 2.75 15.1981 2.81761 14.818 3.10761C14.5094 3.34308 14.1568 3.67802 13.6882 4.14229ZM13.9081 1.91508C14.4217 1.52328 14.9622 1.25 15.6157 1.25C16.2693 1.25 16.8098 1.52328 17.3233 1.91508C17.8104 2.28666 18.3514 2.82777 19.0017 3.47812L20.5219 4.99824C21.1722 5.64856 21.7133 6.18964 22.0849 6.67666C22.4767 7.19017 22.75 7.73073 22.75 8.38426C22.75 9.03779 22.4767 9.57834 22.0849 10.0919C21.7133 10.5789 21.1722 11.12 20.5219 11.7703L11.7703 20.5219C11.12 21.1722 10.5789 21.7133 10.0919 22.0849C9.57834 22.4767 9.03779 22.75 8.38426 22.75C7.73073 22.75 7.19017 22.4767 6.67666 22.0849C6.18964 21.7133 5.64856 21.1722 4.99824 20.5219L3.47812 19.0017C2.82777 18.3514 2.28666 17.8104 1.91508 17.3233C1.52328 16.8098 1.25 16.2693 1.25 15.6157C1.25 14.9622 1.52328 14.4217 1.91508 13.9081C2.28667 13.4211 2.82779 12.88 3.47816 12.2297L12.2297 3.47815C12.88 2.82778 13.4211 2.28666 13.9081 1.91508Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgRuler;
