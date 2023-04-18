const cookieStorage = {
    getItem: (key) => {
        const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value}), {});
        return cookies[key];
    },
    setItem: (key, value) => {
        document.cookie = `${key}=${value}`;
    }
}

const storeType = cookieStorage;
const consetPropertyName = 'abalo_consent';

const shouldShowPopup = () => !storeType.getItem(consetPropertyName);
const saveToStorage = () => storeType.setItem(consetPropertyName, true);

window.onload = () => {
    if (shouldShowPopup()) {
        const consent = confirm('ACCEPT COOKIE?');
        if (consent) {
            saveToStorage();
        }
    }
}
