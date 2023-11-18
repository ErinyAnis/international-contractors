// form

var form = document.getElementById("footer-form");
    
async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("footer-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
        status.innerHTML = "Thanks!";
        form.reset()
        } else {
        response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
            status.innerHTML = "Oops! There was a problem."
            }
        })
        }
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem."
    });
}
form.addEventListener("submit", handleSubmit)