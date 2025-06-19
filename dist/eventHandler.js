export { validation };
import * as selector from "./DOMmanipulations.js";
let validation = {
    mail: () => {
        console.log(`valid`);
    },
    password() {
        let password = selector.login
            .passSelector()
            ?.value.trim();
        function verify(password) {
            console.log(password);
            let regex = /^(?=.\d+)(?=.[a-z]+)(?=.[A-Z]+)(?=.*\*)$/;
            if (password && regex.test(password))
                return true;
            return false;
        }
        let isValid = verify(password);
        if (isValid) {
            return console.log(`Password Valid`);
        }
        alert(`Password invalid`);
    },
};
