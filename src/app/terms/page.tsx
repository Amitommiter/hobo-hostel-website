import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Terms of Service - Hobo Hostel',
  description: 'Terms and conditions for using Hobo Hostel services and facilities.',
}

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600">
                  By accessing and using Hobo Hostel&apos;s website and services, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Booking and Reservations</h2>
                <div className="space-y-4 text-gray-600">
                  <p>• All bookings are subject to availability and confirmation.</p>
                  <p>• A valid government-issued ID is required for check-in.</p>
                  <p>• Payment is required at the time of booking or upon arrival.</p>
                  <p>• Cancellation policies apply as specified during booking.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Check-in and Check-out</h2>
                <div className="space-y-4 text-gray-600">
                  <p>• Check-in is available 24/7.</p>
                  <p>• Check-out time is 11:00 AM unless otherwise arranged.</p>
                  <p>• Late check-out may be available for an additional fee.</p>
                  <p>• Luggage storage is available for early arrivals and late departures.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Guest Conduct</h2>
                <div className="space-y-4 text-gray-600">
                  <p>• Respect for other guests and staff is mandatory.</p>
                  <p>• Quiet hours are from 10:00 PM to 7:00 AM.</p>
                  <p>• No smoking in rooms or common areas.</p>
                  <p>• Alcohol consumption is permitted only in designated areas.</p>
                  <p>• Any damage to property will result in charges for repair or replacement.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Safety and Security</h2>
                <div className="space-y-4 text-gray-600">
                  <p>• Lockers are provided for valuables - use them.</p>
                  <p>• Hobo Hostel is not responsible for lost or stolen items.</p>
                  <p>• Emergency contact information is posted throughout the hostel.</p>
                  <p>• Security cameras are in operation in common areas.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Liability</h2>
                <p className="text-gray-600">
                  Hobo Hostel is not liable for any injury, loss, or damage to persons or property during your stay, except where such liability cannot be excluded by law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Privacy</h2>
                <p className="text-gray-600">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to Terms</h2>
                <p className="text-gray-600">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
                <p className="text-gray-600">
                  If you have any questions about these Terms of Service, please contact us at hello@hobohostel.com or call +91 98765 43210.
                </p>
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
