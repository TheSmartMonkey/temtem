export const TYPE_COUNTER = {
    crystal: {
        damageGood: ['mental', 'electric'],
        resGood: ['mental', 'electric', 'toxic'],
        damageBad: ['fire', 'earth'],
        resBad: ['melee', 'fire', 'earth']
    },
    electric: {
        damageGood: ['mental', 'water', 'digital', 'wind'],
        resGood: ['electric', 'wind'],
        damageBad: ['crystal', 'nature', 'earth', 'electirc'],
        resBad: ['earth', 'crystal']
    },
    mental: {
        damageGood: ['neutral', 'melee'],
        resGood: ['neutral', 'melee'],
        damageBad: ['crystal'],
        resBad: ['crystal', 'digital', 'electric']
    },
    toxic: {
        damageGood: ['water', 'nature'],
        resGood: ['water', 'nature', 'toxic'],
        damageBad: ['crystal', 'earth', 'digital', 'toxic'],
        resBad: ['wind']
    },
    digital: {
        damageGood: ['mental', 'digital', 'melee'],
        resGood: ['toxic'],
        damageBad: [],
        resBad: ['electric', 'water', 'digital']
    },
    fire: {
        damageGood: ['nature', 'crystal'],
        resGood: ['nature', 'fire', 'crystal'],
        damageBad: ['fire', 'water', 'earth'],
        resBad: ['water', 'earth']
    },
    nature: {
        damageGood: ['water', 'earth'],
        resGood: ['water', 'nature', 'earth', 'electric'],
        damageBad: ['fire', 'nature', 'toxic'],
        resBad: ['fire', 'toxic']
    },
    water: {
        damageGood: ['fire', 'earth', 'digital'],
        resGood: ['earth', 'fire', 'water'],
        damageBad: ['toxic', 'water', 'nature'],
        resBad: ['nature', 'electric', 'toxic']
    },
    earth: {
        damageGood: ['crystal', 'fire', 'electric'],
        resGood: ['crystal', 'fire', 'electric', 'toxic'],
        damageBad: ['nature', 'water', 'wind'],
        resBad: ['melee', 'nature', 'water']
    },
    melee: {
        damageGood: ['earth', 'crystal'],
        resGood: ['melee'],
        damageBad: ['mental', 'melee'],
        resBad: ['mental', 'digital']
    },
    neutral: {
        damageGood: [],
        resGood: [],
        damageBad: ['mental'],
        resBad: ['mental']
    },
    wind: {
        damageGood: ['toxic'],
        resGood: ['wind', 'earth'],
        damageBad: ['electric', 'wind'],
        resBad: ['electric']
    }
};
