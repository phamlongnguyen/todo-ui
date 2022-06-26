import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';
import React, { memo, useMemo, useState } from 'react';
import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Popover,
  Typography,
} from '@mui/material';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { PRIORITY_LIST } from '../../utils/constant';
import { users } from '../../mock';
import { formatDate, sortByDateAndPriority } from '../../utils';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const itemsFromBackend = [
  {
    id: uuidv4(),
    content: 'First task First task First task',
    title: 'First task First task First task',
    estimateTime: '2022-05-11 15:33:20',
    priority: 1,
    assignee: users.slice(0, 2),
  },

  {
    id: uuidv4(),
    content: 'Second task',
    title: 'Second task',
    estimateTime: '2022-05-11 15:33:20',
    priority: 2,
    assignee: users.slice(1, 3),
  },
  {
    id: uuidv4(),
    content: 'Third task',
    title: 'Third task',
    estimateTime: '2022-05-11 15:33:20',
    priority: 5,
    assignee: users.slice(1, 4),
  },
  {
    id: uuidv4(),
    content: 'Fourth task',
    title: 'Fourth task',
    estimateTime: '2022-05-11 15:33:20',
    priority: 4,
    assignee: users.slice(0, 6),
  },
  {
    id: uuidv4(),
    content: 'Fifth task',
    title: 'Fifth task',
    estimateTime: '2022-05-11 15:33:20',
    priority: 3,
    assignee: users.slice(3, 5),
  },
  {
    id: uuidv4(),
    content: 'Six task',
    title: 'Six task',
    estimateTime: '2022-05-11 12:33:20',
    priority: 3,
    assignee: users.slice(3, 5),
  },
  {
    id: uuidv4(),
    content: 'Serven task',
    title: 'Serven task',
    estimateTime: '2022-05-11 5:33:20',
    priority: 3,
    assignee: users.slice(3, 5),
  },
];

const columnsFromBackend = {
  [uuidv4()]: {
    name: 'To do',
    items: sortByDateAndPriority(itemsFromBackend),
  },
  [uuidv4()]: {
    name: 'On Hold',
    items: [],
  },
  [uuidv4()]: {
    name: 'In Progress',
    items: [],
  },
  [uuidv4()]: {
    name: 'Done',
    items: [],
  },
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    sortByDateAndPriority(sourceItems);
    sortByDateAndPriority(destItems);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    sortByDateAndPriority(copiedItems);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

function DropPanel() {
  const [columns, setColumns] = useState(columnsFromBackend);
  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex py-2">
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div
                className="w-1/4 min-w-[250px] mx-2 bg-gray-100 rounded flex flex-col "
                key={columnId}
              >
                <div className="w-full h-full rounded ">
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          className={`p-2 w-full h-full rounded pt-12 relative top-0 ${
                            snapshot.isDraggingOver
                              ? 'bg-violet-50'
                              : 'bg-gray-100'
                          }`}
                        >
                          <Typography
                            variant="subtitle2"
                            className="p-3 text-3xs text-gray-500 absolute top-0 left-0 h-12"
                          >
                            {column.name}
                          </Typography>
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <ItemTask
                                      provided={provided}
                                      snapshot={snapshot}
                                      item={item}
                                    />
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })}
        </DragDropContext>
      </div>
    </div>
  );
}

export default DropPanel;

const ItemTask = memo(({ provided, snapshot, item }) => {
  const itemMemo = useMemo(() => item, [item]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className={`text-black font-semibold rounded ${
        snapshot.isDragging ? 'bg-violet-200' : 'bg-white'
      }`}
      style={{
        // userSelect: 'none',
        padding: 16,
        margin: '0 0 8px 0',
        minHeight: '50px',
        // backgroundColor: snapshot.isDragging
        //   ? '#263B4A'
        //   : '#456C86',
        ...provided.draggableProps.style,
      }}
    >
      <div className="flex justify-between">
        <Typography variant="subtitle1 truncate"> {item.title}</Typography>
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
        <div className="pl-4">
          <MoreHorizRoundedIcon onClick={handleClick} />
        </div>
      </div>
      <InfoItem item={itemMemo} />
    </div>
  );
});

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
          {formatDate(item.estimateTime)}
        </div>
        <div className="pl-4">{PRIORITY_LIST[item.priority].icon}</div>
      </div>
    </div>
  );
});
