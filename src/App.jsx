import { Canvas} from "@react-three/fiber"
import Experience from "./World/Experience"
import Info from "./Info/Info"
import { Loader } from "@react-three/drei"
// import Info from "./Info"

const App = () => {

    const cameraSettings = {
        position: [1, 0, 9],
        // fov: 60
    }
    
    return (
        <>
                <Info 
                name={"Lenin Carabali"} 
                biography={"Developer"} 
                descripcion={"Estudiante de Ingeniría de Sistemas en la Universidad del Valle."} 
                />
                <Canvas shadows camera={cameraSettings}>   
                    <Experience />
                </Canvas>
                <Loader />
            
        </>
    )
}
export default App