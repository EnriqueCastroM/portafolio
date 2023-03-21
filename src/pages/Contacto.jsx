import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const Result = () => {
  return (
    <p>Your message has been successfully sent, i will contact you soon</p>
  )
}

const Contacto = (props) => {
  const [result, showResult] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_w9gspyg', 'template_fa29gzg', e.target, 'VoAcv6RDXMLGigl5D')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
    e.target.reset()
    showResult(true)
  }

  return (
    <section id='contact'>
      <>
        <section class='bg-white dark:bg-gray-900'>
          <div class='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
            <h2 class='mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white'>Contact Us!</h2>
            <p class='mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'>Got interest on my profile and want to reach out?
            </p>
            <form action='#' class='space-y-8' onSubmit={sendEmail}>
              <div>
                <label for='email' class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Your email</label>
                <input type='email' id='email' name='email' class='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light' placeholder='your-email@developingisfun.com' required />
              </div>
              <div>
                <label for='subject' class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Subject</label>
                <input type='text' id='subject' name='subject' class='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light' placeholder='Let us know how we can help you in this section!' required />
              </div>
              <div class='sm:col-span-2'>
                <label for='message' class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'>Your message</label>
                <textarea id='message' rows='6' name='message' class='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500' placeholder='Leave a comment...' />
              </div>

              <button type='submit' class='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'>Send message</button>
              <div className='row'>{result ? <Result /> : null}</div>
            </form>
            <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6' id='curriculum'>
              <a href='/'>
                <button class='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'>
                  Go up!
                </button>
              </a>
            </div>
          </div>
        </section>

      </>
    </section>

  )
}

export default Contacto
