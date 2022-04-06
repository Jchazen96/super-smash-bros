const SideNavigation = ({isVisible, characters}) => {
    return (
        <nav className="side-nav" style={{display: isVisible ? "block" : "none"}}>
            {
                characters.map((character) => {
                    return(
                        <div className="char-nav">
                            <img src={`https://www.smashbros.com/assets_v2/img/fighter/thumb_a/${character.name.toLowerCase()}.png`}/>
                        </div>
                    )
                })
            }
        </nav>
    )
}

export default SideNavigation;