export { validation };
import * as selector from "./DOMmanipulations.js";
let validation: {
  mail: () => void;
  password: () => string | void;
} = {
  mail: () => {
    console.log(`valid`);
  },
  password() {
    let password: string | undefined = selector.login
      .passSelector()
      ?.value.trim();
    function verify(password: string | undefined): boolean {
      console.log(password);
      let regex = /^(?=.\d+)(?=.[a-z]+)(?=.[A-Z]+)(?=.*\*)$/;
      if (password && regex.test(password as string)) return true;
      return false;
    }
    let isValid: boolean = verify(password);
    if (isValid) {
      return console.log(`Password Valid`);
    }
    alert(`Password invalid`);
  },
};
