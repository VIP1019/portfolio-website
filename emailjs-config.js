// EmailJS Configuration
// Your EmailJS credentials for instant email delivery

const EMAILJS_CONFIG = {
    publicKey: 'bAdsiJf2VioxAs5dF',
    serviceId: 'service_5nxchls',
    templateId: 'template_2fwdxx9', // Contact form template
    testimonialTemplateId: 'template_14hkl4h' // Testimonial form template
};

// Initialize EmailJS when page loads
(function() {
    emailjs.init(EMAILJS_CONFIG.publicKey);
    console.log('EmailJS initialized successfully!');
    console.log('Contact template:', EMAILJS_CONFIG.templateId);
    console.log('Testimonial template:', EMAILJS_CONFIG.testimonialTemplateId);
})();
