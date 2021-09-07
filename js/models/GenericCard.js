import { Card } from "./Card.js";

export class GenericCard extends Card {
    constructor({ _name, _campaignId, _id = "", _data = {} }) {
        super({ _name, _campaignId, _id, _data });
    }
}