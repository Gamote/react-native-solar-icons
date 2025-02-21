import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPills = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M17.8445 6.15547C17.8445 6.15547 17.4119 8.39999 14.9057 10.9061C12.3996 13.4123 10.1555 13.8445 10.1555 13.8445M21.7828 11.038C21.5355 10.1888 21.0771 9.38806 20.4075 8.71849L15.2815 3.59246C13.1582 1.46918 9.71573 1.46918 7.59246 3.59246C5.46918 5.71573 5.46918 9.15824 7.59246 11.2815L12.7185 16.4075C14.8418 18.5308 18.2843 18.5308 20.4075 16.4075C20.8312 15.9839 21.1703 15.5077 21.4249 15"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M14.5 6.5L13 5"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M6.88819 10.8678C7.29311 10.7806 7.55064 10.3816 7.46339 9.97667C7.37615 9.57175 6.97717 9.31422 6.57225 9.40147L6.88819 10.8678ZM5.81285 20.7743C5.43639 20.6016 4.99115 20.7667 4.81836 21.1431C4.64558 21.5196 4.8107 21.9648 5.18715 22.1376L5.81285 20.7743ZM1.86246 18.813C2.03525 19.1894 2.48049 19.3545 2.85695 19.1818C3.2334 19.009 3.39851 18.5637 3.22572 18.1873L1.86246 18.813ZM2.75 16C2.75 13.4826 4.52254 11.3775 6.88819 10.8678L6.57225 9.40147C3.53021 10.0569 1.25 12.7613 1.25 16H2.75ZM13.139 17.0796C12.6416 19.4613 10.5288 21.25 8 21.25V22.75C11.2534 22.75 13.9676 20.4491 14.6074 17.3863L13.139 17.0796ZM8 21.25C7.21794 21.25 6.47774 21.0795 5.81285 20.7743L5.18715 22.1376C6.04437 22.531 6.99764 22.75 8 22.75V21.25ZM3.22572 18.1873C2.92053 17.5223 2.75 16.7821 2.75 16H1.25C1.25 17.0024 1.46899 17.9557 1.86246 18.813L3.22572 18.1873Z"
      fill="black"
    />
  </Svg>
);
export default SvgPills;
