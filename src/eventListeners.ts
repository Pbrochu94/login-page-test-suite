export { listeners };
import * as selector from "./DOMmanipulations.js";
import * as events from "./eventHandler.js";

let listeners: {
  mailListener: () => void;
  passListener: () => void;
  submitListener: () => void;
} = {
  mailListener: () => {
    let element: Element | null = selector.login.mailSelector();
    element?.addEventListener("focusout", () => {
      events.validation.mail();
    });
  },
  passListener: () => {
    let element: Element | null = selector.login.passSelector();
    element?.addEventListener(`focusout`, () => {
      events.validation.password();
    });
  },
  submitListener: () => {
    let selector: HTMLInputElement | null =
      document.querySelector(`.submit-button`);
    selector?.addEventListener(`click`, (e: Event) => {
      e.preventDefault();
      events.apiRequest.post();
    });
  },
};
