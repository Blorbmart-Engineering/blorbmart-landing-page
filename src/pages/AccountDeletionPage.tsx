import { useEffect } from 'react'
import PageShell from '../components/PageShell'
import SEO from '../components/SEO'
import { siteConfig } from '../siteConfig'

export default function AccountDeletionPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${siteConfig.siteUrl}/account-deletion#webpage`,
      url: `${siteConfig.siteUrl}/account-deletion`,
      name: 'Account Deletion - Blorbmart Vendor',
      description: 'Request deletion of your Blorbmart Vendor account. Learn what data is deleted and what is retained.',
    },
  ]

  return (
    <>
      <SEO
        title="Account Deletion - Blorbmart Vendor"
        description="Request deletion of your Blorbmart Vendor account. Learn what data is deleted and what is retained for legal compliance."
        keywords={[
          'blorbmart vendor account deletion',
          'delete blorbmart account',
          'vendor account removal',
          'blorbmart data deletion',
        ]}
        canonical={`${siteConfig.siteUrl}/account-deletion`}
        image={`${siteConfig.siteUrl}${siteConfig.defaultOgImage}`}
        structuredData={structuredData}
      />
      <PageShell>
        <div className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_36%,#f8fafc_100%)] px-4 pb-16 pt-24 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-4xl flex-col gap-6">
            <div className="overflow-hidden rounded-[34px] border border-white/80 bg-[radial-gradient(circle_at_top_left,_rgba(239,68,68,0.12),_transparent_34%),linear-gradient(135deg,#fef2f2_0%,#ffffff_58%,#f8fafc_100%)] p-6 shadow-[0_28px_70px_rgba(148,163,184,0.18)] sm:p-8">
              <p className="mb-3 inline-flex rounded-full border border-red-100 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-red-700">
                Account
              </p>
              <h1 className="font-['Sora'] text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                Account Deletion Request
              </h1>
              <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
                Blorbmart Vendor — Manage your account data and request permanent deletion.
              </p>
            </div>

            <div className="overflow-hidden rounded-[34px] border border-slate-200/60 bg-white p-6 shadow-[0_28px_70px_rgba(148,163,184,0.12)] sm:p-10">
              <div className="prose prose-slate max-w-none">
                <h2 className="font-['Sora'] text-xl font-semibold text-slate-900 sm:text-2xl">
                  App Information
                </h2>
                <div className="mt-4 rounded-2xl border border-slate-100 bg-slate-50/50 p-5">
                  <ul className="list-none space-y-2 text-slate-700">
                    <li><strong>App:</strong> Blorbmart Vendor</li>
                    <li><strong>Developer:</strong> Blorbmart Limited</li>
                  </ul>
                </div>

                <h2 className="mt-10 font-['Sora'] text-xl font-semibold text-slate-900 sm:text-2xl">
                  How to Request Account Deletion
                </h2>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  To request the deletion of your Blorbmart Vendor account, send an email to{' '}
                  <a
                    href="mailto:blorbmarthelpdesk@gmail.com"
                    className="font-medium text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    blorbmarthelpdesk@gmail.com
                  </a>{' '}
                  with the subject line <strong>"Account Deletion Request"</strong> and include the following in your message:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
                  <li>Your full name</li>
                  <li>The email address linked to your vendor account</li>
                  <li>Your store/business name on Blorbmart</li>
                </ul>
                <p className="mt-4 text-slate-700">
                  We will verify your identity before processing the request.
                </p>

                <h2 className="mt-10 font-['Sora'] text-xl font-semibold text-slate-900 sm:text-2xl">
                  What Gets Deleted
                </h2>
                <p className="mt-4 text-slate-700">
                  Once your request is processed, the following data will be <strong>permanently removed</strong>:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
                  <li>Your vendor profile (name, phone number, business information)</li>
                  <li>Your login credentials</li>
                  <li>Your product listings and store information</li>
                  <li>Your uploaded images and media</li>
                </ul>

                <h2 className="mt-10 font-['Sora'] text-xl font-semibold text-slate-900 sm:text-2xl">
                  What We Retain
                </h2>
                <p className="mt-4 text-slate-700">
                  In compliance with Nigerian law and for financial accountability purposes, the following data will be <strong>retained for up to 2 years</strong> after deletion:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
                  <li>Order and transaction records</li>
                  <li>Any data required under the Nigeria Data Protection Act 2023 (NDPA) and FCCPC regulations</li>
                </ul>

                <h2 className="mt-10 font-['Sora'] text-xl font-semibold text-slate-900 sm:text-2xl">
                  Processing Time
                </h2>
                <p className="mt-4 text-slate-700">
                  Account deletion requests are processed within <strong>7–14 business days</strong> of verification.
                </p>

                <h2 className="mt-10 font-['Sora'] text-xl font-semibold text-slate-900 sm:text-2xl">
                  Contact Us
                </h2>
                <p className="mt-4 text-slate-700">
                  For further enquiries, reach us at{' '}
                  <a
                    href="mailto:blorbmarthelpdesk@gmail.com"
                    className="font-medium text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    blorbmarthelpdesk@gmail.com
                  </a>
                </p>

                <div className="mt-10 border-t border-slate-100 pt-6">
                  <p className="text-sm text-slate-500">
                    <em>Privacy Policy — Blorbmart Limited</em>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageShell>
    </>
  )
}
