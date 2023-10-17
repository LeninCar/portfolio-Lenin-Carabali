import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const MontyGator = (props) => {
    const montyGatorRef = useRef();
    const { nodes, materials, animations } = useGLTF('/assets/models/monty_gator/monty_gator.glb');

    const { actions } = useAnimations(animations, montyGatorRef);

    useEffect(() => {
        const action = actions["RIG_Montgomery_Gator|Monty_DoorSlam_RIG_Montgomery_Gator"];
        action.play();
    }, []);

    return (
        <group ref={montyGatorRef} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Sketchfab_model_0" rotation={[-Math.PI / 2, 0, 0]}>
                <group
                  name="7efe06c1ef8e43f0aef2d0b6f90c233bfbx_1"
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.01}
                >
                  <group name="Object_2_2">
                    <group name="RootNode_3">
                      <group
                        name="RIG_Montgomery_Gator_4"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      >
                        <group name="Object_5_5">
                          <group name="GLTF_created_0">
                            <primitive
                              object={nodes.GLTF_created_0_rootJoint}
                            />
                            <skinnedMesh castShadow
                              name="Object_135"
                              geometry={nodes.Object_135.geometry}
                              material={materials.MAT_EmissiveEye_Monty}
                              skeleton={nodes.Object_135.skeleton}
                            />
                            <skinnedMesh castShadow
                              name="Object_138"
                              geometry={nodes.Object_138.geometry}
                              material={materials.MAT_MontyBody}
                              skeleton={nodes.Object_138.skeleton}
                            />
                            <group name="Object_129_129_correction">
                              <group name="Object_129_129" />
                            </group>
                            <group name="Object_131_131_correction">
                              <group name="Object_131_131" />
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
    )

}
export default MontyGator;
useGLTF.preload("/assets/models/monty_gator/monty_gator.glb");
