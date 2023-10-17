
import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";

export function Laptop(props) {
  const { nodes, materials } = useGLTF("/assets/models/laptop/laptop.glb");

  const [active, setActive] = useState(false)

  useFrame((state) => {
    state.camera.position.x =
      MathUtils.lerp(state.camera.position.x, active ? 15 : 1, 0.1)
    state.camera.position.z =
      MathUtils.lerp(state.camera.position.z, active ? -9 : 9, 0.1)
  })
  // {[10, -3, -7]} position roomabout
  // position: [1, 0, 9], position room
  return (
    <group  {...props} dispose={null}>
      <group>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group>
            <group rotation={[Math.PI / 2, 0, 0]}>
              <group
                position={[0.411, 0.033, 0.621]}
                rotation={[1.745, 0, 0]}
                scale={0.130}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.body}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5.geometry}
                  material={materials.display}
                  onClick={() => setActive(!active)}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.patterns}
                />
              </group>
              <group position={[0.411, 0.03, 0.334]} scale={0.123}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.body}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_9.geometry}
                  material={materials.touchpad}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials.metal}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_11.geometry}
                  material={materials.blue_plastic}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials.jacks}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_13.geometry}
                  material={materials.type_c}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials.holes_1}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_15.geometry}
                  material={materials.holes_2}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials.patterns}
                />
              </group>
              <group position={[0.683, 0.028, 0.383]} scale={0.123}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_18.geometry}
                  material={materials.material}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_19.geometry}
                  material={materials.backlight}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
      {props.children}
    </group>
  );
}

useGLTF.preload("/assets/models/laptop/laptop.glb");