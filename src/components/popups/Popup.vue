<template>
    <div class="popup" :class="{ active, solid }">
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        active: [Boolean, String],
        solid: Boolean,
    },
    created: function () {
        /* Setup escape key press. */
        document.onkeydown = evt => {
            /* Capture window event. */
            evt = evt || window.event

            /* Detect `escape` key. */
            if (evt.keyCode === 27) {
                /* Set flag. */
                this.active = null
            }
        }
    },
}
</script>

<style scoped>
.popup {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100vw;
    height: 100vh;
    max-width: var(--max-width);
    max-height: var(--max-height);
    transform: translate(-50%, -50%);
    overflow: hidden;
    background: var(--popup-bg);
    z-index: 3;
    pointer-events: none;
    transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
}

@media (max-width: 520px) {
    .popup {
        max-width: 100%;
        max-height: 100%;
    }
}

.popup.solid {
    background: var(--bg);
}

.popup.active {
    opacity: 1;
    pointer-events: all;
}
</style>
