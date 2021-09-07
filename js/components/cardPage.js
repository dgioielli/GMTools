import { cardTypeKeys } from "../keys/cardTypeKeys.js";
import { classKeys } from "../keys/cssKeys.js";
import { eventKeys } from "../keys/eventKeys.js";
import { attributeKeys, dataKeys, inputTypeKeys, tagKeys } from "../keys/htmlKeys.js";
import { changeCardType, editCard, getActiveCard } from "../services/cardServices.js"
import { atualizeCardListItem } from "./deckBar.js";
import { newInput, newOption } from "./htmlComponents.js";

export const loadCardPage = () => {
    const card = getActiveCard();
    if (card == null) return;

    const cardPageDiv = document.querySelector(`[${dataKeys.campaignCardPage}]`);
    cardPageDiv.innerHTML = "";
    cardPageDiv.appendChild(CardPage(card));
}

const CardPage = (card) => {
    const baseDiv = document.createElement(tagKeys.div);
    baseDiv.setAttribute(attributeKeys.class, classKeys.cardBaseDiv);
    baseDiv.style.borderColor = card.borderColor;


    baseDiv.appendChild(CardNameInput(card));
    baseDiv.appendChild(CardTypeSelector(card));
    baseDiv.appendChild(getContent(card));
    return baseDiv;
}

const CardNameInput = (card) => {
    const titleInput = newInput(classKeys.cardTitleInput, "", inputTypeKeys.text, card.name);
    titleInput.addEventListener(eventKeys.lostFocus, (event) => {
        const newName = event.target.value;
        if (card.name == newName) return;
        card.name = newName;
        const erros = editCard(card);
        if (erros.length > 0) return;
        atualizeCardListItem(card);
    });
    return titleInput;
}

const CardTypeSelector = (card) => {
    const select = document.createElement("select");
    select.setAttribute(attributeKeys.class, classKeys.cardTypeSelector);
    select.appendChild(newOption({ value: "", content: "Genérico" }));
    select.appendChild(newOption({ value: cardTypeKeys.adventure, content: "Aventura" }));
    select.value = card.type;
    select.addEventListener(eventKeys.change, (event) => {
        const newType = event.target.value;
        // console.log(newType);
        if (card.type == newType) return;
        const newCard = changeCardType(card, newType);
        const erros = editCard(newCard);
        if (erros.length > 0) return;
        atualizeCardListItem(newCard);
        loadCardPage();
    });

    return select;
}

const getContent = (card) => {
    return GenericContent(card);
}

const GenericContent = (card) => {
    const basicTextBlock = newTextBlock();

    return basicTextBlock;
}

const newTextBlock = () => {
    const div = document.createElement(tagKeys.div);
    div.classList.add(classKeys.cardTextBlockDiv);
    div.setAttribute(attributeKeys.contenteditable, "true");

    return div;
}