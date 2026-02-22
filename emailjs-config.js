// EmailJS Configuration
// Your EmailJS credentials for instant email delivery

const EMAILJS_CONFIG = {
    publicKey: 'bAdsiJf2VioxAs5dF',
    serviceId: 'service_5nxchls',
    templateId: 'template_2fwdxx9'
};

// Initialize EmailJS when page loads
(function() {
    emailjs.init(EMAILJS_CONFIG.publicKey);
    console.log('EmailJS initialized successfully!');
})();
