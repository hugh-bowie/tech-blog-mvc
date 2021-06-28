async function loginFormHandler(event) {
    try {
        event.preventDefault();


        const email = document.querySelector('#email-login').value.trim();
        const password = document.querySelector('#password-login').value.trim();

        if (email && password) {
            const response = await fetch('/api/users/login', {
                method: 'post',
                body: JSON.stringify({
                    email,
                    password
                }),
                headers: { 'Content-Type': 'application/json' }
            });

            if (response.ok) {
                document.location.replace('/dashboard');
            } else {
                alert(response.statusText);
            }
        }

    } catch (e) {
        console.log('error = ', e);
        process.exit(1);
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
