const state = {
    displayMode: 0,
    pageIndex: 0,
    smallImagePath: './img/small/',
    filterName: '',
    products: {},
    latestArray: [],
    popularArray: [],
    cartArray: [],
    displayModeEnum: {
        "initial": 1,
        "filterCategory": 2,
        "displayCart": 3,
        "displaySupport": 4,
    }
};

const getters = {
    getDisplayMode: state => state.displayMode,
    getPageIndex: state => state.pageIndex,
    getSmallImagePath: state => state.smallImagePath,
    getProducts: state => state.products,
    getLatestArray: state => {
        let res = [];
        let inputArr = [];
        for (let key in state.products) {
            if (state.filterName &&
                state.products[key].category.indexOf(state.filterName) < 0) {
                continue;
            }
            inputArr.push(state.products[key]);
        };
        inputArr.sort((a, b) => {
            return a.id - b.id;
        });
        let limit = state.filterName ? inputArr.length : 2;
        inputArr.reduce((res, cur) => {
            if (res.length <= limit) {
                res.push(cur.id);
            }
            return res;
        }, res);
        return res;
    },
    getPopularArray: state => {
        let res = [];
        let inputArr = [];
        for (let key in state.products) {
            inputArr.push(state.products[key]);
        }
        inputArr.sort((a, b) => {
            return b.popularity - a.popularity;
        });
        let limit = 2;
        inputArr.reduce((res, cur) => {
            if (res.length <= limit && cur.popularity > 0) {
                res.push(cur.id);
            }
            return res;
        }, res);
        return res;
    },
    getCartArray: state => state.cartArray,
    getCartSum: state => {
        return state.cartArray.reduce((sum, current) => {
            return sum + Number((current.q * state.products[current.id].price).toFixed(2));
        }, 0).toFixed(2);
    },
    getFilterName: state => {
        if (!state.filterName) {
            return 'Latest products';
        } else {
            return state.filterName;
        }
    },
};

const actions = {
    addToCart({ state, commit }, { id, q }) {
        let item = state.cartArray.find(el => {
            return el.id === id;
        });
        if (typeof item === 'undefined') {
            state.cartArray.push({ "id": id, "q": q });
        } else {
            item.q = item.q + q;
        }
    },
    removeFromCart({ state, commit }, { id, q }) {
        let itemIndex = state.cartArray.findIndex(el => {
            return el.id === id;
        });
        if (!itemIndex === -1) { return };
        if (q === 0 || q >= state.cartArray[itemIndex].q) { //remove item
            commit('deleteItemFromCartArray', itemIndex);
        } else { //decrease item quantity
            state.cartArray[itemIndex].q -= q;
        }
    },
    fetchProducts({ state, commit }) {
        fetch(`/js/database${state.pageIndex}.json`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                commit('setpageIndex', state.pageIndex + 1);
                commit('setProductsfromArray', data.data);
            })
            .catch(err => {
                console.warn('Check your network connection', err);
            });
    },
    displayCart({ state, commit }) {
        if (state.displayMode === 3) {
            commit('setDisplayMode', state.displayModeEnum.initial);
        } else {
            commit('setDisplayMode', state.displayModeEnum.displayCart);
        }
    },
    clearCart({ commit }) {
        commit('clearCartArray');
    },
    displaySupport({ state, commit }) {
        commit('setDisplayMode', state.displayModeEnum.displaySupport);
    },
    filterCategory({ state, commit }, category) {
        commit('setFilterCategory', category);
        commit('setDisplayMode', state.displayModeEnum.filterCategory);
    },
    initialView({ state, commit }) {
        commit('setFilterCategory', '');
        commit('setDisplayMode', state.displayModeEnum.initial);
    }
};

const mutations = {
    setProductsfromArray(state, productsArray) {
        productsArray.forEach(el => {
            state.products[el.id] = el;
        });
        state.displayMode = 1;
    },
    setpageIndex(state, pageIndex) {
        state.pageIndex = pageIndex;
    },
    setDisplayMode(state, displayMode) {
        state.displayMode = displayMode;
    },
    clearCartArray(state) {
        state.cartArray = [];
    },
    deleteItemFromCartArray(state, itemIndex) {
        state.cartArray.splice(itemIndex, 1);
    },
    setFilterCategory(state, category) {
        state.filterName = category;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}