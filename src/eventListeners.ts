export { listeners };
import * as selector from "./DOMmanipulations.js";
import * as events from "./eventHandler.js";

let listeners: {
  mailListener: () => void;
  passListener: () => void;
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
};
