import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCup = (props: SvgProps) => (
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
      d="M16.377 2.347A26.4 26.4 0 0 0 12 2c-1.783 0-3.253.157-4.377.347-1.139.192-1.708.288-2.184.874-.475.586-.45 1.219-.4 2.485.173 4.348 1.111 9.78 6.211 10.26V19.5H9.82a1 1 0 0 0-.98.804l-.19.946H6a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5h-2.65l-.19-.946a1 1 0 0 0-.98-.804h-1.43v-3.534c5.1-.48 6.039-5.911 6.211-10.26.05-1.266.076-1.9-.4-2.485-.476-.586-1.045-.682-2.184-.874"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgCup;
