import { cardTypeKeys } from "../keys/cardTypeKeys.js";
import { cardBorderColorKeys } from "../keys/colorKeys.js";
import { Card } from "./Card.js";

export class AdventureCard extends Card {
    constructor({ _name, _campaignId, _id = "", _data = {} }) {
        super({ _name, _campaignId, _id, _data });
        this._type = cardTypeKeys.adventure;
    }

    get priority() { return 10; }
    get borderColor() { return cardBorderColorKeys.adventure; }
}