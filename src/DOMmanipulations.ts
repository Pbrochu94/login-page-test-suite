export { login };

let login: {
  mailSelector: () => Element | null;
  passSelector: () => Element | null;
} = {
  mailSelector: () => {
    let selector: Element | null = document.querySelector(`[type="email"]`);
    return selector;
  },
  passSelector: () => {
    let selector: Element | null = document.querySelector(`[name="password"]`);
    return selector;
  },
};
