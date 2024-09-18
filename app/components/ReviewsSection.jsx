import React from 'react'
import WhatsAppIcon from '/public/whatsapp-icon.svg'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const ReviewsSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 md:py-15 gap-4">
        <div className="md:mb-0 mb-6">
            <h5 className="text-xl font-bold text-black my-2">
                Leave Us A Review
            </h5>
            <p className="text-black mb-4 max-w-md"> 
                Listened to one of our shows or to one of our playlists? We&apos;d love to hear from you! Leave us a review and let us know what you think.
            </p>
            <div className="socials flex flex-row gap-2">
                <Link href="https://chat.whatsapp.com/JqONUP9z9YT7WBW9wyAQeq">
                    <Image src={WhatsAppIcon} alt="WhatsApp Icon" />
                </Link>
            </div>
        </div>
        <div className="mt-5 bg-gray-100 rounded-lg border shadow-lg p-6">
            <div className="mt-5">
                <form id="contact_form" name="contact_form" method="post">
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                        <input type="text" required maxLength="50" className="form-control w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" id="first_name" name="first_name" placeholder="Your Name" />
                    </div>
                    <div className="mb-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="email_addr" className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
                            <input type="email" required maxLength="50" className="form-control w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" id="email_addr" name="email" placeholder="JMSFan@example.com" />
                        </div>
                        <div>
                            <label htmlFor="phone_input" className="block text-sm font-medium text-gray-700 mb-2">Phone (Optional)</label>
                            <input type="tel" maxLength="50" className="form-control w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" id="phone_input" name="Phone" placeholder="Phone" />
                        </div>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                        <textarea className="form-control w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" id="message" name="message" rows="5" placeholder="Let us know what you think..."></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-full md:w-auto bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Post
                    </button>
                </form>
            </div>
        </div>
        <Script id="ratufa_loader" src="https://www.ratufa.io/c/ld.js?f=iwa2w1n3&n=n1.ratufa.io" />
    </section>
  )
}

export default ReviewsSection