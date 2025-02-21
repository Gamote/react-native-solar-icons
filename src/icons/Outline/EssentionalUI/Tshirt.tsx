import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTshirt = (props: SvgProps) => (
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
      d="M6.088 1.628a2.8 2.8 0 0 1 2.137-.282l.49.129A2.36 2.36 0 0 1 10.106 2.5c.908 1.433 2.88 1.433 3.788 0 .32-.504.813-.874 1.39-1.026l.49-.13a2.8 2.8 0 0 1 2.138.283c.515.302 1.221.738 1.738 1.153q.229.184.458.396l.04.038c.434.4.825.762 1.098 1.115.308.399.507.838.504 1.39-.003.572-.237 1.024-.568 1.43-.302.37-.734.76-1.228 1.205l-.225.203c-.542.489-.635.594-.687.712-.054.123-.069.276-.069 1.026v8.016c0 .621 0 1.162-.063 1.616-.07.496-.22.94-.55 1.352-.626.784-1.428.93-2.38 1.104l-.128.023A21.3 21.3 0 0 1 12 22.75c-1.518 0-2.82-.153-3.852-.343l-.128-.023c-.952-.174-1.754-.32-2.38-1.104-.33-.413-.48-.856-.55-1.352-.063-.454-.063-.995-.063-1.616v-8.017c0-.75-.015-.902-.069-1.025-.052-.118-.145-.223-.687-.712l-.185-.167-.04-.036C3.552 7.91 3.12 7.52 2.818 7.15c-.33-.407-.565-.859-.568-1.43-.003-.553.196-.992.504-1.391.273-.353.664-.715 1.098-1.115l.04-.038q.229-.212.458-.396c.517-.415 1.223-.851 1.738-1.153m1.756 1.168a1.3 1.3 0 0 0-.998.127c-.506.296-1.132.687-1.558 1.028a7 7 0 0 0-.378.328c-.487.45-.782.726-.969.968-.159.206-.192.328-.191.465 0 .117.033.248.23.49.22.27.565.583 1.11 1.075l.186.167.083.075c.411.37.776.697.973 1.15.196.448.196.943.195 1.512v8.084c0 .682.001 1.117.049 1.455.042.305.116.474.236.624.243.304.47.379 1.608.588.952.175 2.163.318 3.58.318s2.628-.143 3.58-.318c1.139-.21 1.365-.284 1.608-.588.12-.15.194-.319.236-.624.048-.338.05-.773.05-1.455V10.18c-.002-.57-.002-1.064.194-1.512.198-.453.562-.78.973-1.15l.083-.075.185-.167c.546-.492.89-.805 1.11-1.075.198-.242.23-.373.231-.49 0-.137-.032-.26-.191-.465-.187-.242-.482-.518-.97-.968a7 7 0 0 0-.377-.328c-.426-.341-1.052-.732-1.558-1.028a1.3 1.3 0 0 0-.998-.127l-.49.13a.86.86 0 0 0-.505.378 3.706 3.706 0 0 1-6.322 0 .86.86 0 0 0-.505-.379z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgTshirt;
