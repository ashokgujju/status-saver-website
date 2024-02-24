import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Status Saver App" />
        <p className="description">
          Download and Share Your Friends WhatsApp Status Easily
        </p>
      </main>
      <h1>Privacy Policy</h1>
        <p>
        This privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used.
        </p>

        <h2>What personal information do we collect from the people that visit our blog, website or app?</h2>
        <p> We do not collect any personal information from the user.</p>

        <h2>Third-party disclosure</h2>
        <p>We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information.</p>


        <h2>Regarding the Data</h2>
        <p>User can save/download statuses, these files will be stored on the device, we do not upload it to external servers.</p>


        <h2>Contacting Us</h2>
        <p>If there are any questions regarding this privacy policy, please email us on onescreenapps@gmail.com</p>
        <p>Last Edited on 2024-02-24</p> 
      <Footer />
    </div>
  )
}
