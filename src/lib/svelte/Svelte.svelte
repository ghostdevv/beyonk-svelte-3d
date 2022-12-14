<script lang="ts">
    import { tweened } from 'svelte/motion';
    import { Mesh } from '@threlte/core';
    import { onMount } from 'svelte';
    import * as THREE from 'three';

    export let opacity = tweened(0, {
        duration: 1000,
    });

    onMount(() => {
        $opacity = 1;
    });

    export let outerGeometry: THREE.ExtrudeGeometry;
    export let innerGeometry: THREE.ExtrudeGeometry;
</script>

<Mesh
    castShadow
    geometry={outerGeometry}
    position={{ x: 0, y: 0, z: 0 }}
    rotation={{ x: 0, y: 0, z: 0 }}
    material={new THREE.MeshStandardMaterial({
        color: new THREE.Color('#ff3e00'),
        side: THREE.DoubleSide,
        transparent: true,
        opacity: $opacity,
    })} />

<Mesh
    castShadow
    geometry={innerGeometry}
    position={{ x: 0, y: 0, z: 0 }}
    rotation={{ x: 0, y: 0, z: 0 }}
    material={new THREE.MeshStandardMaterial({
        color: new THREE.Color('#ffffff'),
        side: THREE.DoubleSide,
        transparent: true,
        opacity: $opacity,
    })} />
