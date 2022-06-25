import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';

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
  return (
    <div className="mt-6 bg-white border border-solid border-gray-300 rounded flex-1 min-h-[500px] overflow-auto ">
      <div className="border-0 border-b border-solid border-gray-300 py-4 px-6 text-[#87A1B3] font-semibold flex items-center  sticky left-0 ">
        <Typography variant="subtitle2" className="pr-6">
          Task
        </Typography>{' '}
        <ColorButton variant="outlined">Add new task</ColorButton>
      </div>
      <div className=" min-w-[500px]">sd</div>
    </div>
  );
}

export default TaskPannel;