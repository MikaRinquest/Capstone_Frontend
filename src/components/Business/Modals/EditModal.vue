<template>
  <transition name="modal-animation">
    <div v-show="modalActive" class="modal">
      <transition name="modal-animation-inner">
        <div v-show="modalActive" class="modal-inner">
          <i class="bx bx-exit-fullscreen">
            <!-- Modal content -->
            <slot />
            <button>Close</button>
          </i>
        </div>
      </transition>
    </div>
  </transition>
</template>
<script>
export default {
  props: ["modalActive"],
};
</script>
<style></style>
