import "./info.css"

const Info = ({ name, biography , descripcion}) => {

    return (
        <div className="container-info">
            <div className="card-info">
                <h1 className="name">{name}</h1>
                <span className="biography">{biography}</span>
                <div className="card-aboutme">
                    <span className="descripcion">{descripcion}</span>
                </div>
            </div>
            
        </div>
    )
}

export default Info;