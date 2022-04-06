
export default ({ name, color, setVisible, setSelectedCharacter }) => {
    return(
        <div onClick={() => {
            setSelectedCharacter({name: name, color: color})
            setVisible(true)
        }} 
            className="fighter" 
            style={{
                backgroundImage: `url(https://www.smashbros.com/assets_v2/img/fighter/${name.toLowerCase()}/main.png), linear-gradient(140deg, ${color}, lightyellow, lightskyblue)`
                }}>
            <h4>{name}</h4>
        </div>
    )
}