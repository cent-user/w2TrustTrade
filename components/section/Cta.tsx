
'use client'
import Form from 'next/form'
import { useEffect, useState } from 'react'
export default function Cta(){
    const [Email, setEmail] = useState('')
    const [FlagInsertCta, setFlagInsertCta] = useState('')
    const [cooldown, setCooldown] = useState(false)

    useEffect(() => {
    // Check if there's a cooldown period stored in localStorage
    const timeout = localStorage.getItem('emailCooldown')
    if (timeout && Number(timeout) > Date.now()) {
        setCooldown(true)
        const timeLeft = Number(timeout) - Date.now()
        setTimeout(() => setCooldown(false), timeLeft)
    }
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
       
        if (cooldown) {
            alert('You need to wait before submitting again.')
            return
        }

        try {
            // Making the POST request
            const response = await fetch('/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ Email }),
            })
            
            if (response.ok) {
                setFlagInsertCta('Success') // Set flag on success

                 // Set cooldown state and store it in localStorage (30 minutes)
                setCooldown(true)
                localStorage.setItem('emailCooldown', (Date.now() + 5 * 60 * 1000).toString()) // 30 minutes cooldown
            } else {
                setFlagInsertCta('Error') // Set flag on error
            }
        } catch (error) {
            console.error('Error submitting the form:', error)
            setFlagInsertCta('Error')
        }
        }

    return(
        <>
            <section className='w-full relative text-primary1 bg-primary5 p-[3em]' id="contactUs">
                <header className='text-center font-h1'>
                    <h3>Transform Your Space with Custom Furniture Crafted Just for You!</h3>
                </header>
                <br/>
                <p className='flex flex-col text-center font-b1'>
                    <span>Ready to make your space truly yours?</span>
                    <span>Our team is here to bring your dream design to life with custom furniture that perfectly fits your style and needs.</span>
                    <span>Whether you&#39;re imagining a bold new look or need a personalized quote, we&#39;re excited to help you create something extraordinary.</span>
                    <span>Let&#39;s get started today!</span>
                </p>
                <br/><br/>
                {FlagInsertCta !== 'Success' && (
                    <Form action="/search" className='w-full' onSubmit={handleSubmit}>
                        <div className='flex flex-col'>
                            <div className='flex justify-evenly text-center font-m1 '><input type="email" name="email" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required className='w-[80%] h-[3em] outline outline-primary2 '/></div>
                            <div className='flex justify-evenly text-center font-m1 mt-[1em]'><button type="submit" className='button'>Request Custom Design / Get a Quote</button></div>
                        </div>
                    </Form>
                )}
                {FlagInsertCta == 'Success' && (
                     <div className='flex flex-col font-b1 text-center'>Data Submitted!</div>
                )}
            </section>
        </>
    );
}