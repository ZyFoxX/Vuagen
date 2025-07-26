const Formatters = {
    txt: (userAgents) => userAgents.join('\n'),
    json: (userAgents) => JSON.stringify(userAgents, null, 2)
};

module.exports = Formatters;