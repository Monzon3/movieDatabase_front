const app = Vue.createApp({
    data() {
        return {
            audio: '',
            director: '',
            country: '',
            origTitle: '',
            quality: '',
            storage: '',
            title: '',
            subs: '',
            year1: '',
            year2: '',
            search_query: ''
        };
    },
    methods: {
        search() {
            let query = "Buscando: ";
            query = query + this.title + " / " + this.origTitle + " [" + this.quality 
            + "] " + "in " + this.storage + " [" + this.audio + "; " + this.subs + "] in (" 
            + this.year1 + "-" + this.year2 + ") by " + this.director + " (" + this.country
            + ")";
            this.search_query = query;
        }
    }
});

app.mount('#query');