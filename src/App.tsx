import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import PageNotFound from "./pages/PageNotFound";
import { CombinedProvider } from "./contexts/globalProvider";

function App() {
  return (
    <CombinedProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CombinedProvider>
  );
}

export default App;
