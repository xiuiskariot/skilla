
import { Aside } from "./components/Aside/Aside";
import { Header } from "./components/Header/Header";
import { ListWrapper } from "./components/ListWrapper/ListWrapper";
import { useEffect } from "react";



function App() {
  useEffect(() => {
    async function serverAddTask() {
      let response = await fetch("https://api.skilla.ru/mango/getList", {
        method: "POST",
        dataType: "json",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer testtoken",
        },
      });

      let data = await response.json();
      renderTask(data);
    }

    serverAddTask();
  }, []);

  const renderTask = (data) => {
    console.log(data.results[0]);
  };
  return (
    <>
      <Aside />
      <main>
        <Header />

        <ListWrapper/>
      </main>
    </>
  );
}

export default App;
