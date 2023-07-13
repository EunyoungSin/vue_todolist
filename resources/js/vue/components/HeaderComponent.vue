<template>
    <div>
        <div>
            <input type="text" name="text" id="text" placeholder="할 일을 적어주세요." autocomplete="off" required>
            <button @click="$store.dispatch('writeContent');" class="button">등록</button>
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