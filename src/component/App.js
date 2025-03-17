import React from "react";
import Header from "./Header/header";
import Detail from "./Detail";
import style from "./App.css";

export default function App() {
  return (
    <div class="container">
      <header className="header">
        <h3>Expanse Tracker</h3>
      </header>
      <Header />
      <Detail />
    </div>
  );
}
