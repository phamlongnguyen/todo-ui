import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import { mockTasks } from '../../../mock';
import { sortByDateAndPriority } from '../../../utils';
import ItemTask from './ItemTask';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { initTodo, updateColumns } from '../../../store/reducer/columnsTask';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { toggleOpenTask } from '../../../store/reducer/config';

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
    dispatch(
      tempCol
        ? updateColumns(JSON.parse(tempCol))
        : initTodo(sortByDateAndPriority(mockTasks)),
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
                          className={`p-2 w-full h-full rounded py-12 relative top-0 ${
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
                          <div
                            className="w-full items-center justify-center absolute bottom-0 text-gray-500 h-12 flex cursor-pointer"
                            onClick={() => dispatch(toggleOpenTask(true))}
                          >
                            <AddOutlinedIcon className="w-3 h-3" />
                            <Typography
                              variant="subtitle2"
                              className="p-3 text-3xs   left-0 "
                            >
                              Add new Task
                            </Typography>
                          </div>
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
                                      column={column}
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
