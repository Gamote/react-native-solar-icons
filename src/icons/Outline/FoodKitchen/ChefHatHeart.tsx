import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChefHatHeart = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.25285 4.25547C8.09403 2.47951 9.90263 1.25 12 1.25C14.0974 1.25 15.906 2.47951 16.7471 4.25547C16.831 4.25184 16.9153 4.25 17 4.25C20.1756 4.25 22.75 6.82436 22.75 10C22.75 12.1806 21.5363 14.0762 19.75 15.0508L19.75 18.052C19.75 18.9505 19.7501 19.6997 19.6701 20.2945C19.5857 20.9223 19.4 21.4891 18.9445 21.9445C18.4891 22.4 17.9223 22.5857 17.2945 22.6701C16.6997 22.7501 15.9505 22.75 15.052 22.75H8.94801C8.04952 22.75 7.3003 22.7501 6.70552 22.6701C6.07773 22.5857 5.51093 22.4 5.05546 21.9445C4.59999 21.4891 4.41432 20.9223 4.32991 20.2945C4.24994 19.6997 4.24997 18.9505 4.25 18.052L4.25 15.0508C2.46371 14.0762 1.25 12.1806 1.25 10C1.25 6.82436 3.82436 4.25 7 4.25C7.08469 4.25 7.16899 4.25184 7.25285 4.25547ZM6.80262 5.7545C4.54704 5.85762 2.75 7.71895 2.75 10C2.75 11.7416 3.79769 13.2402 5.30028 13.8967C5.57345 14.016 5.75 14.2859 5.75 14.584V17.25H18.25L18.25 14.584C18.25 14.2859 18.4265 14.016 18.6997 13.8967C20.2023 13.2402 21.25 11.7416 21.25 10C21.25 7.71895 19.453 5.85761 17.1974 5.7545C17.2321 5.99825 17.25 6.24718 17.25 6.5V7C17.25 7.41421 16.9142 7.75 16.5 7.75C16.0858 7.75 15.75 7.41421 15.75 7V6.5C15.75 6.07715 15.6803 5.67212 15.5524 5.29486C15.0502 3.81402 13.6484 2.75 12 2.75C10.3516 2.75 8.94981 3.81402 8.44763 5.29486C8.3197 5.67212 8.25 6.07715 8.25 6.5V7C8.25 7.41421 7.91421 7.75 7.5 7.75C7.08579 7.75 6.75 7.41421 6.75 7V6.5C6.75 6.24717 6.76792 5.99825 6.80262 5.7545ZM18.2482 18.75H5.75181C5.75604 19.3194 5.77008 19.7491 5.81654 20.0946C5.87858 20.5561 5.9858 20.7536 6.11612 20.8839C6.24643 21.0142 6.44393 21.1214 6.90539 21.1835C7.38843 21.2484 8.03599 21.25 9 21.25H15C15.964 21.25 16.6116 21.2484 17.0946 21.1835C17.5561 21.1214 17.7536 21.0142 17.8839 20.8839C18.0142 20.7536 18.1214 20.5561 18.1835 20.0946C18.2299 19.7491 18.244 19.3194 18.2482 18.75ZM14.2543 8.67761C15.1875 9.00474 15.75 9.90305 15.75 11.0002C15.75 11.7701 15.3088 12.4514 14.8751 12.9529C14.4218 13.477 13.8609 13.9362 13.4008 14.2738C13.3775 14.2909 13.354 14.3082 13.3303 14.3258C12.9791 14.5855 12.5793 14.8811 12 14.8811C11.4207 14.8811 11.0209 14.5855 10.6697 14.3258C10.646 14.3082 10.6225 14.2909 10.5992 14.2738C10.1391 13.9362 9.57819 13.477 9.1249 12.9528C8.6912 12.4514 8.25 11.7701 8.25 11.0002C8.25 9.90306 8.81245 9.00475 9.74566 8.67761C10.475 8.42194 11.2837 8.56627 12 9.03782C12.7163 8.56627 13.525 8.42194 14.2543 8.67761ZM13.7581 10.0932C13.5078 10.0054 13.0442 10.0334 12.5187 10.5366C12.2287 10.8143 11.7713 10.8143 11.4813 10.5366C10.9558 10.0334 10.4922 10.0054 10.2419 10.0932C10.0126 10.1735 9.75 10.4242 9.75 11.0002C9.75 11.2148 9.89122 11.5458 10.2595 11.9716C10.6081 12.3748 11.0686 12.7577 11.4865 13.0644C11.7128 13.2304 11.8202 13.3069 11.9061 13.3523C11.9605 13.381 11.9756 13.3811 12 13.3811C12.0244 13.3811 12.0395 13.381 12.0939 13.3523C12.1798 13.3069 12.2872 13.2304 12.5135 13.0644C12.9314 12.7577 13.3919 12.3748 13.7405 11.9716C14.1088 11.5459 14.25 11.2148 14.25 11.0002C14.25 10.4242 13.9874 10.1735 13.7581 10.0932Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgChefHatHeart;
