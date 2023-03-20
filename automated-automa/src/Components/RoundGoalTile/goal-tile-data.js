const eggIcon = {
  src: 'src/Assets/icons/Egg.png',
  alt: 'Eggs'
}

const birdIcon = {
  src: 'src/Assets/icons/Bird.png',
  alt: 'Birds'
}

const tuckedBirdIcon = {
  src: 'src/Assets/icons/Flocking-bird.png',
  alt: 'Birds with tucked cards'
}

const cardIcon = {
  src: 'src/Assets/icons/Card.png',
  alt: 'Cards'
}

const forestIcon = {
  src: 'src/Assets/icons/Forest.png',
  alt: 'Forest'
}

const grasslandIcon = {
  src: 'src/Assets/icons/Grassland.png',
  alt: 'Grassland'
}

const wetlandIcon = {
  src: 'src/Assets/icons/Wetland.png',
  alt: 'Wetland'
}

const groundNestIcon = {
  src: 'src/Assets/icons/Ground-nest.png',
  alt: 'Ground Nest'
}

const platformNestIcon = {
  src: 'src/Assets/icons/Platform.png',
  alt: 'Platform Nest'
}

const bowlNestIcon = {
  src: 'src/Assets/icons/Bowl-nest.png',
  alt: 'Bowl Nest'
}

const cavityNestIcon = {
  src: 'src/Assets/icons/Cavity.png',
  alt: 'Cavity Nest'
}

const wildFoodIcon = {
  src: 'src/Assets/icons/AnyFood.png',
  alt: 'Food'
}

export const vanillaGoalTileData = [
  {
    id: 0,
    icon1: [eggIcon],
    text2: 'IN',
    icon2: [forestIcon]
  },
  {
    id: 1,
    icon1: [eggIcon],
    text2: 'IN',
    icon2: [grasslandIcon]
  },
  {
    id: 2,
    icon1: [eggIcon],
    text2: 'IN',
    icon2: [wetlandIcon]
  },
  {
    id: 0,
    icon1: [birdIcon],
    text2: 'IN',
    icon2: [forestIcon]
  },
  {
    id: 1,
    icon1: [birdIcon],
    text2: 'IN',
    icon2: [grasslandIcon]
  },
  {
    id: 2,
    icon1: [birdIcon],
    text2: 'IN',
    icon2: [wetlandIcon]
  },
  {
    id: 3,
    text1: 'SETS OF',
    icon1: [eggIcon, eggIcon, eggIcon],
    text2: 'IN',
    icon2: [wetlandIcon, grasslandIcon, forestIcon]
  },
  {
    id: 3,
    text1: 'TOTAL',
    icon1: [birdIcon]
  },
  {
    id: 4,
    icon1: [eggIcon],
    text2: 'IN',
    icon2: [groundNestIcon]
  },
  {
    id: 5,
    icon1: [eggIcon],
    text2: 'IN',
    icon2: [cavityNestIcon]
  },
  {
    id: 6,
    icon1: [eggIcon],
    text2: 'IN',
    icon2: [bowlNestIcon]
  },
  {
    id: 7,
    icon1: [eggIcon],
    text2: 'IN',
    icon2: [platformNestIcon]
  },
  {
    id: 4,
    icon1: [groundNestIcon, birdIcon],
    text2: 'WITH',
    icon2: [eggIcon]
  },
  {
    id: 5,
    icon1: [cavityNestIcon, birdIcon],
    text2: 'WITH',
    icon2: [eggIcon]
  },
  {
    id: 6,
    icon1: [bowlNestIcon, birdIcon],
    text2: 'WITH',
    icon2: [eggIcon]
  },
  {
    id: 7,
    icon1: [platformNestIcon, birdIcon],
    text2: 'WITH',
    icon2: [eggIcon]
  }
]

export const europeGoalTileData = [
  {
    id: 8,
    text1: 'FOOD COST OF PLAYED',
    icon1: [birdIcon]
  },
  {
    id: 8,
    icon1: [tuckedBirdIcon],
    text2: 'BIRDS WITH TUCKED CARDS'
  },
  {
    id: 9,
    text1: 'FILLED COLUMNS'
  },
  {
    id: 9,
    icon1: [birdIcon],
    text2: 'IN ONE ROW'
  },
  {
    id: 10,
    icon1: [birdIcon],
    text2: 'WORTH',
    icon2: [
      {
        src: 'src/Assets/icons/OverFourPoints.png',
        alt: 'More Than Four Points'
      }
    ]
  },
  {
    id: 10,
    icon1: [birdIcon],
    text2: 'WITH NO',
    icon2: [eggIcon]
  },
  {
    id: 11,
    icon1: [wildFoodIcon],
    text2: 'IN PERSONAL SUPPLY'
  },
  {
    id: 11,
    icon1: [cardIcon],
    text2: 'IN HAND'
  },
  {
    id: 12,
    text1: 'BROWN POWERS',
    background: 'src/Assets/icons/BrownBackground.png'
  },
  {
    id: 12,
    text1: 'WHITE & NO POWERS',
    background: 'src/Assets/icons/WhiteBackground.png'
  }
]
