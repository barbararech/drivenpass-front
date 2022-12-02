import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { UserProvider } from './contexts/UserContext';

import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
// import Dashboard from "./pages/Dashboard";
// import PasswordType from "./pages/PasswordType";
// import PasswordData from "./pages/PasswordData";
// import NewEntry from "./pages/NewEntry";

import useToken from "./hooks/useToken";

export default function App() {
  return (
    <>
      <ToastContainer />
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/" element={<SignIn />} />
            {/* <Route
              path="/dashboard"
              element={
                <ProtectedRouteGuard>
                  <Dashboard />
                </ProtectedRouteGuard>
              }
            >
              <Route path="passwordType" element={<PasswordType />} />
              <Route path="passwordData" element={<PasswordData />} />
              <Route path="newEntry" element={<NewEntry />} /> */}
            {/* </Route> */}
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
}

// function ProtectedRouteGuard({ children }) {
//   const token = useToken();

//   if (!token) {
//     return <Navigate to="/sign-in" />;
//   }

//   return <>{children}</>;
// }
