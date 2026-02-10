import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Status Saver App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Status Photo &amp; Video Saver App" />
        <p className="description">
          Download and Share Your Friends WhatsApp Status Easily
        </p>

        <h1>Privacy Policy</h1>
        <p>
          <strong>Last updated:</strong> February 10, 2026
        </p>

        <h2>Overview</h2>
        <p>
          Status Saver (&quot;the App&quot;) allows users to view and save WhatsApp
          status updates to their device. This privacy policy explains what data
          the App accesses, stores, and shares.
        </p>

        <h2>Data the App Accesses</h2>
        <ul>
          <li>
            <strong>WhatsApp status files:</strong> The App accesses WhatsApp and
            WhatsApp Business status files (images and videos) through Android&apos;s
            Storage Access Framework (SAF). Access is granted explicitly by the user.
          </li>
        </ul>

        <h2>Data Stored Locally</h2>
        <ul>
          <li>
            <strong>Saved statuses:</strong> When a user saves a status, the file is
            copied to the device&apos;s <code>Downloads/Status Saver/</code> folder.
            These files remain on the device and are not uploaded to any server.
          </li>
          <li>
            <strong>App preferences:</strong> The App stores user preferences (e.g.,
            selected WhatsApp variant) locally using Android DataStore.
          </li>
        </ul>

        <h2>Data Collection</h2>
        <p>
          The App does <strong>not</strong> directly collect or transmit personal data
          to the developer&apos;s servers. However, third-party services integrated
          into the App may collect data as described below.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          The App integrates the following third-party services, each with their own
          privacy policies:
        </p>
        <ul>
          <li>
            <strong>Google AdMob</strong> — Serves advertisements. May collect device
            identifiers and usage data for ad personalization.{' '}
            <a href="https://policies.google.com/privacy">Google AdMob Privacy Policy</a>
          </li>
          <li>
            <strong>Meta Audience Network</strong> — Serves advertisements. May collect
            device and usage data.{' '}
            <a href="https://www.facebook.com/privacy/policy/">Meta Privacy Policy</a>
          </li>
          <li>
            <strong>Firebase Analytics</strong> — Collects anonymous usage statistics
            (e.g., screen views, events) to help improve the App.{' '}
            <a href="https://firebase.google.com/support/privacy">Firebase Privacy Policy</a>
          </li>
          <li>
            <strong>Firebase Crashlytics</strong> — Collects crash reports and diagnostic
            data to help identify and fix bugs.{' '}
            <a href="https://firebase.google.com/support/privacy">Firebase Privacy Policy</a>
          </li>
        </ul>

        <h2>User Consent</h2>
        <p>
          The App uses Google&apos;s User Messaging Platform (UMP) to collect user
          consent for personalized advertising in compliance with applicable
          regulations (e.g., GDPR, CCPA).
        </p>

        <h2>Permissions</h2>
        <ul>
          <li>
            <strong>Storage / SAF access:</strong> Required to read WhatsApp status
            files and save them to Downloads.
          </li>
          <li>
            <strong>Internet:</strong> Required for serving ads and sending analytics/crash
            reports.
          </li>
        </ul>

        <h2>Children&apos;s Privacy</h2>
        <p>
          The App is not directed at children under 13. We do not knowingly collect
          personal information from children.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. Changes will be posted
          in this document with an updated date.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about this privacy policy, please contact us at:
        </p>
        <p>
          <strong>Email:</strong> onescreenapps@gmail.com
        </p>
      </main>

      <Footer />
    </div>
  )
}
