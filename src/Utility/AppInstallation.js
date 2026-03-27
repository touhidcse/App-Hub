// get installed apps
export const getInstalledApp = () => {
    const installedAppSTR = localStorage.getItem("installedList");
    return installedAppSTR ? JSON.parse(installedAppSTR) : [];
};

// add app
export const addToInstalledDB = (id) => {
    const installedAppData = getInstalledApp();

    if (installedAppData.includes(id)) {
        return false; // already installed
    } else {
        installedAppData.push(id);
        localStorage.setItem("installedList", JSON.stringify(installedAppData));
        return true;
    }
};

// remove app
export const removeFromInstalledDB = (id) => {
    const installedAppData = getInstalledApp();
    const updated = installedAppData.filter(appId => appId !== id);
    localStorage.setItem("installedList", JSON.stringify(updated));
};