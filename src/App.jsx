import "./App.css";
import { useEffect } from "react";
import useTodo from "./hooks/useTodo";
import Loading from "./components/Loading";
import MyTabs from "./components/Tabs";

function App() {
  const { mocTodoGetAll, todoState } = useTodo();

  useEffect(() => {
    mocTodoGetAll();
  }, [mocTodoGetAll]);

  return (
    <div>
      {todoState?.isLoading ? (
        <Loading />
      ) : (
        <div className="bg-mainbg w-screen h-screen flex justify-center items-center">
          <div className="w-5/12">
            <MyTabs data={todoState} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
