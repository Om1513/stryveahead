import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Email validation schema
const subscribeSchema = z.object({
  email: z.string().email('Please enter a valid email address').trim().toLowerCase()
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate input
    const validationResult = subscribeSchema.safeParse(body)
    
    if (!validationResult.success) {
      return NextResponse.json(
        {
          ok: false,
          error: validationResult.error.issues[0]?.message || 'Invalid email address'
        },
        { status: 400 }
      )
    }
    
    const { email } = validationResult.data
    
    // TODO: In a real implementation, you would:
    // 1. Save the email to your database
    // 2. Add to your email marketing service (e.g., Mailchimp, SendGrid)
    // 3. Send a confirmation email
    
    // For now, we'll simulate success
    console.log(`Newsletter subscription: ${email}`) // Safe to log in development
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    return NextResponse.json({
      ok: true,
      message: 'Thank you for subscribing! You\'ll receive our newsletter soon.'
    })
    
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    
    return NextResponse.json(
      { 
        ok: false, 
        error: 'Something went wrong. Please try again later.' 
      },
      { status: 500 }
    )
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { ok: false, error: 'Method not allowed' },
    { status: 405 }
  )
}
