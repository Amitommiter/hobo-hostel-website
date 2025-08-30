import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { StayDetails } from '@/lib/validations'
import { Calendar, Clock, Users, MapPin, Home, AlertCircle } from 'lucide-react'

interface StayDetailsSectionProps {
  stay: StayDetails
  onStayChange: (field: keyof StayDetails, value: string | number) => void
  getFieldError: (field: string) => string | undefined
}

export function StayDetailsSection({ stay, onStayChange, getFieldError }: StayDetailsSectionProps) {
  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200/50">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
          <Calendar className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Stay Details</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Check-in Date */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-green-600" />
            Check-in Date *
          </label>
          <Input
            type="date"
            value={stay.checkInDate}
            onChange={(e) => onStayChange('checkInDate', e.target.value)}
            className={`bg-white/80 backdrop-blur-sm border-2 ${getFieldError('checkInDate') ? 'border-red-400 focus:border-red-500' : 'border-green-200 focus:border-green-500'} rounded-xl px-4 py-3 transition-all duration-300 focus:ring-2 focus:ring-green-200`}
          />
          {getFieldError('checkInDate') && (
            <p className="text-red-500 text-sm flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {getFieldError('checkInDate')}
            </p>
          )}
        </div>

        {/* Check-in Time */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
            <Clock className="w-4 h-4 mr-2 text-green-600" />
            Check-in Time *
          </label>
          <Input
            type="time"
            value={stay.checkInTime}
            onChange={(e) => onStayChange('checkInTime', e.target.value)}
            className={`bg-white/80 backdrop-blur-sm border-2 ${getFieldError('checkInTime') ? 'border-red-400 focus:border-red-500' : 'border-green-200 focus:border-green-500'} rounded-xl px-4 py-3 transition-all duration-300 focus:ring-2 focus:ring-green-200`}
          />
          {getFieldError('checkInTime') && (
            <p className="text-red-500 text-sm flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {getFieldError('checkInTime')}
            </p>
          )}
        </div>

        {/* Check-out Date */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-green-600" />
            Check-out Date *
          </label>
          <Input
            type="date"
            value={stay.checkOutDate}
            onChange={(e) => onStayChange('checkOutDate', e.target.value)}
            className={`bg-white/80 backdrop-blur-sm border-2 ${getFieldError('checkOutDate') ? 'border-red-400 focus:border-red-500' : 'border-green-200 focus:border-green-500'} rounded-xl px-4 py-3 transition-all duration-300 focus:ring-2 focus:ring-green-200`}
          />
          {getFieldError('checkOutDate') && (
            <p className="text-red-500 text-sm flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {getFieldError('checkOutDate')}
            </p>
          )}
        </div>

        {/* Check-out Time */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
            <Clock className="w-4 h-4 mr-2 text-green-600" />
            Check-out Time *
          </label>
          <Input
            type="time"
            value={stay.checkOutTime}
            onChange={(e) => onStayChange('checkOutTime', e.target.value)}
            className={`bg-white/80 backdrop-blur-sm border-2 ${getFieldError('checkOutTime') ? 'border-red-400 focus:border-red-500' : 'border-green-200 focus:border-green-500'} rounded-xl px-4 py-3 transition-all duration-300 focus:ring-2 focus:ring-green-200`}
          />
          {getFieldError('checkOutTime') && (
            <p className="text-red-500 text-sm flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {getFieldError('checkOutTime')}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
            <Users className="w-4 h-4 mr-2 text-green-600" />
            Number of Adults *
          </label>
          <Input
            type="number"
            min="1"
            value={stay.adults}
            onChange={(e) => onStayChange('adults', parseInt(e.target.value))}
            className={`bg-white/80 backdrop-blur-sm border-2 ${getFieldError('adults') ? 'border-red-400 focus:border-red-500' : 'border-green-200 focus:border-green-500'} rounded-xl px-4 py-3 transition-all duration-300 focus:ring-2 focus:ring-green-200`}
          />
          {getFieldError('adults') && (
            <p className="text-red-500 text-sm flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {getFieldError('adults')}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
            <Users className="w-4 h-4 mr-2 text-green-600" />
            Number of Children
          </label>
          <Input
            type="number"
            min="0"
            value={stay.children}
            onChange={(e) => onStayChange('children', parseInt(e.target.value))}
            className={`bg-white/80 backdrop-blur-sm border-2 ${getFieldError('children') ? 'border-red-400 focus:border-red-500' : 'border-green-200 focus:border-green-500'} rounded-xl px-4 py-3 transition-all duration-300 focus:ring-2 focus:ring-green-200`}
          />
          {getFieldError('children') && (
            <p className="text-red-500 text-sm flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {getFieldError('children')}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-green-600" />
            Coming From *
          </label>
          <Input
            value={stay.comingFrom}
            onChange={(e) => onStayChange('comingFrom', e.target.value)}
            placeholder="City/Country you're coming from"
            className={`bg-white/80 backdrop-blur-sm border-2 ${getFieldError('comingFrom') ? 'border-red-400 focus:border-red-500' : 'border-green-200 focus:border-green-500'} rounded-xl px-4 py-3 transition-all duration-300 focus:ring-2 focus:ring-green-200`}
          />
          {getFieldError('comingFrom') && (
            <p className="text-red-500 text-sm flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {getFieldError('comingFrom')}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-green-600" />
            Going To
          </label>
          <Input
            value={stay.goingTo}
            onChange={(e) => onStayChange('goingTo', e.target.value)}
            placeholder="City/Country you're going to"
            className={`bg-white/80 backdrop-blur-sm border-2 ${getFieldError('goingTo') ? 'border-red-400 focus:border-red-500' : 'border-green-200 focus:border-green-500'} rounded-xl px-4 py-3 transition-all duration-300 focus:ring-2 focus:ring-green-200`}
          />
          {getFieldError('goingTo') && (
            <p className="text-red-500 text-sm flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {getFieldError('goingTo')}
            </p>
          )}
        </div>

        <div className="md:col-span-2 space-y-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
            <Home className="w-4 h-4 mr-2 text-green-600" />
            Room Type *
          </label>
          <select
            value={stay.roomType}
            onChange={(e) => onStayChange('roomType', e.target.value)}
            className={`bg-white/80 backdrop-blur-sm border-2 ${getFieldError('roomType') ? 'border-red-400 focus:border-red-500' : 'border-green-200 focus:border-green-500'} rounded-xl px-4 py-3 transition-all duration-300 focus:ring-2 focus:ring-green-200`}
          >
            <option value="">Select room type</option>
            <option value="mixed-dorm">Mixed Dormitory</option>
            <option value="double-room">Double Room</option>
            <option value="family-room">Family Room</option>
          </select>
          {getFieldError('roomType') && (
            <p className="text-red-500 text-sm flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {getFieldError('roomType')}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
