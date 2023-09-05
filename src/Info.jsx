import { Html } from "@react-three/drei"

const Info = (props) => {
    return (
        <Html>
            <div className="info">
                <h2 className="title"> {props.title} </h2> 
                <span className="biography">{props.biography} </span>
            </div>
        </Html>        
    );
}

export default Info;