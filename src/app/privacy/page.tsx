import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Privacy Policy - Hobo Hostel',
  description: 'How we collect, use, and protect your personal information at Hobo Hostel.',
}

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl max-w-2xl mx-auto">
              How we collect, use, and protect your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                <div className="space-y-4 text-gray-600">
                  <p><strong>Personal Information:</strong> Name, email address, phone number, government ID details, and nationality.</p>
                  <p><strong>Booking Information:</strong> Check-in/check-out dates, room preferences, and payment details.</p>
                  <p><strong>Website Usage:</strong> IP address, browser type, and pages visited on our website.</p>
                  <p><strong>Communications:</strong> Emails, messages, and feedback you send to us.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                <div className="space-y-4 text-gray-600">
                  <p>• To process and confirm your bookings</p>
                  <p>• To provide customer support and respond to inquiries</p>
                  <p>• To comply with legal requirements and regulations</p>
                  <p>• To improve our services and website</p>
                  <p>• To send important updates about your stay</p>
                  <p>• To ensure the safety and security of all guests</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
                <div className="space-y-4 text-gray-600">
                  <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                  <p>• With your explicit consent</p>
                  <p>• To comply with legal obligations</p>
                  <p>• To protect the safety and security of our guests</p>
                  <p>• With service providers who assist in our operations (under strict confidentiality agreements)</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                <div className="space-y-4 text-gray-600">
                  <p>We implement appropriate security measures to protect your personal information:</p>
                  <p>• Encryption of sensitive data</p>
                  <p>• Secure servers and networks</p>
                  <p>• Regular security assessments</p>
                  <p>• Limited access to personal information</p>
                  <p>• Secure disposal of data when no longer needed</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Retention</h2>
                <p className="text-gray-600">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, and resolve disputes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
                <div className="space-y-4 text-gray-600">
                  <p>You have the right to:</p>
                  <p>• Access your personal information</p>
                  <p>• Correct inaccurate information</p>
                  <p>• Request deletion of your information</p>
                  <p>• Object to processing of your information</p>
                  <p>• Withdraw consent at any time</p>
                  <p>• Lodge a complaint with relevant authorities</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies and Tracking</h2>
                <div className="space-y-4 text-gray-600">
                  <p>Our website uses cookies to improve your experience:</p>
                  <p>• Essential cookies for website functionality</p>
                  <p>• Analytics cookies to understand usage patterns</p>
                  <p>• Preference cookies to remember your settings</p>
                  <p>You can control cookie settings through your browser preferences.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Third-Party Services</h2>
                <p className="text-gray-600">
                  Our website may contain links to third-party services. We are not responsible for the privacy practices of these external sites. Please review their privacy policies before providing any personal information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children&apos;s Privacy</h2>
                <p className="text-gray-600">
                  Our services are not intended for children under 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. International Transfers</h2>
                <p className="text-gray-600">
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information during such transfers.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Policy</h2>
                <p className="text-gray-600">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the &quot;Last Updated&quot; date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
                <p className="text-gray-600">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mt-4">
                  <p className="text-gray-600">
                    <strong>Email:</strong> privacy@hobohostel.com<br />
                    <strong>Phone:</strong> +91 98765 43210<br />
                    <strong>Address:</strong> 123 Backpacker Street, Tourist District, City, State 123456, India
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-sm text-gray-500">
                  <strong>Last updated:</strong> January 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
