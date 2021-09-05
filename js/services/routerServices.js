import { searchKeys } from "../keys/htmlKeys.js";

export const setActiceCampaign = (id) => {
    const urlString = window.location.href;
    const url = new URL(urlString);
    url.searchParams.set(searchKeys.campaign, id);
    url.searchParams.set(searchKeys.page, 1);
    window.location = url.toString();
}