<template>
    <dvi>
        <div>API fetch....</div>
        <p v-for="text in texts">{{ text }}</p>
    </dvi>
</template>
<script>
    import Logo from '~/components/Logo.vue'

    export default {
        components: {
            Logo
        },
        created() {
            this.getTexts();
        },
        data() {
            return {
                texts: [],
            }
        },
        methods: {
            getTexts() {
                fetch('/api/texts')
                    .then(re => re.json())
                    .then(data => this.texts = data.texts);
            },
        }
    }
</script>
