import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TemporaryDrawer from 'components/TemporaryDrawer'
import GridList from 'components/CampaignDisplay'



class Home extends Component {
    render() {
        const { campaigns } = this.props
        return (
            <React.Fragment>
                <TemporaryDrawer/>
                {campaigns.map(campaign => {
                    return <GridList key={campaign.campaignName} 
                    name={campaign.campaignName} 
                    characters={campaign.characters}
                    system={campaign.system}
                    DM={campaign.DM}
                    />
                })}
            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        campaigns: state.user.campaigns
    }
}

export default connect(mapStateToProps)(withRouter(Home))