import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCupStar = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M22 8.162v.073c0 .86 0 1.291-.207 1.643s-.584.561-1.336.98l-.793.44c.546-1.848.729-3.834.796-5.532l.01-.221.002-.052c.651.226 1.017.395 1.245.711.283.393.283.915.283 1.958M2 8.162v.073c0 .86 0 1.291.207 1.643s.584.561 1.336.98l.794.44c-.547-1.848-.73-3.834-.797-5.532l-.01-.221-.001-.052c-.652.226-1.018.395-1.246.711C2 6.597 2 7.12 2 8.162"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M12 2c1.784 0 3.253.157 4.377.347 1.139.192 1.708.288 2.184.874s.45 1.219.4 2.485c-.172 4.349-1.11 9.78-6.211 10.26V19.5h1.43a1 1 0 0 1 .98.804l.19.946H18a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5h2.65l.19-.946a1 1 0 0 1 .98-.804h1.43v-3.534c-5.1-.48-6.038-5.912-6.21-10.26-.051-1.266-.076-1.9.4-2.485.475-.586 1.044-.682 2.183-.874A26.4 26.4 0 0 1 12 2m.952 4.199-.098-.176C12.474 5.34 12.284 5 12 5s-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532s.164.577.667 1.165l.13.152c.143.167.215.25.247.354s.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135s.202.045.399.135l.178.082c.691.319 1.037.477 1.267.303s.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438s.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135-.084-.064-.138-.16-.246-.354"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgCupStar;
