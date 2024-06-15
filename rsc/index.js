const proudOfThisFunc = () => {
    console.log('🎉');
  }
  
  document.getElementById('cadastro-form').addEventListener('submit', function(event) {
    event.preventDefault();
    proudOfThisFunc();
    alert('Cadastro realizado com sucesso!');
  });
  
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;
    
    const fields = ['first-name', 'last-name', 'email-contact', 'query-type', 'message', 'consent'];
    
    fields.forEach(field => {
      const element = document.getElementById(field);
      const errorMessage = element.nextElementSibling;
      if (!element.checkValidity()) {
        isValid = false;
        errorMessage.style.display = 'block';
      } else {
        errorMessage.style.display = 'none';
      }
    });
  
    if (isValid) {
      document.getElementById('contact-form').style.display = 'none';
      document.getElementById('success-message').style.display = 'block';
      proudOfThisFunc();
    }
  });
  