import { getNewId } from "../services/persistenceServices.js"

export class Campaign {
    constructor({ name, setting, id = "" }) {
        if (id == "") this._id = getNewId();
        else this._id = id;
        this._name = name;
        this._setting = setting;
    }

    get name() { return this._name; }
    get setting() { return this._setting; }
    get id() { return this._id; }

    getJsonData() {
        return {
            name: this.name,
            setting: this.setting,
            id: this.id,
        }
    }
}