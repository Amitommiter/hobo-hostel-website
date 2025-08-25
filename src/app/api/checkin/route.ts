import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log('Received request body:', JSON.stringify(body, null, 2))
    
    const response = await fetch('https://setdatainfirestore-q3deps5f7q-uc.a.run.app', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    })
    
    console.log('External API response status:', response.status)
    
    if (!response.ok) {
      const errorText = await response.text()
      console.error('External API error:', errorText)
      return NextResponse.json(
        { error: `API request failed: ${response.status} ${errorText}` },
        { status: response.status }
      )
    }
    
    const result = await response.json()
    console.log('External API success response:', result)
    return NextResponse.json(result)
  } catch (error) {
    console.error('Proxy error details:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
