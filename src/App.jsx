import { Canvas} from "@react-three/fiber"
import Experience from "./Experience"
 import Info from "./Info"

const App = () => {
    return (
        <>
            <mesh>
                <Canvas camera={{ position: [0, 0, 8] }}>   
                    <Info title="Portfolio Web 3D - Lenin Carabali"
                    biography="Student of Systems Engineering." />
                    <Experience />
                </Canvas>
            </mesh>
            
        </>
    )
}
export default App