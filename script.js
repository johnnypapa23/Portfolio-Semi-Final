
// EmailJS event registration handler
document.addEventListener('DOMContentLoaded', function() {
	var form = document.getElementById('eventForm');
	if (form) {
		form.addEventListener('submit', function(e) {
			e.preventDefault();
			
			// Show loading state
			var submitBtn = this.querySelector('button[type="submit"]');
			var originalText = submitBtn.textContent;
			submitBtn.textContent = 'Sending...';
			submitBtn.disabled = true;
			
			// Send confirmation email to user
			emailjs.sendForm('service_hmp507q', 'template_ku4hwo9', this)
				.then(function(response) {
					console.log('Confirmation email sent successfully', response);
					alert('Registration successful! Please check your email for confirmation.');
					form.reset();
					submitBtn.textContent = originalText;
					submitBtn.disabled = false;
				})
				.catch(function(error) {
					console.error('Failed to send email:', error);
					alert('Failed to send registration. Error: ' + error.text);
					submitBtn.textContent = originalText;
					submitBtn.disabled = false;
				});
		});
	}
});
