<script lang="ts">
    import { Mesh } from '@threlte/core';
    import * as THREE from 'three';

    export let opacity: number = 1;

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
        opacity,
    })} />

<Mesh
    castShadow
    geometry={innerGeometry}
    position={{ x: 0, y: 0, z: 0 }}
    rotation={{ x: 0, y: 0, z: 0 }}
    material={new THREE.MeshStandardMaterial({
        color: new THREE.Color('#ffffff'),
        side: THREE.DoubleSide,
        opacity,
    })} />
