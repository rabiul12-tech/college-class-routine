import { notFound } from 'next/navigation';
import LandingPageRenderer from '@/components/landing/LandingPageRenderer';
import { landingPages, landingPagesMap } from '@/lib/landing/pages';

export function generateStaticParams() {
  return landingPages.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const page = landingPagesMap[params.slug];

  if (!page) {
    return {
      title: 'Landing Page Not Found',
      description: 'The requested landing page does not exist.',
    };
  }

  return {
    title: page.seoTitle,
    description: page.seoDescription,
  };
}

export default function LandingPage({ params }: { params: { slug: string } }) {
  const page = landingPagesMap[params.slug];

  if (!page) notFound();

  return <LandingPageRenderer page={page} />;
}
