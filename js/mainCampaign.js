import { CampaignMenuItem, loadCampaignMenu, SettingsMenuItem } from "./components/CampaignMenu.js";
import { getAllCampaigns } from "./repositories/campaignsRepository.js";

const menuList = document.querySelector("[data-campaign-menu]");

const campaigns = getAllCampaigns();

loadCampaignMenu(campaigns);

// menuList.appendChild(CampaignMenuItem({ name: "Teste 1" }));
// menuList.appendChild(CampaignMenuItem({ name: "Teste 1" }));
// menuList.appendChild(CampaignMenuItem({ name: "Teste 1" }));
// menuList.appendChild(CampaignMenuItem({ name: "Teste 1" }));
// menuList.appendChild(CampaignMenuItem({ name: "Teste 1" }));
// menuList.appendChild(CampaignMenuItem({ name: "Teste 1" }));
// menuList.appendChild(CampaignMenuItem({ name: "Teste 1" }));


// menuList.appendChild(SettingsMenuItem({ name: "Teste 1" }));
// menuList.appendChild(CampaignMenuItem({ name: "Teste 1" }));
// menuList.appendChild(CampaignMenuItem({ name: "Teste 1" }));