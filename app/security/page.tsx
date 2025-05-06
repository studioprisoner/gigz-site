export default function SecurityPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">Security</h1>
      <p className="text-muted-foreground mb-8">Last Updated: Jan 1, 2025</p>
      
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h2>Security Overview</h2>
        <p>
          At Gigz, we take the security of your personal information and data seriously. Our comprehensive security measures are designed to protect your information at every step, from data collection to storage and processing.
        </p>

        <h2>How We Protect Your Data</h2>
        
        <h3>Secure Infrastructure</h3>
        <ul>
          <li><strong>Data Encryption</strong>: All sensitive data is encrypted both during transmission (using TLS/SSL) and at rest using industry-standard encryption algorithms.</li>
          <li><strong>Secure Hosting</strong>: Our systems are hosted in SOC 2 compliant data centers with 24/7 physical security, redundant power systems, and environmental controls.</li>
          <li><strong>Network Security</strong>: We employ multi-layered firewall protection, intrusion detection systems, and regular network security scans to identify and address potential vulnerabilities.</li>
        </ul>

        <h3>Authentication & Access</h3>
        <ul>
          <li><strong>Strong Authentication</strong>: We implement multi-factor authentication for all administrative access to our systems.</li>
          <li><strong>User Authentication</strong>: Your account is protected using passwordless One-Time Password (OTP) authentication only. This eliminates password-related vulnerabilities while providing strong security through unique time-limited codes sent to your verified device.</li>
          <li><strong>Access Controls</strong>: We follow the principle of least privilege, ensuring employees only have access to the data necessary for their specific job functions.</li>
        </ul>

        <h3>Ongoing Security Practices</h3>
        <ul>
          <li><strong>Regular Security Testing</strong>: Our systems undergo penetration testing and vulnerability assessments conducted by both internal teams and external security experts.</li>
          <li><strong>Security Updates</strong>: We maintain regular patch management processes to address security vulnerabilities promptly.</li>
          <li><strong>Security Monitoring</strong>: Our security team continuously monitors our systems for suspicious activities and potential security incidents.</li>
        </ul>

        <h2>Data Privacy</h2>
        <p>We respect your privacy and are committed to protecting your personal information:</p>
        <ul>
          <li>We only collect information that&apos;s necessary to provide our services</li>
          <li>Your data is never sold to third parties</li>
          <li>We have clear data retention policies</li>
          <li>You maintain control of your data with options to access, correct, or delete your information</li>
        </ul>
        <p>For comprehensive information about our data practices, please review our <a href="/privacy">Privacy Policy</a>.</p>

        <h2>Secure User Practices</h2>
        <p>Help us keep your account secure by following these best practices:</p>
        <ol>
          <li>Keep your email address up to date in your account settings</li>
          <li>Never share OTP codes with anyone, including our support team</li>
          <li>Verify OTP requests are tied to actions you initiated</li>
          <li>Be alert to phishing attempts claiming to be from our company</li>
          <li>Log out from your account when using shared devices</li>
          <li>Keep your devices and browsers updated</li>
          <li>Secure your email account as it may be used for account recovery</li>
        </ol>

        <h2>Security Reporting</h2>
        <p>If you discover a potential security vulnerability, please report it to us immediately at <a href="mailto:support@gigz.app">support@gigz.app</a>. We investigate all legitimate reports and do our best to quickly fix valid security issues.</p>

        <h2>Contact Us</h2>
        <p>If you have any questions about our security practices, please contact our security team at <a href="mailto:support@gigz.app">support@gigz.app</a>.</p>
      </div>
    </main>
  )
}
