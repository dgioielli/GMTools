import { classKeys } from "../keys/cssKeys.js";
import { eventKeys } from "../keys/eventKeys.js";
import { dataKeys } from "../keys/htmlKeys.js";
import { Campaign } from "../models/Campaign.js";
import { getAllSettings } from "../repositories/campaignsRepository.js";
import { addCampaign } from "../services/campaignServices.js";
import { newDataList, newInput, newLabel } from "./htmlComponents.js";

const idInputName = "campaign-name";
const idInputSetting = "campaign-setting";

export const PopupNewCampaign = () => {
    const form = document.createElement("form");
    form.classList.add("new-campaign-form");

    const labelName = newLabel("main-label", "Nome da campanha:", idInputName);
    const inputName = newInput("main-textbox", idInputName, "text");

    const labelSetting = newLabel("main-label", "Cenário da campanha:", idInputSetting);
    const inputSetting = newInput("main-textbox", idInputSetting, "text");
    inputSetting.setAttribute("list", "settings-list");
    const dataListSetting = getDataListSettings();

    const inputSaveButton = getSaveCampaignButton();
    const inputCancelButton = newInput("campaign-cancel", "", "button", "Cancelar");
    inputCancelButton.addEventListener(eventKeys.click, () => {
        const divForm = document.querySelector(`[${dataKeys.popupNewCampaign}]`);
        divForm.classList.add(classKeys.hiddenPopup);
    });

    form.appendChild(labelName);
    form.appendChild(inputName);
    form.appendChild(labelSetting);
    form.appendChild(inputSetting);
    form.appendChild(dataListSetting);
    form.appendChild(inputSaveButton);
    form.appendChild(inputCancelButton);
    return form;
}

const getSaveCampaignButton = () => {
    const inputSaveButton = newInput("campaign-save", "", "submit", "Salvar Campanha");

    inputSaveButton.addEventListener(eventKeys.click, (event) => {
        const inputName = document.querySelector(`#${idInputName}`);
        const inputSetting = document.querySelector(`#${idInputSetting}`);
        const newCampaign = new Campaign({
            name: inputName.value,
            setting: inputSetting.value,
        });
        const erros = addCampaign(newCampaign);
        if (erros.length == 0) return;
        event.preventDefault();
    });

    return inputSaveButton;
}

const getDataListSettings = () => {
    const settings = getAllSettings();
    const options = [];
    settings.forEach(setting => {
        options.push({
            value: setting,
            content: setting,
        });
    });
    const dataListSetting = newDataList("settings-list", options);
    return dataListSetting;
}

