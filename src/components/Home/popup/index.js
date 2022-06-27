import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Popover,
} from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
function PopupOption({ anchorEl, handleClose = () => {} }) {
  return (
    <div>
      <Popover
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <RemoveRedEyeIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>View</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <HighlightOffIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Delete</ListItemText>
          </MenuItem>
        </MenuList>
      </Popover>
    </div>
  );
}

export default PopupOption;
