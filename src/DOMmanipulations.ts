export { login };

let login: {
  mailSelector: () => HTMLInputElement | null;
  passSelector: () => HTMLInputElement | null;
} = {
  mailSelector: () => {
    let selector: HTMLInputElement | null =
      document.querySelector(`[type="email"]`);
    return selector;
  },
  passSelector: () => {
    let selector: HTMLInputElement | null =
      document.querySelector(`[name="password"]`);
    return selector;
  },
};
