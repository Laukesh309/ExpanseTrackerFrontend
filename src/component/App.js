import React from "react";
import style from "./App.css";

export default function App() {
  return (
    <div class="container">
      <header className="header">
        <h3>Expanse Tracker</h3>
      </header>
      <div class="headerContant">
        <div class="section">
          <div class="info">
            <label for="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div class="info">
            <label for="description">Description</label>
            <input type="text" id="description" />
          </div>
          <div class="info">
            <label for="price">Price</label>
            <input type="text" id="price" />
          </div>
          <div class="info">
            <label for="name">Expanse</label>
            <select>
              <option value="expanse">Expanse</option>
              <option value="contribute">Contribute</option>
            </select>
          </div>
          <div className="info">
            <button className="submit">Submit</button>
          </div>
        </div>
        <div class="section">
          <div class="expanseDetail">
            <h4>TotalExpanse</h4>
            <p>100</p>
          </div>
          <div class="expanseDetail">
            <h4>TotalContribution</h4>
            <p>100</p>
          </div>
          <div class="expanseDetail">
            <h4>Total</h4>
            <p>100</p>
          </div>
        </div>
      </div>
      <section className="contentContainer">
        <ul className="heading">
          <li>
            <h3>S/No</h3>
          </li>
          <li>
            <h3>Name</h3>
          </li>
          <li>
            <h3>OwnerName</h3>
          </li>
          <li>
            <h3>ExpanseType</h3>
          </li>
          <li>
            <h3>Price</h3>
          </li>
          <li>
            <h3>Edit</h3>
          </li>
          <li>
            <h3>Delete</h3>
          </li>
        </ul>
        <ul className="content">
          <li>S1</li>
          <li>Laukesh</li>
          <li>Prince Yadav</li>
          <li>Contribution</li>
          <li>10</li>
          <li>
            <img src="/Asset/image/edit.svg"></img>
          </li>
          <li>
            <img src="/Asset/image/delete.svg"></img>
          </li>
        </ul>
        <ul className="content">
          <li>2</li>
          <li>Laukesh</li>
          <li>Princeyadav</li>
          <li>Contribution</li>
          <li>50</li>
          <li>
            <img src="/Asset/image/edit.svg"></img>
          </li>
          <li>
            <img src="/Asset/image/delete.svg"></img>
          </li>
        </ul>
      </section>
    </div>
  );
}
