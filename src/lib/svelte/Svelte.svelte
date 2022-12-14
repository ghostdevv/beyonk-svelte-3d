<script lang="ts">
    import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
    import outerSvg from './outer.svg?raw';
    import innerSvg from './inner.svg?raw';
    import { Mesh } from '@threlte/core';
    import { onMount } from 'svelte';
    import * as THREE from 'three';

    let outerGeometry: THREE.ExtrudeGeometry;
    let innerGeometry: THREE.ExtrudeGeometry;

    onMount(() => {
        const [outerShape] = new SVGLoader()
            .parse(outerSvg)
            .paths[0].toShapes(false);

        outerGeometry = new THREE.ExtrudeGeometry(outerShape, {
            curveSegments: 64,
            depth: 2,
            bevelEnabled: true,
            bevelOffset: 0,
            bevelSegments: 64,
            bevelSize: 1,
            bevelThickness: 2,
        });

        outerGeometry.center();

        const [innerShape] = new SVGLoader()
            .parse(innerSvg)
            .paths[0].toShapes(false);

        innerGeometry = new THREE.ExtrudeGeometry(innerShape, {
            curveSegments: 64,
            depth: 4,
            bevelEnabled: true,
            bevelOffset: 0,
            bevelSegments: 64,
            bevelSize: 1,
            bevelThickness: 2,
        });

        innerGeometry.center();
    });
</script>

{#if outerGeometry}
    <Mesh
        castShadow
        geometry={outerGeometry}
        position={{ x: 0, y: 0, z: 0 }}
        rotation={{ x: 0, y: 0, z: 0 }}
        material={new THREE.MeshStandardMaterial({
            color: new THREE.Color('#ff3e00'),
            side: THREE.DoubleSide,
        })} />
{/if}

{#if innerGeometry}
    <Mesh
        castShadow
        geometry={innerGeometry}
        position={{ x: 0, y: 0, z: 0 }}
        rotation={{ x: 0, y: 0, z: 0 }}
        material={new THREE.MeshStandardMaterial({
            color: new THREE.Color('#ffffff'),
            side: THREE.DoubleSide,
        })} />
{/if}
