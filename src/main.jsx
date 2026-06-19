import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
// import AuthContext from "./context/AuthContext.jsx";
// import TaskContext from "./context/TaskContext.jsx";

// Do not clear localStorage on load — preserve data for debugging
createRoot(document.getElementById("root")).render(
  <StrictMode>

    {/* <AuthContext>
      <TaskContext> */}
      <AuthProvider>
        <App />
        </AuthProvider>
      {/* </TaskContext>
    </AuthContext> */}

  </StrictMode>
);
