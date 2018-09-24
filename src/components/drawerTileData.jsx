import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DraftsIcon from '@material-ui/icons/Drafts';


export const mailFolderListItems = (
  <div>
    <ListItem button >
     <ListItemText primary="Create New Character" />
    </ListItem>
    <ListItem button >
     <ListItemText primary="Spells/Powers" />
    </ListItem>
    <ListItem button >
     <ListItemText primary="Equipment" />
    </ListItem>
    <ListItem button >
     <ListItemText primary="Feats" />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
   <a href="mailto:nlhowell12@gmail.com" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
    <ListItem button>
      <ListItemIcon>
        <DraftsIcon/>
      </ListItemIcon>
      <ListItemText primary="Contact Me" />
    </ListItem>
    </a>
  </div>
);