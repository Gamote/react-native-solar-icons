import React from 'react';
import {
  getIconComponent,
  IconTypes,
  IconType,
  IconNameByType,
  IconComponentType,
} from './icons';

export interface SolarIconProps<T extends IconType = typeof IconTypes.Bold> extends React.ComponentPropsWithoutRef<IconComponentType> {
  /**
   * The icon set type. Defaults to IconTypes.Bold.
   */
  type?: T;
  /**
   * The icon name, e.g. "ArrowDown". Auto-completion will only show valid names for the selected type.
   */
  name: IconNameByType[T];
  /**
   * Icon size (width and height). Defaults to 24.
   */
  size?: number;
  /**
   * Icon color, applied as the SVG fill. Defaults to '#000'.
   */
  color?: string;
}

export const SolarIcon = <T extends IconType>({
                                                type,
                                                name,
                                                size = 24,
                                                color = '#000',
                                                ...props
                                              }: SolarIconProps<T>) => {
  const IconComponent = getIconComponent(type || IconTypes.Bold, name);
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in "${type}" set.`);
    return null;
  }
  // Pass the fill as color. (This works properly only if the SVG uses currentColor.)
  return <IconComponent width={size} height={size} fill={color} {...props} />;
};
