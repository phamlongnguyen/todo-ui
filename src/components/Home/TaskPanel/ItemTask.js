import { Typography } from '@mui/material';
import React, { memo, useCallback, useMemo } from 'react';
import { PRIORITY_LIST } from '../../../utils/constant';

import PopupOption from '../popup';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import moment from 'moment';

const ItemTask = memo(({ provided, snapshot, item, column }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const itemMemo = useMemo(() => item, [item]);
  const anchorElMemo = useMemo(() => anchorEl, [anchorEl]);
  const columnMemo = useMemo(() => column, [column]);

  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className={`text-black font-semibold rounded ${
        snapshot.isDragging ? 'bg-violet-200' : 'bg-white'
      }`}
      style={{
        padding: 16,
        margin: '0 0 8px 0',
        minHeight: '50px',
        ...provided.draggableProps.style,
      }}
    >
      <div className="flex justify-between">
        <Typography variant="subtitle1 truncate"> {item.title}</Typography>
        <PopupOption
          anchorEl={anchorElMemo}
          handleClose={handleClose}
          item={itemMemo}
          column={columnMemo}
        />
        <div className="pl-4">
          <MoreHorizRoundedIcon onClick={handleClick} />
        </div>
      </div>
      <InfoItem item={itemMemo} />
    </div>
  );
});

export default ItemTask;

const InfoItem = memo(({ item }) => {
  const listAssignees =
    item.assignee.length >= 2 ? item.assignee.slice(0, 2) : item.assignee;

  return (
    <div className="flex justify-between flex-wrap ">
      <div className="flex  pt-4">
        {listAssignees.map((e) => {
          return (
            <div key={e.id}>
              <img src={e.icon} alt={e.name} className="h-7 w-7 rounded-full" />
            </div>
          );
        })}
        {item.assignee.length - 2 > 0 && (
          <div className="h-7 w-7 bg-gray-200 text-gray-400 rounded-full flex items-center justify-center text-3xs">
            +{item.assignee.length - 2}
          </div>
        )}
      </div>
      <div className="pl-4  pt-4 flex">
        <div className="whitespace-nowrap text-3xs text-gray-400">
          {moment(item?.estimateTime).format('DD/MM/yyyy HH:mm:ss')}
        </div>
        <div className="pl-4">{PRIORITY_LIST[item.priority].icon}</div>
      </div>
    </div>
  );
});
