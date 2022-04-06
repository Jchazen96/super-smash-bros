const FighterScreen = ({isVisible, setVisible, selectedCharacter}) => {
    return(
        <div onClick={() => { setVisible(false) }} className="fighter-screen" style={{display: isVisible ? "block" : "none"}}>
        <span className="name-bg">{selectedCharacter.name}</span>
        <h2 className="name-fg">{selectedCharacter.name}</h2>
        <img className="char-portrait" src={`https://www.smashbros.com/assets_v2/img/fighter/${selectedCharacter.name.toLowerCase()}/main.png`}/>
        {/* <p className="fighter-desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, et voluptatibus accusantium praesentium delectus nemo facilis sunt, possimus, illo tempore error ut dignissimos repellendus explicabo molestias placeat voluptatem quae impedit!
        </p> */}
      </div>
    )
}

export default FighterScreen