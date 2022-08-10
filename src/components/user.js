import { useEffect, useState } from "react";
import UserInfo from "./userInfo";

export default function User() {
  const id = 1;
  const url = `http://localhost:3001/user?id=${id}`;

  const [name, setName] = useState("");

  const promisePending = new Promise((reslove) => setTimeout(reslove, 1000));
  const trashFetch = Promise.all([fetch(url), promisePending])
  
  useEffect(()=>{
    fetch(url)
    .then((res) => res.json())
    .then((response) => {
      setName(response[0].name);
      // console.log(name);
      console.log(response[0].name);
    });
  },[])


  return (
    <div>
      User: {name}
      {/* <UserInfo></UserInfo> */}
    </div>
  );
}
