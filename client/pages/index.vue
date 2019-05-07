<template>
    <div>
        <p v-for="text in texts" :key="text.text">{{ text.text }}</p>
        <button type="button" class="btn btn-primary" @click="getTexts">Get texts!!!</button>
        <button type="button" class="btn btn-warning" @click="addText">Add Text</button>
        <button type="button" class="btn btn-danger" @click="deleteTexts">Delete All texts</button>
    </div>
</template>

<script>
    import Logo from '~/components/Logo.vue'
    import {mapGetters, mapActions} from 'vuex';

    export default {
        async fetch({ store }) {
            await store.dispatch('getTexts');
        },
        components: {
            Logo
        },
        mounted() {
            // this.getTexts();
        },
        data() {
            return {
                // texts: [],
                // isLoading: true,
            }
        },
        computed: {
            ...mapGetters(['texts']),
        },
        methods: {
            ...mapActions(['getTexts']),
            async addText() {
                await this.$axios.get('/api/add-text');
                this.getTexts();
            },
            async deleteTexts() {
                await this.$axios.get('/api/delete-texts');
                this.getTexts();
            },
        },
    }
</script>
