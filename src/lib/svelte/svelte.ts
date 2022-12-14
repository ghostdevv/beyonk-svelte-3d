import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
import outerSvg from './outer.svg?raw';
import innerSvg from './inner.svg?raw';
import * as THREE from 'three';

export function loadSvelte() {
    const [outerShape] = new SVGLoader()
        .parse(outerSvg)
        .paths[0].toShapes(false);

    const outerGeometry = new THREE.ExtrudeGeometry(outerShape, {
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

    const innerGeometry = new THREE.ExtrudeGeometry(innerShape, {
        curveSegments: 64,
        depth: 4,
        bevelEnabled: true,
        bevelOffset: 0,
        bevelSegments: 64,
        bevelSize: 1,
        bevelThickness: 2,
    });

    innerGeometry.center();

    return {
        outerGeometry,
        innerGeometry,
    };
}
