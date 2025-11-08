// EmailJS Configuration
// Get these values from your EmailJS dashboard: https://dashboard.emailjs.com

export const emailjsConfig = {
  // Your EmailJS Public Key (found in Account > API Keys)
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
  
  // Your EmailJS Service ID (found in Email Services)
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  
  // Your EmailJS Template ID (found in Email Templates)
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
}

// Validate configuration
export const isEmailjsConfigured = () => {
  return !!(
    emailjsConfig.publicKey &&
    emailjsConfig.serviceId &&
    emailjsConfig.templateId
  )
}
