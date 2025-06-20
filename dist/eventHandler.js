export { validation };
import * as selector from "./DOMmanipulations.js";
let validation = {
    mail: () => {
        let mail = selector.login.mailSelector()?.value.trim();
        function verify(password) {
            console.log(mail);
            let regex = /^[^@]+@[^@]+\.com$/g;
            if (mail && regex.test(password))
                return true;
            return false;
        }
        let isValid = verify(mail);
        if (isValid) {
            return console.log(`Email Valid`);
        }
        console.log(`Email invalid`);
    },
    password() {
        let password = selector.login
            .passSelector()
            ?.value.trim();
        function verify(password) {
            console.log(password);
            let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g;
            if (password && regex.test(password))
                return true;
            return false;
        }
        let isValid = verify(password);
        if (isValid) {
            return console.log(`Password Valid`);
        }
        console.log(`Password invalid`);
    },
};
