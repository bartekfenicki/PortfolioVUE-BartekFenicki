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
        photographies: [
            {
                image: '',
                title: '',
                description: ''
            },
        ]
    }
}


})
app.mount('#app');