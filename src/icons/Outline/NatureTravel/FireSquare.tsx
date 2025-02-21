import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFireSquare = (props: SvgProps) => (
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
      d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19 1.444.194 2.584.6 3.479 1.494.895.895 1.3 2.035 1.494 3.48.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53-.194 1.444-.6 2.584-1.494 3.479-.895.895-2.035 1.3-3.48 1.494-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19-1.444-.194-2.584-.6-3.479-1.494-.895-.895-1.3-2.035-1.494-3.48-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53.194-1.444.6-2.584 1.494-3.479.895-.895 2.035-1.3 3.48-1.494 1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069-.57.57-.897 1.34-1.069 2.619-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62.57.569 1.34.896 2.619 1.068 1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069.569-.57.896-1.34 1.068-2.619.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62-.57-.569-1.34-.896-2.619-1.068-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176m5.873 3.371a1.73 1.73 0 0 1 1.974.142c1.559 1.208 3.29 3.297 3.29 6.228 0 2.377-1.008 3.936-2.312 4.875-1.266.911-2.762 1.208-3.771 1.208a5.52 5.52 0 0 1-3.394-1.238c-1.16-.954-2.023-2.507-2.023-4.845 0-2.18 1.258-3.566 2.291-4.252.382-.253.865-.333 1.302-.164.463.18.776.61.804 1.14.01.18.052.345.11.48a1 1 0 0 0 .084.152c.47-.653.703-1.544.703-2.023 0-.731.373-1.368.942-1.703m.761 1.292c-.097.058-.203.195-.203.411 0 .799-.338 2.027-1.021 2.948-.239.321-.571.582-.997.642-.428.06-.798-.104-1.06-.32-.421-.345-.686-.9-.78-1.474-.704.53-1.436 1.464-1.436 2.87 0 1.93.692 3.043 1.477 3.688a4.02 4.02 0 0 0 2.44.896c.768 0 1.938-.237 2.895-.925.918-.661 1.688-1.77 1.688-3.658 0-2.291-1.35-3.99-2.709-5.043a.3.3 0 0 0-.162-.07.23.23 0 0 0-.131.035"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgFireSquare;
