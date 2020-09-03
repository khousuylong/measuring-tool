import React, {memo} from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import CloseIcon from '@material-ui/icons/Close'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
	closeIcon: {
		position: 'absolute',
		zIndex: 2,
		top: 20,
		right: 20
	},
  fullList: {
    width: 'auto',
  },
});

const SettingDrawer = memo(props => {
  const classes = useStyles();

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
		props.onClose();
  };

  const content = () => (
    <div
      className={clsx(classes.fullList)}
      role="presentation"
    >
			<IconButton className={clsx(classes.closeIcon)} onClick={()=> console.log('close this') }><CloseIcon /></IconButton>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
			<React.Fragment>
				<SwipeableDrawer
					anchor="bottom"
					open={props.open}
					onClose={toggleDrawer(false)}
					onOpen={toggleDrawer(true)}
					variant="persistent"
				>
					{content()}
				</SwipeableDrawer>
			</React.Fragment>
    </div>
  );
})

SettingDrawer.propTypes = {
  open: PropTypes.bool,
	onClose: PropTypes.func.isRequired
};

export default SettingDrawer
