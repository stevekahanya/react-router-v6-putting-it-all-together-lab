import "./index.css"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom" // Add this import
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))
// Wrap <App /> with <BrowserRouter>
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)