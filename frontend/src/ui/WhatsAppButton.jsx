const WhatsAppButton = () => (
  <a
    href='https://api.whatsapp.com/send?phone=123456789&text=Hola%2C%20me%20gustaría%20obtener%20más%20información%20sobre%20la%20casa.'
    target='_blank'
    rel='noopener noreferrer'
    className='inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg mt-4'
  >
    Consultar por WhatsApp
  </a>
);

export default WhatsAppButton;
