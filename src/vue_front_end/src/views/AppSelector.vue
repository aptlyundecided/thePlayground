<template lang='pug'>
    v-container
        v-card
            v-card-title
                div(class='md-title') Available Apps
            v-card-content
                v-list
                    router-link(to='/WOD')
                        div(class='app-list-item')
                            v-list-item
                                v-list-item-title Programmer WOD
            v-card-actions
                router-link(to='/')
                    v-btn Go Home
</template>


<script>
    export default {
        name: 'app-selector',
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