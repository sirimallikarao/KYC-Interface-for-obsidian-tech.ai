document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('kycForm');
    const detailsStep = document.getElementById('detailsStep');
    const verifyStep = document.getElementById('verifyStep');
    const stepTitle = document.getElementById('stepTitle');
    const submitBtn = document.getElementById('submitBtn');
    const userEmailSpan = document.getElementById('userEmail');
    
    let currentStep = 'details';
    let formData = {};

    const setLoading = (isLoading) => {
        if (isLoading) {
            submitBtn.innerHTML = `
                <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            `;
            submitBtn.disabled = true;
        } else {
            submitBtn.innerHTML = currentStep === 'details' ? 'Continue' : 'Verify & Login';
            submitBtn.disabled = false;
        }
    };

    const switchToVerifyStep = () => {
        currentStep = 'verify';
        detailsStep.classList.add('hidden');
        verifyStep.classList.remove('hidden');
        stepTitle.textContent = 'Verify Your Email';
        submitBtn.textContent = 'Verify & Login';
        userEmailSpan.textContent = formData.email;
    };

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        setLoading(true);

        if (currentStep === 'details') {
            // Collect form data
            formData = {
                fullName: document.getElementById('fullName').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                company: document.getElementById('company').value,
                password: document.getElementById('password').value
            };

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            switchToVerifyStep();
        } else {
            // Verify OTP
            const otp = document.getElementById('otp').value;
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Redirect to main site
            window.location.href = 'https://obsidiantech.ai/';
        }

        setLoading(false);
    });
});