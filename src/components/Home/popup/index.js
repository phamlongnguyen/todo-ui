import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Popover,
} from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../../store/reducer/columnsTask';
import { useState } from 'react';
import ConfirmPopup from './ConfirmPopup';
import { openUpdateForm } from '../../../store/reducer/config';
function PopupOption({ anchorEl, handleClose = () => {}, item, column }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const toggleConfirmPopup = () => setOpen((prev) => !prev);

  const handleDelete = () => {
    dispatch(deleteTask({ columnId: column.id, taskId: item.id }));
    setOpen(false);
  };
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
          <MenuItem
            onClick={() => {
              dispatch(openUpdateForm({ columnId: column.id, task: item }));
            }}
          >
            <ListItemIcon>
              <RemoveRedEyeIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Edit</ListItemText>
          </MenuItem>
          <MenuItem onClick={toggleConfirmPopup}>
            <ListItemIcon>
              <HighlightOffIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Delete</ListItemText>
          </MenuItem>
          <ConfirmPopup
            open={open}
            handleClose={toggleConfirmPopup}
            handleConfirm={handleDelete}
          />
        </MenuList>
      </Popover>
    </div>
  );
}

export default PopupOption;
