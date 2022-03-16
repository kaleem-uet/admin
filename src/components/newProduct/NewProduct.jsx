import React from "react";
import "./newProduct.css";
function NewProduct() {
  return (
    <div className="newproduct">
      <h1 className="addProductTitle">New Touter</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="khan" />
        </div>
        <div className="addProductItem">
          <label>Email</label>
          <input type="text" placeholder="khan@gmail.com" />
        </div>
        <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}

export default NewProduct;
