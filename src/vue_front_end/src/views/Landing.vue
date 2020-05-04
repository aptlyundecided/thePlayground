<template lang='pug'>
    v-container
        v-card
            v-card-text
                h1 Alex Wilson
                h2 Programming Enthusiast
                p Actual 'Build my app' alien from Rick & Morty 
            v-card-actions
                router-link(to='/app-selector')
                    v-btn See My Stupid Apps
</template>


<script>
export default {
    name: 'landing-view',
    data: () => ({})
}
</script>
