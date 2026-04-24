import { useEffect } from 'react'
import PageShell from '../components/PageShell'
import SEO from '../components/SEO'
import { siteConfig } from '../siteConfig'

export default function TermsAndConditionsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${siteConfig.siteUrl}/terms#webpage`,
      url: `${siteConfig.siteUrl}/terms`,
      name: 'Terms & Conditions - Blorbmart',
      description: 'Read Blorbmart\'s terms and conditions and privacy policy for using our campus marketplace platform in Nigeria.',
    },
  ]

  return (
    <>
      <SEO
        title="Terms & Conditions - Blorbmart Campus Marketplace"
        description="Read Blorbmart's terms and conditions and privacy policy for using our campus marketplace platform in Nigerian universities."
        keywords={[
          'blorbmart terms',
          'blorbmart privacy policy',
          'campus marketplace terms',
          'student marketplace terms nigeria',
        ]}
        canonical={`${siteConfig.siteUrl}/terms`}
        image={`${siteConfig.siteUrl}${siteConfig.defaultOgImage}`}
        structuredData={structuredData}
      />
      <PageShell>
        <div className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_36%,#f8fafc_100%)] px-4 pb-16 pt-24 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-5xl flex-col gap-6">
            <div className="overflow-hidden rounded-[34px] border border-white/80 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),_transparent_34%),linear-gradient(135deg,#eef5ff_0%,#ffffff_58%,#f8fafc_100%)] p-6 shadow-[0_28px_70px_rgba(148,163,184,0.18)] sm:p-8">
              <p className="mb-3 inline-flex rounded-full border border-emerald-100 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">
                Legal
              </p>
              <h1 className="font-['Sora'] text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                Terms & Conditions
              </h1>
              <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
                Read the terms and privacy policy for using Blorbmart across campus marketplace, food delivery, vendor,
                and rider services.
              </p>
              <div className="mt-5 flex flex-wrap gap-3 text-xs sm:text-sm">
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 font-medium text-slate-700">
                  Effective: May 1, 2025
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 font-medium text-slate-700">
                  Platform: blorbmart.com.ng
                </span>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#terms-section"
                  className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Terms
                </a>
                <a
                  href="#privacy-section"
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:text-blue-700"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-2xl shadow-slate-900/10">
              <div className="px-6 py-8 sm:px-10 sm:py-10">

                <div className="prose prose-slate prose-sm max-w-none leading-relaxed sm:prose-base lg:prose-lg prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-emerald-700 prose-strong:text-slate-900">
              <p className="text-gray-700 mb-6">
                Please read these Terms and Conditions carefully before using the Blorbmart platform. 
                By downloading, registering, or using the Blorbmart mobile application or website, 
                you agree to be bound by these Terms. If you do not agree, please do not use our platform.
              </p>

              <h2 id="terms-section" className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. About Blorbmart</h2>
              <p className="text-gray-700 mb-4">
                Blorbmart Limited ("Blorbmart", "we", "us", or "our") operates a multi-vendor e-commerce 
                and food delivery platform designed for Nigerian university campus communities. The platform 
                connects buyers, vendors, and food delivery riders within campus environments, starting with 
                Osun State University (UNIOSUN), Osogbo.
              </p>
              <p className="text-gray-700 mb-4">The Blorbmart platform includes:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Blorbmart Marketplace — for purchasing goods from campus vendors</li>
                <li>Blorb Food — for ordering meals and food items from campus restaurants and food vendors</li>
                <li>Blorb Vendor App — for vendors and restaurants to manage their storefronts and orders</li>
                <li>Rider Portal — for registered delivery riders to manage deliveries</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Eligibility</h2>
              <p className="text-gray-700 mb-4">To use Blorbmart, you must:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Be at least 16 years of age</li>
                <li>Be a registered student, staff member, or affiliated person of a supported campus</li>
                <li>Provide accurate and complete registration information</li>
                <li>Have access to a device compatible with the Blorbmart application</li>
              </ul>
              <p className="text-gray-700 mb-6">
                By creating an account, you represent and warrant that you meet all of the above eligibility requirements.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. User Accounts</h2>
              <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">3.1 Account Registration</h3>
              <p className="text-gray-700 mb-4">
                You are required to create an account to access most features of Blorbmart. You agree to provide 
                accurate, current, and complete information during registration and to update such information as necessary.
              </p>

              <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">3.2 Account Security</h3>
              <p className="text-gray-700 mb-4">
                You are responsible for maintaining the confidentiality of your account credentials, including your password. 
                You agree to notify us immediately at hello@blorbmart.com.ng if you suspect any unauthorized use of your account. 
                Blorbmart will not be liable for any loss resulting from unauthorized use of your account.
              </p>

              <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">3.3 One Account Per User</h3>
              <p className="text-gray-700 mb-6">
                Each user may only maintain one active buyer account. Vendors and riders are subject to additional onboarding verification.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Marketplace (E-Commerce)</h2>
              <p className="text-gray-700 mb-4">
                Blorbmart operates as a multi-vendor marketplace. Vendors list their products independently, and 
                Blorbmart provides the platform infrastructure. The following apply:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Prices are set by individual vendors and may vary</li>
                <li>Product availability is managed by the vendor in real-time</li>
                <li>Blorbmart does not warrant the quality, safety, or legality of items listed by third-party vendors</li>
                <li>Buyers are encouraged to review vendor ratings and descriptions before placing orders</li>
                <li>Orders placed and confirmed are subject to Blorbmart's Cancellation and Refund Policy</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Blorb Food — Food Delivery Service</h2>
              <p className="text-gray-700 mb-4">
                Blorb Food is Blorbmart's on-campus food delivery service. By using Blorb Food, you acknowledge and agree to the following:
              </p>

              <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">5.1 Restaurant & Food Vendor Listings</h3>
              <p className="text-gray-700 mb-4">
                Restaurants and food vendors on Blorb Food operate independently. Blorbmart provides a platform for discovery 
                and ordering but is not responsible for food preparation, quality, allergen content, or food safety.
              </p>

              <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">5.2 Estimated Delivery Times</h3>
              <p className="text-gray-700 mb-4">
                Delivery time estimates are indicative only and may vary based on order volume, kitchen preparation times, 
                rider availability, and campus conditions. Blorbmart does not guarantee specific delivery times.
              </p>

              <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">5.3 Food Orders and Cancellation</h3>
              <p className="text-gray-700 mb-4">
                Once a food order is confirmed and preparation has begun, cancellations may not be accepted. Please review your order carefully before confirming.
              </p>

              <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">5.4 Allergens and Dietary Requirements</h3>
              <p className="text-gray-700 mb-4">
                Blorbmart does not verify allergen or dietary information provided by food vendors. Users with food allergies 
                or specific dietary requirements should contact the vendor directly before ordering.
              </p>

              <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">5.5 Restaurant App</h3>
              <p className="text-gray-700 mb-6">
                Restaurants and food vendors using the Blorbmart Restaurant App agree to maintain accurate menu information, 
                update availability in real-time, prepare orders promptly, and comply with applicable food safety regulations in Nigeria.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Payments</h2>
              <p className="text-gray-700 mb-4">
                Blorbmart uses Paystack as its primary payment processor. By making a payment on the platform, you agree to 
                Paystack's terms of service. Blorbmart supports the following payment methods:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Blorbmart Wallet (funded via bank transfer or card)</li>
                <li>Debit/Credit Card payments via Paystack</li>
              </ul>
              <p className="text-gray-700 mb-6">
                All transactions are processed in Nigerian Naira (NGN). Blorbmart does not store your card details; these are managed securely by Paystack.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Delivery & Riders</h2>
              <p className="text-gray-700 mb-4">
                Deliveries on Blorbmart are fulfilled by registered campus riders. By requesting delivery:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>You agree to be present at the delivery location or provide a valid pickup arrangement</li>
                <li>Blorbmart riders are independent contractors and not employees of Blorbmart</li>
                <li>Blorbmart is not liable for delays caused by circumstances beyond our control, including but not limited to campus access restrictions, weather, or rider emergencies</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">8. Vendor Obligations</h2>
              <p className="text-gray-700 mb-4">
                If you are registered as a vendor on the Blorbmart platform, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Provide accurate descriptions and images of your products or menu items</li>
                <li>Maintain up-to-date inventory and availability</li>
                <li>Fulfill orders in a timely and professional manner</li>
                <li>Not list prohibited, counterfeit, or illegal items</li>
                <li>Comply with all applicable Nigerian laws governing sales, consumer rights, and taxation</li>
              </ul>
              <p className="text-gray-700 mb-6">
                Blorbmart reserves the right to suspend or terminate vendor accounts that violate these obligations.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">9. Prohibited Conduct</h2>
              <p className="text-gray-700 mb-4">You may not use Blorbmart to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>List or purchase illegal, counterfeit, or prohibited goods</li>
                <li>Submit false, misleading, or fraudulent information</li>
                <li>Reverse-engineer or attempt to access the platform's source code</li>
                <li>Engage in any activity that disrupts or damages the platform or other users' experience</li>
                <li>Harass, abuse, or threaten other users, vendors, or riders</li>
                <li>Create multiple accounts to circumvent suspensions or restrictions</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">10. Refunds & Cancellations</h2>
              <p className="text-gray-700 mb-4">Refund eligibility depends on the order type and circumstance:</p>
              
              <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">Marketplace Orders</h3>
              <p className="text-gray-700 mb-4">
                Refunds may be processed if the item was not delivered, was significantly different from the description, 
                or was damaged during delivery. Requests must be submitted within 24 hours of the expected delivery time.
              </p>

              <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">Food Orders</h3>
              <p className="text-gray-700 mb-4">
                Refunds for food orders are assessed on a case-by-case basis. Orders confirmed and in preparation are 
                generally non-refundable unless a vendor error occurred.
              </p>

              <p className="text-gray-700 mb-6">
                All approved refunds will be credited to the user's Blorbmart Wallet or original payment method within 3–5 business days.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">11. Intellectual Property</h2>
              <p className="text-gray-700 mb-6">
                All content on the Blorbmart platform — including the name "Blorbmart", "Blorb Food", logos, graphics, 
                app interfaces, and written content — is the intellectual property of Blorbmart Limited and is protected 
                under applicable Nigerian and international intellectual property laws. You may not reproduce, distribute, 
                or create derivative works from our content without prior written consent.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">12. Limitation of Liability</h2>
              <p className="text-gray-700 mb-6">
                To the maximum extent permitted by Nigerian law, Blorbmart Limited shall not be liable for any indirect, 
                incidental, special, or consequential damages arising out of your use of the platform, including but not 
                limited to loss of data, loss of profits, or personal injury. Our total liability for any claim shall not 
                exceed the amount paid by you for the specific transaction giving rise to the claim.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">13. Indemnification</h2>
              <p className="text-gray-700 mb-6">
                You agree to indemnify and hold harmless Blorbmart Limited, its directors, employees, and partners from any 
                claims, damages, losses, or expenses (including legal fees) arising out of your use of the platform, violation 
                of these Terms, or infringement of any third-party rights.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">14. Termination</h2>
              <p className="text-gray-700 mb-6">
                Blorbmart reserves the right to suspend or terminate your account at any time for violation of these Terms 
                or for any conduct that Blorbmart determines, in its sole discretion, to be harmful to the platform, users, 
                or third parties. You may also delete your account at any time from within the app settings.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">15. Changes to These Terms</h2>
              <p className="text-gray-700 mb-6">
                Blorbmart may update these Terms from time to time. We will notify registered users via email or in-app 
                notification when material changes are made. Continued use of the platform after such notification constitutes 
                acceptance of the updated Terms.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">16. Governing Law</h2>
              <p className="text-gray-700 mb-6">
                These Terms are governed by and construed in accordance with the laws of the Federal Republic of Nigeria. 
                Any disputes arising shall be subject to the exclusive jurisdiction of the courts of Osun State, Nigeria.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">17. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <ul className="list-none text-gray-700 mb-6 space-y-1">
                <li><strong>Email:</strong> hello@blorbmart.com.ng</li>
                <li><strong>Website:</strong> www.blorbmart.com.ng</li>
                <li><strong>Address:</strong> Blorbmart Limited, Osogbo, Osun State, Nigeria</li>
              </ul>

              <div id="privacy-section" className="mt-14 rounded-2xl border border-slate-200 bg-slate-50/80 p-6 sm:p-8">
                <h2 className="mt-0 text-xl font-semibold text-gray-900 mb-4">Privacy Policy</h2>
                <p className="text-sm text-gray-600 mb-6">
                  Blorbmart Limited | Effective Date: May 1, 2025
                  <br />
                  Platform: Blorbmart App & Website (www.blorbmart.com.ng)
                </p>

                <p className="text-gray-700 mb-6">
                  Your privacy matters to us. This Privacy Policy explains how Blorbmart Limited collects, uses, stores, 
                  and protects your personal information when you use the Blorbmart platform, including the Blorbmart Marketplace, 
                  Blorb Food, Vendor App, and Rider Portal.
                </p>

                <h3 className="text-lg font-medium text-gray-900 mt-8 mb-3">1. Who We Are</h3>
                <p className="text-gray-700 mb-6">
                  Blorbmart Limited is the data controller responsible for your personal information. We are incorporated in 
                  Nigeria and operate the Blorbmart platform serving university campus communities.
                </p>

                <h3 className="text-lg font-medium text-gray-900 mt-8 mb-3">2. Information We Collect</h3>
                
                <h4 className="text-base font-medium text-gray-900 mt-6 mb-2">2.1 Information You Provide</h4>
                <p className="text-gray-700 mb-4">
                  When you register or use our platform, we collect:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                  <li>Full name and contact information (phone number, email address)</li>
                  <li>Profile photo (optional)</li>
                  <li>Campus affiliation and student/staff status</li>
                  <li>Delivery address(es) and location data during active delivery sessions</li>
                  <li>Payment information (processed securely by Paystack; Blorbmart does not store card numbers)</li>
                  <li>Vendor KYC information (business name, bank details, identification) for vendors and restaurants</li>
                  <li>Rider identity and vehicle information for registered riders</li>
                </ul>

                <h4 className="text-base font-medium text-gray-900 mt-6 mb-2">2.2 Information Collected Automatically</h4>
                <p className="text-gray-700 mb-4">
                  When you use the Blorbmart app, we may automatically collect:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                  <li>Device information (device model, OS version, unique device identifiers)</li>
                  <li>App usage data (features accessed, session duration, crash reports)</li>
                  <li>Location data (with your permission, for delivery tracking and campus-specific features)</li>
                  <li>FCM (Firebase Cloud Messaging) tokens for push notifications</li>
                </ul>

                <h4 className="text-base font-medium text-gray-900 mt-6 mb-2">2.3 Information from Third Parties</h4>
                <p className="text-gray-700 mb-4">
                  We may receive information from third-party services such as:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>Paystack — for transaction confirmation and payment status</li>
                  <li>Firebase/Google — for authentication and analytics</li>
                  <li>Cloudinary — for image storage and processing</li>
                </ul>

                <h3 className="text-lg font-medium text-gray-900 mt-8 mb-3">3. How We Use Your Information</h3>
                <p className="text-gray-700 mb-4">We use your personal information to:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>Create and manage your account</li>
                  <li>Process and fulfill your orders</li>
                  <li>Facilitate payments and refunds</li>
                  <li>Coordinate delivery between buyers, vendors, and riders</li>
                  <li>Send order updates and push notifications</li>
                  <li>Improve platform features and user experience</li>
                  <li>Detect and prevent fraud or unauthorized activity</li>
                  <li>Comply with legal obligations under Nigerian law</li>
                  <li>Respond to customer support requests</li>
                </ul>

                <h3 className="text-lg font-medium text-gray-900 mt-8 mb-3">4. Legal Basis for Processing</h3>
                <p className="text-gray-700 mb-4">
                  We process your personal data on the following legal bases under applicable Nigerian data protection law (NDPA 2023):
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>Contract performance — to fulfill your orders and deliver services</li>
                  <li>Legitimate interests — to improve our services and prevent fraud</li>
                  <li>Legal obligation — to comply with applicable Nigerian laws</li>
                  <li>Consent — for optional features such as marketing communications and location tracking</li>
                </ul>

                <h3 className="text-lg font-medium text-gray-900 mt-8 mb-3">5. Sharing Your Information</h3>
                <p className="text-gray-700 mb-4">
                  We do not sell your personal data. We may share your information with:
                </p>

                <h4 className="text-base font-medium text-gray-900 mt-6 mb-2">5.1 Vendors and Restaurants</h4>
                <p className="text-gray-700 mb-4">
                  Your name, order details, and delivery address are shared with the vendor or restaurant fulfilling your order.
                </p>

                <h4 className="text-base font-medium text-gray-900 mt-6 mb-2">5.2 Riders</h4>
                <p className="text-gray-700 mb-4">
                  Your delivery address and contact number may be shared with the assigned rider to complete your delivery.
                </p>

                <h4 className="text-base font-medium text-gray-900 mt-6 mb-2">5.3 Service Providers</h4>
                <p className="text-gray-700 mb-4">
                  We work with third-party service providers who assist in operating our platform:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                  <li>Paystack — Payment processing</li>
                  <li>Firebase (Google) — Authentication, database, cloud functions, push notifications</li>
                  <li>Cloudinary — Media storage</li>
                  <li>Render — Backend hosting</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  These providers are bound by data processing agreements and may not use your data for their own purposes.
                </p>

                <h4 className="text-base font-medium text-gray-900 mt-6 mb-2">5.4 Legal Requirements</h4>
                <p className="text-gray-700 mb-6">
                  We may disclose your information if required to do so by law or in response to a valid legal process from Nigerian authorities.
                </p>

                <h3 className="text-lg font-medium text-gray-900 mt-8 mb-3">6. Location Data</h3>
                <p className="text-gray-700 mb-4">
                  Blorbmart requests access to your device's location to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                  <li>Identify your campus and show relevant vendors and restaurants</li>
                  <li>Provide real-time delivery tracking</li>
                  <li>Calculate delivery fees and estimated times</li>
                </ul>
                <p className="text-gray-700 mb-6">
                  Location access is requested with your explicit permission. You may disable location access at any time in your 
                  device settings, though this may limit certain features of the app.
                </p>

                <h3 className="text-lg font-medium text-gray-900 mt-8 mb-3">7. Push Notifications</h3>
                <p className="text-gray-700 mb-4">
                  With your permission, we send push notifications for order updates, delivery status, promotional offers, and 
                  important account alerts. You may opt out of marketing notifications in the app settings at any time. 
                  Transactional notifications (order confirmations, delivery alerts) cannot be disabled while your account is active.
                </p>

                <h3 className="text-lg font-medium text-gray-900 mt-8 mb-3">8. Data Retention</h3>
                <p className="text-gray-700 mb-4">
                  We retain your personal data for as long as your account is active or as needed to provide services. Specific retention periods:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>Account data — retained for the duration of your account and up to 2 years after deletion</li>
                  <li>Transaction records — retained for 7 years in compliance with Nigerian financial regulations</li>
                  <li>Delivery location history — retained for 90 days</li>
                  <li>Support communications — retained for 2 years</li>
                </ul>
                <p className="text-gray-700 mb-6">
                  After the applicable retention period, data is securely deleted or anonymized.
                </p>

                <h3 className="text-lg font-medium text-gray-900 mt-8 mb-3">9. Data Security</h3>
                <p className="text-gray-700 mb-4">
                  We implement industry-standard security measures to protect your personal information, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                  <li>HTTPS encryption for all data in transit</li>
                  <li>Firebase security rules to restrict unauthorized database access</li>
                  <li>Role-based access controls for platform staff</li>
                  <li>Secure payment processing via PCI-compliant Paystack infrastructure</li>
                </ul>
                <p className="text-gray-700 mb-6">
                  Despite these measures, no system is completely secure. You use the platform at your own risk, and we cannot guarantee absolute security of your data.
                </p>

                <h3 className="text-lg font-medium text-gray-900 mt-8 mb-3">10. Your Rights</h3>
                <p className="text-gray-700 mb-4">
                  Under the Nigeria Data Protection Act 2023 (NDPA), you have the right to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                  <li>Access — request a copy of the personal data we hold about you</li>
                  <li>Correction — request that inaccurate data be corrected</li>
                  <li>Deletion — request that your personal data be deleted (subject to legal retention obligations)</li>
                  <li>Objection — object to the processing of your data for marketing purposes</li>
                  <li>Portability — receive your data in a structured, commonly used format</li>
                </ul>
                <p className="text-gray-700 mb-6">
                  To exercise any of these rights, contact us at: hello@blorbmart.com.ng. We will respond within 30 days.
                </p>

                <h3 className="text-lg font-medium text-gray-900 mt-8 mb-3">11. Children's Privacy</h3>
                <p className="text-gray-700 mb-6">
                  Blorbmart is not directed at children under the age of 13. We do not knowingly collect personal information from 
                  children under 13. If we become aware that we have collected such information, we will delete it promptly. 
                  Users between 13–16 should use the platform only with parental consent.
                </p>

                <h3 className="text-lg font-medium text-gray-900 mt-8 mb-3">12. Cookies & Tracking</h3>
                <p className="text-gray-700 mb-4">
                  The Blorbmart web platform may use cookies and similar tracking technologies to improve your browsing experience 
                  and analyze platform usage. You may control cookie settings through your browser preferences. The mobile app uses 
                  Firebase Analytics and Crashlytics for performance monitoring. These can be managed through your device's privacy settings.
                </p>

                <h3 className="text-lg font-medium text-gray-900 mt-8 mb-3">13. Third-Party Links</h3>
                <p className="text-gray-700 mb-6">
                  The Blorbmart platform may contain links to third-party websites or services. This Privacy Policy does not apply 
                  to those external sites, and we are not responsible for their privacy practices. We encourage you to review the 
                  privacy policies of any third-party services you visit.
                </p>

                <h3 className="text-lg font-medium text-gray-900 mt-8 mb-3">14. Changes to This Privacy Policy</h3>
                <p className="text-gray-700 mb-6">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. 
                  We will notify you of significant changes via in-app notification or email. The effective date at the top of 
                  this document will always reflect the most recent revision.
                </p>

                <h3 className="text-lg font-medium text-gray-900 mt-8 mb-3">15. Contact & Data Protection Officer</h3>
                <p className="text-gray-700 mb-4">
                  For privacy-related questions, concerns, or to exercise your rights under the NDPA, please contact us:
                </p>
                <ul className="list-none text-gray-700 mb-6 space-y-1">
                  <li><strong>Email:</strong> hello@blorbmart.com.ng</li>
                  <li><strong>Website:</strong> www.blorbmart.com.ng</li>
                  <li><strong>Address:</strong> Blorbmart Limited, Osogbo, Osun State, Nigeria</li>
                </ul>
                <p className="text-gray-700 mb-6">
                  We take your privacy seriously and are committed to responding to all inquiries within 30 days.
                </p>

                <div className="border-t border-gray-200 pt-6 mt-8">
                  <p className="text-sm text-gray-600 text-center">
                    © 2026 Blorbmart Limited. All rights reserved. | www.blorbmart.com.ng
                  </p>
                </div>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageShell>
    </>
  )
}
