import { getAllCampaigns } from "../repositories/campaignsRepository.js"
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
    console.log(expandedCampaigns);
    const liCampaigns = document.querySelectorAll(".campaign-menu-item");
    collapsedCampaigns.forEach(campaign => {
        liCampaigns.forEach(li => {
            if (li.textContent.includes(campaign.name))
                li.classList.add("hidden-menu-item");
        });
    });

    expandedCampaigns.forEach(campaign => {
        liCampaigns.forEach(li => {
            if (li.textContent.includes(campaign.name))
                li.classList.remove("hidden-menu-item");
        });
    });
}