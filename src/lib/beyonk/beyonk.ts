import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
import beyonkSvg from './beyonk.svg?raw';
import upperSvg from './upper.svg?raw';
import lowerSvg from './lower.svg?raw';
import * as THREE from 'three';

const geometryOptions = {
    curveSegments: 64,
    depth: 2,
    bevelEnabled: true,
    bevelOffset: 0,
    bevelSegments: 64,
    bevelSize: 1,
    bevelThickness: 2,
};

export function loadBeyonk() {
    const [upperShape] = new SVGLoader()
        .parse(upperSvg)
        .paths[0].toShapes(false);

    const upperGeometry = new THREE.ExtrudeGeometry(
        upperShape,
        geometryOptions,
    );

    upperGeometry.center();

    const [lowerShape] = new SVGLoader()
        .parse(lowerSvg)
        .paths[0].toShapes(false);

    const lowerGeometry = new THREE.ExtrudeGeometry(
        lowerShape,
        geometryOptions,
    );

    lowerGeometry.center();

    const shape = new SVGLoader().parse(beyonkSvg).paths[0].toShapes(true);

    const geometry = new THREE.ExtrudeGeometry(shape, geometryOptions);
    geometry.center();

    return {
        geometry,
        lowerGeometry,
        upperGeometry,
    };
}
