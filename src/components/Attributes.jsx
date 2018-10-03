import React, { Component } from 'react';
import OutlinedTextFields from 'components/AttributeField';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const AttributeContainer = styled(Paper)`
    width: 100%;
    margin-top: 5px;
    margin-right: 5px;
`

class Attributes extends Component {
    render() {
        const { attributes } = this.props
        return (
            <AttributeContainer>
                {Object.keys(attributes).map(attribute => {
                    return (
                    <Paper key={attribute} style={{display: 'flex', flexDirection: 'row'}}>
                        <OutlinedTextFields key={attribute} attribute={attribute}/>
                        <Paper style={{width: '50px', height: '50px', position: 'relative', top: '10px', left: '20px'}}>
                            <Typography align="center" style={{position: 'relative', top: '5px'}} variant="display1">
                            {attributes[attribute] > 10 ? `+${Math.floor((attributes[attribute]-10)/2)}` : `${Math.floor((attributes[attribute]-10)/2)}`}
                            </Typography>
                        </Paper>
                    </Paper>
                    )
                })}
            </AttributeContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        attributes: state.newChar.attributes
    }
}

export default connect(mapStateToProps)(Attributes)