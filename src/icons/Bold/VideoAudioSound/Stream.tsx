import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStream = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 12.5V11.5C2 8.21252 2 6.56878 2.90796 5.46243C3.07418 5.25989 3.25989 5.07418 3.46243 4.90796C4.56878 4 6.21252 4 9.5 4C12.7875 4 14.4312 4 15.5376 4.90796C15.7401 5.07418 15.9258 5.25989 16.092 5.46243C16.7936 6.3173 16.9531 7.49303 16.9893 9.50002L17.6584 9.17082C19.6042 8.19788 20.5772 7.7114 21.2886 8.15107C22 8.59075 22 9.67853 22 11.8541V12.1459C22 14.3215 22 15.4093 21.2886 15.8489C20.5772 16.2886 19.6042 15.8021 17.6584 14.8292L16.9893 14.5C16.9531 16.507 16.7936 17.6827 16.092 18.5376C15.9258 18.7401 15.7401 18.9258 15.5376 19.092C14.4312 20 12.7875 20 9.5 20C6.21252 20 4.56878 20 3.46243 19.092C3.25989 18.9258 3.07418 18.7401 2.90796 18.5376C2 17.4312 2 15.7875 2 12.5ZM10.0762 8.01986C9.93369 7.84887 9.7226 7.75 9.50002 7.75C9.27743 7.75 9.06635 7.84887 8.92385 8.01986L6.42385 11.0199C6.15868 11.3381 6.20167 11.811 6.51988 12.0762C6.83809 12.3413 7.31101 12.2983 7.57618 11.9801L8.75002 10.5715V15.5C8.75002 15.9142 9.0858 16.25 9.50002 16.25C9.91423 16.25 10.25 15.9142 10.25 15.5V10.5715L11.4239 11.9801C11.689 12.2983 12.1619 12.3413 12.4802 12.0762C12.7984 11.811 12.8414 11.3381 12.5762 11.0199L10.0762 8.01986Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgStream;
