export const getAllCampaigns = () => {
    const campaigns = [
        {
            name: "Teste 1",
            setting: "Cenário 1",
        },
        {
            name: "Teste 2",
            setting: "Cenário 2",
        },
        {
            name: "Teste 3",
            setting: "Cenário 1",
        },
        {
            name: "Teste 4",
            setting: "Cenário 2",
        },
        {
            name: "Teste 5",
            setting: "Cenário 3",
        },
        {
            name: "Teste 6",
            setting: "Cenário 1",
        },
        {
            name: "Teste 7",
            setting: "Cenário 2",
        },
    ];
    return campaigns;
}

export const getCampaignsBySetting = (setting) => {
    const campaigns = getAllCampaigns();
    const result = [];
    campaigns.forEach(campaign => {
        result.push(campaign);
    });
    return result;
}