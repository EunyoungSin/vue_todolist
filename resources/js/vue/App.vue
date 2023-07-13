<template>
    <div>
        <h1>TO DO LIST</h1>
        <HeaderComponent></HeaderComponent>
        <ListComponent></ListComponent>
    </div>
</template>
<script>
import HeaderComponent from './components/HeaderComponent.vue'
import ListComponent from './components/ListComponent.vue'

export default {
    name: 'App',
    created() {
    this.$store.dispatch('getMainList');
    },
    components: {
        HeaderComponent,
        ListComponent,
    },
}
</script>
<style>
@import url('../../css/app.css');
</style>