import PageShell from '../components/PageShell'
import RiderSection from '../components/RiderSection'
import SEO from '../components/SEO'
import { siteConfig } from '../siteConfig'

export default function RidersPage() {
  return (
    <>
      <SEO
        title="Become a Campus Rider | Blorbmart × Campus Runs — UNIOSUN"
        description="Earn money as a campus delivery rider with Blorbmart and Campus Runs at UNIOSUN. Flexible hours, fast payments, and short familiar routes."
        keywords={['campus rider UNIOSUN', 'delivery rider Nigeria', 'campus runs blorbmart', 'earn as student UNIOSUN', 'delivery job campus']}
        canonical={`${siteConfig.siteUrl}/riders`}
        image={`${siteConfig.siteUrl}${siteConfig.defaultOgImage}`}
      />
      <PageShell>
        <main style={{ paddingTop: 80 }}>
          <RiderSection />
        </main>
      </PageShell>
    </>
  )
}
