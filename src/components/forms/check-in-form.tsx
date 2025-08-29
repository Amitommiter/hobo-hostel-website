'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  User, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  Users, 
  Car, 
  FileText, 
  Upload, 
  AlertCircle, 
  CheckCircle, 
  Globe, 
  CreditCard, 
  Camera,
  Clock,
  Loader2
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { CheckInFormData, GuestDetails, StayDetails, ForeignDocuments, ValidationError, validateCheckInForm } from '@/lib/validations'
import { submitCheckIn } from '@/lib/api'
import { uploadFile } from '@/lib/utils'
import { StayDetailsSection } from './stay-details-section'
import { DocumentsSection } from './documents-section'

const initialGuestDetails: GuestDetails = {
  name: '',
  address: '',
  phone: '',
  sex: 'Female',
  nationality: ''
}

const initialStayDetails: StayDetails = {
  checkInDate: '',
  checkInTime: '',
  checkOutDate: '',
  checkOutTime: '',
  adults: 1,
  children: 0,
  comingFrom: '',
  goingTo: '',
  roomType: 'mixed-dorm'
}

const initialForeignDocuments: ForeignDocuments = {
  passportNumber: '',
  passportIssuedAt: '',
  passportIssueDate: '',
  passportValidTill: '',
  visaNumber: '',
  visaIssueDate: '',
  visaValidTill: '',
  dateOfArrivalIndia: '',
  cityOfArrivalIndia: '',
  idUploadUrl: ''
}

