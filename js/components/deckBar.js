import { classKeys } from "../keys/cssKeys.js";
import { eventKeys } from "../keys/eventKeys.js";
import { attributeKeys, dataKeys, tagKeys } from "../keys/htmlKeys.js";
import { createNewCard, getAllCards } from "../repositories/cardsRepository.js";
import { getActiveCampaign } from "../services/campaignServices.js";
import { setActiveCard } from "../services/routerServices.js";

export const loadDeckBar = (campaign) => {
    const deckBarDiv = document.querySelector(`[${dataKeys.campaignDeckBar}]`);
    const cards = getAllCards(campaign.id);
    cards.forEach(card => {
        const cardItem = CardListItem(card);
        deckBarDiv.appendChild(cardItem);
    });

    const addCardDiv = document.querySelector(`[${dataKeys.campaignAddCard}]`);
    addCardDiv.addEventListener(eventKeys.click, () => {
        const newCard = createNewCard(campaign.id);
        setActiveCard(newCard.id);
    });
    addCardDiv.addEventListener(eventKeys.auxclick, (event) => {
        if (event.button == 1) {
            const newCard = createNewCard(campaign.id);
            setActiveCard(newCard.id);
        }
    });
}

const CardListItem = (card) => {
    const cardButton = document.createElement(tagKeys.button);
    cardButton.setAttribute(attributeKeys.class, classKeys.cardListItem);
    cardButton.setAttribute(attributeKeys.id, `card-id-${card.id}`);
    cardButton.textContent = card.name;
    cardButton.style.borderColor = card.borderColor;
    cardButton.addEventListener(eventKeys.click, () => {
        setActiveCard(card.id);
    });
    cardButton.addEventListener(eventKeys.auxclick, (event) => {
        if (event.button == 1)
            setActiveCard(card.id);
    });

    return cardButton;
}

export const atualizeCardListItem = (card) => {
    const cardButton = document.querySelector(`#card-id-${card.id}`);
    cardButton.textContent = card.name;
    cardButton.style.borderColor = card.borderColor;
}