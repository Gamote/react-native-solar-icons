import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBicycling = (props: SvgProps) => (
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
      d="M15 2.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M12.25 4a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m-.089 3.115.035.035.578.574c.909.903 1.225 1.2 1.605 1.356s.814.17 2.095.17H18.5a.75.75 0 0 1 0 1.5h-2.168c-1.083 0-1.836 0-2.525-.283-.689-.284-1.222-.815-1.99-1.58l-.1-.1-.578-.573c-.409-.406-.66-.653-.86-.803a.8.8 0 0 0-.185-.11l-.01.006a.8.8 0 0 0-.152.135c-.17.185-.373.472-.701.946l-1.227 1.767c-.334.482-.537.777-.652 1.007a.8.8 0 0 0-.076.204l.007.008c.019.021.064.063.165.125.218.135.546.28 1.083.515l1.516.66c.648.284 1.194.522 1.614.768.447.262.825.572 1.078 1.035.253.464.311.949.29 1.466-.019.487-.113 1.076-.224 1.774l-.064.401a.75.75 0 1 1-1.482-.236l.058-.359c.12-.752.198-1.252.214-1.64.014-.367-.033-.549-.108-.686-.075-.136-.202-.275-.52-.46-.334-.197-.797-.4-1.496-.705l-1.522-.664c-.476-.208-.905-.395-1.226-.593-.348-.215-.69-.515-.827-1-.138-.486-.004-.92.18-1.286.168-.336.435-.72.731-1.148l.029-.041 1.227-1.768.028-.04c.29-.42.553-.798.806-1.07.275-.296.63-.57 1.125-.615s.893.16 1.217.402c.297.222.624.546.986.906M6 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M2.25 18a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M18 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M14.25 18a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgBicycling;
