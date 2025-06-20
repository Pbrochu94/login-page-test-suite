export { login };

let login: {
  mailSelector: () => HTMLInputElement | null;
  passSelector: () => HTMLInputElement | null;
  mailHelperSelector: () => HTMLInputElement | null;
  passHelperSelector: () => HTMLInputElement | null;
  credErrMess: (value: string) => void;
  showCredHelper: (input: string) => void;
} = {
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
  credErrMess: (invalidInput: string) => {
    if (invalidInput === `email`) {
      let mailInput: HTMLInputElement | null = login.mailSelector();
      if (mailInput) {
        mailInput.style.border = "2px solid rgb(102, 19, 33)";
        login.showCredHelper(`email`);
      }
    } else {
      let passInput: HTMLInputElement | null = login.passSelector();
      if (passInput) {
        passInput.style.border = "2px solid rgb(102, 19, 33)";
        login.showCredHelper("password");
      }
    }
  },
  showCredHelper: (invalidInput) => {
    if (invalidInput === `email`) {
      let mailHelper: HTMLInputElement | null = login.mailHelperSelector();
      if (mailHelper) {
        mailHelper.classList.remove(`hidden`);
      }
    }
    if (invalidInput === `password`) {
      let passHelper: HTMLInputElement | null = login.passHelperSelector();
      if (passHelper) {
        passHelper.classList.remove(`hidden`);
      }
    }
  },
};
