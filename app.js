const app = Vue.createApp ({
data () {
    return {
        graphics: [
        {
            image: 'assets/LOgo.png',
            title: 'Esbjerg Beer Fest Logo',
            description: 'Logo created for a conceptual beer festival while making SoMe Campaign as a group'
        },
        {
            image: 'assets/wu-tang graphic.png',
            title: 'Wu-Tang Clan Graphic',
            description: 'The graphic I created in my spare time for fun about a famous rap group'
        },
        {
            image: 'assets/nuclearEurope logo.png',
            title: 'Nuclear Europe Logo',
            description: 'Logo created while doing rebranding excercise for a company connected to the nuclear energy'
        },
        {
            image: 'assets/intlogo.png',
            title: 'International Day Logo',
            description: 'Logo created for an international event in my university'
        },
        
        
        
        ],
        codings: [
            {
                image: 'assets/Zrzut ekranu (17).png',
                title: 'Barbecue Competiton site',
                description: 'Site created during a group project to promote an event'
            },
            {
                image: 'assets/Zrzut ekranu (19).png',
                title: 'The maze near Warsaw Site',
                description: 'Site created for a small trourist attraction in Poland'
            },
        ],
        videos: [
            {
                image: '',
                title: '',
                description: ''
            },
        ],
        photos: [
            {
                image: 'assets/IMG_0008.jpg',
                title: 'Malta, Valetta',
                date: 'July 2022'
            },
            {
                image: 'assets/IMG_0017.jpg',
                title: 'Malta, Marsaxlokk',
                date: 'July 2022'
            },
            {
                image: 'assets/IMG_0023.jpg',
                title: 'Malta, St. Peters Pool',
                date: 'July 2022'
            },
            {
                image: 'assets/IMG_0105.jpg',
                title: 'Denmark, Fanø',
                date: 'August 2022'
            },
            {
                image: 'assets/IMG_0426.jpg',
                title: 'Netherlands, Amsterdam',
                date: 'October 2022'
            },
            {
                image: 'assets/IMG_1283.jpg',
                title: 'Denmark, Kopenhagen',
                date: 'February 2023'
            },
            {
                image: 'assets/IMG_7744.jpg',
                title: 'Poland, Zakopane',
                date: 'May 2021'
            },
            {
                image: 'assets/IMG_8848.jpg',
                title: 'Poland, Gdańsk',
                date: 'September 2021'
            },
            {
                image: 'assets/IMG_9064.jpg',
                title: 'Poland, Podkowa Leśna',
                date: 'Early October 2020'
            },
            {
                image: 'assets/IMG-1543.jpg',
                title: 'Netherlands, The Hague',
                date: 'December 2022'
            },
            {
                image: 'assets/IMG-8619.jpg',
                title: 'Poland, Mazury',
                date: 'July 2021'
            },
            {
                image: 'assets/EDITPSDENhaag.png',
                title: 'Netherlands, The Hague - edited',
                date: 'October 2022'
            },
           
        ]
    }
}


})
app.mount('#app');