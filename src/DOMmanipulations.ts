export { login };

let login: {
  mailSelector: () => HTMLInputElement | null;
  passSelector: () => HTMLInputElement | null;
  credErrMess: (value: string) => void;
} = {
  mailSelector: () => {
    let selector: HTMLInputElement | null =
      document.querySelector(`.email-input`);
    return selector;
  },
  passSelector: () => {
    let selector: HTMLInputElement | null =
      document.querySelector(`[name="password"]`);
    return selector;
  },
  credErrMess: (invalidInput: string) => {
    if (invalidInput === `email`) {
      let mailInput: HTMLInputElement | null = login.mailSelector();
      if (mailInput) {
        mailInput.style.border = "2px solid rgb(102, 19, 33)";
      }
    } else {
      let passInput: HTMLInputElement | null = login.passSelector();
      if (passInput) {
        passInput.style.border = "2px solid rgb(102, 19, 33)";
      }
    }
  },
};
