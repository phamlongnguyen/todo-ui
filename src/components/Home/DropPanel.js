import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';
import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import { users } from '../../mock';
import { sortByDateAndPriority } from '../../utils';
import ItemTask from './ItemTask';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { initTodo, updateColumns } from '../../store/reducer';

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

const onDragEnd = (result, columns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    const newSource = sortByDateAndPriority(sourceItems);
    const newItems = sortByDateAndPriority(destItems);
    return updateColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: newSource,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: newItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    const newCopiedItems = sortByDateAndPriority(copiedItems);
    return updateColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: newCopiedItems,
      },
    });
  }
};

function DropPanel() {
  const columnsTasks = useSelector((state) => state.columnsTask);
  const dispatch = useDispatch();

  useEffect(() => {
    const tempCol = localStorage.getItem('columnsTask');
    console.log('=====console===== >> ', JSON.parse(tempCol));
    dispatch(
      tempCol
        ? updateColumns(JSON.parse(tempCol))
        : initTodo(sortByDateAndPriority(itemsFromBackend)),
    );
  }, [dispatch]);
  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex py-2">
        <DragDropContext
          onDragEnd={(result) => dispatch(onDragEnd(result, columnsTasks))}
        >
          {Object.entries(columnsTasks).map(([columnId, column], index) => {
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
