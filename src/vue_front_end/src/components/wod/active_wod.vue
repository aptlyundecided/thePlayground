<template lang='pug'>
    v-container
        v-card
            v-card-title(class='active-wod-header')
                div(class='md-title') Active WOD
            v-card-text
                h3(:text-content.prop='active_wod.name')
                p Rounds:
                    b(:text-content.prop='active_wod.workout.rounds')
                v-list
                    v-list-item(
                        v-for="item, i in active_wod.workout.items" :key="i"
                        :text-content.prop='item'
                    )
                p For Time:
                    b(:text-content.prop='active_wod.workout.for_time')

</template>


<script>
    export default {
        name: 'active-wod',
        data: () => ({}),
        computed: {
            active_wod () {
                return this.$store.getters['wod/active_wod']
            },
            aws () {
                return this.$store.getters['wod/active_wod'].toString()
            },
            m () {
                return 'm'
            }
        },
        mounted () {
            this.$store.commit('wod/update_active_wod')
        }
    }
</script>


<style lang="scss" scoped>

.active-wod-header {
    background-color: #ccc;
}

</style>