import React, { useEffect, useState } from "react";
import {
  useDeleteExpanseTrackerByIdMutation,
  useGetExpanseTrackerDataQuery,
} from "../Redux/Api";
import { updateExpanseTrackerData } from "../Redux/reducer/expanseTrackerReducer";
import { useDispatch, useSelector } from "react-redux";

export default function Detail() {
  const { data, error, isLoading } = useGetExpanseTrackerDataQuery();
  const [deleteExpanseTrackerById, resultInfo] =
    useDeleteExpanseTrackerByIdMutation();
  const currentExpanseData = useSelector(
    (state) => state.expanseTrackerManager
  );
  const dispatch = useDispatch();

  function deleteExpanseById(expanseId) {
    deleteExpanseTrackerById(expanseId)
      .then((data) => {
        console.log("expanses deleted successfully");
      })
      .catch((error) => {
        console.log("error arise while deleted by id");
      });
  }
  const isEditActive = currentExpanseData.isEditEnable;
  return (
    <section
      className={
        isEditActive ? "contentContainer editActive" : "contentContainer"
      }
    >
      <ul className="heading">
        <li>
          <h3>S/No</h3>
        </li>
        <li>
          <h3>Name</h3>
        </li>
        <li>
          <h3>Description</h3>
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
      {data?.data?.map((item, index) => {
        return (
          <ul className="content">
            <li>{index + 1}</li>
            <li>{item.name}</li>
            <li>{item.description}</li>
            <li>{item.owner}</li>
            <li>{item.transactionType}</li>
            <li>{item.price}</li>
            <li
              className="edit"
              onClick={() => {
                dispatch(
                  updateExpanseTrackerData({
                    name: item.name,
                    description: item.description,
                    price: item.price,
                    transactionType: item.transactionType,
                    owner: "PrinceYadav",
                    isEditEnable: true,
                    itemId: item.id,
                  })
                );
              }}
            >
              <img src="/Asset/image/edit.svg"></img>
            </li>
            <li
              className="delete"
              onClick={() => {
                deleteExpanseById(item.id);
              }}
            >
              <img src="/Asset/image/delete.svg"></img>
            </li>
          </ul>
        );
      })}
    </section>
  );
}
