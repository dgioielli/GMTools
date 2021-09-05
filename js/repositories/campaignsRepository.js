const keyCampaign = "Campaigns";

export const getAllCampaigns = () => {
    const campaigns = JSON.parse(localStorage.getItem(keyCampaign)) || [];
    return campaigns;
}

export const addNewCampaign = (campaign) => {
    const campaigns = getAllCampaigns();
    campaigns.push(campaign);
    saveCampaigns(campaigns);
}

const saveCampaigns = (campaigns) => {
    campaigns.sort((a, b) => {
        return (a.name > b.name) ? 1 : -1;
    });
    localStorage.setItem(keyCampaign, JSON.stringify(campaigns));
}

export const editSavedCampaign = (campaignEdited) => {
    const campaigns = getAllCampaigns();
    let index = -1;
    for (let i = 0; i < campaigns.length; i++) {
        const campaign = campaigns[i];
        if (campaign.id == campaignEdited.id) {
            index = i;
            break;
        }
    }
    if (index != -1) campaigns[index] = campaignEdited;
    else campaigns.push(campaignEdited);
    // console.log(campaignEdited);
    // console.log(campaigns);
    saveCampaigns(campaigns);
}

export const getCampaignsBySetting = (setting) => {
    const campaigns = getAllCampaigns();
    const result = [];
    for (let i = 0; i < campaigns.length; i++) {
        const campaign = campaigns[i];
        if (campaign.setting == setting)
            result.push(campaign);
    }
    return result;
}

export const getCampaignByName = (name) => {
    const campaigns = getAllCampaigns();
    for (let i = 0; i < campaigns.length; i++) {
        const campaign = campaigns[i];
        if (campaign.name == name)
            return campaign;
    }
    return null;
}

export const getCampaignById = (id) => {
    const campaigns = getAllCampaigns();
    for (let i = 0; i < campaigns.length; i++) {
        const campaign = campaigns[i];
        // console.log(campaign.id == id);
        if (campaign.id == id) {
            return campaign;
        }
    }
    // console.log("chegou aqui!");
    return null;
}

export const getAllSettings = () => {
    const campaigns = getAllCampaigns();
    const result = [];
    campaigns.forEach(campaign => {
        if (result.indexOf(campaign.setting) == -1)
            result.push(campaign.setting);
    });
    return result;
}