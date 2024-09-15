const app = Vue.createApp({
    data() {
        return {
            title: '',
            origTitle: '',
            audio: '',
            subs: '',
            year: '',
            director: ''
        };
    },
    methods: {
        search_query() {
            let query = "Buscando: ";
            query = query + this.title + " / " + this.origTitle + " [" + 
                    this.audio + "; " + this.subs + "] (" + this.year + ") / " + this.director;
            return query;
        }
    }
});

app.mount('#user-goal');