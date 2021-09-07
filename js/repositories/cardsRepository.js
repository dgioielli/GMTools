import { cardTypeKeys } from "../keys/cardTypeKeys.js";
import { AdventureCard } from "../models/AdventureCard.js";
import { GenericCard } from "../models/GenericCard.js";
import { changeCardType } from "../services/cardServices.js";

const keyCards = "Cards";

export const getAllCards = (campaignId) => {
    const cardsData = JSON.parse(localStorage.getItem(`${keyCards}_${campaignId}`)) || [];
    const cards = [];
    cardsData.forEach(cardData => {
        // console.log(cardData);
        if ("_type" in cardData == false)
            cards.push(new GenericCard(cardData));
        else
            cards.push(changeCardType(cardData, cardData._type));
    });
    // console.log(cards);
    return cards;
}

export const addNewCard = (campaignId, card) => {
    const cards = getAllCards(campaignId);
    cards.push(card);
    saveCards(campaignId, cards);
}

const saveCards = (campaignId, cards) => {
    // console.log(cards);
    cards.sort((a, b) => {
        const typeComparation = b.priority - a.priority;
        if (typeComparation == 0)
            return (a.name > b.name) ? 1 : -1;
        return typeComparation
    });
    localStorage.setItem(`${keyCards}_${campaignId}`, JSON.stringify(cards));
}

export const createNewCard = (campaignId) => {
    const newCard = new GenericCard({
        _name: "New Card",
        _campaignId: campaignId,
    });
    addNewCard(campaignId, newCard);
    return newCard;
}

export const getCardById = (campaignId, id) => {
    const cards = getAllCards(campaignId);
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        if (card.id == id)
            return card;
    }
    return null;
}

export const editSavedCard = (campaignId, editedCard) => {
    const cards = getAllCards(campaignId);
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        if (card.id != editedCard.id) continue;
        cards[i] = editedCard;
        break;
    }
    saveCards(campaignId, cards);
}