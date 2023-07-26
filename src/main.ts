import { handleSubmit } from "./util";

const form = document.querySelector<HTMLFormElement>("#form")!;
form.addEventListener("submit", handleSubmit);
