import { Center, Float, Html, Text3D } from "@react-three/drei"

const Text = (props) => {
    return (
        // <Html position={[0, 1, 0]} center>
        //     <h2> Palabras que diré </h2>
        // </Html>
        <Center position={[0.52 ,0.4,0.7]}>
            <Float
                speed={2} // Animation speed
                rotationIntensity={1.2} // XYZ rotation intensity
                floatIntensity={1} // Up/down float intensity
>
                <Text3D 
                    rotation-y={-Math.PI * 1}
                    bevelEnabled
                    bevelSize={0.005}
                    bevelThickness={0.01}
                    height={0.2}
                    size={0.135}
                    font="/assets/fonts/Sedgwick Ave Display_Regular.json">
                    {`    About me`}
                    <meshNormalMaterial />
                </Text3D>
            </Float>
        </Center>
 
    )
}
export default Text;
