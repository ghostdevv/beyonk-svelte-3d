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
    import Transition from './lib/Transition.svelte';
    import { loadSvelte } from './lib/svelte/svelte';
    import { loadBeyonk } from './lib/beyonk/beyonk';

    let showing: 'beyonk' | 'svelte' = 'svelte';
    let interval: ReturnType<typeof setInterval>;

    const beyonkProps = loadBeyonk();
    const svelteProps = loadSvelte();

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
            <OrbitControls autoRotate enableRotate={false} enablePan={false} />
        </PerspectiveCamera>

        <HemisphereLight
            skyColor={0x4c8eac}
            groundColor={0xac844c}
            intensity={1} />

        {#if showing == 'svelte'}
            <Transition let:value>
                <Svelte {...svelteProps} opacity={value} />
            </Transition>
        {:else if showing == 'beyonk'}
            <Transition let:value>
                <Beyonk {...beyonkProps} opacity={value} />
            </Transition>
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
