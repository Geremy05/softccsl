function searchUser() {
    const name = document.getElementById('username').value;
    fetch(`get_user.php?name=${name}`)
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                const userDetails = document.getElementById('user-details');
                userDetails.innerText = data.message;
            } else {
                window.location.href = `user_details.html?name=${name}`;
            }
        });
}
