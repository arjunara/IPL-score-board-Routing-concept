// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchDetails
  return (
    <div className="match-details-container">
      <div className="competing-match-container">
        <p className="competing-match-heading">{competingTeam}</p>
        <p className="competing-match-date">{date}</p>
        <p className="competing-match-venue">{venue}</p>
        <p className="competing-match-result">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="competingTeamLogo-img"
      />
      <div className="innings-container">
        <h1 className="title">First Innings</h1>
        <p className="value">{firstInnings}</p>
        <h1 className="title">Second Innings</h1>
        <p className="value">{secondInnings}</p>
        <h1 className="title">Man Of The Match</h1>
        <p className="value">{manOfTheMatch}</p>
        <h1 className="title">Umpires</h1>
        <p className="value">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
