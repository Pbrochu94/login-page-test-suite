export { login };
let login = {
    mailSelector: () => {
        return document.querySelector(`.email-input`);
    },
    mailHelperSelector: () => {
        return document.querySelector(`.error-message-mail`);
    },
    passSelector: () => {
        return document.querySelector(`[name="password"]`);
    },
    passHelperSelector: () => {
        return document.querySelector(`.error-message-password`);
    },
    credErrMess: (invalidInput) => {
        if (invalidInput === `email`) {
            let mailInput = login.mailSelector();
            if (mailInput) {
                mailInput.style.border = "2px solid rgb(102, 19, 33)";
                login.showCredHelper(`email`);
            }
        }
        else {
            let passInput = login.passSelector();
            if (passInput) {
                passInput.style.border = "2px solid rgb(102, 19, 33)";
                login.showCredHelper("password");
            }
        }
    },
    showCredHelper: (invalidInput) => {
        if (invalidInput === `email`) {
            let mailHelper = login.mailHelperSelector();
            if (mailHelper) {
                mailHelper.classList.remove(`hidden`);
            }
        }
        if (invalidInput === `password`) {
            let passHelper = login.passHelperSelector();
            if (passHelper) {
                passHelper.classList.remove(`hidden`);
            }
        }
    },
};
