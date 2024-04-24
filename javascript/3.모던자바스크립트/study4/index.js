import { addBtn, addInput, list, rollBtn } from "./tag.js";

import addMenu from "./functions/add.js";
import deleteMenu from "./functions/delete.js";
import rollMenu from "./functions/roll.js";

const data = [];


addBtn.addEventListener('click', ()=> addMenu(data));

addInput.addEventListener('keypress', (e) => e.code === 'Enter' && addMenu(data));

list.addEventListener('click', ({target}) => target.tagName === 'BUTTON' && deleteMenu(data, target.dataset.index));

rollBtn.addEventListener('click', () => list.classList.contains('rolling') || rollMenu(data));