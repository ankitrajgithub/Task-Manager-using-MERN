import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Login} from "./pages/Auth/Login";
import {SignUp} from "./pages/Auth/Signup";
import {DashBoard} from "./pages/Admin/Dashboard";
import {ManageTasks} from "./pages/Admin/ManageTasks";
import {CreateTasks} from "./pages/Admin/CreateTasks";
import {ManageUsers} from "./pages/Admin/ManageUsers";
import {UserDashboard} from "./pages/User/UserDashboard";
import {MyTasks} from "./pages/User/MyTasks";
import {ViewTaskDetails} from "./pages/User/ViewTaskDetails";
import {PrivateRoute} from "./routes/PrivateRoute";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Index/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>

          {/* Admin Routes */}
          <Route  element={<PrivateRoute allowedRoles={["admin"]}/>}>
            <Route path="/admin/dashboard/" element={<DashBoard/>}></Route>
            <Route path="/admin/tasks" element={<ManageTasks/>}></Route>
            <Route path="/admin/create-task" element={<CreateTasks/>}></Route>
            <Route path="/admin/users" element={<ManageUsers/>}></Route>
          </Route>

          {/* User Routes */}
          <Route  element={<PrivateRoute allowedRoles={["user","admin"]}/>}>
            <Route path="/user/dashboard/" element={<UserDashboard/>}></Route>
            <Route path="/user/my-tasks" element={<MyTasks/>}></Route>
            <Route path="/user/task-details/:id" element={<ViewTaskDetails/>}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

function Index(){
  return <>
    Hello
  </>
}

export default App
