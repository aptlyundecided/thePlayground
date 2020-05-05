<template lang='pug'>
    v-container
        v-card
            v-card-title
                div(class='md-title') Programmer Workout of the Day
            v-card-text
                active_wod
                wod_list
            v-card-actions
                router-link(to='/')
                    v-btn Go Home
                router-link(to='/app-selector')
                    v-btn App Selection
</template>


<script>
    import active_wod from '../components/wod/active_wod'
    import wod_list from '../components/wod/wod_list'
    /*]
    [|]
    [*/
    export default {
        name: 'app-selector',
        components: {
            active_wod,
            wod_list
        },
        data: () => ({})
    }
</script>


<style lang="scss" scoped>

.app-list-item {
    background-color: #ccc;
    margin-top: 0.5em;
    margin-bottom: 0.25em;
    &:hover {
        background-color: #999;
        cursor: pointer;
    }
}

</style>