import Egg from '../../Assets/icons/Egg.png'
import Bird from '../../Assets/icons/Bird.png'
import FlockingBird from '../../Assets/icons/Flocking-bird.png'
import Card from '../../Assets/icons/Card.png'
import Forest from '../../Assets/icons/Forest.png'
import Grassland from '../../Assets/icons/Grassland.png'
import Wetland from '../../Assets/icons/Wetland.png'
import GroundNest from '../../Assets/icons/Ground-nest.png'
import Platform from '../../Assets/icons/Platform.png'
import BowlNest from '../../Assets/icons/Bowl-nest.png'
import Cavity from '../../Assets/icons/Cavity.png'
import Food from '../../Assets/icons/AnyFood.png'
import OverFourPoints from '../../Assets/icons/OverFourPoints.png'
import BrownBackground from '../../Assets/icons/BrownBackground.png'
import WhiteBackground from '../../Assets/icons/WhiteBackground.png'

const eggIcon = {
  src: Egg,
  alt: 'Eggs'
}

const birdIcon = {
  src: Bird,
  alt: 'Birds'
}

const tuckedBirdIcon = {
  src: FlockingBird,
  alt: 'Birds with tucked cards'
}

const cardIcon = {
  src: Card,
  alt: 'Cards'
}

const forestIcon = {
  src: Forest,
  alt: 'Forest'
}

const grasslandIcon = {
  src: Grassland,
  alt: 'Grassland'
}

const wetlandIcon = {
  src: Wetland,
  alt: 'Wetland'
}

const groundNestIcon = {
  src: GroundNest,
  alt: 'Ground Nest'
}

const platformNestIcon = {
  src: Platform,
  alt: 'Platform Nest'
}

const bowlNestIcon = {
  src: BowlNest,
  alt: 'Bowl Nest'
}

const cavityNestIcon = {
  src: Cavity,
  alt: 'Cavity Nest'
}

const wildFoodIcon = {
  src: Food,
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
        src: OverFourPoints,
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
    background: BrownBackground
  },
  {
    id: 12,
    text1: 'WHITE & NO POWERS',
    background: WhiteBackground
  }
]
