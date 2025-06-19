import * as listenerScript from "./eventListeners.js";
window.onload = () => {
    listenerScript.listeners.mailListener();
    listenerScript.listeners.passListener();
};
