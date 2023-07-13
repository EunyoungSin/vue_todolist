<template>
    <ul class="task-list" v-for="item in $store.state.ListData" :key="item">
        <li class="task-list-item">
            <div class="content" v-if="item.completed == false">
                <label class="task-list-item-label">
                    <input type="checkbox" @click="$store.dispatch('completeContent', item.id)" v-bind="{ 'checked': item.completed }">
                    {{ item.content }}
                </label>
            </div>
            <div class="content" v-if="item.completed == true">
                <label class="task-list-item-label" id="checkbox">
                    <input type="checkbox" @click="$store.dispatch('cancelContent', item.id)" v-bind="{ 'checked': item.completed }">
                    {{ item.content }}
                </label>
            </div>
            <button @click="$store.dispatch('deleteContent', item.id)" class="delete-btn"></button>
        </li>
    </ul>
</template>
<script>
export default {
    name: 'List',
}
</script>
<style>

</style>