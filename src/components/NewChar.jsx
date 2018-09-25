import React, { Component } from 'react'
import SimpleDialogDemo from 'components/ChooseGameSystem'
import TemporaryDrawer from 'components/TemporaryDrawer'
import Attributes from 'components/Attributes'

class NewChar extends Component {

    state = {

    }

    render() {
        return (
            <div>
                <TemporaryDrawer/>
                <SimpleDialogDemo/>
                <Attributes/>

            </div>
        )
    }
}

export default NewChar