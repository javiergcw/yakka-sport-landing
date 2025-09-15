import { Flavor, flavorConfigs } from './flavor';

export const CURRENT_FLAVOR: Flavor = Flavor.LABOUR;

export const getCurrentFlavorConfig = () => {
    return flavorConfigs[CURRENT_FLAVOR];
};

