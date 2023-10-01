
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Laptop(props) {
    const montyGatorRef = useRef();
  const { nodes, materials } = useGLTF("/assets/models/laptop/laptop.glb");

  const handleSign = (e, type) => {
    // e.camera.position.set({ x: 1, y: 0, z: 9.1 });
    // alert(type);
  };

  return (
    <group ref={montyGatorRef} {...props} dispose={null}>
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
                  onClick={(e) => handleSign(e, "Me")}
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