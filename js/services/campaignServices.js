import { errorKeys } from "../keys/errorKeys.js";
import { searchKeys } from "../keys/htmlKeys.js";
import { addNewCampaign, editSavedCampaign, getAllCampaigns, getCampaignById, getCampaignByName } from "../repositories/campaignsRepository.js"
import { isSettingCollapsed } from "./settingsServices.js";

export const atualizeCampaignMenuItens = () => {
    const campaigns = getAllCampaigns();
    const collapsedCampaigns = [];
    const expandedCampaigns = [];
    campaigns.forEach(campaign => {
        if (isSettingCollapsed(campaign.setting))
            collapsedCampaigns.push(campaign);
        else
            expandedCampaigns.push(campaign);
    });
    console.log(collapsedCampaigns);
    // console.log(expandedCampaigns);
    const liCampaigns = document.querySelectorAll(".campaign-menu-item");
    collapsedCampaigns.forEach(campaign => {
        liCampaigns.forEach(li => {
            if (li.textContent == campaign.name)
                li.classList.add("hidden-menu-item");
        });
    });

    expandedCampaigns.forEach(campaign => {
        liCampaigns.forEach(li => {
            if (li.textContent == campaign.name)
                li.classList.remove("hidden-menu-item");
        });
    });
}

export const addCampaign = (campaign) => {
    const erros = validateCampaign(campaign);
    // console.log(erros);
    if (erros.length > 0) return erros;
    addNewCampaign(campaign.getJsonData());
    return erros;
}

const validateCampaign = (campaign) => {
    const erros = [];
    if (campaign.name == "")
        erros.push(errorKeys.newCampaignNameError);
    if (campaign.setting == "")
        erros.push(errorKeys.newCampaignSettingError);
    const campaignExisting = getCampaignByName(campaign.name);
    // console.log(campaignExisting);
    // if (campaignExisting != null)
    //     console.log(campaignExisting.id != campaign.id);
    if (campaignExisting != null && campaignExisting.id != campaign.id)
        erros.push(errorKeys.newCampaignExistingError);
    return erros;
}

export const editCampaign = (campaign) => {
    const erros = validateCampaign(campaign);
    // console.log(erros);
    if (erros.length > 0) return erros;
    editSavedCampaign(campaign);
    return erros;
}

export const getActiveCampaign = () => {
    const urlString = window.location.href;
    const url = new URL(urlString);
    const campaignId = url.searchParams.get(searchKeys.campaign);
    //console.log(campaignId);
    const campaign = getCampaignById(campaignId);
    //console.log(campaign);
    return campaign;
}