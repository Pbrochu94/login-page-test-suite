export { validation };
import * as selector from "./DOMmanipulations.js";
let validation: {
  mail: () => void;
  password: () => string | void;
} = {
  mail: () => {
    let mail: string | undefined = selector.login.mailSelector()?.value.trim();
    function verify(password: string | undefined): boolean {
      console.log(mail);
      let regex = /^[^@]+@[^@]+\.com$/g;
      if (mail && regex.test(password as string)) return true;
      return false;
    }
    let isValid: boolean = verify(mail);
    if (isValid) {
      return console.log(`Email Valid`);
    }
    console.log(`Email invalid`);
  },
  password() {
    let password: string | undefined = selector.login
      .passSelector()
      ?.value.trim();
    function verify(password: string | undefined): boolean {
      console.log(password);
      //regex to check if password contains min 8 letters, 1 lowercase,1 uppercase, 1 number and 1 special symbol
      let regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g;
      if (password && regex.test(password as string)) return true;
      return false;
    }
    let isValid: boolean = verify(password);
    if (isValid) {
      return console.log(`Password Valid`);
    }
    console.log(`Password invalid`);
  },
};
