import ContactUs from "@/components/contactUs/ContactUs";
import { getCurrentFlavor } from '@/utils/flavors/settings';

export default function ContactUsPage() {
  const selectedFlavor = getCurrentFlavor();

  return (
    <div>
      <ContactUs selectedFlavor={selectedFlavor} />
    </div>
  );
}
