import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLayersMinimalistic = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M7.62442 4.4489C9.50121 3.69796 10.6208 3.25 12 3.25C13.3792 3.25 14.4988 3.69796 16.3756 4.4489L19.3451 5.6367C20.2996 6.01851 21.0728 6.32776 21.6035 6.60601C21.8721 6.74683 22.1323 6.90648 22.333 7.09894C22.5392 7.29668 22.75 7.59658 22.75 8C22.75 8.40342 22.5392 8.70332 22.333 8.90106C22.1323 9.09352 21.8721 9.25317 21.6035 9.39399C21.0728 9.67223 20.2996 9.98148 19.3451 10.3633L16.3756 11.5511C14.4988 12.302 13.3792 12.75 12 12.75C10.6208 12.75 9.50121 12.302 7.62443 11.5511L4.65495 10.3633C3.70037 9.98149 2.9272 9.67223 2.39647 9.39399C2.12786 9.25317 1.86765 9.09352 1.66701 8.90106C1.46085 8.70332 1.25 8.40342 1.25 8C1.25 7.59658 1.46085 7.29668 1.66701 7.09894C1.86765 6.90648 2.12786 6.74683 2.39647 6.60601C2.92721 6.32776 3.70037 6.01851 4.65496 5.63669L7.62442 4.4489Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.50053 11.4415C2.50053 11.4415 2.50053 11.4415 2.50053 11.4415L2.49913 11.4402L2.50261 11.4432C2.50702 11.4471 2.51522 11.4541 2.52722 11.4641C2.55123 11.4842 2.59042 11.5161 2.64479 11.5581C2.75354 11.6422 2.92289 11.7663 3.1528 11.9154C3.61265 12.2136 4.31419 12.6114 5.25737 12.9887L8.06584 14.1121C10.0907 14.922 10.9396 15.25 12 15.25C13.0604 15.25 13.9093 14.922 15.9342 14.1121L18.7426 12.9887C19.6858 12.6114 20.3874 12.2136 20.8472 11.9154C21.0771 11.7663 21.2465 11.6422 21.3552 11.5581C21.4096 11.5161 21.4488 11.4842 21.4728 11.4641C21.4848 11.4541 21.493 11.4471 21.4974 11.4432L21.4995 11.4415C21.5 11.441 21.5006 11.4405 21.5011 11.44C21.8095 11.1652 22.2823 11.1915 22.5583 11.4992C22.8349 11.8075 22.8092 12.2817 22.5008 12.5583L22 12C22.5008 12.5583 22.501 12.5581 22.5008 12.5583L22.4994 12.5595L22.4977 12.5611L22.493 12.5652L22.4793 12.5772C22.4682 12.5868 22.4532 12.5997 22.4341 12.6155C22.3961 12.6473 22.3422 12.6911 22.2724 12.745C22.1329 12.8528 21.9299 13.001 21.6634 13.1739C21.1303 13.5196 20.3424 13.9644 19.2997 14.3814L16.4912 15.5048C16.4524 15.5204 16.4138 15.5358 16.3756 15.5511C14.4988 16.302 13.3792 16.75 12 16.75C10.6208 16.75 9.50121 16.302 7.62442 15.5511C7.58619 15.5358 7.54763 15.5204 7.50875 15.5048L4.70029 14.3814C3.65759 13.9644 2.86971 13.5196 2.33662 13.1739C2.07005 13.001 1.86705 12.8528 1.72757 12.745C1.65782 12.6911 1.60392 12.6473 1.56587 12.6155C1.54684 12.5997 1.53177 12.5868 1.52066 12.5772L1.50696 12.5652L1.50233 12.5611L1.50057 12.5595L1.4995 12.5586C1.49934 12.5584 1.49919 12.5583 2 12L1.4995 12.5586C1.19116 12.282 1.16512 11.8075 1.44171 11.4992C1.71775 11.1915 2.19075 11.1654 2.49913 11.4402M2.50053 11.4415C2.50053 11.4415 2.50053 11.4415 2.50053 11.4415ZM2.49896 15.4401C2.19058 15.1652 1.71775 15.1915 1.44171 15.4992L2.49896 15.4401ZM2.49896 15.4401L2.50261 15.4432C2.50702 15.4471 2.51522 15.4541 2.52722 15.4641C2.55123 15.4842 2.59042 15.5161 2.64479 15.5581C2.75354 15.6422 2.92289 15.7663 3.1528 15.9154C3.61265 16.2136 4.31419 16.6114 5.25737 16.9887L8.06584 18.1121C10.0907 18.922 10.9396 19.25 12 19.25C13.0604 19.25 13.9093 18.922 15.9342 18.1121L18.7426 16.9887C19.6858 16.6114 20.3874 16.2136 20.8472 15.9154C21.0771 15.7663 21.2465 15.6422 21.3552 15.5581C21.4096 15.5161 21.4488 15.4842 21.4728 15.4641C21.4848 15.4541 21.493 15.4471 21.4974 15.4432L21.4995 15.4415C21.5 15.441 21.5006 15.4405 21.5011 15.44C21.8095 15.1652 22.2823 15.1915 22.5583 15.4992C22.8349 15.8075 22.8092 16.2817 22.5008 16.5583L22.0166 16.0185C22.5008 16.5583 22.501 16.5581 22.5008 16.5583L22.4994 16.5595L22.4977 16.5611L22.493 16.5652L22.4793 16.5772C22.4682 16.5868 22.4532 16.5997 22.4341 16.6155C22.3961 16.6473 22.3422 16.6911 22.2724 16.745C22.1329 16.8528 21.9299 17.001 21.6634 17.1739C21.1303 17.5196 20.3424 17.9644 19.2997 18.3814L16.4912 19.5048C16.4524 19.5204 16.4138 19.5358 16.3756 19.5511C14.4988 20.302 13.3792 20.75 12 20.75C10.6208 20.75 9.50121 20.302 7.62443 19.5511C7.58619 19.5358 7.54763 19.5204 7.50875 19.5048L4.70029 18.3814C3.65759 17.9644 2.86971 17.5196 2.33662 17.1739C2.07005 17.001 1.86705 16.8528 1.72757 16.745C1.65782 16.6911 1.60392 16.6473 1.56587 16.6155C1.54684 16.5997 1.53177 16.5868 1.52066 16.5772L1.50696 16.5652L1.50233 16.5611L1.50057 16.5595L1.4995 16.5586C1.49934 16.5584 1.49919 16.5583 2 16L1.4995 16.5586C1.19116 16.282 1.16512 15.8075 1.44171 15.4992"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgLayersMinimalistic;
