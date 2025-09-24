import Banner from '@/components/aboutUs/Banner';
import AboutUs from '@/components/aboutUs/AboutUs';
import FAQ from '@/components/aboutUs/FAQ';
import { getCurrentFlavor } from '@/utils/flavors/settings';

export default function AboutUsPage() {
  const selectedFlavor = getCurrentFlavor();

  return (
    <div>
      <Banner selectedFlavor={selectedFlavor} />
      <AboutUs selectedFlavor={selectedFlavor} />
      <FAQ selectedFlavor={selectedFlavor} />
    </div>
  );
}