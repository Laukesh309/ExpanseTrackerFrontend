import React, { useEffect, useState } from "react";
import {
  useAddExpanseTrackerDataMutation,
  useGetExpanseTrackerDataQuery,
  useEditExpanseTrackerByIdMutation,
} from "../Redux/Api";
import { updateExpanseTrackerData } from "../Redux/reducer/expanseTrackerReducer";
import { useSelector, useDispatch } from "react-redux";

export default function header() {
  const [addExpanseData, { isLoading }] = useAddExpanseTrackerDataMutation();
  const [editExpanseData] = useEditExpanseTrackerByIdMutation();
  const currentExpanseData = useSelector(
    (state) => state.expanseTrackerManager
  );
  const dispatch = useDispatch();
  const { data, error } = useGetExpanseTrackerDataQuery();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [transactionType, setTransactionType] = useState("contribution");
  const [owner, setOwner] = useState("PrinceYadav");
  const [isEditEnable, setIsEditEnable] = useState(false);
  function handleForSubmit() {
    let userInfoPayload = {
      name,
      description,
      price,
      transactionType,
      owner,
    };
    addExpanseData(userInfoPayload)
      .then((data) => {
        dispatch(
          updateExpanseTrackerData({
            name: "",
            description: "",
            price: "",
            transactionType: "",
            owner: "PrinceYadav",
            isEditEnable: false,
            itemId: "",
          })
        );
        console.log("data added successfully", data);
      })
      .catch((error) => {
        console.log("\n\n\n this is error ", error);
      });
  }
  function handleForEdit() {
    let expanseId = currentExpanseData.itemId;
    let editUserPayLoad = {
      name,
      description,
      price,
      transactionType,
      owner,
      id: expanseId,
    };
    editExpanseData({ expanseId, editUserPayLoad })
      .then((data) => {
        dispatch(
          updateExpanseTrackerData({
            name: "",
            description: "",
            price: "",
            transactionType: "",
            owner: "PrinceYadav",
            isEditEnable: false,
            itemId: "",
          })
        );
      })
      .catch((error) => {
        console.log("\n\n\n this is error ");
      });
  }
  useEffect(() => {
    const { name, description, price, transactionType, owner, isEditEnable } =
      currentExpanseData;
    setName(name);
    setDescription(description);
    setPrice(price);
    setTransactionType(transactionType);
    setOwner(owner);
    setIsEditEnable(isEditEnable);
  }, [currentExpanseData]);
  function checkDisable() {
    if (name && description && price && transactionType && owner) {
      return false;
    }
    return true;
  }
  return (
    <>
      <div class="headerContant">
        <div class="section">
          <div class="info">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter Name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div class="info">
            <label for="description">Description</label>
            <input
              type="text"
              id="description"
              placeholder="Enter Description"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </div>
          <div class="info">
            <label for="price">Price</label>
            <input
              type="text"
              id="price"
              placeholder="Enter Price"
              value={price}
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </div>
          <div class="info">
            <label for="name">Expanse</label>
            <select
              value={transactionType}
              onChange={(event) => {
                setTransactionType(event.target.value);
              }}
            >
              <option value="expanse">Expanse</option>
              <option value="contribution">Contribution</option>
            </select>
          </div>
          <div className="info">
            {isEditEnable ? (
              <div className="editContainer">
                <button
                  className="edit"
                  onClick={() => {
                    handleForEdit();
                  }}
                >
                  Edit
                </button>
                <button
                  className="cancel"
                  onClick={() => {
                    dispatch(
                      updateExpanseTrackerData({
                        name: "",
                        description: "",
                        price: "",
                        transactionType: "",
                        owner: "PrinceYadav",
                        isEditEnable: false,
                      })
                    );
                  }}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                className={checkDisable() ? "submit active" : "submit"}
                onClick={handleForSubmit}
              >
                Submit
              </button>
            )}
          </div>
        </div>
        <div class="section">
          <div class="expanseDetail">
            <h4>TotalExpanse</h4>
            <p>{data?.totalExpanses}</p>
          </div>
          <div class="expanseDetail">
            <h4>TotalContribution</h4>
            <p>{data?.totalContribution}</p>
          </div>
          <div class="expanseDetail">
            <h4>Total</h4>
            <p>{data?.totalPrice}</p>
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="loaderContainer">
          <div className="loader"></div>
        </div>
      )}
    </>
  );
}
