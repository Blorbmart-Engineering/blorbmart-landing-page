import HowItWorks from '../components/HowItWorks'
import PageShell from '../components/PageShell'
import SEO from '../components/SEO'
import { siteConfig } from '../siteConfig'

export default function HowItWorksPage() {
  return (
    <>
      <SEO
        title="How Blorbmart Works | Campus Marketplace for UNIOSUN Students"
        description="Learn how Blorbmart connects buyers, sellers, and riders on the UNIOSUN campus. Simple steps to buy, sell, and earn with Campus Runs delivery."
        keywords={['how blorbmart works', 'campus marketplace guide', 'UNIOSUN student buying', 'campus selling guide']}
        canonical={`${siteConfig.siteUrl}/how-it-works`}
        image={`${siteConfig.siteUrl}${siteConfig.defaultOgImage}`}
      />
      <PageShell>
        <main style={{ paddingTop: 80 }}>
          <HowItWorks />
        </main>
      </PageShell>
    </>
  )
}
