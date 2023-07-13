<template>
<div class="app-container" id="taskList">
    <h1 class="app-header">TO DO LIST</h1>
    <div class="add-task">
        <input type="text" name="text" id="text" class="task-input" placeholder="Add New Task" autocomplete="off" required>
        <button @click="$store.dispatch('writeContent');" class="submit-task"></button>
    </div>
</div>
</template>
<script>
export default {
    name: 'Header',
}
</script>
<style>
    
</style>