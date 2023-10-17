import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
// import { Audio } from "three";

export function Moon(props) {
    const moonBodyRef = useRef();
    const moonRigiRef = useRef();
  const { nodes, materials } = useGLTF("/assets/models/moon/moon.glb");

  const onHandleSphere = () => {
    moonBodyRef.current.material.color.set(`hsl(${Math.random() * 360}, 100%, 50%)`)
    moonRigiRef.current.addTorque({
        x: Math.random() - 0.5, // Rotación aleatoria en el eje X
        y: Math.random() - 0.5, // Rotación aleatoria en el eje Y
        z: Math.random() - 0.5, // Rotación aleatoria en el eje Z
      }, true);

}
    const [play, setPlay] = useState(false);
    const [hitSound] = useState(() => new Audio("assets/sounds/body-impact.wav"));

    useEffect(() => {
            if (play) {
            hitSound.currentTime = 0;
            hitSound.volume = Math.random();
            hitSound.play();
            }
        }, [play]);

  return (
    <RigidBody ref={moonRigiRef} colliders={"ball"} onClick={() => setPlay(!play)}>
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.426}
        >
          <group
            name="730f9c0633774fdaac9fce10e4dc3c99fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="RootNode">
              <group name="Moon_LOW">
                <group name="Flag">
                  <mesh
                    name="Flag_Moon2_MAT_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Flag_Moon2_MAT_0.geometry}
                    material={materials.Moon2_MAT}
                  />
                </group>
                <group name="Moon_LOW_1">
                  <mesh ref={moonBodyRef} onClick={onHandleSphere}
                    name="Moon_LOW_Moon2_MAT_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Moon_LOW_Moon2_MAT_0.geometry}
                    material={materials.Moon2_MAT}
                  />
                </group>
                <group name="Eyes_LOW" scale={1.025}>
                  <mesh
                    name="Eyes_LOW_Moon2_MAT_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Eyes_LOW_Moon2_MAT_0.geometry}
                    material={materials.Moon2_MAT}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
    </RigidBody>
  );
}

export default Moon;

useGLTF.preload("/assets/models/moon/moon.glb");