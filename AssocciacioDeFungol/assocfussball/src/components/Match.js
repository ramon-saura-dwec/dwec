function Match ({match}){
    return(
        <div className="matches">
            <div className="team">
            <img src={match[0].src} width={60} height={50} alt="" />
                <p>{match[0].club}</p>
            </div>
            <h3>vs</h3>
            <div className="team">
            <img src={match[1].src} width={60} height={50} alt="" />
                <p>{match[1].club}</p>
            </div>
        </div>
    )
}

export default Match;