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
};
