export { login };
let login = {
    mailSelector: () => {
        let selector = document.querySelector(`.email-input`);
        return selector;
    },
    passSelector: () => {
        let selector = document.querySelector(`[name="password"]`);
        return selector;
    },
    credErrMess: (invalidInput) => {
        if (invalidInput === `email`) {
            let mailInput = login.mailSelector();
            if (mailInput) {
                mailInput.style.border = "2px solid rgb(102, 19, 33)";
            }
        }
        else {
            let passInput = login.passSelector();
            if (passInput) {
                passInput.style.border = "2px solid rgb(102, 19, 33)";
            }
        }
    },
};
