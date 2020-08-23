import { model } from "./model";
import { templates } from "./templates";
import "./styles/main.css";

const site = document.querySelector("#site");

model.forEach((block) => {
  const generate = templates[block.type];
  if (generate) {
    const html = generate(block);
    site.insertAdjacentHTML("beforeend", html);
  }
});
