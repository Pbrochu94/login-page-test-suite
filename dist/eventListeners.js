export { listeners };
import * as selector from "./DOMmanipulations.js";
import * as events from "./eventHandler.js";
let listeners = {
    mailListener: () => {
        let element = selector.login.mailSelector();
        element?.addEventListener("focusout", () => {
            events.validation.mail();
        });
    },
    passListener: () => {
        let element = selector.login.passSelector();
        element?.addEventListener(`focusout`, () => {
            events.validation.password();
        });
    },
    submitListener: () => {
        let selector = document.querySelector(`.submit-button`);
        selector?.addEventListener(`click`, (e) => {
            e.preventDefault();
            events.apiRequest.post();
        });
    },
};
