// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamMatchData: {},
    isLoadingInTeamMatches: true,
    backgroundColor: '',
  }

  componentDidMount() {
    this.getTeamMatchesData()
  }

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const teamBannerUrl = data.team_banner_url
    const latestMatchDetails = data.latest_match_details
    const UpdatedMatchDetails = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }
    const recentMatches = data.recent_matches
    const updatedRecentMatches = recentMatches.map(each => ({
      competingTeamLogo: each.competing_team_logo,
      competingTeam: each.competing_team,
      matchStatus: each.match_status,
      result: each.result,
      id: each.id,
    }))
    const updatedObject = {
      teamBannerUrl,
      UpdatedMatchDetails,
      updatedRecentMatches,
    }
    this.setState({
      teamMatchData: updatedObject,
      isLoadingInTeamMatches: false,
      backgroundColor: id,
    })
  }

  renderTeamMatchesPage = () => {
    const {teamMatchData} = this.state
    const {
      teamBannerUrl,
      UpdatedMatchDetails,
      updatedRecentMatches,
    } = teamMatchData
    return (
      <div className="container">
        <img src={teamBannerUrl} alt="team banner" className="banner-img" />
        <p className="latest-matches-text">Latest Matches</p>
        <LatestMatch latestMatchDetails={UpdatedMatchDetails} />
        <ul className="match-card-list-container">
          {updatedRecentMatches.map(eachMatchCard => (
            <MatchCard
              matchCardDetails={eachMatchCard}
              key={eachMatchCard.id}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoadingInTeamMatches, backgroundColor} = this.state
    const bgClassName = `team-match-bg-container ${backgroundColor}`
    return (
      <div className={bgClassName}>
        {isLoadingInTeamMatches ? (
          <div testid="loader">
            <Loader type="Oval" color="#13418b" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamMatchesPage()
        )}
      </div>
    )
  }
}

export default TeamMatches
