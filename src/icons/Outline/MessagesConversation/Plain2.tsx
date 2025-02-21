import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPlain2 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M19.374 2.83c-.992.176-2.334.62-4.23 1.253l-9.332 3.11c-1.06.354-1.787.598-2.294.841-.503.242-.637.414-.689.539a1 1 0 0 0-.078.33c-.01.134.033.348.375.79.345.444.886.987 1.676 1.777l.283.283.04.04c.216.216.391.39.528.593.269.395.421.858.44 1.336.01.244-.027.489-.072.79l-.009.056c-.099.662-.168 1.124-.2 1.485-.032.359-.02.556.011.693q.034.146.088.282L20.189 2.75c-.214-.004-.48.02-.815.08m2.669-.873c.765.766.804 1.81.604 2.931-.198 1.114-.68 2.56-1.286 4.378l-3.168 9.504c-.324.972-.59 1.768-.87 2.357-.287.602-.656 1.136-1.27 1.407a2.6 2.6 0 0 1-.906.213c-.671.033-1.24-.28-1.765-.69-.515-.4-1.108-.994-1.832-1.718l-.288-.288c-.284-.284-.357-.352-.428-.4a1.06 1.06 0 0 0-.526-.177c-.087-.005-.185.005-.583.059l-.096.013c-.633.086-1.141.155-1.553.185-.42.032-.799.03-1.162-.06a3.46 3.46 0 0 1-2.553-2.589c-.083-.364-.08-.743-.043-1.162.036-.411.112-.919.207-1.55l.004-.024c.058-.385.069-.481.066-.565a1.06 1.06 0 0 0-.183-.553c-.047-.069-.112-.139-.388-.414l-.32-.32c-.744-.744-1.353-1.354-1.763-1.882-.42-.54-.735-1.127-.686-1.816a2.6 2.6 0 0 1 .188-.797c.264-.639.809-1.021 1.426-1.317.602-.29 1.42-.562 2.419-.895l9.445-3.148c1.818-.606 3.264-1.089 4.378-1.287 1.122-.2 2.166-.16 2.932.605M21.25 3.81 6.953 18.107q.153.066.318.107c.137.034.334.048.693.022.361-.027.825-.09 1.487-.18l.072-.01.058-.008c.311-.042.565-.076.817-.061a2.56 2.56 0 0 1 1.27.428c.21.14.391.322.613.544l.042.042.25.25c.77.77 1.299 1.297 1.731 1.634.43.335.64.38.77.374q.195-.01.374-.088c.12-.053.286-.187.52-.68.237-.494.474-1.201.818-2.233l3.13-9.392c.633-1.897 1.078-3.238 1.255-4.23.06-.336.083-.602.079-.816"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPlain2;
