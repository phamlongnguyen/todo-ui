import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { Typography } from '@mui/material';
const itemsFromBackend = [
  { id: uuidv4(), content: 'First task' },
  { id: uuidv4(), content: 'Second task' },
  { id: uuidv4(), content: 'Third task' },
  { id: uuidv4(), content: 'Fourth task' },
  { id: uuidv4(), content: 'Fifth task' },
];

const columnsFromBackend = {
  [uuidv4()]: {
    name: 'To do',
    items: itemsFromBackend,
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
                              ? 'bg-violet-100'
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
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      className={`text-black font-semibold rounded ${
                                        snapshot.isDragging
                                          ? 'bg-violet-300'
                                          : 'bg-white'
                                      }`}
                                      style={{
                                        userSelect: 'none',
                                        padding: 16,
                                        margin: '0 0 8px 0',
                                        minHeight: '50px',
                                        // backgroundColor: snapshot.isDragging
                                        //   ? '#263B4A'
                                        //   : '#456C86',
                                        ...provided.draggableProps.style,
                                      }}
                                    >
                                      {item.content}
                                    </div>
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
