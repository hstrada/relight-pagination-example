import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { items } from "./store/modules/item/actions";
import { getItemsStatus, getItems } from "./store/modules/item/selectors";

const App = () => {
  const dispatch = useDispatch();

  const { status } = useSelector(getItemsStatus);

  const data = useSelector(getItems);

  const loadNextPage = ({ refresh = false }: { refresh?: boolean }) => {
    dispatch(items.request(refresh));
  };

  return (
    <div className="App">
      hello {status}
      <button onClick={() => loadNextPage({})}>next</button>
      <button onClick={() => loadNextPage({ refresh: true })}>refresh</button>
      <div>
        {data?.flat().map((element: any) => (
          <p key={element.id}>{element.description}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
