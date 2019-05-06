<template>
    <div>
        <p v-for="text in texts" :key="text">{{ text }}</p>
        <button type="button" class="btn btn-primary" @click="getTexts">Get texts!!!</button>
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
            async getTexts() {
                const { data } = await this.$axios.get('/api/texts');
                // this.texts = data.texts;
            }
        },
    }
</script>
