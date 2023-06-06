import List from "./List";
import { Aside } from "./components/Aside/Aside";



function App() {
  // useEffect(() => {
  //   async function serverAddTask() {
  //     let response = await fetch(url, {
  //       method: "POST",
  //       dataType: "json",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer testtoken",
  //       },
  //     });

  //     let data = await response.json();
  //     renderTask(data);
  //   }

  //   serverAddTask();
  // }, []);

  // const renderTask = (data) => {
  //   console.log(data.results[0].in_out);
  // };
  return (
    <main>
      <Aside/>
      <List />
    </main>
  );
}

export default App;
