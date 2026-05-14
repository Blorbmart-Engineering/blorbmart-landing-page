import About from '../components/About'
import CommissionSection from '../components/CommissionSection'
import FAQ, { faqItems, faqStructuredData } from '../components/FAQ'
import FoodSection from '../components/FoodSection'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import MobileApp from '../components/MobileApp'
import PageShell from '../components/PageShell'
import RiderSection from '../components/RiderSection'
import SEO from '../components/SEO'
import SellerRulesSection from '../components/SellerRulesSection'
import SellerSection from '../components/SellerSection'
import SeoNotice from '../components/SeoNotice'
import Team, { teamStructuredData } from '../components/Team'
import { useRecentPosts } from '../hooks/useBlogPosts'
import { siteConfig } from '../siteConfig'
import Insights from '../components/Insights'

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
      'https://www.instagram.com/blorbmart_uniosun',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.siteUrl}/#website`,
    url: siteConfig.siteUrl,
    name: 'Blorbmart',
    description:
      'Blorbmart is a student marketplace for UNIOSUN — buy, sell, and order food on campus with fast delivery by Campus Runs.',
    publisher: { '@id': `${siteConfig.siteUrl}/#organization` },
    inLanguage: 'en-NG',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${siteConfig.siteUrl}/#marketplace`,
    name: 'Blorbmart Campus Marketplace',
    category: 'Campus ecommerce and food delivery platform',
    brand: { '@type': 'Brand', name: 'Blorbmart' },
    image: `${siteConfig.siteUrl}/32450.jpg`,
    description:
      'Blorbmart is a campus marketplace for UNIOSUN students. Buy and sell products, order food from local restaurants, and get fast delivery through Campus Runs.',
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
        title="Blorbmart | Campus Marketplace & Food Delivery for UNIOSUN Students"
        description="Blorbmart is UNIOSUN's campus marketplace — order food from Mijas Pasta, Tasty Garnished Kitchen, and more. Buy and sell fashion, beauty, stationery, electronics, and more. Fast delivery by Campus Runs across Shasha, Nipco, URP Area, Cele, and beyond."
        keywords={[
          'campus marketplace UNIOSUN',
          'student marketplace Nigeria',
          'order food UNIOSUN',
          'Mijas Pasta delivery',
          'campus food delivery',
          'buy and sell on campus',
          'Blorbmart',
          'Campus Runs delivery',
          'student marketplace Osogbo',
          'UNIOSUN student app',
        ]}
        canonical={siteConfig.siteUrl}
        image={`${siteConfig.siteUrl}${siteConfig.defaultOgImage}`}
        structuredData={structuredData}
      />
      <PageShell>
        <main>
          <Hero />
          <FoodSection />
          <About />
          <HowItWorks />
          <SellerSection />
          <CommissionSection />
          <SellerRulesSection />
          <RiderSection />
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
