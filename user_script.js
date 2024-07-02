function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function loadUserDetails() {
    const name = getQueryParam('name');
    fetch(`get_user.php?name=${name}`)
        .then(response => response.json())
        .then(data => {
            const userDetails = document.getElementById('user-details');
            if (data.message) {
                userDetails.innerText = data.message;
            } else {
                userDetails.innerHTML = `
                    <p><strong>ID:</strong> ${data.id}</p>
                    <p><strong>Nom:</strong> ${data.name}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <p><strong>Téléphone:</strong> ${data.phone}</p>
                    <p><strong>Adresse:</strong> ${data.address}</p>
                `;
            }
        });
}

window.onload = loadUserDetails;
