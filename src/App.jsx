import { Canvas} from "@react-three/fiber"
import Experience from "./Experience"
 import Info from "./Info"

const App = () => {
    return (
        <>
            <mesh>
                <Canvas camera={{ position: [0, 0, 5] }}>   
                    <Info title="Portfolio - Lenin Carabali"
                    biography="Lenin Esteban was here" />
                    <Experience />
                </Canvas>
            </mesh>
            
        </>
    )
}
export default App