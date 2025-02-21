import {
  getIconComponent,
  IconTypes,
  IconType,
  IconNameByType,
  IconComponentType,
} from './icons';

export interface SolarIconProps<T extends IconType = IconType> extends React.ComponentPropsWithoutRef<IconComponentType> {
  /**
   * The icon set type. For example, use `IconTypes.Bold` for the Bold icon set.
   */
  type: T;
  /**
   * The icon name. For example, "ArrowDown".
   * Auto-completion will only show valid names for the selected type.
   */
  name: IconNameByType[T];
  /**
   * Icon size (width and height). Defaults to 24.
   */
  size?: number;
  /**
   * Icon color (applied as the SVG fill). Defaults to '#000'.
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
  const IconComponent = getIconComponent(type, name);
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in "${type}" set.`);
    return null;
  }
  return <IconComponent width={size} height={size} fill={color} {...props} />;
};
