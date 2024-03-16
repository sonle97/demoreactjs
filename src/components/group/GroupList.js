import React from "react";
import Group from "./Group";

function GroupList(props) {
  const groupList =
    props.users &&
    props.users.map((user) => <Group key={user.id} user={user} />);

  return <ul>{groupList}</ul>;
}

export default GroupList;
