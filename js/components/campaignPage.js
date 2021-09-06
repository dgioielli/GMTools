import { getDataCardPageButton } from "../keys/cardPageKeys.js";
import { classKeys } from "../keys/cssKeys.js";
import { eventKeys } from "../keys/eventKeys.js";
import { attributeKeys, dataKeys } from "../keys/htmlKeys.js";
import { getAllCampaigns } from "../repositories/campaignsRepository.js";
import { editCampaign, getActiveCampaign } from "../services/campaignServices.js"
import { getCardPageIndex } from "../services/routerServices.js";
import { loadCampaignMenu } from "./CampaignMenu.js";

export const atualizeCampaignPage = () => {
    const campaign = getActiveCampaign();
    if (campaign == null) return;

    const divPage = document.querySelector(`[${dataKeys.campaignPage}]`);
    divPage.classList.remove(classKeys.hiddenPage);

    const buttonPage = document.querySelector(`[${getDataCardPageButton(getCardPageIndex())}]`);
    buttonPage.setAttribute(attributeKeys.disabled, "");

    loadCampaignHeader(campaign);
}

const loadCampaignHeader = (campaign) => {
    const h1Title = document.querySelector(`[${dataKeys.campaignNameTitle}]`);
    h1Title.setAttribute(attributeKeys.value, campaign.name);
    h1Title.addEventListener(eventKeys.lostFocus, (event) => {
        const newName = event.target.value;
        if (campaign.name == newName) return;
        campaign.name = newName;
        const erros = editCampaign(campaign);
        h1Title.classList.remove(classKeys.errorText);
        if (erros.length > 0)
            h1Title.classList.add(classKeys.errorText);
        else
            loadCampaignMenu(getAllCampaigns());
    });

    const h2Title = document.querySelector(`[${dataKeys.campaignSettingTitle}]`);
    h2Title.setAttribute(attributeKeys.value, campaign.setting);
    h2Title.addEventListener(eventKeys.lostFocus, (event) => {
        const newSetting = event.target.value;
        if (campaign.setting == newSetting) return;
        campaign.setting = newSetting;
        const erros = editCampaign(campaign);
        h1Title.classList.remove(classKeys.errorText);
        if (erros.length > 0)
            h1Title.classList.add(classKeys.errorText);
        else
            loadCampaignMenu(getAllCampaigns());
    });
}