import About from '../components/About'
import CampusPartners from '../components/CampusPartners'
import FAQ, { faqItems, faqStructuredData } from '../components/FAQ'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Insights from '../components/Insights'
import MobileApp from '../components/MobileApp'
import PageShell from '../components/PageShell'
import RiderSection from '../components/RiderSection'
import SEO from '../components/SEO'
import SellerSection from '../components/SellerSection'
import SeoNotice from '../components/SeoNotice'
import Team, { teamStructuredData } from '../components/Team'
import { useRecentPosts } from '../hooks/useBlogPosts'
import { siteConfig } from '../siteConfig'

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.siteUrl}/#organization`,
    name: 'Blorbmart',
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/logo.png`,
    image: `${siteConfig.siteUrl}/32450.jpg`,
    email: 'hello@blorbmart.com.ng',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: 'hello@blorbmart.com.ng',
        availableLanguage: ['English'],
      },
    ],
    sameAs: [
      'https://www.linkedin.com/company/blorbmart',
      'https://x.com/blorbmart',
      'https://www.instagram.com/blorbmart',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.siteUrl}/#website`,
    url: siteConfig.siteUrl,
    name: 'Blorbmart',
    description:
      'Blorbmart is a student marketplace that allows university students to buy and sell items easily on campus.',
    publisher: {
      '@id': `${siteConfig.siteUrl}/#organization`,
    },
    inLanguage: 'en-NG',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${siteConfig.siteUrl}/blog#blog`,
    url: `${siteConfig.siteUrl}/blog`,
    name: 'Blorbmart Blog',
    publisher: {
      '@id': `${siteConfig.siteUrl}/#organization`,
    },
    inLanguage: 'en-NG',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${siteConfig.siteUrl}/#marketplace`,
    name: 'Blorbmart Campus Marketplace',
    category: 'Campus ecommerce platform',
    brand: {
      '@type': 'Brand',
      name: 'Blorbmart',
    },
    image: `${siteConfig.siteUrl}/32450.jpg`,
    description:
      'Blorbmart is a Nigeria student marketplace and campus ecommerce platform for buying, selling, and delivering items within universities.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'NGN',
      availability: 'https://schema.org/InStock',
      url: siteConfig.siteUrl,
    },
  },
  faqStructuredData(faqItems, siteConfig.siteUrl),
  ...teamStructuredData(siteConfig.siteUrl),
]

export default function HomePage() {
  const { data: recentPosts } = useRecentPosts(3)

  return (
    <>
      <SEO
        title="Blorbmart Campus Marketplace | Student Buy and Sell Platform in Nigeria"
        description="Blorbmart is a student marketplace that allows university students to buy and sell items easily on campus. Discover trusted campus sellers, student riders, fast on-campus delivery, and blog resources for students."
        keywords={[
          'campus marketplace',
          'student marketplace',
          'buy and sell on campus',
          'Nigeria student marketplace',
          'campus ecommerce platform',
          'student buy and sell platform',
          'Blorbmart',
          'campus delivery platform',
          'student blog nigeria',
        ]}
        canonical={siteConfig.siteUrl}
        image={`${siteConfig.siteUrl}${siteConfig.defaultOgImage}`}
        structuredData={structuredData}
      />
      <PageShell>
        <main>
          <Hero />
          <About />
          <HowItWorks />
          <SellerSection />
          <RiderSection />
          <CampusPartners />
          <Team />
          <Insights articles={recentPosts} />
          <SeoNotice />
          <MobileApp />
          <FAQ items={faqItems} />
        </main>
      </PageShell>
    </>
  )
}
