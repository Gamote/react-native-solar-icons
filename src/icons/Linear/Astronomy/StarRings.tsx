import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStarRings = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M21.9953 13.5202C21.9428 12.9192 21.4564 12.3136 20.6439 11.7496M21.9953 13.5202C22.0222 13.8282 21.9335 14.1163 21.7428 14.381C21.3566 14.9171 20.552 15.3568 19.4425 15.6699C21.0996 15.2022 22.0767 14.4522 21.9953 13.5202ZM21.9953 13.5202C21.9842 13.3934 21.9538 13.2665 21.9051 13.1397C21.8177 12.9121 21.6713 12.6853 21.4718 12.4617C21.1157 12.0626 20.5905 11.6738 19.9293 11.3096M21.9953 13.5202C22.0905 14.6106 20.7369 15.4518 18.5406 15.8835M20.6439 11.7496C18.8565 10.5086 15.491 9.46848 11.6958 9.11988C6.17557 8.61283 1.83672 9.76081 2.00472 11.684M20.6439 11.7496C20.0853 11.3617 19.3725 10.9935 18.5406 10.6599C19.0511 10.8646 19.5166 11.0823 19.9293 11.3096M2.00472 11.684C2.01579 11.8108 2.04618 11.9377 2.09486 12.0645C2.18227 12.2921 2.32866 12.5189 2.52818 12.7426C2.88426 13.1416 3.40955 13.5304 4.07073 13.8946M2.00472 11.684C1.9233 10.752 2.90044 10.0021 4.55752 9.5343C3.44808 9.84747 2.64339 10.2871 2.25716 10.8233C2.06651 11.0879 1.97781 11.376 2.00472 11.684ZM2.00472 11.684C2.05722 12.285 2.54363 12.8906 3.35609 13.4547M4.07073 13.8946C4.4834 14.1219 4.949 14.3396 5.45943 14.5444C4.62756 14.2107 3.91472 13.8425 3.35609 13.4547M4.07073 13.8946C5.02103 14.418 6.25205 14.8908 7.66488 15.2705M3.35609 13.4547C4.51322 14.258 6.33172 14.9772 8.5 15.4791M19.9293 11.3096C18.979 10.7862 17.748 10.3134 16.3351 9.93371"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M15.2744 4.85061C15.5336 4.68703 15.7852 4.54535 16.0274 4.42706C16.9081 3.99692 17.6637 3.87605 18.2019 4.13627C18.4777 4.26963 18.6797 4.495 18.8114 4.79847C18.9345 5.08191 18.9963 5.43347 18.9998 5.84181M15.2744 4.85061C13.46 5.99564 11.2763 8.21359 9.38191 10.9923C6.23903 15.6024 5.08058 20.0137 6.78798 20.8588M15.2744 4.85061C14.8855 5.09602 14.4797 5.39073 14.0634 5.72967M6.78798 20.8588C6.79135 20.8604 6.79472 20.8621 6.79811 20.8637C6.91163 20.9186 7.03483 20.9566 7.16684 20.9782C7.40386 21.0171 7.66929 21.0035 7.95811 20.9412C8.47355 20.8302 9.06346 20.5644 9.69933 20.1659C9.84815 20.0727 9.9995 19.9721 10.153 19.8646C10.4088 19.6855 10.6706 19.4869 10.9367 19.2703L12.1115 18.3157M6.78798 20.8588C5.96226 20.4501 5.80688 19.2073 6.22201 17.5113M18.7781 7.48866C18.9285 6.87418 19.004 6.31919 18.9998 5.84181M18.9998 5.84181C19.0073 6.69799 18.7585 7.80381 18.281 9.05476"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M11.7647 14.2813C11.7509 13.3709 11.7441 12.9157 12.0311 12.75C12.3181 12.5843 12.7089 12.8178 13.4905 13.2849L13.6927 13.4058C13.9148 13.5385 14.0258 13.6048 14.1481 13.6203C14.2705 13.6358 14.3902 13.5986 14.6298 13.5242L14.8479 13.4565C15.6908 13.1947 16.1123 13.0638 16.3656 13.2978C16.619 13.5318 16.5364 13.9757 16.3713 14.8635L16.3286 15.0932C16.2817 15.3455 16.2582 15.4716 16.286 15.5949C16.3139 15.7181 16.3898 15.8245 16.5418 16.0372L16.6801 16.2309C17.2148 16.9795 17.4821 17.3538 17.3517 17.6641C17.2213 17.9745 16.7794 18.0153 15.8958 18.0969L15.6672 18.118C15.4161 18.1412 15.2906 18.1528 15.1854 18.2135C15.0803 18.2742 15.0075 18.3771 14.8619 18.583L14.7293 18.7704C14.2168 19.4948 13.9605 19.8571 13.6266 19.8148C13.2926 19.7726 13.1021 19.354 12.7211 18.5166L12.6226 18.3C12.5143 18.062 12.4602 17.943 12.3674 17.8573C12.2745 17.7716 12.1536 17.7288 11.9116 17.6433L11.6914 17.5655C10.8399 17.2646 10.4142 17.1141 10.3383 16.7777C10.2623 16.4413 10.5864 16.1418 11.2345 15.5426L11.4022 15.3876C11.5864 15.2174 11.6785 15.1322 11.7263 15.0186C11.774 14.9049 11.7721 14.7755 11.7682 14.5168L11.7647 14.2813Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgStarRings;
