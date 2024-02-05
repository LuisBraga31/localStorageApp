import { useState } from "react";
import Form from "./components/Form"
import Table from "./components/Table"

function App() {

  const data = localStorage.getItem("users");
  const [userList, setUserList] = useState(data ? JSON.parse(data) : []);

  return (
    <>
      <Form userList={userList} setUserList={setUserList}/>
      <Table userList={userList} setUserList={setUserList}/>
    </>
  )
}

export default App
