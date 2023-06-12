const btn = document.querySelector(".form-btn")
const inputs = document.querySelector(".form")
btn.addEventListener('click', () => {
    Email.send({
        Host: "sandbox.smtp.mailtrap.io",
        Username: "57b49e74f493a9",
        Password: "0c5a50e03fe342",
        To: 'xyz@gm.com',
        From: inputs.elements["email"].value,
        Subject: "Novo contato",
        Body: inputs.elements["comment"].value + "<br>" + inputs.elements["name"].value + "<br>" + inputs.elements["phone"].value
    }).then(
        msg => alert('done'))
})
