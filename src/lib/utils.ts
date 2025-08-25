import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export function calculateNights(checkIn: string, checkOut: string): number {
  const checkInDate = new Date(checkIn)
  const checkOutDate = new Date(checkOut)
  const diffTime = checkOutDate.getTime() - checkInDate.getTime()
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
}

export function formatPhoneNumber(phone: string): string {
  // Ensure phone number is in E.164 format
  if (phone.startsWith('+')) {
    return phone
  }
  if (phone.startsWith('91') && phone.length === 12) {
    return `+${phone}`
  }
  if (phone.length === 10) {
    return `+91${phone}`
  }
  return phone
}

export async function uploadFile(file: File, destinationPath: string): Promise<string> {
  const formData = new FormData()
  formData.append('destinationPath', destinationPath)
  formData.append('imageFile', file)
  
  const response = await fetch('https://uploadimage-q3deps5f7q-uc.a.run.app', {
    method: 'POST',
    body: formData
  })
  
  if (!response.ok) {
    throw new Error(`Upload failed: ${response.status}`)
  }
  
  const result = await response.json()
  return result.url || result.downloadURL || result.imageUrl // Handle different response formats
}
