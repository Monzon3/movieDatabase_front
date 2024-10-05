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
    computed: {
        search() {
            let query = "Buscando: ";
            query = query + this.title + " / " + this.origTitle + " [" + this.quality 
            + "] " + "in " + this.storage + " [" + this.audio + "; " + this.subs + "] in (" 
            + this.year1 + "-" + this.year2 + ") by " + this.director + " (" + this.country
            + ")";
            this.search_query = query;
        }
    },
    methods: {
        clearQuery() {
            this.audio = '',
            this.director = '',
            this.country = '',
            this.origTitle = '',
            this.quality = '',
            this.storage = '',
            this.title = '',
            this.subs = '',
            this.year1 = '',
            this.year2 = '',
            this.search_query = ''   
        }
    }
});

app.mount('#query');