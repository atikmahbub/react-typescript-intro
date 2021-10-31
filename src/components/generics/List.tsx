import React from "react";

type ListType<T> = {
  list: T[];
  onClick: (value: T) => void;
};

const List = <T extends { id: number }>({ list, onClick }: ListType<T>) => {
  //* Allows any type of array , We can also restrict an object without an id entry , T extends {} will allow any type of array
  return (
    <div>
      {list.map((item, index) => (
        <li key={index} onClick={() => onClick(item)}>
          {item.id}
        </li>
      ))}
    </div>
  );
};

export default List;
