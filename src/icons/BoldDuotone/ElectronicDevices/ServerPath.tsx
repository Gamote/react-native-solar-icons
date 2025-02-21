import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgServerPath = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.3024 13.7368H12.6978H18.5117C20.053 13.7368 21.3024 12.5351 21.3024 11.0526C21.3024 9.57018 20.053 8.36842 18.5117 8.36842C20.053 8.36842 21.3024 7.16666 21.3024 5.68421C21.3024 4.20176 20.053 3 18.5117 3H5.48845C3.94719 3 2.69775 4.20176 2.69775 5.68421C2.69775 7.16666 3.94719 8.36842 5.48845 8.36842C3.94719 8.36842 2.69775 9.57018 2.69775 11.0526C2.69775 12.5351 3.94719 13.7368 5.48845 13.7368H11.3024ZM12.9303 5.01316C12.545 5.01316 12.2326 5.3136 12.2326 5.68421C12.2326 6.05482 12.545 6.35526 12.9303 6.35526H18.5117C18.897 6.35526 19.2094 6.05482 19.2094 5.68421C19.2094 5.3136 18.897 5.01316 18.5117 5.01316H12.9303ZM12.9303 10.3816C12.545 10.3816 12.2326 10.682 12.2326 11.0526C12.2326 11.4232 12.545 11.7237 12.9303 11.7237H18.5117C18.897 11.7237 19.2094 11.4232 19.2094 11.0526C19.2094 10.682 18.897 10.3816 18.5117 10.3816H12.9303ZM7.34892 5.68421C7.34892 6.17836 6.93244 6.57895 6.41868 6.57895C5.90493 6.57895 5.48845 6.17836 5.48845 5.68421C5.48845 5.19006 5.90493 4.78947 6.41868 4.78947C6.93244 4.78947 7.34892 5.19006 7.34892 5.68421ZM7.34892 11.0526C7.34892 11.5468 6.93244 11.9474 6.41868 11.9474C5.90493 11.9474 5.48845 11.5468 5.48845 11.0526C5.48845 10.5585 5.90493 10.1579 6.41868 10.1579C6.93244 10.1579 7.34892 10.5585 7.34892 11.0526Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.6}
      d="M22 18.211C22 17.8404 21.6876 17.5399 21.3023 17.5399H13.7252C13.5364 17.0914 13.164 16.7332 12.6977 16.5516V13.7373H11.3023V16.5516C10.836 16.7332 10.4636 17.0914 10.2748 17.5399H2.69767C2.31236 17.5399 2 17.8404 2 18.211C2 18.5816 2.31236 18.882 2.69767 18.882H10.2748C10.5508 19.5378 11.2192 20.0005 12 20.0005C12.7808 20.0005 13.4492 19.5378 13.7252 18.882H21.3023C21.6876 18.882 22 18.5816 22 18.211Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgServerPath;
