import BlogOverview from '@/components/blog/BlogOverview';
import { getCurrentFlavor } from '@/utils/flavors/settings';

export default function BlogPage() {
  const selectedFlavor = getCurrentFlavor();

  return <BlogOverview selectedFlavor={selectedFlavor} />;
}
