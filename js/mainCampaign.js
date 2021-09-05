import { CampaignMenuItem, loadCampaignMenu, SettingsMenuItem } from "./components/CampaignMenu.js";
import { atualizeCampaignPage } from "./components/campaignPage.js";
import { PopupNewCampaign } from "./components/popupNewCampaign.js";
import { classKeys } from "./keys/cssKeys.js";
import { Campaign } from "./models/Campaign.js";
import { getAllCampaigns } from "./repositories/campaignsRepository.js";


atualizeCampaignPage();

const campaigns = getAllCampaigns();
loadCampaignMenu(campaigns);

const divForm = document.querySelector("[data-popup-new-campaign]");
divForm.appendChild(PopupNewCampaign());

const newCampaignButton = document.querySelector("[data-new-campaign-button]");
newCampaignButton.addEventListener("click", () => {
    divForm.classList.remove(classKeys.hiddenPopup);
});

// function openForm() {
//     console.log("Clicou!");
//     document.getElementById("myForm").style.display = "block";
// }

// const btn = document.querySelector("[data-open-form]");
// btn.addEventListener("click", openForm);

// function closeForm() {
//     document.getElementById("myForm").style.display = "none";
// }

// const urlString = window.location.href;
// console.log(urlString);
// const url = new URL(urlString);
// console.log(url);
// console.log(url.searchParams.get("c"));
// console.log(url.searchParams.get("b"));

// const date = Date(Date.now());
// console.log(date);
// const day = date.getDay();

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

