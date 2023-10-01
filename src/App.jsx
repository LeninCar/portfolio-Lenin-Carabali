import { Canvas} from "@react-three/fiber"
import Experience from "./Experience"
import Info from "./Info/Info"
import { Loader } from "@react-three/drei"
// import Info from "./Info"

const App = () => {
    return (
        <>
                <Info name={"Lenin Carabali"} biography={"Developer"} />
                <Canvas shadows camera={{ position: [1, 0, 9] }}>   
                    {/* <Info title="Portfolio - Lenin Carabali"  */}
                     {/* biography="Lenin Esteban was here" /> */}
                    <Experience />
                </Canvas>
                <Loader />
            
        </>
    )
}
export default App