import { eventKeys } from "../keys/eventKeys.js";
import { dataKeys } from "../keys/htmlKeys.js";
import { atualizeCampaignMenuItens, getActiveCampaign } from "../services/campaignServices.js";
import { setActiceCampaign } from "../services/routerServices.js";
import { isSettingCollapsed, setCollapsedSetting } from "../services/settingsServices.js";

export const loadCampaignMenu = (campaigns) => {
    const settings = [];
    campaigns.forEach(campaign => {
        if (settings.indexOf(campaign.setting) == -1) settings.push(campaign.setting);
    });

    const menuList = document.querySelector("[data-campaign-menu]");
    menuList.innerHTML = `<li class="campaign-menu-title">Campanhas:</li>`;

    settings.forEach(setting => {
        menuList.appendChild(SettingsMenuItem({ name: setting }));
        campaigns.forEach(campaign => {
            if (setting == campaign.setting)
                menuList.appendChild(CampaignMenuItem(campaign));
        });
    });
}

export const CampaignMenuItem = (campaign) => {
    //console.log(campaign.name);
    const campaignItem = document.createElement("li");
    campaignItem.classList.add("campaign-menu-item");
    const campaignActive = getActiveCampaign();
    // console.log(campaignActive);
    let disabled = "";
    if (campaignActive != null)
        if (campaign.name == campaignActive.name)
            disabled = " disabled";
    campaignItem.innerHTML = `<button ${dataKeys.campaignMenuItemButton}${disabled}>${campaign.name}</button>`;
    const button = campaignItem.querySelector(`[${dataKeys.campaignMenuItemButton}]`);
    button.addEventListener(eventKeys.click, () => {
        setActiceCampaign(campaign.id);
    });
    return campaignItem;
}

export const SettingsMenuItem = (setting) => {
    const settingItem = document.createElement("li");
    settingItem.classList.add("setting-menu-item");
    settingItem.setAttribute("tabindex", "0");
    if (isSettingCollapsed(setting.name))
        settingItem.classList.add("collapsed");
    else
        settingItem.classList.add("expanded");
    settingItem.addEventListener("click", () => changeSettingMenuItemStatus(setting, settingItem));
    settingItem.innerHTML = `${setting.name}`;
    return settingItem;
}

const changeSettingMenuItemStatus = (setting, settingItem) => {
    setCollapsedSetting(setting.name);
    const expanded = settingItem.classList.contains("expanded");
    let classToAdd = "";
    let classToDel = "";
    if (expanded) {
        classToAdd = "collapsed";
        classToDel = "expanded";
    } else {
        classToAdd = "expanded";
        classToDel = "collapsed";
    }
    settingItem.classList.remove(classToDel);
    settingItem.classList.add(classToAdd);
    atualizeCampaignMenuItens();
}