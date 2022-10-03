export const TYPE_COUNTER = {
  Crystal: {
    damageGood: ['Mental', 'Electric'],
    resGood: ['Mental', 'Electric', 'Toxic'],
    damageBad: ['Fire', 'Earth'],
    resBad: ['Melee', 'Fire', 'Earth'],
  },
  Electric: {
    damageGood: ['Mental', 'Water', 'Digital', 'Wind'],
    resGood: ['Electric', 'Wind'],
    damageBad: ['Crystal', 'Nature', 'Earth', 'Electric'],
    resBad: ['Earth', 'Crystal'],
  },
  Mental: {
    damageGood: ['Neutral', 'Melee'],
    resGood: ['Neutral', 'Melee'],
    damageBad: ['Crystal'],
    resBad: ['Crystal', 'Digital', 'Electric'],
  },
  Toxic: {
    damageGood: ['Water', 'Nature'],
    resGood: ['Water', 'Nature', 'Toxic'],
    damageBad: ['Crystal', 'Earth', 'Digital', 'Toxic'],
    resBad: ['Wind'],
  },
  Digital: {
    damageGood: ['Mental', 'Digital', 'Melee'],
    resGood: ['Toxic'],
    damageBad: [],
    resBad: ['Electric', 'Water', 'Digital'],
  },
  Fire: {
    damageGood: ['Nature', 'Crystal'],
    resGood: ['Nature', 'Fire', 'Crystal'],
    damageBad: ['Fire', 'Water', 'Earth'],
    resBad: ['Water', 'Earth'],
  },
  Nature: {
    damageGood: ['Water', 'Earth'],
    resGood: ['Water', 'Nature', 'Earth', 'Electric'],
    damageBad: ['Fire', 'Nature', 'Toxic'],
    resBad: ['Fire', 'Toxic'],
  },
  Water: {
    damageGood: ['Fire', 'Earth', 'Digital'],
    resGood: ['Earth', 'Fire', 'Water'],
    damageBad: ['Toxic', 'Water', 'Nature'],
    resBad: ['Nature', 'Electric', 'Toxic'],
  },
  Earth: {
    damageGood: ['Crystal', 'Fire', 'Electric'],
    resGood: ['Crystal', 'Fire', 'Electric', 'Toxic'],
    damageBad: ['Nature', 'Water', 'Wind'],
    resBad: ['Melee', 'Nature', 'Water'],
  },
  Melee: {
    damageGood: ['Earth', 'Crystal'],
    resGood: ['Melee'],
    damageBad: ['Mental', 'Melee'],
    resBad: ['Mental', 'Digital'],
  },
  Neutral: {
    damageGood: [],
    resGood: [],
    damageBad: ['Mental'],
    resBad: ['Mental'],
  },
  Wind: {
    damageGood: ['Toxic'],
    resGood: ['Wind', 'Earth'],
    damageBad: ['Electric', 'Wind'],
    resBad: ['Electric'],
  },
};
