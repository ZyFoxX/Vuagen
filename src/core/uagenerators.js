const { BROWSERS, MOBILE_DEVICES, OS } = require('./constants');
const { getRandomInt, getRandomItem } = require('../utils/random');

function generateWebKitVersion() {
    return `${getRandomInt(537, 610)}.${getRandomInt(36, 99)}`;
}

function generateBuild() {
    return `${getRandomInt(10, 20)}${getRandomInt(100, 999)}${getRandomInt(100, 999)}`;
}

function generateOS(deviceType, specificOs = null) {
    if (deviceType === 'mobile') {
        const osType = specificOs || (Math.random() > 0.5 ? 'android' : 'ios');
        
        if (osType === 'android') {
            const device = getRandomItem(MOBILE_DEVICES.android);
            const androidVersion = getRandomItem(OS.android);
            return `${androidVersion}; ${device.model}`;
        } else {
            const device = getRandomItem(MOBILE_DEVICES.ios);
            const iosVersion = getRandomItem(OS.ios);
            return `${device.name}; CPU iPhone OS ${iosVersion} like Mac OS X`;
        }
    } else {
        const osType = specificOs || getRandomItem(['windows', 'macos', 'linux']);
        switch (osType) {
            case 'windows':
                return `Windows NT ${getRandomItem(OS.windows)}`;
            case 'macos':
                return getRandomItem(OS.macos);
            case 'linux':
                return getRandomItem(OS.linux);
            default:
                return `Windows NT ${getRandomItem(OS.windows)}`;
        }
    }
}

const UAGenerators = {
    chrome: (deviceType, specificOs) => {
        const os = generateOS(deviceType, specificOs);
        const version = BROWSERS.chrome.versionPattern(getRandomInt(BROWSERS.chrome.versions.min, BROWSERS.chrome.versions.max));
        
        if (deviceType === 'mobile') {
            return `Mozilla/5.0 (${os}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${version} Mobile Safari/537.36`;
        }
        return `Mozilla/5.0 (${os}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${version} Safari/537.36`;
    },

    firefox: (deviceType, specificOs) => {
        const os = generateOS(deviceType, specificOs);
        const version = BROWSERS.firefox.versionPattern(getRandomInt(BROWSERS.firefox.versions.min, BROWSERS.firefox.versions.max));
        
        if (deviceType === 'mobile') {
            return `Mozilla/5.0 (${os}; Mobile; rv:${version}) Gecko/${version} Firefox/${version}`;
        }
        return `Mozilla/5.0 (${os}; rv:${version}) Gecko/20100101 Firefox/${version}`;
    },

    safari: (deviceType, specificOs) => {
        const osType = deviceType === 'mobile' ? 'ios' : 'macos';
        const os = generateOS(deviceType, specificOs || osType);
        const webkitVersion = generateWebKitVersion();
        const version = BROWSERS.safari.versionPattern(getRandomInt(BROWSERS.safari.versions.min, BROWSERS.safari.versions.max));
        
        if (deviceType === 'mobile') {
            const build = generateBuild();
            return `Mozilla/5.0 (${os}) AppleWebKit/${webkitVersion} (KHTML, like Gecko) Version/${version} Mobile/${build} Safari/${webkitVersion}`;
        }
        return `Mozilla/5.0 (${os}) AppleWebKit/${webkitVersion} (KHTML, like Gecko) Version/${version} Safari/${webkitVersion}`;
    },

    edge: (deviceType, specificOs) => {
        const os = generateOS(deviceType, specificOs);
        const chromeVersion = BROWSERS.chrome.versionPattern(getRandomInt(BROWSERS.chrome.versions.min, BROWSERS.chrome.versions.max));
        const version = BROWSERS.edge.versionPattern(getRandomInt(BROWSERS.edge.versions.min, BROWSERS.edge.versions.max));
        
        if (deviceType === 'mobile') {
            return `Mozilla/5.0 (${os}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeVersion} Mobile Safari/537.36 Edg/${version}`;
        }
        return `Mozilla/5.0 (${os}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeVersion} Safari/537.36 Edg/${version}`;
    },

    opera: (deviceType, specificOs) => {
        const os = generateOS(deviceType, specificOs);
        const chromeVersion = BROWSERS.chrome.versionPattern(getRandomInt(BROWSERS.chrome.versions.min, BROWSERS.chrome.versions.max));
        const version = BROWSERS.opera.versionPattern(getRandomInt(BROWSERS.opera.versions.min, BROWSERS.opera.versions.max));
        
        if (deviceType === 'mobile') {
            return `Mozilla/5.0 (${os}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeVersion} Mobile Safari/537.36 OPR/${version}`;
        }
        return `Mozilla/5.0 (${os}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeVersion} Safari/537.36 OPR/${version}`;
    },

    yandex: (deviceType, specificOs) => {
        const os = generateOS(deviceType, specificOs);
        const chromeVersion = BROWSERS.chrome.versionPattern(getRandomInt(BROWSERS.chrome.versions.min, BROWSERS.chrome.versions.max));
        const version = BROWSERS.yandex.versionPattern(getRandomInt(BROWSERS.yandex.versions.min, BROWSERS.yandex.versions.max));
        
        if (deviceType === 'mobile') {
            return `Mozilla/5.0 (${os}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeVersion} Mobile Safari/537.36 YaBrowser/${version}`;
        }
        return `Mozilla/5.0 (${os}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeVersion} Safari/537.36 YaBrowser/${version}`;
    }
};

function generateRandomUA(options = {}) {
    const browserTypes = Object.keys(UAGenerators);
    const type = options.browser || getRandomItem(browserTypes);
    const deviceType = options.deviceType || (getRandomInt(0, 1) === 0 ? 'desktop' : 'mobile');
    
    if (UAGenerators[type]) {
        return UAGenerators[type](deviceType, options.specificOs);
    }

    return UAGenerators.chrome(deviceType, options.specificOs);
}

module.exports = { UAGenerators, generateRandomUA, generateOS, generateWebKitVersion, generateBuild };