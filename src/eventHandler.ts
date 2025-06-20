export { validation };
import * as DOM from "./DOMmanipulations.js";
let validation: {
  mail: () => void;
  password: () => string | void;
} = {
  mail: () => {
    let mail: string | undefined = DOM.login.mailSelector()?.value.trim();
    function verify(password: string | undefined): boolean {
      //regex to check if mail contains only 1 "@" ending with ".com"
      let regex = /^[^@]+@[^@]+\.com$/g;
      if (mail && regex.test(password as string)) return true;
      return false;
    }
    let isValid: boolean = verify(mail);
    !isValid ? DOM.login.credErrMess(`email`) : console.log(`Email Valid`);
  },
  password() {
    let password: string | undefined = DOM.login.passSelector()?.value.trim();
    function verify(password: string | undefined): boolean {
      //regex to check if password contains min 8 letters, 1 lowercase,1 uppercase, 1 number and 1 special symbol
      let regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g;
      if (password && regex.test(password as string)) return true;
      return false;
    }
    let isValid: boolean = verify(password);
    !isValid
      ? DOM.login.credErrMess(`password`)
      : console.log(`Password Valid`);
  },
};
