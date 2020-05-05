<template lang='pug'>
    v-container
        v-card
            v-card-title
                h3 Past 10 Workouts
            v-card-text
                v-list
                    div(class='wod-list-item' v-for='item in wod_list')
                        v-list-item
                            v-list-item-title(:text-content.prop='item.name')

</template>


<script>
    export default {
        name: 'wod-list',
        data: () => ({}),
        computed: {
            wod_list () {
                const list = this.$store.getters['wod/wod_list']
                if (list.length > 0) {
                    return list
                } else {
                    return [{name: 'No Connection to DB'}]
                }
            }
        },
        mounted () {
            this.$store.commit('wod/update_wod_list')
        }
    }
</script>


<style lang="scss" scoped>
.wod-list-item {
    background-color: #ccc;
    margin-top: 0.25em;
    margin-bottom: 0.25em;
    border: solid 1px #ccc;
    &:hover {
        background-color: #666;
        color: #fff;    
    }
}

</style>