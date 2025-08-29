
import { CheckInFormData, ForeignDocuments } from './validations'
import { calculateNights, formatPhoneNumber } from './utils'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://setdatainfirestore-q3deps5f7q-uc.a.run.app'

export interface CheckInPayload {
  path: string
  data: {
    segment: 'national' | 'international'
    name: string
    address: string
    phone: string
    sex: 'Female' | 'Male' | 'Transgender'
    nationality: string
    checkInDateTime: string
    checkOutDateTime: string
    nights: number
    adults: number
    children: number
    comingFrom: string
    goingTo: string
    roomType: 'mixed-dorm' | 'double-room' | 'family-room'
    documents: ForeignDocuments 
  }
}

export async function submitCheckIn(formData: CheckInFormData): Promise<{ success: boolean; checkInId?: string; error?: string }> {
  try {
    const nameSlug = formData.guest.name.trim().toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')
    const phoneSlug = formData.guest.phone.replace(/\D/g, '')
    const checkInId = `${nameSlug}-${phoneSlug}`
    
    // Combine date and time into single datetime strings for Firebase
    const checkInDateTime = `${formData.stay.checkInDate}T${formData.stay.checkInTime}`
    const checkOutDateTime = `${formData.stay.checkOutDate}T${formData.stay.checkOutTime}`
    
    // Calculate nights from the combined datetime strings
    const nights = calculateNights(checkInDateTime, checkOutDateTime)
    
    const payload = {
      path: `Pending Reservations/${checkInId}`,
      data: Object.fromEntries(
        Object.entries({
          segment: formData.segment,
          name: formData.guest.name.trim(),
          address: formData.guest.address.trim(),
          phone: formatPhoneNumber(formData.guest.phone),
          sex: formData.guest.sex,
          nationality: formData.segment === 'national' ? 'Indian' : formData.guest.nationality.trim(),
          checkInDateTime,
          checkOutDateTime,
          adults: formData.stay.adults,
          children: formData.stay.children,
          comingFrom: formData.stay.comingFrom.trim(),
          goingTo: formData.stay.goingTo.trim(),
          roomType: formData.stay.roomType,
          photoID: formData.documents.idUploadUrl,
          passportNumber: formData.documents.passportNumber,
          passportIssuedAt: formData.documents.passportIssuedAt,
          passportIssueDate: formData.documents.passportIssueDate,
          passportValidTill: formData.documents.passportValidTill,
          visaNumber: formData.documents.visaNumber,
          visaIssueDate: formData.documents.visaIssueDate,
          visaValidTill: formData.documents.visaValidTill,
          dateOfArrivalIndia: formData.documents.dateOfArrivalIndia,
          cityOfArrivalIndia: formData.documents.cityOfArrivalIndia,
          idUploadUrl: formData.documents.idUploadUrl,
        }).filter(([key, value]) => value !== '' && value !== null && value !== undefined)
      )
    }
    
    const response = await fetch('/api/checkin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    
    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`API request failed: ${response.status} ${errorText}`)
    }
    
    return { success: true, checkInId }
  } catch (error: unknown) {
    console.error('Check-in submission error:', error)
    
    let errorMessage = 'An unexpected error occurred'
    
    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      errorMessage = 'Network error: Unable to connect to the server. Please check your internet connection and try again.'
    } else if (error instanceof Error) {
      errorMessage = error.message
    }
    
    return { 
      success: false, 
      error: errorMessage
    }
  }
}