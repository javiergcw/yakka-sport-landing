import { getColorsByFlavor } from './settings';
import { getCurrentFlavor } from './current-flavor';

export const getCurrentFlavorConfig = () => {
  return getColorsByFlavor(getCurrentFlavor());
};
