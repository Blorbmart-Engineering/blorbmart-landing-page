import './App.css'
import About from './components/About'
import CampusPartners from './components/CampusPartners'
import FAQ, { faqItems, faqStructuredData } from './components/FAQ'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Insights from './components/Insights'
import MobileApp from './components/MobileApp'
import Navbar from './components/Navbar'
import RiderSection from './components/RiderSection'
import SEO from './components/SEO'
import SellerSection from './components/SellerSection'
import Team, { teamStructuredData } from './components/Team'

const siteUrl = 'https://blorbmart-landing-page.vercel.app'

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: 'Blorbmart',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/32450.jpg`,
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
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: 'Blorbmart',
    description:
      'Blorbmart is a student marketplace that allows university students to buy and sell items easily on campus.',
    publisher: {
      '@id': `${siteUrl}/#organization`,
    },
    inLanguage: 'en-NG',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${siteUrl}/#marketplace`,
    name: 'Blorbmart Campus Marketplace',
    category: 'Campus ecommerce platform',
    brand: {
      '@type': 'Brand',
      name: 'Blorbmart',
    },
    image: `${siteUrl}/32450.jpg`,
    description:
      'Blorbmart is a Nigeria student marketplace and campus ecommerce platform for buying, selling, and delivering items within universities.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'NGN',
      availability: 'https://schema.org/InStock',
      url: siteUrl,
    },
  },
  faqStructuredData(faqItems, siteUrl),
  ...teamStructuredData(siteUrl),
]

function App() {
  return (
    <>
      <SEO
        title="Blorbmart Campus Marketplace | Student Buy and Sell Platform in Nigeria"
        description="Blorbmart is a student marketplace that allows university students to buy and sell items easily on campus. Discover trusted campus sellers, student riders, and fast on-campus delivery."
        keywords={[
          'campus marketplace',
          'student marketplace',
          'buy and sell on campus',
          'Nigeria student marketplace',
          'campus ecommerce platform',
          'student buy and sell platform',
          'Blorbmart',
          'campus delivery platform',
        ]}
        canonical={siteUrl}
        image={`${siteUrl}/32450.jpg`}
        structuredData={structuredData}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <SellerSection />
        <RiderSection />
        <CampusPartners />
        <Team />
        <Insights />
        <MobileApp />
        <FAQ items={faqItems} />
      </main>
      <Footer />
    </>
  )
}

export default App
