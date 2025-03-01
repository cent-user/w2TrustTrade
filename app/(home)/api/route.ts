import { supabase } from '@/utils/supabase/supabase-storage';
import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ message: 'Hello from the API!' })
}


export async function POST(request: Request) {
    try {
      // Parsing the JSON body from the POST request
      const { Email } = await request.json()
    
      const insertEmail = await getFurnitureCount(Email);
   
      // Sending a response back
      return NextResponse.json(
        {message:'Success'}
      )
    } catch (error) {
      console.error('Error in POST request:', error)
      return NextResponse.json(
        { message: 'Something went wrong. Please try again later.' },
        { status: 500 }
      )
    }
  }
async function getFurnitureCount(inEmail:string){
    const { error } = await supabase
    .from('Email_cta')
    .insert({ email: inEmail })

    return error;
}