export function CheckInForm() {
  const [formData, setFormData] = useState<CheckInFormData>({
    segment: 'national',
    guest: initialGuestDetails,
    stay: initialStayDetails,
    documents: initialForeignDocuments
  })
  
  const [errors, setErrors] = useState<ValidationError[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [checkInId, setCheckInId] = useState<string>('')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleSegmentChange = (value: string) => {
    const segment = value as 'national' | 'international'
    setFormData(prev => ({
      ...prev,
      segment,
      guest: {
        ...prev.guest,
        nationality: segment === 'national' ? '' : prev.guest.nationality
      },
      documents: segment === 'national' ? initialForeignDocuments : initialForeignDocuments
    }))
    setErrors([])
  }

  const handleGuestChange = (field: keyof GuestDetails, value: string) => {
    setFormData(prev => ({
      ...prev,
      guest: { ...prev.guest, [field]: value }
    }))
    setErrors(prev => prev.filter(error => error.field !== field))
  }

  const handleStayChange = (field: keyof StayDetails, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      stay: { ...prev.stay, [field]: value }
    }))
    setErrors(prev => prev.filter(error => error.field !== field))
  }

  const handleForeignDocumentsChange = (field: keyof ForeignDocuments, value: string) => {
    setFormData(prev => ({
      ...prev,
      documents: { ...prev.documents as ForeignDocuments, [field]: value }
    }))
    setErrors(prev => prev.filter(error => error.field !== field))
  }

  const getFieldError = (field: string) => {
    return errors.find(error => error.field === field)?.message
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Upload file if selected (for national guests)
      if (formData.segment === 'national' && selectedFile && !formData.documents.idUploadUrl) {
        console.log('Uploading file during submission...')
        
        // Generate filename using name-number format
        const nameSlug = formData.guest.name.trim().toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')
        const phoneSlug = formData.guest.phone.replace(/\D/g, '')
        const customFilename = `${nameSlug}-${phoneSlug}.${selectedFile.name.split('.').pop()}`
        
        const uploadUrl = await uploadFile(selectedFile, 'ID Proofs')
        console.log('File uploaded successfully:', uploadUrl)
        
        // Update form data with the uploaded URL
        setFormData(prev => ({
          ...prev,
          documents: { ...prev.documents, idUploadUrl: uploadUrl }
        }))
        
        // Wait a moment for state update
        await new Promise(resolve => setTimeout(resolve, 100))
      }
      
      const validationErrors = validateCheckInForm(formData as CheckInFormData)
      setErrors(validationErrors)
      
      if (validationErrors.length > 0) {
        setIsSubmitting(false)
        return
      }
      
      const result = await submitCheckIn(formData as CheckInFormData)
      
      if (result.success) {
        setSubmitStatus('success')
        setCheckInId(result.checkInId!)
        setFormData({
          segment: 'national',
          guest: initialGuestDetails,
          stay: initialStayDetails,
          documents: initialForeignDocuments
        })
        setSelectedFile(null)
      } else {
        setSubmitStatus('error')
        setErrors([{ field: 'submit', message: result.error || 'Submission failed' }])
      }
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitStatus('error')
      setErrors([{ field: 'submit', message: 'An unexpected error occurred' }])
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="max-w-md mx-auto text-center">
        <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-200">
          <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Check-in Submitted!</h2>
          <p className="text-gray-600 mb-6 text-lg">
            Your check-in request has been successfully submitted.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
            <p className="text-sm text-gray-500 mb-2">Reference ID</p>
            <p className="font-mono text-xl font-bold text-green-600">{checkInId}</p>
          </div>
          <p className="text-sm text-gray-500 mb-8">
            Please keep this reference ID for your records. We&apos;ll contact you soon to confirm your booking.
          </p>
          <Button
            onClick={() => {
              setSubmitStatus('idle')
              setCheckInId('')
            }}
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Submit Another Check-in
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-50 via-blue-50 to-cyan-50 p-8 text-center border-b border-slate-200 relative overflow-hidden">
          {/* Creative background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100/20 via-transparent to-cyan-100/20"></div>
            <div className="absolute top-4 right-4 w-16 h-16 bg-blue-200/30 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-cyan-200/30 rounded-full blur-lg"></div>
            <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-slate-200/40 rounded-full blur-md"></div>
          </div>
          
          <div className="relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <User className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-700 via-blue-700 to-cyan-700 bg-clip-text text-transparent mb-4">
              Guest Check-in Form
            </h1>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Welcome to <span className="font-semibold text-blue-600">Hobo Hostel</span>! Please fill in your details below to complete your check-in process.
            </p>
          </div>
        </div>

        <div className="p-8">
          {errors.length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
              <div className="flex items-center mb-3">
                <AlertCircle className="w-6 h-6 text-red-500 mr-3" />
                <h3 className="text-lg font-semibold text-red-800">Please fix the following errors:</h3>
              </div>
              <ul className="text-red-700 space-y-1 ml-9">
                {errors.map((error, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    {error.message}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Segment Selection */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-blue-600 mr-3" />
                <label className="text-lg font-semibold text-gray-800">
                  Guest Type *
                </label>
              </div>
              <Tabs value={formData.segment} onValueChange={handleSegmentChange} className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-white border border-blue-200 p-1 rounded-xl">
                  <TabsTrigger 
                    value="national" 
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-cyan-600 data-[state=active]:text-white rounded-lg transition-all duration-300"
                  >
                    Indian National
                  </TabsTrigger>
                  <TabsTrigger 
                    value="international"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-cyan-600 data-[state=active]:text-white rounded-lg transition-all duration-300"
                  >
                    Foreign National
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* Guest Details */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Guest Details</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                    <User className="w-4 h-4 mr-2 text-blue-600" />
                    Full Name *
                  </label>
                  <Input
                    value={formData.guest.name}
                    onChange={(e) => handleGuestChange('name', e.target.value)}
                    placeholder="Enter your full name"
                    className={`bg-white border-2 ${getFieldError('name') ? 'border-red-400 focus:border-red-500' : 'border-blue-200 focus:border-blue-500'} rounded-xl px-4 py-3 transition-all duration-300 focus:ring-2 focus:ring-blue-200`}
                  />
                  {getFieldError('name') && (
                    <p className="text-red-500 text-sm flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {getFieldError('name')}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-blue-600" />
                    Phone Number *
                  </label>
                  <Input
                    value={formData.guest.phone}
                    onChange={(e) => handleGuestChange('phone', e.target.value)}
                    placeholder="Enter your phone number"
                    className={`bg-white border-2 ${getFieldError('phone') ? 'border-red-400 focus:border-red-500' : 'border-blue-200 focus:border-blue-500'} rounded-xl px-4 py-3 transition-all duration-300 focus:ring-2 focus:ring-blue-200`}
                  />
                  {getFieldError('phone') && (
                    <p className="text-red-500 text-sm flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {getFieldError('phone')}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                    Address *
                  </label>
                  <Input
                    value={formData.guest.address}
                    onChange={(e) => handleGuestChange('address', e.target.value)}
                    placeholder="Enter your complete address"
                    className={`bg-white border-2 ${getFieldError('address') ? 'border-red-400 focus:border-red-500' : 'border-blue-200 focus:border-blue-500'} rounded-xl px-4 py-3 transition-all duration-300 focus:ring-2 focus:ring-blue-200`}
                  />
                  {getFieldError('address') && (
                    <p className="text-red-500 text-sm flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {getFieldError('address')}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                    <Users className="w-4 h-4 mr-2 text-blue-600" />
                    Sex *
                  </label>
                  <Select
                    value={formData.guest.sex}
                    onValueChange={(value) => handleGuestChange('sex', value as 'Female' | 'Male' | 'Transgender')}
                  >
                    <SelectTrigger className={`bg-white border-2 ${getFieldError('sex') ? 'border-red-400 focus:border-red-500' : 'border-blue-200 focus:border-blue-500'} rounded-xl px-4 py-3 transition-all duration-300 focus:ring-2 focus:ring-blue-200`}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-blue-200 rounded-xl">
                      <SelectItem value="Female">Female</SelectItem>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Transgender">Transgender</SelectItem>
                    </SelectContent>
                  </Select>
                  {getFieldError('sex') && (
                    <p className="text-red-500 text-sm flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {getFieldError('sex')}
                    </p>
                  )}
                </div>

                {formData.segment === 'international' && (
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                      <Globe className="w-4 h-4 mr-2 text-blue-600" />
                      Nationality *
                    </label>
                    <Input
                      value={formData.guest.nationality}
                      onChange={(e) => handleGuestChange('nationality', e.target.value)}
                      placeholder="Enter your nationality"
                      className={`bg-white border-2 ${getFieldError('nationality') ? 'border-red-400 focus:border-red-500' : 'border-blue-200 focus:border-blue-500'} rounded-xl px-4 py-3 transition-all duration-300 focus:ring-2 focus:ring-blue-200`}
                    />
                    {getFieldError('nationality') && (
                      <p className="text-red-500 text-sm flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {getFieldError('nationality')}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Stay Details */}
            <StayDetailsSection
              stay={formData.stay}
              onStayChange={handleStayChange}
              getFieldError={getFieldError}
            />

            {/* Documents Section */}
            <DocumentsSection
              segment={formData.segment}
              documents={formData.documents}
              onNationalDocumentsChange={(field: string, value: string) => handleForeignDocumentsChange(field as keyof ForeignDocuments, value)}
              onForeignDocumentsChange={handleForeignDocumentsChange}
              getFieldError={getFieldError}
              onFileSelected={setSelectedFile}
            />

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-12 py-4 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-6 h-6 mr-3" />
                    Submit Check-in
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
