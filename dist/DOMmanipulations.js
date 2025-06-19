export { login };
let login = {
    mailSelector: () => {
        let selector = document.querySelector(`[type="email"]`);
        return selector;
    },
    passSelector: () => {
        let selector = document.querySelector(`[name="password"]`);
        return selector;
    },
};
