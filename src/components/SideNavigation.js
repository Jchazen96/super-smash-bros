const SideNavigation = ({isVisible, characters}) => {
    return (
        <nav className="side-nav" style={{display: isVisible ? "block" : "none"}}>
            {
                characters.map((character) => {
                    return(
                        <div>
                            <p>{character.name}</p>
                        </div>
                    )
                })
            }
        </nav>
    )
}

export default SideNavigation;