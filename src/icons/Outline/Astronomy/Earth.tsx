import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgEarth = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.57801 5.34262C3.83444 7.02492 2.75 9.38582 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C12.1275 21.25 12.2544 21.2474 12.3807 21.2423C12.1752 20.3307 12.1474 19.1051 12.774 17.9243C13.4261 16.6955 14.7762 16.1622 15.7689 15.9182C16.289 15.7904 16.7708 15.7273 17.1211 15.6959C17.2972 15.6801 17.4423 15.6721 17.5452 15.668C17.5967 15.666 17.6377 15.6649 17.667 15.6644L17.7019 15.6639L17.7104 15.6638C19.3829 15.6464 20.1364 15.1025 20.5363 14.5836C20.8779 14.1404 21.0069 13.6971 21.1377 13.2475C21.1543 13.1903 21.171 13.133 21.1881 13.0756C21.229 12.7227 21.25 12.3638 21.25 12C21.25 9.47592 20.239 7.18797 18.5999 5.51898C18.5912 5.55304 18.5823 5.5866 18.5732 5.6196C18.4104 6.21256 18.1475 6.82114 17.8618 7.25475C17.6059 7.64313 17.1095 8.03492 16.6975 8.33094C16.4263 8.52578 16.144 8.6913 15.8879 8.83888C15.857 8.85672 15.8265 8.87428 15.7963 8.8916C15.5683 9.02278 15.3631 9.14077 15.1656 9.27123C14.7338 9.55655 14.3997 9.86363 14.1748 10.3273C14.0961 10.4897 14.0936 10.6481 14.1402 10.8177C14.2148 11.0892 14.2656 11.3946 14.2664 11.706C14.2681 12.355 13.9375 12.8817 13.5126 13.2241C13.0928 13.5625 12.5441 13.756 11.9918 13.75C9.53653 13.7231 8.02692 11.7306 7.82782 9.51448C7.74861 8.63293 7.36212 7.74121 6.87411 6.96185C6.42593 6.2461 5.92094 5.67095 5.57801 5.34262ZM6.74505 4.38662C7.1601 4.80462 7.68084 5.42381 8.14544 6.16579C8.70296 7.05616 9.21374 8.17759 9.3218 9.38025C9.47276 11.0605 10.5349 12.234 12.0082 12.25C12.2108 12.2523 12.4212 12.1772 12.5714 12.0562C12.7165 11.9393 12.7667 11.8158 12.7664 11.7099C12.766 11.5544 12.7398 11.3825 12.6937 11.2148C12.5726 10.7736 12.5553 10.2292 12.8252 9.67271C13.2102 8.87891 13.7808 8.38838 14.3388 8.01971C14.5779 7.86171 14.826 7.71918 15.0498 7.59055C15.08 7.57322 15.1097 7.55613 15.1389 7.5393C15.3941 7.39218 15.6182 7.25939 15.8222 7.11277C16.2533 6.80305 16.526 6.55581 16.6092 6.42947C16.7917 6.15255 16.9969 5.69533 17.1267 5.2225C17.2296 4.84787 17.2581 4.56036 17.2485 4.38216C15.7573 3.35281 13.949 2.75 12 2.75C10.0481 2.75 8.23748 3.35455 6.74505 4.38662ZM22.6792 13.2403C22.726 12.8333 22.75 12.4195 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.4604 22.75 21.9699 18.6789 22.6588 13.4064C22.6771 13.3429 22.6929 13.29 22.7071 13.2501L22.6792 13.2403ZM19.9047 16.8066C19.3091 17.0249 18.5912 17.1547 17.7261 17.1638L17.7182 17.1638V17.1638L17.7156 17.1638L17.695 17.1641C17.6755 17.1645 17.6449 17.1652 17.6044 17.1668C17.5233 17.1701 17.4034 17.1766 17.2552 17.1899C16.9571 17.2166 16.5537 17.27 16.1269 17.3749C15.2257 17.5964 14.435 17.9942 14.099 18.6274C13.6435 19.4857 13.7085 20.4196 13.8784 21.0592C16.4274 20.5334 18.5931 18.9589 19.9047 16.8066Z"
      fill="black"
    />
  </Svg>
);
export default SvgEarth;
