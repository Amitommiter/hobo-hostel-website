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

export async function uploadFile(file: File, destinationPath: string, customFilename?: string): Promise<string> {
  console.log('uploadFile called with:', { file: file.name, destinationPath, customFilename })
  
  const formData = new FormData()
  formData.append('destinationPath', destinationPath)
  formData.append('filename', customFilename || file.name)
  formData.append('imageFile', file)
  
  console.log('FormData contents:')
  console.log('- destinationPath:', destinationPath)
  console.log('- filename:', customFilename || file.name)
  console.log('- imageFile:', file.name)
  
  console.log('Sending request to upload service...')
  
  const response = await fetch('https://uploadimage-q3deps5f7q-uc.a.run.app', {
    method: 'POST',
    body: formData
  })
  
  console.log('Upload response status:', response.status)
  
  if (!response.ok) {
    const errorText = await response.text()
    console.error('Upload failed:', errorText)
    throw new Error(`Upload failed: ${response.status} - ${errorText}`)
  }
  
  const result = await response.json()
  console.log('Upload result:', result)
  return result.url || result.downloadURL || result.imageUrl // Handle different response formats
}
