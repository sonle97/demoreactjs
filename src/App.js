import React from "react";
import GroupList from "./components/group/GroupList";

// import WithLoading from "./hoc/withLoading";
import Home from "./components/Home";
import { Switch, Route, Link, Redirect } from "react-router-dom";

function App(props) {
  // const getListGroup = props.getListGroupAsyncAction;

  // useEffect(() => {
  //   getListGroup();
  // }, [getListGroup]);

  // const GroupListWithLoading = WithLoading(GroupList);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/groups">Group List</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/groups" component={GroupList} exact />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
export default App;
