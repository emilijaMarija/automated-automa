const eggIcon = {
    src: 'src/Assets/icons/Egg.png',
    alt: 'Eggs',
}

const birdIcon = {
    src: 'src/Assets/icons/Bird.png',
    alt: 'Birds',
}

const forestIcon = {
    src: 'src/Assets/icons/Forest.png',
    alt: 'Forest',
}

const grasslandIcon = {
    src: 'src/Assets/icons/Grassland.png',
    alt: 'Grassland',
}

const wetlandIcon = {
    src: 'src/Assets/icons/Wetland.png',
    alt: 'Wetland',
}

const groundNestIcon = {
    src: 'src/Assets/icons/Ground-nest.png',
    alt: 'Ground Nest',
}

const platformNestIcon = {
    src: 'src/Assets/icons/Platform.png',
    alt: 'Platform Nest',
}

const bowlNestIcon = {
    src: 'src/Assets/icons/Bowl-nest.png',
    alt: 'Bowl Nest',
}

const cavityNestIcon = {
    src: 'src/Assets/icons/Cavity.png',
    alt: 'Cavity Nest',
}

export const GoalTileData = [
    {
        icon1: [eggIcon],
        text2: 'IN',
        icon2: [forestIcon],
    },
    {
        icon1: [eggIcon],
        text2: 'IN',
        icon2: [grasslandIcon],
    },
    {
        icon1: [eggIcon],
        text2: 'IN',
        icon2: [wetlandIcon],
    },
    {
        icon1: [birdIcon],
        text2: 'IN',
        icon2: [forestIcon],
    },
    {
        icon1: [birdIcon],
        text2: 'IN',
        icon2: [grasslandIcon],
    },
    {
        icon1: [birdIcon],
        text2: 'IN',
        icon2: [wetlandIcon],
    },
    {
        text1: 'SETS OF',
        icon1: [eggIcon, eggIcon, eggIcon],
        text2: 'IN',
        icon2: [wetlandIcon, grasslandIcon, forestIcon],
    },
    {
      text1: 'TOTAL',
      icon1: [birdIcon],
    },
    {
        icon1: [eggIcon],
        text2: 'IN',
        icon2: [groundNestIcon],
    },
    {
        icon1: [eggIcon],
        text2: 'IN',
        icon2: [cavityNestIcon],
    },
    {
        icon1: [eggIcon],
        text2: 'IN',
        icon2: [bowlNestIcon],
    },
    {
        icon1: [eggIcon],
        text2: 'IN',
        icon2: [platformNestIcon],
    },
    {
        icon1: [groundNestIcon, birdIcon],
        text2: 'WITH',
        icon2: [eggIcon],
    },
    {
        icon1: [cavityNestIcon, birdIcon],
        text2: 'WITH',
        icon2: [eggIcon],
    },
    {
        icon1: [bowlNestIcon, birdIcon],
        text2: 'WITH',
        icon2: [eggIcon],
    },
    {
        icon1: [platformNestIcon, birdIcon],
        text2: 'WITH',
        icon2: [eggIcon],
    },
]