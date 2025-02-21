import React from 'react';
import {
  getIconComponent,
  IconTypes,
  IconType,
  IconNameByType,
} from './icons';

export interface SolarIconProps<T extends IconType = typeof IconTypes.Bold> {
  type?: T;
  name: IconNameByType[T];
  color?: string;
  secondaryColor?: string;
  size?: number;
}

export const SolarIcon = <T extends IconType>({
                                                type,
                                                name,
                                                size = 24,
                                                color = '#000',
                                                secondaryColor = '#FFF',
                                                ...rest
                                              }: SolarIconProps<T>) => {
  const IconComponent = getIconComponent(type ?? IconTypes.Bold, name);
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in "${type}" set.`);
    return null;
  }
  return (
    <IconComponent
      width={size}
      height={size}
      primaryColor={color}
      secondaryColor={secondaryColor || color}
      {...rest}
    />
  );
};
