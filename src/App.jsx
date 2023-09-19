import { Canvas} from "@react-three/fiber"
import Experience from "./Experience"
// import Info from "./Info/Info"
import Info from "./Info"

const App = () => {
    return (
        <>
<<<<<<< HEAD
            <mesh>
                <Canvas camera={{ position: [0, 0, 8] }}>   
                    <Info title="Portfolio Web 3D - Lenin Carabali"
                    biography="Student of Systems Engineering." />
=======
                {/* <Info name={"Lenin Carabali"} biography={"Developer"} /> */}
                <Canvas camera={{ position: [1, 0, 9] }}>   
                    <Info title="Portfolio - Lenin Carabali" 
                     biography="Lenin Esteban was here" />
>>>>>>> lenin
                    <Experience />
                </Canvas>
            
        </>
    )
}
export default App