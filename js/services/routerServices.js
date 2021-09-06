import { searchKeys } from "../keys/htmlKeys.js";

export const setActiceCampaign = (id, newTab = false) => {
    const urlString = window.location.href;
    const url = new URL(urlString);
    url.searchParams.set(searchKeys.campaign, id);
    url.searchParams.set(searchKeys.page, 1);
    if (newTab)
        window.open(url.toString(), '_blank');
    else
        window.location = url.toString();
}

export const getCardPageIndex = () => {
    const urlString = window.location.href;
    const url = new URL(urlString);
    const pageIndex = url.searchParams.get(searchKeys.page);
    return pageIndex;
}