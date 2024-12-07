// import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import HomePage from "./components/HomePage";
// import UploadPage from "./components/UploadPage";
// import EditPage from "./components/EditPage";
// import Layout from "./components/Layout";

function App() {
  return (
    // <BrowserRouter>
    //   <Router>
    //     <div className="font-Parkinsans">
    //       <Routes>
    //         <Route path="/" element={<Layout />}>
    //           <Route
    //             index
    //             element={
    //               <>
    //                 <HomePage />
    //               </>
    //             }
    //           />
    //           <Route
    //             path="upload"
    //             element={
    //               <>
    //                 <UploadPage />
    //               </>
    //             }
    //           />
    //           <Route
    //             path="edit"
    //             element={
    //               <>
    //                 <EditPage />
    //               </>
    //             }
    //           />
    //         </Route>
    //       </Routes>
    //     </div>
    //   </Router>
    // </BrowserRouter>
    <HomePage />
  );
}

export default App;
