import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSafe2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.0574 1.25H11.9426C9.63423 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63423 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V11.9426C22.75 9.63423 22.75 7.82519 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.1711 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25ZM3.9948 3.9948C4.56445 3.42514 5.33517 3.09825 6.61358 2.92637C7.91356 2.75159 9.62178 2.75 12 2.75C14.3782 2.75 16.0864 2.75159 17.3864 2.92637C18.6648 3.09825 19.4355 3.42514 20.0052 3.9948C20.5749 4.56445 20.9018 5.33517 21.0736 6.61358C21.2484 7.91356 21.25 9.62178 21.25 12C21.25 14.3782 21.2484 16.0864 21.0736 17.3864C20.9018 18.6648 20.5749 19.4355 20.0052 20.0052C19.4355 20.5749 18.6648 20.9018 17.3864 21.0736C16.0864 21.2484 14.3782 21.25 12 21.25C9.62178 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12C2.75 9.62178 2.75159 7.91356 2.92637 6.61358C3.09825 5.33517 3.42514 4.56445 3.9948 3.9948ZM16.3918 4.36652C15.5248 4.24996 14.4225 4.24998 13.0549 4.25H10.9451C9.57753 4.24998 8.47522 4.24996 7.60825 4.36652C6.70814 4.48754 5.95027 4.74643 5.34835 5.34835C5.07033 5.62637 4.8655 5.93766 4.71362 6.28086C4.64592 6.26078 4.57422 6.25 4.5 6.25C4.08579 6.25 3.75 6.58579 3.75 7V10C3.75 10.3266 3.95871 10.6044 4.25002 10.7073L4.25 10.9451V13.0549L4.25002 13.2927C3.95871 13.3956 3.75 13.6734 3.75 14V17C3.75 17.4142 4.08579 17.75 4.5 17.75C4.57422 17.75 4.64592 17.7392 4.71362 17.7191C4.8655 18.0623 5.07033 18.3736 5.34835 18.6517C5.95027 19.2536 6.70814 19.5125 7.60825 19.6335C8.47522 19.75 9.57754 19.75 10.9451 19.75H13.0549C14.4225 19.75 15.5248 19.75 16.3918 19.6335C17.2919 19.5125 18.0497 19.2536 18.6517 18.6517C19.2536 18.0497 19.5125 17.2919 19.6335 16.3918C19.75 15.5248 19.75 14.4225 19.75 13.0549V10.9451C19.75 9.57754 19.75 8.47522 19.6335 7.60825C19.5125 6.70814 19.2536 5.95027 18.6517 5.34835C18.0497 4.74643 17.2919 4.48754 16.3918 4.36652ZM6.40901 6.40901C6.68577 6.13225 7.07435 5.9518 7.80812 5.85315C8.56347 5.75159 9.56458 5.75 11 5.75H13C14.4354 5.75 15.4365 5.75159 16.1919 5.85315C16.9257 5.9518 17.3142 6.13225 17.591 6.40901C17.8678 6.68577 18.0482 7.07435 18.1469 7.80812C18.2484 8.56347 18.25 9.56458 18.25 11V13C18.25 14.4354 18.2484 15.4365 18.1469 16.1919C18.0482 16.9257 17.8678 17.3142 17.591 17.591C17.3142 17.8678 16.9257 18.0482 16.1919 18.1469C15.4365 18.2484 14.4354 18.25 13 18.25H11C9.56458 18.25 8.56347 18.2484 7.80812 18.1469C7.07435 18.0482 6.68577 17.8678 6.40901 17.591C6.13225 17.3142 5.9518 16.9257 5.85315 16.1919C5.75159 15.4365 5.75 14.4354 5.75 13V11C5.75 9.56458 5.75159 8.56347 5.85315 7.80812C5.9518 7.07435 6.13225 6.68577 6.40901 6.40901ZM12 7.25C9.37665 7.25 7.25 9.37665 7.25 12C7.25 14.6234 9.37665 16.75 12 16.75C14.6234 16.75 16.75 14.6234 16.75 12C16.75 9.37665 14.6234 7.25 12 7.25ZM12 15.25C10.9301 15.25 9.98087 14.733 9.38865 13.9351L11.1013 13.2011C11.3518 13.3888 11.6629 13.5 12 13.5C12.3371 13.5 12.6482 13.3888 12.8987 13.2011L14.6113 13.9351C14.0191 14.733 13.0699 15.25 12 15.25ZM11.25 8.83697C9.81665 9.17555 8.75 10.4632 8.75 12C8.75 12.1897 8.76626 12.3757 8.79747 12.5565L10.5104 11.8224C10.567 11.3425 10.8502 10.932 11.25 10.7007V8.83697ZM15.25 12C15.25 12.1897 15.2337 12.3757 15.2025 12.5565L13.4896 11.8224C13.433 11.3425 13.1498 10.932 12.75 10.7007V8.83697C14.1834 9.17555 15.25 10.4632 15.25 12Z"
      fill="black"
    />
  </Svg>
);
export default SvgSafe2;
