import { cardTypeKeys } from "../keys/cardTypeKeys.js";
import { searchKeys } from "../keys/htmlKeys.js";
import { AdventureCard } from "../models/AdventureCard.js";
import { GenericCard } from "../models/GenericCard.js";
import { editSavedCard, getCardById } from "../repositories/cardsRepository.js";

export const getActiveCard = () => {
    const urlString = window.location.href;
    const url = new URL(urlString);
    const campaignId = url.searchParams.get(searchKeys.campaign);
    const id = url.searchParams.get(searchKeys.card);
    const card = getCardById(campaignId, id);
    return card;
}

export const editCard = (card) => {
    const erros = validateCard(card);
    if (erros.length > 0) return;
    editSavedCard(card.campaignId, card);
    return erros;
}

const validateCard = (card) => {
    const erros = [];
    if (card.name == "")
        erros.push("Nome inválido!");
    if (card.campaignId == "" || card.campaignId == 0)
        erros.push("Campanha inválida!");
    return erros;
}

export const changeCardType = (card, type) => {
    if (type == "")
        return new GenericCard(card);
    if (type == cardTypeKeys.adventure)
        return new AdventureCard(card);
}