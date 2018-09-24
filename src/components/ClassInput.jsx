import React, { Component } from 'react'
import { Field } from 'redux-form';
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles';
import { playerClasses } from 'components/classes'

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      height: '100%',
      width: '100%'
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      marginTop: 10,
      width: 150,
      height: 50
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  });

const renderTextField = ({input, helperText, className, ...custom}) => (
    <TextField
    helperText={helperText}
    className={className}
    {...input}
    {...custom}
    />
)

class ClassInput extends Component {
    state = {
        
    }
    render() {
        const { classes } = this.props
        return (
            <React.Fragment>
                <Field name='class' select component={renderTextField} placeholder="Class" className={classes.textField} SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}>
                    {playerClasses.map(option => (
                        <option key={option.class}>{option.class}</option>
                    ))}
                </Field>
                <Field name='level' component={renderTextField} placeholder="Level" className={classes.textField}/>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(ClassInput)