import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toggleOpenTask } from '../../../store/reducer/config';
import DropPanel from './DropPanel';
import FormTask from '../modal/FormTask';

const ColorButton = styled(Button)(() => ({
  color: '#655BDC',
  backgroundColor: '#ffffff',
  borderColor: '#655BDC',
  textTransform: 'capitalize',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#ffffff',
  },
}));

function TaskPannel() {
  const config = useSelector((state) => state.config);
  const dispatch = useDispatch();
  return (
    <div className="mt-6 bg-white border border-solid border-gray-300 rounded flex-1 min-h-[700px] overflow-auto flex flex-col">
      <div className="border-0 border-b border-solid border-gray-300 py-4 px-6 text-[#87A1B3] font-semibold flex items-center  sticky left-0 ">
        <Typography variant="subtitle2" className="pr-6">
          Task
        </Typography>{' '}
        <ColorButton
          variant="outlined"
          onClick={() => {
            dispatch(toggleOpenTask(true));
          }}
        >
          Add new task
        </ColorButton>
        <FormTask
          open={config.isOpenTaskForm}
          handleClose={() => dispatch(toggleOpenTask(false))}
        />
      </div>
      <div className=" min-w-[700px] flex-1 w-full">
        <DropPanel />
      </div>
    </div>
  );
}

export default TaskPannel;
