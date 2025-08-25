import { z } from 'zod'

export interface GuestDetails {
  name: string
  address: string
  phone: string
  sex: 'Female' | 'Male' | 'Transgender'
  nationality: string
}

export interface StayDetails {
  checkInDate: string
  checkInTime: string
  checkOutDate: string
  checkOutTime: string
  adults: number
  children: number
  comingFrom: string
  goingTo: string
  roomType: 'mixed-dorm' | 'double-room' | 'family-room'
}

export interface ForeignDocuments {
  passportNumber: string
  passportIssuedAt: string
  passportIssueDate: string
  passportValidTill: string
  visaNumber: string
  visaIssueDate: string
  visaValidTill: string
  dateOfArrivalIndia: string
  cityOfArrivalIndia: string
  idUploadUrl: string
}

export interface CheckInFormData {
  segment: 'national' | 'international'
  guest: GuestDetails
  stay: StayDetails
  documents: ForeignDocuments
}

export interface ValidationError {
  field: string
  message: string
}

export function validateGuestDetails(guest: GuestDetails): ValidationError[] {
  const errors: ValidationError[] = []
  
  if (!guest.name.trim()) {
    errors.push({ field: 'name', message: 'Name is required' })
  } else if (guest.name.trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' })
  }
  
  if (!guest.address.trim()) {
    errors.push({ field: 'address', message: 'Address is required' })
  }
  
  if (!guest.phone.trim()) {
    errors.push({ field: 'phone', message: 'Phone number is required' })
  } else {
    const phoneRegex = /^(\+91|91)?[6-9]\d{9}$/
    if (!phoneRegex.test(guest.phone.replace(/\s/g, ''))) {
      errors.push({ field: 'phone', message: 'Please enter a valid Indian phone number' })
    }
  }
  
  if (!guest.sex) {
    errors.push({ field: 'sex', message: 'Please select your sex' })
  }
  
  if (!guest.nationality.trim()) {
    errors.push({ field: 'nationality', message: 'Nationality is required' })
  }
  
  return errors
}

export function validateStayDetails(stay: StayDetails): ValidationError[] {
  const errors: ValidationError[] = []
  
  if (!stay.checkInDate) {
    errors.push({ field: 'checkInDate', message: 'Check-in date is required' })
  }
  
  if (!stay.checkInTime) {
    errors.push({ field: 'checkInTime', message: 'Check-in time is required' })
  }
  
  if (!stay.checkOutDate) {
    errors.push({ field: 'checkOutDate', message: 'Check-out date is required' })
  }
  
  if (!stay.checkOutTime) {
    errors.push({ field: 'checkOutTime', message: 'Check-out time is required' })
  }
  
  if (stay.checkInDate && stay.checkInTime && stay.checkOutDate && stay.checkOutTime) {
    const checkInDateTime = new Date(`${stay.checkInDate}T${stay.checkInTime}`)
    const checkOutDateTime = new Date(`${stay.checkOutDate}T${stay.checkOutTime}`)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    
    if (checkInDateTime < today) {
      errors.push({ field: 'checkInDate', message: 'Check-in date cannot be in the past' })
    }
    
    if (checkOutDateTime <= checkInDateTime) {
      errors.push({ field: 'checkOutDate', message: 'Check-out date must be after check-in date' })
    }
  }
  
  if (stay.adults < 1) {
    errors.push({ field: 'adults', message: 'At least 1 adult is required' })
  }
  
  if (stay.children < 0) {
    errors.push({ field: 'children', message: 'Number of children cannot be negative' })
  }
  
  if (!stay.comingFrom.trim()) {
    errors.push({ field: 'comingFrom', message: 'Coming from location is required' })
  }
  
  if (!stay.roomType) {
    errors.push({ field: 'roomType', message: 'Room type is required' })
  }
  
  return errors
}

export function validateForeignDocuments(documents: ForeignDocuments): ValidationError[] {
  const errors: ValidationError[] = []
  
  if (!documents.passportNumber.trim()) {
    errors.push({ field: 'passportNumber', message: 'Passport number is required' })
  }
  
  if (!documents.passportIssuedAt.trim()) {
    errors.push({ field: 'passportIssuedAt', message: 'Passport issued at is required' })
  }
  
  if (!documents.passportIssueDate) {
    errors.push({ field: 'passportIssueDate', message: 'Passport issue date is required' })
  }
  
  if (!documents.passportValidTill) {
    errors.push({ field: 'passportValidTill', message: 'Passport valid till date is required' })
  }
  
  if (!documents.visaNumber.trim()) {
    errors.push({ field: 'visaNumber', message: 'Visa number is required' })
  }
  
  if (!documents.visaIssueDate) {
    errors.push({ field: 'visaIssueDate', message: 'Visa issue date is required' })
  }
  
  if (!documents.visaValidTill) {
    errors.push({ field: 'visaValidTill', message: 'Visa valid till date is required' })
  }
  
  if (!documents.dateOfArrivalIndia) {
    errors.push({ field: 'dateOfArrivalIndia', message: 'Date of arrival in India is required' })
  }
  
  if (!documents.cityOfArrivalIndia.trim()) {
    errors.push({ field: 'cityOfArrivalIndia', message: 'City of arrival in India is required' })
  }
  
  return errors
}

export function validateCheckInForm(data: CheckInFormData): ValidationError[] {
  const errors: ValidationError[] = []
  
  // Validate guest details
  errors.push(...validateGuestDetails(data.guest))
  
  // Validate stay details
  errors.push(...validateStayDetails(data.stay))
  
  // Validate documents based on segment
  if (data.segment === 'international') {
    errors.push(...validateForeignDocuments(data.documents as ForeignDocuments))
  }
  return errors
}
