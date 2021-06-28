async function deleteFormHandler(event) {
    try {
        event.preventDefault();

        const id = window.location.toString().split('/')[
            window.location.toString().split('/').length - 1
        ];

        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
            body: JSON.stringify({
                post_id: id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/dashboard/');
        } else {
            alert(response.statusText);
        }
    } catch (e) {
        console.log('error = ', e);
        process.exit(1);
    }
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
