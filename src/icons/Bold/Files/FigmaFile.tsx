import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFigmaFile = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M19.3517 7.61665L15.3929 4.05375C14.2651 3.03868 13.7012 2.53114 13.0092 2.26562L13 5.00011C13 7.35713 13 8.53564 13.7322 9.26787C14.4645 10.0001 15.643 10.0001 18 10.0001H21.5801C21.2175 9.29588 20.5684 8.71164 19.3517 7.61665Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.23869 2 10.0298 2C10.6358 2 11.1214 2 11.53 2.01666C11.5166 2.09659 11.5095 2.17813 11.5092 2.26057L11.5 5.09497C11.4999 6.19207 11.4998 7.16164 11.6049 7.94316C11.7188 8.79028 11.9803 9.63726 12.6716 10.3285C13.3628 11.0198 14.2098 11.2813 15.0569 11.3952C15.8385 11.5003 16.808 11.5002 17.9051 11.5001L18 11.5001H21.9574C22 12.0344 22 12.6901 22 13.5629V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22ZM4.25 11.5C4.25 10.2574 5.25736 9.25 6.5 9.25H9.5C10.7426 9.25 11.75 10.2574 11.75 11.5C11.75 12.0763 11.5334 12.6019 11.1771 13C11.5334 13.3981 11.75 13.9237 11.75 14.5C11.75 15.7426 10.7426 16.75 9.5 16.75C9.23702 16.75 8.98458 16.7049 8.75 16.622V17.5C8.75 18.7426 7.74264 19.75 6.5 19.75C5.25736 19.75 4.25 18.7426 4.25 17.5C4.25 16.9237 4.46664 16.3981 4.82292 16C4.46664 15.6019 4.25 15.0763 4.25 14.5C4.25 13.9237 4.46664 13.3981 4.82292 13C4.46664 12.6019 4.25 12.0763 4.25 11.5ZM5.75 14.5C5.75 14.0858 6.08579 13.75 6.5 13.75H7.25V15.25H6.5C6.08579 15.25 5.75 14.9142 5.75 14.5ZM7.25 12.25H6.5C6.08579 12.25 5.75 11.9142 5.75 11.5C5.75 11.0858 6.08579 10.75 6.5 10.75H7.25V12.25ZM10.25 11.5C10.25 11.9142 9.91421 12.25 9.5 12.25H8.75V10.75H9.5C9.91421 10.75 10.25 11.0858 10.25 11.5ZM8.75 14.5C8.75 14.0858 9.08579 13.75 9.5 13.75C9.91421 13.75 10.25 14.0858 10.25 14.5C10.25 14.9142 9.91421 15.25 9.5 15.25C9.08579 15.25 8.75 14.9142 8.75 14.5ZM6.5 16.75H7.25V17.5C7.25 17.9142 6.91421 18.25 6.5 18.25C6.08579 18.25 5.75 17.9142 5.75 17.5C5.75 17.0858 6.08579 16.75 6.5 16.75Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgFigmaFile;
