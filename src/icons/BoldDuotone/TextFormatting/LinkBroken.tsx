import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLinkBroken = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G opacity={0.5}>
      <Path
        d="M19.9895 3.9909C18.4368 2.46971 16.3082 2.41169 15.2248 3.47306L11.5247 7.09803C11.2289 7.3879 10.754 7.38304 10.4641 7.08715C10.1743 6.79127 10.1791 6.31643 10.475 6.02655L14.1751 2.40158C16.011 0.602909 19.0888 1.00858 21.0392 2.91943C22.9924 4.83295 23.4176 7.87497 21.5678 9.68728L18.6606 12.5355C18.3647 12.8254 17.8899 12.8205 17.6 12.5246C17.3101 12.2288 17.315 11.7539 17.6109 11.464L20.518 8.61581C21.5875 7.56808 21.5394 5.50942 19.9895 3.9909Z"
        fill="black"
      />
      <Path
        d="M6.72744 12.5058C7.00689 12.2 6.98557 11.7256 6.67983 11.4462C6.37409 11.1667 5.89969 11.188 5.62024 11.4938L4.35938 12.8733C2.63254 14.7626 3.00972 17.9266 4.86372 19.955C6.72889 21.9956 9.73417 22.4592 11.5187 20.5068L15.5535 16.0924C15.8329 15.7866 15.8116 15.3122 15.5059 15.0328C15.2001 14.7533 14.7257 14.7746 14.4463 15.0804L10.4115 19.4948C9.41067 20.5898 7.44827 20.5593 5.97092 18.943C4.48241 17.3145 4.40798 15.0434 5.46658 13.8852L6.72744 12.5058Z"
        fill="black"
      />
    </G>
    <Path
      d="M6.62424 3.58405C6.39448 3.23941 5.92882 3.14628 5.58418 3.37604C5.23953 3.60581 5.1464 4.07146 5.37617 4.4161L7.37617 7.4161C7.60593 7.76075 8.07158 7.85388 8.41623 7.62412C8.76088 7.39435 8.85401 6.9287 8.62424 6.58405L6.62424 3.58405Z"
      fill="black"
    />
    <Path
      d="M2.23737 7.28857C1.84442 7.15758 1.41968 7.36995 1.28869 7.76291C1.15771 8.15587 1.37008 8.58061 1.76303 8.71159L7.76303 10.7116C8.15599 10.8426 8.58073 10.6302 8.71172 10.2373C8.8427 9.84429 8.63033 9.41955 8.23737 9.28857L2.23737 7.28857Z"
      fill="black"
    />
  </Svg>
);
export default SvgLinkBroken;
