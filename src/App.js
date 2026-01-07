import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Counter from "./components/Counter";
import Increment from "./components/Increment";
import ToggleButton from "./components/ToggleButton";
import TwoWayBinding from "./components/TwoWayBinding";
import CustomArray from "./components/CustomArray";
import PropsDrilling from "./components/PropsDrilling";
import PropsByUseContext from "./components/PropsByUseContext";
import ArrayMover from "./components/ArrayMover";
import Todo from "./components/Todo";
import ReducerComponent from "./components/ReducerComponent";
import DragAndDrop from "./components/DragAndDrop";
import PropsFromChildToParent from "./components/PropsFromChildToParent";
import CountTimer from "./components/CountTimer";
import StopWatch from "./components/StopWatch";
import DigitalClock from "./components/DigitalClock";
import CounterRedux from "./components/CounterRedux";
import HocDashboard from "./components/HocDashboard";
import Crud from "./components/Crud";
import UserList from "./components/UserList";
import ButtonBox from "./components/ButtonBox";
import CrudLocalStorage from "./components/CrudLocalStorage";
import Pagination from "./components/Pagination";
import UsersTable from "./components/UsersTable";
import FindAndReplace from "./components/FindAndReplace";
import ContextTheme from "./components/ContextTheme";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/counter",
        element: [
          <Counter num={1} />,
          <Counter num={2} />,
          <Counter num={3} />,
        ],
      },
      {
        path: "/increment",
        element: <Increment />,
      },
      {
        path: "/toggle",
        element: <ToggleButton />,
      },
      {
        path: "/twowaybinding",
        element: <TwoWayBinding />,
      },
      {
        path: "/customArray",
        element: <CustomArray />,
      },
      {
        path: "/propsDrilling",
        element: <PropsDrilling />,
      },
      {
        path: "/propsUseContext",
        element: <PropsByUseContext />,
      },
      {
        path: "/arrayMover",
        element: <ArrayMover />,
      },
      {
        path: "/todo",
        element: <Todo />,
      },
      {
        path: "/reducer",
        element: <ReducerComponent />,
      },
      {
        path: "/draganddrop",
        element: <DragAndDrop />,
      },
      {
        path: "/propsfromChildtoparent",
        element: <PropsFromChildToParent />,
      },
      {
        path: "/countTimer",
        element: <CountTimer />,
      },
      {
        path: "/stopWatch",
        element: <StopWatch />,
      },
      {
        path: "/digitalClock",
        element: <DigitalClock />,
      },
      {
        path: "/counterRedux",
        element: <CounterRedux />,
      },
      {
        path: "/hocDashboard",
        element: <HocDashboard />,
      },
      {
        path: "/crud",
        element: <Crud />,
      },
      {
        path: "/userlist",
        element: <UserList />,
      },
      {
        path: "/buttonBox",
        element: <ButtonBox />,
      },
      {
        path: "/crudLocalStorage",
        element: <CrudLocalStorage />,
      },
      {
        path: "/pagination",
        element: <Pagination />,
      },
      {
        path: "/usersTable",
        element: <UsersTable />,
      },
      {
        path: "/findAndReplace",
        element: <FindAndReplace />,
      },
      {
        path: "/contextTheme",
        element: <ContextTheme />,
      },
    ],
  },
]);

function App() {
    return (
      <div className="text-center">
        <RouterProvider router={appRouter}/>
      </div>
    );
}

export default App;