import { cardBorderColorKeys } from "../keys/colorKeys.js";
import { getNewId } from "../services/persistenceServices.js"

export class Card {
    constructor({ _name, _campaignId, _id = "", _data = {} }) {
        if (_id == "") this._id = getNewId();
        else this._id = _id;
        this._name = _name;
        this._campaignId = _campaignId;
        this._data = _data;
    }

    get name() { return this._name; }
    get campaignId() { return this._campaignId; }
    get id() { return this._id; }
    get priority() { return 0; }
    get type() {
        if ("_type" in this) return this._type;
        return "";
    }
    get borderColor() { return cardBorderColorKeys.generic; }

    set name(value) { this._name = value; }
}