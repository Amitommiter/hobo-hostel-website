import { Metadata } from 'next'
import { CheckInForm } from '@/components/forms/check-in-form'

export const metadata: Metadata = {
  title: 'Guest Check-in - Hobo Hostel',
  description: 'Complete your check-in process for Hobo Hostel',
  robots: {
    index: false,
    follow: false,
  },
}

export default function CheckInPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 relative">
      <div className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CheckInForm />
        </div>
      </div>
    </div>
  )
}
