import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBanknote2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.94513 4.25H13.0549C14.4225 4.24998 15.5248 4.24996 16.3918 4.36652C17.2919 4.48754 18.0497 4.74643 18.6517 5.34835C19.2061 5.90277 19.4695 6.58951 19.6022 7.39783C20.4106 7.53047 21.0974 7.79391 21.6519 8.3484C22.2538 8.95032 22.5127 9.70819 22.6337 10.6083C22.7503 11.4753 22.7503 12.5776 22.7503 13.9452V14.0549C22.7503 15.4225 22.7503 16.5248 22.6337 17.3918C22.5127 18.2919 22.2538 19.0498 21.6519 19.6517C21.05 20.2536 20.2921 20.5125 19.392 20.6335C18.525 20.7501 17.4227 20.7501 16.0551 20.7501H10.9454C9.57779 20.7501 8.47547 20.7501 7.6085 20.6335C6.7084 20.5125 5.95052 20.2536 5.3486 19.6517C4.79417 19.0973 4.53072 18.4105 4.39807 17.6022C3.58964 17.4695 2.90283 17.2061 2.34835 16.6517C1.74643 16.0497 1.48754 15.2919 1.36652 14.3918C1.24996 13.5248 1.24998 12.4225 1.25 11.0549V10.9451C1.24998 9.57754 1.24996 8.47522 1.36652 7.60825C1.48754 6.70814 1.74643 5.95027 2.34835 5.34835C2.95027 4.74643 3.70814 4.48754 4.60825 4.36652C5.47522 4.24996 6.57754 4.24998 7.94513 4.25ZM5.95571 17.7316C6.0606 18.1345 6.20999 18.3918 6.40926 18.591C6.68603 18.8678 7.0746 19.0483 7.80837 19.1469C8.56373 19.2485 9.56484 19.2501 11.0003 19.2501H16.0003C17.4357 19.2501 18.4368 19.2485 19.1921 19.1469C19.9259 19.0483 20.3145 18.8678 20.5912 18.591C20.868 18.3143 21.0485 17.9257 21.1471 17.1919C21.2487 16.4366 21.2503 15.4355 21.2503 14.0001C21.2503 12.5646 21.2487 11.5635 21.1471 10.8082C21.0485 10.0744 20.868 9.68583 20.5912 9.40906C20.3919 9.20976 20.1346 9.06034 19.7316 8.95545C19.75 9.54434 19.75 10.206 19.75 10.9451V11.0549C19.75 12.4225 19.75 13.5248 19.6335 14.3918C19.5125 15.2919 19.2536 16.0497 18.6517 16.6517C18.0497 17.2536 17.2919 17.5125 16.3918 17.6335C15.5248 17.75 14.4225 17.75 13.0549 17.75H7.94513C7.2061 17.75 6.54453 17.75 5.95571 17.7316ZM4.80812 5.85315C4.07435 5.9518 3.68577 6.13225 3.40901 6.40901C3.13225 6.68577 2.9518 7.07435 2.85315 7.80812C2.75159 8.56347 2.75 9.56459 2.75 11C2.75 12.4354 2.75159 13.4365 2.85315 14.1919C2.9518 14.9257 3.13225 15.3142 3.40901 15.591C3.68577 15.8678 4.07435 16.0482 4.80812 16.1469C5.56347 16.2484 6.56458 16.25 8 16.25H13C14.4354 16.25 15.4365 16.2484 16.1919 16.1469C16.9257 16.0482 17.3142 15.8678 17.591 15.591C17.8678 15.3142 18.0482 14.9257 18.1469 14.1919C18.2484 13.4365 18.25 12.4354 18.25 11C18.25 9.56459 18.2484 8.56347 18.1469 7.80812C18.0482 7.07435 17.8678 6.68577 17.591 6.40901C17.3142 6.13225 16.9257 5.9518 16.1919 5.85315C15.4365 5.75159 14.4354 5.75 13 5.75H8C6.56458 5.75 5.56347 5.75159 4.80812 5.85315ZM10.5 9.25C9.5335 9.25 8.75 10.0335 8.75 11C8.75 11.9665 9.5335 12.75 10.5 12.75C11.4665 12.75 12.25 11.9665 12.25 11C12.25 10.0335 11.4665 9.25 10.5 9.25ZM7.25 11C7.25 9.20508 8.70508 7.75 10.5 7.75C12.2949 7.75 13.75 9.20508 13.75 11C13.75 12.7949 12.2949 14.25 10.5 14.25C8.70508 14.25 7.25 12.7949 7.25 11ZM5 8.25C5.41421 8.25 5.75 8.58579 5.75 9V13C5.75 13.4142 5.41421 13.75 5 13.75C4.58579 13.75 4.25 13.4142 4.25 13L4.25 9C4.25 8.58579 4.58579 8.25 5 8.25ZM16 8.25C16.4142 8.25 16.75 8.58579 16.75 9V13C16.75 13.4142 16.4142 13.75 16 13.75C15.5858 13.75 15.25 13.4142 15.25 13V9C15.25 8.58579 15.5858 8.25 16 8.25Z"
      fill="black"
    />
  </Svg>
);
export default SvgBanknote2;
