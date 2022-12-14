<script lang="ts">
    import { Mesh, Group } from '@threlte/core';
    import * as THREE from 'three';

    export let opacity: number = 1;

    export let geometry: THREE.ExtrudeGeometry;
    export let upperGeometry: THREE.ExtrudeGeometry;
    export let lowerGeometry: THREE.ExtrudeGeometry;
</script>

<Group position={{ x: 0, y: 25, z: 0 }}>
    <Mesh
        castShadow
        geometry={upperGeometry}
        position={{ x: 0, y: 0, z: 0 }}
        rotation={{ x: 0, y: 0, z: 0 }}
        material={new THREE.MeshStandardMaterial({
            color: new THREE.Color('#32B0A2'),
            side: THREE.DoubleSide,
            opacity,
        })} />

    <Mesh
        castShadow
        geometry={lowerGeometry}
        position={{ x: 0, y: 15, z: 0 }}
        rotation={{ x: 0, y: 0, z: 0 }}
        material={new THREE.MeshStandardMaterial({
            color: new THREE.Color('#32B0A2'),
            side: THREE.DoubleSide,
            opacity,
        })} />
</Group>

<Mesh
    castShadow
    {geometry}
    position={{ x: 0, y: 0, z: 0 }}
    rotation={{ x: Math.PI, y: Math.PI, z: 0 }}
    material={new THREE.MeshStandardMaterial({
        color: new THREE.Color('#32B0A2'),
        side: THREE.DoubleSide,
        opacity,
    })} />
