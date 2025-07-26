const BROWSERS = {
  chrome: {
    name: 'Chrome',
    versions: { min: 80, max: 120 },
    versionPattern: (v) => `${v}.0.${getRandomInt(1000, 9999)}.${getRandomInt(10, 999)}`
  },
  firefox: {
    name: 'Firefox',
    versions: { min: 70, max: 120 },
    versionPattern: (v) => `${v}.0`
  },
  safari: {
    name: 'Safari',
    versions: { min: 10, max: 17 },
    versionPattern: (v) => `${v}.${getRandomInt(0, 6)}`
  },
  edge: {
    name: 'Edge',
    versions: { min: 80, max: 120 },
    versionPattern: (v) => `${v}.0.${getRandomInt(100, 999)}.${getRandomInt(10, 99)}`
  },
  opera: {
    name: 'Opera',
    versions: { min: 60, max: 90 },
    versionPattern: (v) => `${v}.0.${getRandomInt(1000, 9999)}.${getRandomInt(10, 99)}`
  },
  yandex: {
    name: 'Yandex Browser',
    versions: { min: 20, max: 23 },
    versionPattern: (v) => `${v}.${getRandomInt(0, 9)}.${getRandomInt(1000, 9999)}.${getRandomInt(10, 99)}`
  }
};

const VALID_BROWSERS = [...Object.keys(BROWSERS), 'random'];

const MOBILE_DEVICES = {
  android: [
    { name: 'Google Pixel 7', model: 'Pixel 7' },
    { name: 'Google Pixel 6', model: 'Pixel 6' },
    { name: 'Samsung Galaxy S23', model: 'SM-S911B' },
    { name: 'Samsung Galaxy S22', model: 'SM-S901B' },
    { name: 'OnePlus 11', model: 'OnePlus 11' },
    { name: 'Xiaomi 13', model: 'M2102J20SG' },
    { name: 'Oppo Find X5', model: 'CPH2307' },
    { name: 'Motorola Edge 30', model: 'XT2201-1' }
  ],
  ios: [
    { name: 'iPhone 14 Pro', model: 'iPhone15,2' },
    { name: 'iPhone 14', model: 'iPhone14,7' },
    { name: 'iPhone 13 Pro', model: 'iPhone14,2' },
    { name: 'iPhone 13', model: 'iPhone14,5' },
    { name: 'iPhone 12', model: 'iPhone13,2' },
    { name: 'iPad Pro', model: 'iPad8,9' },
    { name: 'iPad Air', model: 'iPad13,17' },
    { name: 'iPad mini', model: 'iPad14,1' }
  ]
};

const OS = {
  windows: [
    '10.0; Win64; x64',
    '10.0; WOW64',
    '11.0; Win64; x64',
    '6.3; Win64; x64',
    '6.3; WOW64',
    '6.2; Win64; x64',
    '6.1; Win64; x64'
  ],
  macos: [
    'Macintosh; Intel Mac OS X 10_15_7',
    'Macintosh; Intel Mac OS X 10_14_6',
    'Macintosh; Intel Mac OS X 10_13_6',
    'Macintosh; Apple M1 Mac OS X 12_5',
    'Macintosh; Apple M2 Mac OS X 13_2'
  ],
  linux: [
    'X11; Linux x86_64',
    'X11; Ubuntu; Linux x86_64',
    'X11; Fedora; Linux x86_64',
    'X11; Debian; Linux x86_64',
    'X11; Arch Linux; Linux x86_64',
    'X11; CentOS; Linux x86_64'
  ],
  android: [
    'Android 13',
    'Android 12',
    'Android 11',
    'Android 10',
    'Android 9'
  ],
  ios: [
    '16_5',
    '16_4',
    '16_3',
    '16_2',
    '16_1',
    '16_0',
    '15_7',
    '15_6',
    '15_5'
  ]
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = { BROWSERS, VALID_BROWSERS, MOBILE_DEVICES, OS };