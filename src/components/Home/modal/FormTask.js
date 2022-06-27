import styled from '@emotion/styled';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextareaAutosize,
  TextField,
  Typography,
} from '@mui/material';
import { users } from '../../../mock';
import { v4 as uuidv4 } from 'uuid';
import { PRIORITY_LIST } from '../../../utils/constant';
import Select from '../../common/Select';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useRef, useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { useSnackbar } from 'notistack';

const ColorButton = styled(Button)(() => ({
  color: '#ffffff',
  backgroundColor: '#655BDC',
  '&:hover': {
    backgroundColor: '#655BDC',
  },
}));

const TextFieldCus = styled(TextField)(() => ({
  div: {
    borderRadius: 10,
    backgroundColor: '#EFEFEF',
    input: {
      height: 40,
      padding: '0px 10px',
    },
  },
}));

function FormTask({ open, handleClose = () => {} }) {
  const [date, setDate] = useState(new Date());
  const [assignees, setAssignees] = useState([]);
  const [priority, setPriority] = useState(5);
  const titleRef = useRef();
  const contentRef = useRef();
  const { enqueueSnackbar } = useSnackbar();

  const handleChangeDate = (e) => setDate(e);
  const handleChangeAssignees = (e) => {
    const newAssignees = e.map((e) => users.find((el) => el.id === e));
    setAssignees(newAssignees);
  };
  const handleChangePriority = (e) => setPriority(e);

  const onSubmit = () => {
    const body = {
      id: uuidv4(),
      content: contentRef.current.value,
      title: titleRef.current.value,
      estimateTime: date,
      priority,
      assignee: assignees,
    };
    if (!body.title) {
      enqueueSnackbar('Please enter a title!', { variant: 'error' });
    }
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Create task</DialogTitle>
        <DialogContent>
          <Grid container rowSpacing={1} className="py-6">
            <Grid item xs={12}>
              <Typography variant="subtitle2">
                Title Task <span className="text-red-600">*</span>
              </Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextFieldCus
                fullWidth
                focused
                hiddenLabel
                inputRef={titleRef}
                id="filled-hidden-label-normal"
                defaultValue=""
                variant="outlined"
                className="mt-0  ml-2 rounded-lg"
              />
            </Grid>
            <Grid item xs={12} className="mt-4">
              <Typography variant="subtitle2">
                Content <span className="text-red-600">*</span>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextareaAutosize
                maxRows={4}
                ref={contentRef}
                defaultValue=""
                className="w-full min-h-[100px] font-sans rounded-[10px] p-2 ml-2"
              />
            </Grid>

            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12} lg={6}>
                  <Grid item xs={12} className="mt-4">
                    <Typography variant="subtitle2">
                      Priority <span className="text-red-600">*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Select
                      defaultValue={priority}
                      options={Object.values(PRIORITY_LIST)}
                      preifx="label"
                      onChange={(e) => handleChangePriority(e)}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Grid item xs={12} className="mt-4">
                    <Typography variant="subtitle2">
                      Priority <span className="text-red-600">*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DateTimePicker
                        label=""
                        value={date}
                        onChange={handleChangeDate}
                        renderInput={(params) => (
                          <TextFieldCus
                            {...params}
                            variant="outlined"
                            className="ml-2"
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} className="mt-4">
              <Typography variant="subtitle2">
                Assignees <span className="text-red-600">*</span>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Select
                options={users}
                isMultiple
                onChange={handleChangeAssignees}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className="text-primary">
            Cancel
          </Button>
          <ColorButton variant="contained" onClick={onSubmit}>
            Create
          </ColorButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormTask;
