<script lang="ts">
    import Svelte from './lib/svelte/Svelte.svelte';
    import Beyonk from './lib/beyonk/Beyonk.svelte';
    import { onMount } from 'svelte/internal';
    import {
        Canvas,
        OrbitControls,
        PerspectiveCamera,
        HemisphereLight,
    } from '@threlte/core';

    let showing: 'beyonk' | 'svelte' = 'svelte';
    let interval: ReturnType<typeof setInterval>;

    onMount(() => {
        interval = setInterval(() => {
            showing = showing == 'svelte' ? 'beyonk' : 'svelte';
        }, 30000);

        return () => clearInterval(interval);
    });
</script>

<div>
    <Canvas>
        <PerspectiveCamera position={{ x: 0, y: 0, z: -200 }}>
            <OrbitControls
                autoRotate
                autoRotateSpeed={2}
                enableRotate={false}
                enablePan={false} />
        </PerspectiveCamera>

        <HemisphereLight
            skyColor={0x4c8eac}
            groundColor={0xac844c}
            intensity={1} />

        {#if showing == 'svelte'}
            <Svelte />
        {:else if showing == 'beyonk'}
            <Beyonk />
        {/if}
    </Canvas>
</div>

<style>
    div {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #222;
    }
</style>
