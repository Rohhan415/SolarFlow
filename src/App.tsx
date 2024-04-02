import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBarProvider } from "./contexts/NavigationContext";
import Homepage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <NavBarProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </NavBarProvider>
  );
}

export default App;
