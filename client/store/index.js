export const state = () => ({
    texts: [],
});

export const mutations = {
    setTexts(state, payload) {
        state.texts = payload;
    }
};

export const actions = {
    async getTexts(store) {
        const { data } = await this.$axios.get(`${process.env.baseURL || process.env.frontendUrl}/api/texts`);
        store.commit('setTexts', data.texts);
    }
};

export const getters = {
    texts: state => state.texts,
};