import CommissionSection from '../components/CommissionSection'
import PageShell from '../components/PageShell'
import SEO from '../components/SEO'
import SellerRulesSection from '../components/SellerRulesSection'
import SellerSection from '../components/SellerSection'
import { siteConfig } from '../siteConfig'

export default function VendorsPage() {
  return (
    <>
      <SEO
        title="Sell on Blorbmart | Campus Vendors & Sellers — UNIOSUN"
        description="Open your campus store on Blorbmart and sell to thousands of UNIOSUN students. View commission rates, seller rules, and start listing your products today."
        keywords={['sell on campus', 'UNIOSUN vendor', 'campus seller Nigeria', 'blorbmart vendor', 'campus store UNIOSUN']}
        canonical={`${siteConfig.siteUrl}/vendors`}
        image={`${siteConfig.siteUrl}${siteConfig.defaultOgImage}`}
      />
      <PageShell>
        <main style={{ paddingTop: 80 }}>
          <SellerSection />
          <CommissionSection />
          <SellerRulesSection />
        </main>
      </PageShell>
    </>
  )
}
