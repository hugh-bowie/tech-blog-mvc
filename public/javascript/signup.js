async function signupFormHandler(event) {
    try {
        event.preventDefault();


        const username = document.querySelector('#username-signup').value.trim();
        const email = document.querySelector('#email-signup').value.trim();
        const password = document.querySelector('#password-signup').value.trim();
        const twitter = document.querySelector('#twitter-signup').value.trim();
        const github = document.querySelector('#github-signup').value.trim();

        if (username && email && password) {
            const response = await fetch('/api/users', {
                method: 'post',
                body: JSON.stringify({
                    username,
                    email,
                    twitter,
                    github,
                    password
                }),
                headers: { 'Content-Type': 'application/json' }
            });

            // check the response status
            if (response.ok) {
                console.log('success');
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

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
