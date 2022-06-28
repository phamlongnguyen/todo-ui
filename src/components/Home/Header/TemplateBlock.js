import { Typography } from '@mui/material';

function TemplateBlock({ label = '', icon = '', children }) {
  return (
    <div className="rounded border border-solid border-gray-300 md:py-4 py-2 px-4 bg-white">
      <div className="w-full flex justify-between items-center">
        <Typography variant="subtitle2"> {label}</Typography>
        <div>{icon}</div>
      </div>
      <div className="w-full ">{children}</div>
    </div>
  );
}

export default TemplateBlock;
