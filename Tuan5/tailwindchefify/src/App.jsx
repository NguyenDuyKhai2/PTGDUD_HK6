import React from "react"
import Header from "./component/header"
import Footer from "./component/footer"
import Content from "./component/content"

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-layout">
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;

