import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVideoFramePlayHorizontal = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9426 1.25H12.0574C14.3658 1.24999 16.1748 1.24998 17.5863 1.43975C19.031 1.63399 20.1711 2.03933 21.0659 2.93414C21.9607 3.82895 22.366 4.96897 22.5603 6.41371C22.75 7.82519 22.75 9.63423 22.75 11.9426V12.0574C22.75 14.3658 22.75 16.1748 22.5603 17.5863C22.366 19.031 21.9607 20.1711 21.0659 21.0659C20.1711 21.9607 19.031 22.366 17.5863 22.5603C16.1748 22.75 14.3658 22.75 12.0574 22.75H11.9426C9.63423 22.75 7.82519 22.75 6.41371 22.5603C4.96897 22.366 3.82895 21.9607 2.93414 21.0659C2.03933 20.1711 1.63399 19.031 1.43975 17.5863C1.24998 16.1748 1.24999 14.3658 1.25 12.0574V11.9426C1.24999 9.63423 1.24998 7.82519 1.43975 6.41371C1.63399 4.96897 2.03933 3.82895 2.93414 2.93414C3.82895 2.03933 4.96897 1.63399 6.41371 1.43975C7.82519 1.24998 9.63423 1.24999 11.9426 1.25ZM6.25 2.98181C5.18517 3.16506 4.5083 3.4813 3.9948 3.9948C3.4813 4.50829 3.16506 5.18517 2.98181 6.25H6.25V2.98181ZM7.75 2.81997V6.25H11.25V2.75028C9.8547 2.75175 8.70923 2.76108 7.75 2.81997ZM12.75 2.75028V6.25H16.25V2.81997C15.2908 2.76108 14.1453 2.75175 12.75 2.75028ZM17.75 2.98181V6.25H21.0182C20.8349 5.18517 20.5187 4.5083 20.0052 3.9948C19.4917 3.4813 18.8148 3.16506 17.75 2.98181ZM21.18 7.75H17.0006C17.0004 7.75 17.0008 7.75 17.0006 7.75C17.0004 7.75 16.9996 7.75 16.9994 7.75L12.0009 7.75C12.0006 7.75 12.0011 7.75 12.0009 7.75C12.0006 7.75 11.9994 7.75 11.9991 7.75L7.00106 7.75C7.00071 7.75 7.00035 7.75 7 7.75C6.99965 7.75 6.9993 7.75 6.99894 7.75H2.81997C2.75085 8.87584 2.75 10.2582 2.75 12C2.75 13.7418 2.75085 15.1242 2.81997 16.25L21.18 16.25C21.2491 15.1242 21.25 13.7418 21.25 12C21.25 10.2582 21.2491 8.87584 21.18 7.75ZM21.0182 17.75H17.75V21.0182C18.8148 20.8349 19.4917 20.5187 20.0052 20.0052C20.5187 19.4917 20.8349 18.8148 21.0182 17.75ZM16.25 21.18V17.75H12.75V21.2497C14.1453 21.2483 15.2908 21.2389 16.25 21.18ZM11.25 21.2497V17.75H7.75L7.75 21.18C8.70923 21.2389 9.8547 21.2483 11.25 21.2497ZM6.25 21.0182L6.25 17.75H2.98181C3.16506 18.8148 3.4813 19.4917 3.9948 20.0052C4.50829 20.5187 5.18517 20.8349 6.25 21.0182ZM12.7793 9.74813C12.796 9.75934 12.8127 9.77059 12.8295 9.78187C12.845 9.79229 12.8605 9.80266 12.8759 9.81301C13.3656 10.1421 13.8034 10.4362 14.111 10.7196C14.445 11.0273 14.75 11.4337 14.75 12C14.75 12.5663 14.445 12.9727 14.111 13.2804C13.8034 13.5638 13.3656 13.8579 12.8759 14.187L12.8295 14.2181C12.8128 14.2294 12.796 14.2407 12.7794 14.2519C12.2858 14.5836 11.8415 14.8824 11.4681 15.0551C11.0758 15.2365 10.5194 15.3914 9.98642 15.0386C9.49674 14.7146 9.36158 14.1731 9.3061 13.7395C9.24993 13.3004 9.24996 12.7235 9.25 12.0514V11.9486C9.24996 11.2765 9.24993 10.6996 9.3061 10.2605C9.36158 9.82686 9.49674 9.28543 9.98642 8.96138C10.5194 8.60864 11.0758 8.76347 11.4681 8.94491C11.8414 9.1176 12.2858 9.41635 12.7793 9.74813ZM10.8193 10.2977C10.8255 10.3004 10.8318 10.3033 10.8384 10.3063C11.0893 10.4224 11.4327 10.6504 11.9928 11.0268C12.5436 11.397 12.8823 11.6272 13.0946 11.8228C13.1937 11.9141 13.232 11.9688 13.2457 11.9934C13.2472 11.9961 13.2483 11.9983 13.2491 12C13.2483 12.0017 13.2472 12.0039 13.2457 12.0066C13.232 12.0312 13.1937 12.0859 13.0946 12.1772C12.8823 12.3728 12.5436 12.603 11.9928 12.9732C11.4327 13.3496 11.0893 13.5776 10.8384 13.6937C10.8318 13.6967 10.8255 13.6996 10.8193 13.7023C10.8109 13.663 10.8021 13.6127 10.794 13.5491C10.7515 13.2171 10.75 12.738 10.75 12C10.75 11.262 10.7515 10.7829 10.794 10.4509C10.8021 10.3873 10.8109 10.337 10.8193 10.2977Z"
      fill="black"
    />
  </Svg>
);
export default SvgVideoFramePlayHorizontal;
