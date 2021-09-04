const keyCollapsedSettings = "collapsedSettings";

export const isSettingCollapsed = (name) => {
    const collapsedSettings = JSON.parse(sessionStorage.getItem(keyCollapsedSettings)) || [];
    //console.log(collapsedSettings);
    return collapsedSettings.indexOf(name) != -1;
}

export const setCollapsedSetting = (name) => {
    const collapsedSettings = JSON.parse(sessionStorage.getItem(keyCollapsedSettings)) || [];
    const index = collapsedSettings.indexOf(name);
    if (index == -1)
        collapsedSettings.push(name);
    else
        collapsedSettings.splice(index, 1);
    sessionStorage.setItem(keyCollapsedSettings, JSON.stringify(collapsedSettings));
}