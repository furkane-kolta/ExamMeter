<script>
    export let loading = false;
</script>

{#if loading}
    <div class="backdrop">
        <div class="container">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
    </div>
{:else}
    <slot />
{/if}

<style>
    .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 100;
        display: grid;
        place-items: center;
    }
    .container {
        z-index: 101;
        --uib-size: 120px;
        --uib-color: white;
        --uib-speed: 1s;
        --uib-stroke: 9px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: var(--uib-size);
        width: var(--uib-size);
    }

    .line {
        position: absolute;
        top: 0;
        left: calc(50% - var(--uib-stroke) / 2);
        display: flex;
        align-items: flex-start;
        height: 100%;
        width: var(--uib-stroke);
    }

    .line::before {
        content: "";
        height: 22%;
        width: 100%;
        border-radius: calc(var(--uib-stroke) / 2);
        background-color: var(--uib-color);
        animation: pulse calc(var(--uib-speed)) ease-in-out infinite;
        transition: background-color 0.3s ease;
        transform-origin: center bottom;
    }

    .line:nth-child(1) {
        transform: rotate(calc(360deg / -12 * 1));

        &::before {
            animation-delay: calc(var(--uib-speed) / -12 * 1);
        }
    }
    .line:nth-child(2) {
        transform: rotate(calc(360deg / -12 * 2));

        &::before {
            animation-delay: calc(var(--uib-speed) / -12 * 2);
        }
    }
    .line:nth-child(3) {
        transform: rotate(calc(360deg / -12 * 3));

        &::before {
            animation-delay: calc(var(--uib-speed) / -12 * 3);
        }
    }
    .line:nth-child(4) {
        transform: rotate(calc(360deg / -12 * 4));

        &::before {
            animation-delay: calc(var(--uib-speed) / -12 * 4);
        }
    }
    .line:nth-child(5) {
        transform: rotate(calc(360deg / -12 * 5));

        &::before {
            animation-delay: calc(var(--uib-speed) / -12 * 5);
        }
    }
    .line:nth-child(6) {
        transform: rotate(calc(360deg / -12 * 6));

        &::before {
            animation-delay: calc(var(--uib-speed) / -12 * 6);
        }
    }
    .line:nth-child(7) {
        transform: rotate(calc(360deg / -12 * 7));

        &::before {
            animation-delay: calc(var(--uib-speed) / -12 * 7);
        }
    }
    .line:nth-child(8) {
        transform: rotate(calc(360deg / -12 * 8));

        &::before {
            animation-delay: calc(var(--uib-speed) / -12 * 8);
        }
    }
    .line:nth-child(9) {
        transform: rotate(calc(360deg / -12 * 9));

        &::before {
            animation-delay: calc(var(--uib-speed) / -12 * 9);
        }
    }
    .line:nth-child(10) {
        transform: rotate(calc(360deg / -12 * 10));

        &::before {
            animation-delay: calc(var(--uib-speed) / -12 * 10);
        }
    }
    .line:nth-child(11) {
        transform: rotate(calc(360deg / -12 * 11));

        &::before {
            animation-delay: calc(var(--uib-speed) / -12 * 11);
        }
    }

    @keyframes pulse {
        0%,
        80%,
        100% {
            transform: scaleY(0.75);
            opacity: 0;
        }
        20% {
            transform: scaleY(1);
            opacity: 1;
        }
    }
</style>
