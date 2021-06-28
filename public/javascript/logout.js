async function logout() {
    try {
        const response = await fetch('/api/users/logout', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    } catch (e) {
        console.log('error = ', e);
        process.exit(1);
    }
}

document.querySelector('#logout').addEventListener('click', logout);
