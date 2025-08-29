import { Input } from '@/components/ui/input'
import { ForeignDocuments } from '@/lib/validations'
import { uploadFile } from '@/lib/utils'
import { FileText, CreditCard, Camera, AlertCircle, Upload, CheckCircle, Calendar, MapPin } from 'lucide-react'
import { useState } from 'react'

interface DocumentsSectionProps {
  segment: 'national' | 'international'
  documents: ForeignDocuments
  onNationalDocumentsChange: (field: string, value: string) => void
  onForeignDocumentsChange: (field: keyof ForeignDocuments, value: string) => void
  getFieldError: (field: string) => string | undefined
  onFileSelected?: (file: File | null) => void
}

export function DocumentsSection({ segment, documents, onNationalDocumentsChange, onForeignDocumentsChange, getFieldError, onFileSelected }: DocumentsSectionProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileSelection = (file: File) => {
    setSelectedFile(file)
    onFileSelected?.(file)
    // Don't upload immediately, just store the file reference
    console.log('File selected:', file.name)
  }

  return (
    <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200/50">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
          <FileText className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">
          {segment === 'national' ? 'Government ID Details' : 'Passport & Visa Details'}
        </h2>
      </div>

      {segment === 'national' ? (
        // National Documents - simplified for now
        <div className="grid grid-cols-1 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
              <Camera className="w-4 h-4 mr-2 text-orange-600" />
              ID Document Upload *
            </label>
            <div className="space-y-2">
              <input
                type="file"
                accept="image/*,.pdf"
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) {
                    handleFileSelection(file)
                  }
                }}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-orange-500 file:to-red-500 file:text-white hover:file:from-orange-600 hover:file:to-red-600 transition-all duration-300 cursor-pointer"
              />
              {selectedFile && (
                <div className="flex items-center text-blue-600 text-sm">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  File selected: {selectedFile.name}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        // Foreign Documents
        <div className="space-y-6">
          {/* Passport Details */}
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-orange-200/50">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <FileText className="w-5 h-5 mr-2 text-orange-600" />
              Passport Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                  <CreditCard className="w-4 h-4 mr-2 text-orange-600" />
                  Passport Number *
                </label>
                <Input
                  value={documents.passportNumber}
                  onChange={(e) => onForeignDocumentsChange('passportNumber', e.target.value)}
                  placeholder="Enter passport number"
                  className={`bg-white/80 backdrop-blur-sm border-2 ${getFieldError('passportNumber') ? 'border-red-400 focus:border-red-500' : 'border-orange-200 focus:border-orange-500'} rounded-xl px-4 py-3 transition-all duration-300 focus:ring-2 focus:ring-orange-200`}
                />
                {getFieldError('passportNumber') && (
                  <p className="text-red-500 text-sm flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {getFieldError('passportNumber')}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                  <FileText className="w-4 h-4 mr-2 text-orange-600" />
                  Passport Issuing Authority *
                </label>
                <Input
                  value={documents.passportIssuedAt}
                  onChange={(e) => onForeignDocumentsChange('passportIssuedAt', e.target.value)}
                  placeholder="Enter issuing authority"
                  className={`bg-white/80 backdrop-blur-sm border-2 ${getFieldError('passportIssuedAt') ? 'border-red-400 focus:border-red-500' : 'border-orange-200 focus:border-orange-500'} rounded-xl px-4 py-3 transition-all duration-300 focus:ring-2 focus:ring-orange-200`}
                />
                {getFieldError('passportIssuedAt') && (
                  <p className="text-red-500 text-sm flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {getFieldError('passportIssuedAt')}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-orange-600" />
                  Passport Issue Date *
                </label>
                <Input
                  type="date"
                  value={documents.passportIssueDate}
                  onChange={(e) => onForeignDocumentsChange('passportIssueDate', e.target.value)}
                  className={`bg-white/80 backdrop-blur-sm border-2 ${getFieldError('passportIssueDate') ? 'border-red-400 focus:border-red-500' : 'border-orange-200 focus:border-orange-500'} rounded-xl px-4 py-3 transition-all duration-300 focus:ring-2 focus:ring-orange-200`}
                />
                {getFieldError('passportIssueDate') && (
                  <p className="text-red-500 text-sm flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {getFieldError('passportIssueDate')}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-orange-600" />
                  Passport Valid Till *
                </label>
                <Input
                  type="date"
                  value={documents.passportValidTill}
                  onChange={(e) => onForeignDocumentsChange('passportValidTill', e.target.value)}
                  className={`bg-white/80 backdrop-blur-sm border-2 ${getFieldError('passportValidTill') ? 'border-red-400 focus:border-red-500' : 'border-orange-200 focus:border-orange-500'} rounded-xl px-4 py-3 transition-all duration-300 focus:ring-2 focus:ring-orange-200`}
                />
                {getFieldError('passportValidTill') && (
                  <p className="text-red-500 text-sm flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {getFieldError('passportValidTill')}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Visa Details */}
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-orange-200/50">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <FileText className="w-5 h-5 mr-2 text-orange-600" />
              Visa Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                  <CreditCard className="w-4 h-4 mr-2 text-orange-600" />
                  Visa Number *
                </label>
                <Input
                  value={documents.visaNumber}
                  onChange={(e) => onForeignDocumentsChange('visaNumber', e.target.value)}
                  placeholder="Enter visa number"
                  className={`bg-white/80 backdrop-blur-sm border-2 ${getFieldError('visaNumber') ? 'border-red-400 focus:border-red-500' : 'border-orange-200 focus:border-orange-500'} rounded-xl px-4 py-3 transition-all duration-300 focus:ring-2 focus:ring-orange-200`}
                />
                {getFieldError('visaNumber') && (
                  <p className="text-red-500 text-sm flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {getFieldError('visaNumber')}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-orange-600" />
                  Visa Issue Date *
                </label>
                <Input
                  type="date"
                  value={documents.visaIssueDate}
                  onChange={(e) => onForeignDocumentsChange('visaIssueDate', e.target.value)}
                  className={`bg-white/80 backdrop-blur-sm border-2 ${getFieldError('visaIssueDate') ? 'border-red-400 focus:border-red-500' : 'border-orange-200 focus:border-orange-500'} rounded-xl px-4 py-3 transition-all duration-300 focus:ring-2 focus:ring-orange-200`}
                />
                {getFieldError('visaIssueDate') && (
                  <p className="text-red-500 text-sm flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {getFieldError('visaIssueDate')}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-orange-600" />
                  Visa Valid Till *
                </label>
                <Input
                  type="date"
                  value={documents.visaValidTill}
                  onChange={(e) => onForeignDocumentsChange('visaValidTill', e.target.value)}
                  className={`bg-white/80 backdrop-blur-sm border-2 ${getFieldError('visaValidTill') ? 'border-red-400 focus:border-red-500' : 'border-orange-200 focus:border-orange-500'} rounded-xl px-4 py-3 transition-all duration-300 focus:ring-2 focus:ring-orange-200`}
                />
                {getFieldError('visaValidTill') && (
                  <p className="text-red-500 text-sm flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {getFieldError('visaValidTill')}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-orange-600" />
                  Date of Arrival in India *
                </label>
                <Input
                  type="date"
                  value={documents.dateOfArrivalIndia}
                  onChange={(e) => onForeignDocumentsChange('dateOfArrivalIndia', e.target.value)}
                  className={`bg-white/80 backdrop-blur-sm border-2 ${getFieldError('dateOfArrivalIndia') ? 'border-red-400 focus:border-red-500' : 'border-orange-200 focus:border-orange-500'} rounded-xl px-4 py-3 transition-all duration-300 focus:ring-2 focus:ring-orange-200`}
                />
                {getFieldError('dateOfArrivalIndia') && (
                  <p className="text-red-500 text-sm flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {getFieldError('dateOfArrivalIndia')}
                  </p>
                )}
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-orange-600" />
                  City of Arrival in India *
                </label>
                <Input
                  value={documents.cityOfArrivalIndia}
                  onChange={(e) => onForeignDocumentsChange('cityOfArrivalIndia', e.target.value)}
                  placeholder="Enter city of arrival"
                  className={`bg-white/80 backdrop-blur-sm border-2 ${getFieldError('cityOfArrivalIndia') ? 'border-red-400 focus:border-red-500' : 'border-orange-200 focus:border-orange-500'} rounded-xl px-4 py-3 transition-all duration-300 focus:ring-2 focus:ring-orange-200`}
                />
                {getFieldError('cityOfArrivalIndia') && (
                  <p className="text-red-500 text-sm flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {getFieldError('cityOfArrivalIndia')}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Document Upload */}
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-orange-200/50">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Upload className="w-5 h-5 mr-2 text-orange-600" />
              Document Upload
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                  <Camera className="w-4 h-4 mr-2 text-orange-600" />
                  Passport Upload *
                </label>
                <div className="space-y-2">
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={async (e) => {
                      const file = e.target.files?.[0]
                      if (file) {
                        const url = await uploadFile(file, 'foreign-documents')
                        onForeignDocumentsChange('idUploadUrl', url)
                      }
                    }}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-orange-500 file:to-red-500 file:text-white hover:file:from-orange-600 hover:file:to-red-600 transition-all duration-300 cursor-pointer"
                  />
                  {documents.idUploadUrl && (
                    <div className="flex items-center text-green-600 text-sm">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Document uploaded successfully
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
