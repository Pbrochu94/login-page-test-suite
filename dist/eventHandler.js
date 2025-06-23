export { validation };
export { apiRequest };
import * as DOM from "./DOMmanipulations.js";
let validation = {
    mail: () => {
        let mail = DOM.login.mailSelector()?.value.trim();
        function verify(password) {
            let regex = /^[^@]+@reqres\.in$/;
            if (mail && regex.test(password))
                return true;
            return false;
        }
        let isValid = verify(mail);
        !isValid ? DOM.login.credErrMess(`email`) : console.log(`Email Valid`);
    },
    password() {
        let password = DOM.login.passSelector()?.value.trim();
        function verify(password) {
            let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g;
            if (password && regex.test(password))
                return true;
            return false;
        }
        let isValid = verify(password);
        !isValid
            ? DOM.login.credErrMess(`password`)
            : console.log(`Password Valid`);
    },
};
let apiRequest = {
    post: async () => {
        let request = await fetch(`https://reqres.in/api/login`, {
            method: "POST",
            headers: {
                "x-api-key": "reqres-free-v1",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: "eve.holt@reqres.in",
                password: "cityslicka",
            }),
        });
        let response = await request.json();
        console.log(request);
    },
};
