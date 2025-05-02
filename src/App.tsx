import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";
import GlobalStyles from "./styles/GlobalStyle";

function App() {
  return (
    <CartProvider>
      <GlobalStyles />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;

// import React from "react";

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
//       <header className="bg-blue-600 w-full py-4 text-center text-white text-xl">
//         <h1>Welcome to Tailwind CSS</h1>
//       </header>

//       <main className="flex flex-col justify-center items-center py-8">
//         <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
//           <h2 className="text-2xl font-semibold mb-4">Tailwind is working!</h2>
//           <p className="text-gray-700 mb-6">
//             This is a simple test to check if Tailwind CSS is applied to this
//             app.
//           </p>
//           <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
//             Test Button
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default App;
