import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWiFiRouter = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M7.69293 5.68399C8.40677 3.96031 10.1047 2.75 12.0836 2.75C14.0625 2.75 15.7605 3.96031 16.4743 5.68399C16.6328 6.06668 17.0715 6.24844 17.4542 6.08995C17.8369 5.93146 18.0187 5.49275 17.8602 5.11005C16.9223 2.8454 14.6902 1.25 12.0836 1.25C9.4771 1.25 7.24495 2.8454 6.30707 5.11005C6.14859 5.49275 6.33034 5.93146 6.71304 6.08995C7.09573 6.24844 7.53444 6.06668 7.69293 5.68399Z"
      fill={props.primaryColor}
    />
    <Path
      d="M7 15C7 15.5523 6.55229 16 6 16C5.44772 16 5 15.5523 5 15C5 14.4477 5.44772 14 6 14C6.55229 14 7 14.4477 7 15Z"
      fill={props.primaryColor}
    />
    <Path
      d="M10 15C10 15.5523 9.55229 16 9 16C8.44772 16 8 15.5523 8 15C8 14.4477 8.44772 14 9 14C9.55229 14 10 14.4477 10 15Z"
      fill={props.primaryColor}
    />
    <Path
      d="M13.25 15C13.25 14.5858 13.5858 14.25 14 14.25H18C18.4142 14.25 18.75 14.5858 18.75 15C18.75 15.4142 18.4142 15.75 18 15.75H14C13.5858 15.75 13.25 15.4142 13.25 15Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.6279 3.34882C2.98754 3.14331 3.44568 3.26826 3.65119 3.6279L7.43525 10.25H16.5648L20.3488 3.6279C20.5543 3.26826 21.0125 3.14331 21.3721 3.34882C21.7317 3.55433 21.8567 4.01247 21.6512 4.3721L18.2924 10.2501C19.0849 10.2506 19.7536 10.2572 20.2945 10.3299C20.9223 10.4143 21.4891 10.6 21.9445 11.0555C22.4 11.5109 22.5857 12.0777 22.6701 12.7055C22.7501 13.3003 22.75 14.0495 22.75 14.948V15.052C22.75 15.9505 22.7501 16.6997 22.6701 17.2945C22.5857 17.9223 22.4 18.4891 21.9445 18.9445C21.4891 19.4 20.9223 19.5857 20.2945 19.6701C19.6998 19.7501 18.9506 19.75 18.0522 19.75H5.94801C5.04962 19.75 4.30026 19.7501 3.70552 19.6701C3.07773 19.5857 2.51093 19.4 2.05546 18.9445C1.59999 18.4891 1.41432 17.9223 1.32991 17.2945C1.24995 16.6997 1.24997 15.9505 1.25 15.052V14.948C1.24997 14.0495 1.24995 13.3003 1.32991 12.7055C1.41432 12.0777 1.59999 11.5109 2.05546 11.0555C2.51093 10.6 3.07773 10.4143 3.70552 10.3299C4.24646 10.2572 4.91513 10.2506 5.70765 10.2501L2.34882 4.3721C2.14331 4.01247 2.26826 3.55433 2.6279 3.34882ZM16.9854 11.75C16.9947 11.7502 17.0039 11.7502 17.0132 11.75H18C18.964 11.75 19.6116 11.7516 20.0946 11.8165C20.5561 11.8786 20.7536 11.9858 20.8839 12.1161C21.0142 12.2464 21.1214 12.4439 21.1835 12.9054C21.2484 13.3884 21.25 14.036 21.25 15C21.25 15.964 21.2484 16.6116 21.1835 17.0946C21.1214 17.5561 21.0142 17.7536 20.8839 17.8839C20.7536 18.0142 20.5561 18.1214 20.0946 18.1835C19.6116 18.2484 18.964 18.25 18 18.25H6C5.03599 18.25 4.38843 18.2484 3.9054 18.1835C3.44393 18.1214 3.24644 18.0142 3.11612 17.8839C2.9858 17.7536 2.87858 17.5561 2.81654 17.0946C2.7516 16.6116 2.75 15.964 2.75 15C2.75 14.036 2.7516 13.3884 2.81654 12.9054C2.87858 12.4439 2.9858 12.2464 3.11612 12.1161C3.24644 11.9858 3.44393 11.8786 3.9054 11.8165C4.38843 11.7516 5.03599 11.75 6 11.75H6.98684C6.99607 11.7502 7.00531 11.7502 7.01456 11.75H16.9854Z"
      fill={props.primaryColor}
    />
    <Path
      d="M12.0844 5.25C11.062 5.25 10.1971 5.93244 9.92408 6.8682C9.80805 7.26583 9.39164 7.49411 8.99401 7.37808C8.59638 7.26205 8.3681 6.84564 8.48413 6.44801C8.93886 4.88969 10.3775 3.75 12.0844 3.75C13.7912 3.75 15.2299 4.88969 15.6846 6.44801C15.8006 6.84564 15.5723 7.26205 15.1747 7.37808C14.7771 7.49411 14.3607 7.26583 14.2447 6.8682C13.9716 5.93244 13.1067 5.25 12.0844 5.25Z"
      fill={props.primaryColor}
    />
    <Path
      d="M12.084 8C12.6363 8 13.084 7.55228 13.084 7C13.084 6.44772 12.6363 6 12.084 6C11.5317 6 11.084 6.44772 11.084 7C11.084 7.55228 11.5317 8 12.084 8Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgWiFiRouter;
