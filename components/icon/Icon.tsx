import Feather from '@expo/vector-icons/Feather';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';

export function Icon({
  style,
  ...rest
}: IconProps<ComponentProps<typeof Feather>['name']>) {
  return <Feather size={24} style={style} {...rest} />;
}
