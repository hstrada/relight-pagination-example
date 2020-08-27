import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadItems } from "./store/modules/item/actions";
import { getItemsStatus, getItems } from "./store/modules/item/selectors";

const App = () => {
  const dispatch = useDispatch();

  const { status } = useSelector(getItemsStatus);

  const data = useSelector(getItems);

  useEffect(() => {
    dispatch(loadItems());
  }, [dispatch]);

  return (
    <div className="App">
      hello {status}
      <div>
        {data.map((element: any) => (
          <p>{element.description}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
