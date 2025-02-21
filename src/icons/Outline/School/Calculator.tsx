import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCalculator = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9375 1.25H12.0625C14.1308 1.24998 15.7678 1.24997 17.0485 1.44129C18.3725 1.63907 19.4223 2.05481 20.2395 2.96274C21.0464 3.85936 21.4066 4.99222 21.5798 6.42355C21.75 7.83014 21.75 9.63498 21.75 11.9478V12.0522C21.75 14.365 21.75 16.1699 21.5798 17.5765C21.4066 19.0078 21.0464 20.1406 20.2395 21.0373C19.4223 21.9452 18.3725 22.3609 17.0485 22.5587C15.7678 22.75 14.1308 22.75 12.0625 22.75H11.9375C9.8692 22.75 8.23221 22.75 6.95147 22.5587C5.62747 22.3609 4.57769 21.9452 3.76055 21.0373C2.95359 20.1406 2.59338 19.0078 2.42018 17.5765C2.24998 16.1699 2.24999 14.365 2.25 12.0522V11.9478C2.24999 9.63499 2.24998 7.83014 2.42018 6.42355C2.59338 4.99222 2.95359 3.85936 3.76055 2.96274C4.57769 2.05481 5.62747 1.63907 6.95147 1.44129C8.23221 1.24997 9.86922 1.24998 11.9375 1.25ZM7.17309 2.92483C6.04626 3.09316 5.37637 3.40965 4.87549 3.96619C4.36443 4.53404 4.06563 5.31193 3.90932 6.60374C3.7513 7.90972 3.75 9.62385 3.75 12C3.75 14.3762 3.7513 16.0903 3.90932 17.3963C4.06563 18.6881 4.36443 19.466 4.87549 20.0338C5.37637 20.5903 6.04626 20.9068 7.17309 21.0752C8.33029 21.248 9.8552 21.25 12 21.25C14.1448 21.25 15.6697 21.248 16.8269 21.0752C17.9537 20.9068 18.6236 20.5903 19.1245 20.0338C19.6356 19.466 19.9344 18.6881 20.0907 17.3963C20.2487 16.0903 20.25 14.3762 20.25 12C20.25 9.62385 20.2487 7.90972 20.0907 6.60374C19.9344 5.31193 19.6356 4.53404 19.1245 3.96619C18.6236 3.40965 17.9537 3.09316 16.8269 2.92483C15.6697 2.75196 14.1448 2.75 12 2.75C9.8552 2.75 8.33029 2.75196 7.17309 2.92483ZM8.91612 5.24994C8.9438 5.24997 8.97176 5.25 9 5.25H15C15.0282 5.25 15.0562 5.24997 15.0839 5.24994C15.4647 5.24954 15.7932 5.24919 16.0823 5.32667C16.8588 5.53472 17.4653 6.1412 17.6733 6.91766C17.7508 7.2068 17.7505 7.53533 17.7501 7.91612C17.75 7.9438 17.75 7.97176 17.75 8C17.75 8.02824 17.75 8.0562 17.7501 8.08389C17.7505 8.46468 17.7508 8.7932 17.6733 9.08234C17.4653 9.8588 16.8588 10.4653 16.0823 10.6733C15.7932 10.7508 15.4647 10.7505 15.0839 10.7501C15.0562 10.75 15.0282 10.75 15 10.75H9C8.97176 10.75 8.9438 10.75 8.91612 10.7501C8.53533 10.7505 8.2068 10.7508 7.91766 10.6733C7.1412 10.4653 6.53472 9.8588 6.32667 9.08234C6.24919 8.7932 6.24954 8.46468 6.24994 8.08389C6.24997 8.0562 6.25 8.02824 6.25 8C6.25 7.97176 6.24997 7.9438 6.24994 7.91612C6.24954 7.53533 6.24919 7.2068 6.32667 6.91766C6.53472 6.1412 7.1412 5.53472 7.91766 5.32667C8.2068 5.24919 8.53533 5.24954 8.91612 5.24994ZM9 6.75C8.48673 6.75 8.37722 6.75644 8.30589 6.77556C8.04707 6.84491 7.84491 7.04707 7.77556 7.30589C7.75644 7.37722 7.75 7.48673 7.75 8C7.75 8.51327 7.75644 8.62278 7.77556 8.69412C7.84491 8.95293 8.04707 9.1551 8.30589 9.22445C8.37722 9.24356 8.48673 9.25 9 9.25H15C15.5133 9.25 15.6228 9.24356 15.6941 9.22445C15.9529 9.1551 16.1551 8.95293 16.2244 8.69412C16.2436 8.62278 16.25 8.51327 16.25 8C16.25 7.48673 16.2436 7.37722 16.2244 7.30589C16.1551 7.04707 15.9529 6.84491 15.6941 6.77556C15.6228 6.75644 15.5133 6.75 15 6.75H9Z"
      fill="black"
    />
    <Path
      d="M9 13C9 13.5523 8.55229 14 8 14C7.44772 14 7 13.5523 7 13C7 12.4477 7.44772 12 8 12C8.55229 12 9 12.4477 9 13Z"
      fill="black"
    />
    <Path
      d="M9 17C9 17.5523 8.55229 18 8 18C7.44772 18 7 17.5523 7 17C7 16.4477 7.44772 16 8 16C8.55229 16 9 16.4477 9 17Z"
      fill="black"
    />
    <Path
      d="M13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13C11 12.4477 11.4477 12 12 12C12.5523 12 13 12.4477 13 13Z"
      fill="black"
    />
    <Path
      d="M13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17Z"
      fill="black"
    />
    <Path
      d="M17 13C17 13.5523 16.5523 14 16 14C15.4477 14 15 13.5523 15 13C15 12.4477 15.4477 12 16 12C16.5523 12 17 12.4477 17 13Z"
      fill="black"
    />
    <Path
      d="M17 17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17C15 16.4477 15.4477 16 16 16C16.5523 16 17 16.4477 17 17Z"
      fill="black"
    />
  </Svg>
);
export default SvgCalculator;
