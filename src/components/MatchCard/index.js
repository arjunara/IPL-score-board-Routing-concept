// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
  const {
    competingTeamLogo,
    competingTeam,
    result,
    matchStatus,
  } = matchCardDetails
  let winClassName
  if (matchStatus === 'Won') {
    winClassName = 'win-status'
  } else {
    winClassName = 'loss-status'
  }
  return (
    <li className="list-item">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="logo-size"
      />
      <p className="competing-team-heading">{competingTeam}</p>
      <p className="result-text">{result}</p>
      <p className={winClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
