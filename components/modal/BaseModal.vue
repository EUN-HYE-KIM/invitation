<template>
    <div class="modal">
        <div class="modal__bg"></div>
        <div class="modal__inner">
            <div class="modal__top">
                <h2 class="modal__title"></h2>
                <button class="modal__btn--close" type="button" @click="close"><img src="~/assets/img/ico_close.png"
                        alt="닫기 버튼"></button>
            </div>
            <div class="modal__content">
                <slot name="content" />
            </div>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(["close"])
const close = () => {
    emit("close");
}
</script>

<style scoped>
@import url(~/assets/css/components/modal/modal.scss);
</style>