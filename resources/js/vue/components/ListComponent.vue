<template>
    <br>
    <div class="post" v-for="item in $store.state.ListData" :key="item">
        <div class="post-content">
            <div class="content" v-if="item.completed == false" >
                <input type="checkbox" @click="$store.dispatch('completeContent', item.id)" v-bind="{ 'checked': item.completed }">
                {{ item.content }}
            </div>
            <div class="content" v-if="item.completed == true" >
                <input type="checkbox" @click="$store.dispatch('cancelContent', item.id)" v-bind="{ 'checked': item.completed }">
                {{ item.content }}
            </div>
            <button @click="$store.dispatch('deleteContent', item.id)" class="button">삭제</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'List',
}
</script>
<style>

</style>