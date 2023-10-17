import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function RoomAboutMe(props) {
  const { nodes, materials } = useGLTF("/assets/models/roomAbout/isometric_room.glb");
  return (
    <group {...props} dispose={null}>
      <group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.004}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group>
              <group
                position={[-34.274, 1043.585, -41.714]}
                rotation={[1.89, 0.881, -2.045]}
                scale={100}
              >
                <group rotation={[Math.PI / 2, 0, 0]}>
                  <group />
                </group>
              </group>
              <group
                position={[1207.918, 1395.117, 959.666]}
                rotation={[Math.PI, 0.756, 2.68]}
                scale={100}
              >
                <group />
              </group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={594.89}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane_Ground_0.geometry}
                  material={materials.Ground}
                />
              </group>
              <group
                position={[350.483, 218.784, -501.122]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[241.235, 100, 13.886]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Table_Desk_0.geometry}
                  material={materials.Desk}
                />
              </group>
              <group
                position={[2.037, 325.814, -482.949]}
                rotation={[-Math.PI / 2, 0, 0.989]}
                scale={[61.099, 54.358, 54.358]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Pc_monitor_Pc_monitor_0.geometry}
                  material={materials.Pc_monitor}
                />
              </group>
              <group
                position={[110.493, 625.383, -589.54]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[11.107, 10.525, 100]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Book_shelf_BookShelf_0.geometry}
                  material={materials.BookShelf}
                />
              </group>
              <group
                position={[5.977, 252.237, -491.407]}
                rotation={[-Math.PI / 2, 0, 0.909]}
                scale={[69.413, 53.793, 20.382]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.PC_Old_pC_0.geometry}
                  material={materials.material}
                />
              </group>
              <group
                position={[182.214, 530.205, -572.589]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[6.932, 22.459, 29.888]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Books_Material004_0.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                position={[46.8, 218.216, -386.359]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[-15.152, 15.152, 0.812]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Floppy_disc_Floppy_discs_0.geometry}
                  material={materials.Floppy_discs}
                />
              </group>
              <group
                position={[217.078, 233.417, -425.964]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[-76.001, 22.998, 1.289]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Keyboard_Material003_0.geometry}
                  material={materials["Material.003"]}
                />
                <group
                  position={[0.63, 0.166, -4.115]}
                  rotation={[-Math.PI, 0, 0]}
                  scale={[-0.034, 0.113, 2.016]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.keys_text_Keyboard_text_0.geometry}
                    material={materials.Keyboard_text}
                  />
                </group>
                <group
                  position={[0.521, 0.428, -3.295]}
                  rotation={[-Math.PI, 0, 0]}
                  scale={[-0.034, 0.113, 2.016]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Keys2_keyboard_black_keys2_0.geometry}
                    material={materials.black_keys2}
                  />
                </group>
                <group
                  position={[0.632, 0.698, -3.295]}
                  rotation={[-Math.PI, 0, 0]}
                  scale={[-0.034, 0.113, 2.016]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Keys_keyboard_black_keys_3_0.geometry}
                    material={materials.black_keys_3}
                  />
                </group>
                <group
                  position={[0.527, -0.156, -5.617]}
                  rotation={[-Math.PI, 0, 0]}
                  scale={[-0.034, 0.113, 2.016]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Keys3_keyboard_black_keys_0.geometry}
                    material={materials.black_keys}
                  />
                </group>
              </group>
              <group
                position={[-594.287, 103.127, -242.226]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[12.271, 146.196, 88.558]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Door_DOOR_0.geometry}
                  material={materials.DOOR}
                />
              </group>
              <group
                position={[-593.26, 706.104, -369.916]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[8.639, 27.391, 62.489]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Window_window_0.geometry}
                  material={materials.window}
                />
              </group>
              <group
                position={[-199.999, 881.453, -591.5]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[6.851, 6.851, 299.215]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Light_switch_switch_0.geometry}
                  material={materials["switch"]}
                />
              </group>
              <group
                position={[-511.672, 237.388, 303.33]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[7.275, 9.263, 11.598]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Shelf_SHELF_0.geometry}
                  material={materials.SHELF}
                />
              </group>
              <group
                position={[-187.773, 142.36, -597.781]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[19.005, 0.748, 11.254]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube__0.geometry}
                  material={materials.Cube__0}
                />
              </group>
              <group
                position={[-68.881, 251.191, -480.168]}
                rotation={[0.213, 0.839, -1.73]}
                scale={3.842}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder001_wires_0.geometry}
                  material={materials.wires}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder001_wires_0_1.geometry}
                  material={materials.wires}
                />
              </group>
              <group
                position={[-453.108, 205.151, 246.751]}
                rotation={[0, 0.646, 0]}
                scale={[2.913, 2.913, 4.912]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere_redpill_0.geometry}
                  material={materials.redpill}
                />
              </group>
              <group
                position={[-450.611, 205.151, 225.278]}
                rotation={[0, -0.859, 0]}
                scale={[2.913, 2.913, 4.912]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere001_bluepill_0.geometry}
                  material={materials.bluepill}
                />
              </group>
              <group
                position={[4.921, 129.736, 508.662]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[10.788, 10.788, 141.739]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube001_Bed_frame_0.geometry}
                  material={materials.Bed_frame}
                />
              </group>
              <group
                position={[273.276, 111.847, 391.511]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[260.966, 113.528, 21.78]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube002_Matress_0.geometry}
                  material={materials.Matress}
                />
              </group>
              <group
                position={[220.054, 217.749, 400.541]}
                rotation={[-Math.PI / 2, -0.199, 0]}
                scale={[195.208, 142.378, 100]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane001_Sheet_0.geometry}
                  material={materials.Sheet}
                />
              </group>
              <group
                position={[462.229, 162.104, 413.424]}
                rotation={[-1.682, -0.216, -0.617]}
                scale={[35.404, 64.629, 16.017]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube003_Pillow_0.geometry}
                  material={materials.Pillow}
                />
              </group>
              <group
                position={[-451.262, 320.709, 184.904]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={4.508}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Circle_ring__0.geometry}
                  material={materials.ring}
                />
              </group>
              <group
                position={[-530.073, 37.179, 102.914]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[63.2, 10.739, 46.269]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube004_Briefcase_0.geometry}
                  material={materials.Briefcase}
                />
              </group>
              <group
                position={[-489.555, 218.393, 372.45]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={16.435}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder_pot_0.geometry}
                  material={materials.material_26}
                />
              </group>
              <group
                position={[-497.125, 335.604, 292.126]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[9.245, 24.796, 15.434]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube005_camera_0.geometry}
                  material={materials.camera}
                />
              </group>
              <group
                position={[232.473, 241.274, -470.069]}
                rotation={[0, 1.275, 0]}
                scale={8.308}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Circle001_Glasses_0.geometry}
                  material={materials.Glasses}
                />
              </group>
              <group
                position={[229.445, 77.185, -284.528]}
                rotation={[-Math.PI / 2, 0, 0.954]}
                scale={[10.47, 10.47, 72.067]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder002_chair_0.geometry}
                  material={materials.chair}
                />
              </group>
              <group position={[-520.528, 1065.639, 551.621]} scale={35.131}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder003_vent_0.geometry}
                  material={materials.vent}
                />
              </group>
              <group
                position={[-597.977, 759.094, 377.236]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[178.483, 107.894, 100]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane002_Poster_0.geometry}
                  material={materials.Poster}
                />
              </group>
              <group
                position={[387.295, 232.939, -520.726]}
                rotation={[-Math.PI / 2, 0, -1.984]}
                scale={[33.395, 33.395, 14.392]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere002_Lamp_0.geometry}
                  material={materials.Lamp}
                />
              </group>
              <group
                position={[370.674, 365.047, -488.431]}
                rotation={[-0.843, -0.134, -0.76]}
                scale={100}
              >
                <group rotation={[Math.PI / 2, 0, 0]}>
                  <group />
                </group>
              </group>
              <group
                position={[-35.614, 1100.157, -15.702]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[8.585, 8.585, 53.595]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder004_light_0.geometry}
                  material={materials.light}
                />
              </group>
              <group
                position={[-602.954, 927.794, 479.59]}
                rotation={[-Math.PI / 2, 1.155, 0]}
                scale={4.668}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube006_Nail_0.geometry}
                  material={materials.Nail}
                />
              </group>
              <group
                position={[-7.319, 103.241, -365.772]}
                rotation={[-Math.PI / 2, 0, 0.049]}
                scale={[69.413, 53.793, 20.382]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.PC_Old004_pC_0.geometry}
                  material={materials.material}
                />
              </group>
              <group
                position={[564.945, 245.047, 221.385]}
                rotation={[-Math.PI / 2, 0, -2.006]}
                scale={[100, 63.422, 100]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane003_tshirt_0.geometry}
                  material={materials.tshirt}
                />
              </group>
              <group
                position={[-593.26, 706.104, -369.916]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[8.639, 27.391, 62.489]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Window001_window_glow_0.geometry}
                  material={materials.window_glow}
                />
              </group>
              <group
                position={[-598.173, 691.124, -243.904]}
                rotation={[0, 0, 1.537]}
                scale={100}
              >
                <group rotation={[Math.PI / 2, 0, 0]}>
                  <group />
                </group>
              </group>
              <group
                position={[-35.614, 1100.157, -25.086]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[8.585, 8.585, 53.595]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder005_light_0.geometry}
                  material={materials.light}
                />
              </group>
              <group
                position={[515.237, 232.67, -500.795]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[25.53, 40.328, 40.328]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane004_paper_0.geometry}
                  material={materials.paper}
                />
              </group>
              <group position={[-447.238, 335.921, 194.841]} scale={100}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                  <group />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

export default RoomAboutMe;

useGLTF.preload("/assets/models/roomAbout/isometric_room.glb");