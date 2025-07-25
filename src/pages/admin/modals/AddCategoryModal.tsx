import { Backdrop, Box, Modal } from "@mui/material";
import React, { useState } from "react";
import Input from "../../../components/common/Input";
import PrimaryBtn from "../../../components/common/PrimaryBtn";
import axios from "axios";
import { showToastMessage } from "../../../utils/helper";

const style = {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
};

const initial_fields = {
  category: "",
};

type ItemType = { item: string; price: number };
const AddCategoryModal = ({ open, handleClose, fetchData }: any) => {
  const [params, setParams] = useState(initial_fields);
  const [itemsList, setItemsList] = useState<ItemType[]>([]);
  const onCloseClick = () => {
    handleClose();
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setParams((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddItems = () => {
    const temp = { item: "", price: 0 };
    const newList = [...itemsList, temp];
    setItemsList(newList);
  };

  const handleItemsList = (
    name: keyof ItemType,
    index: number,
    value: string | number
  ) => {
    const temp = [...itemsList];
    if (name === "price") {
      temp[index].price = Number(value);
    } else {
      temp[index].item = value as string;
    }
    setItemsList(temp);
  };

  const handleDelete = (index: number) => {
    const temp = [...itemsList];
    const newList = temp.filter((item, ind) => ind !== index);
    setItemsList(newList);
  };
  const handleSubmit = () => {
    const payload = {
      category_name: params?.category,
      itemslist: itemsList.length > 0 ? [...itemsList] : {},
    };

    axios
      .post("http://localhost:3333/categories", payload)
      .then((response) => {
        const data = response.data;
        console.log(data, "Checkresponse");
        // showToastMessage(response, "success");
        fetchData();
        onCloseClick();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="">
      <Modal
        open={open}
        onClose={onCloseClick}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableEnforceFocus
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box
          sx={style}
          style={{
            outline: "none",
          }}
        >
          <div className="lg:w-[525px] w-[90vw] bg-white min-h-[205px] max-h-[600px] lg:p-8 p-6 rounded-2xl flex flex-col gap-4 items-center overflow-auto">
            <div className="flex justify-between items-center w-full">
              <h2 className="lg:text-lg text-lg font-semibold">Add Category</h2>
              <img
                src="/icons/Close.svg"
                alt="close"
                onClick={onCloseClick}
                className="cursor-pointer"
              />
            </div>

            <div className="w-full">
              <Input
                name="category"
                label="Category"
                value={params?.category}
                handleChange={handleChange}
              />
            </div>

            {itemsList.length > 0 &&
              itemsList.map((it: any, index: number) => (
                <div className="grid grid-cols-7 gap-3 items-center">
                  <div className="col-span-3">
                    <Input
                      name="item"
                      label="Item Name"
                      value={it.item}
                      handleChange={(e: any) =>
                        handleItemsList("item", index, e.target.value)
                      }
                    />
                  </div>
                  <div className="col-span-3">
                    <Input
                      name="price"
                      label="Price"
                      value={it.price}
                      handleChange={(e: any) =>
                        handleItemsList("price", index, e.target.value)
                      }
                    />
                  </div>
                  <div className="col-span-1">
                    <button
                      className="text-sm font-semibold w-full flex justify-start gap-2 items-center"
                      onClick={() => handleDelete(index)}
                    >
                      <img src="/icons/Delete.svg" alt="delete" className="" />
                    </button>
                  </div>
                </div>
              ))}

            <button
              className="text-sm font-semibold w-full flex justify-start gap-2 items-center"
              onClick={() => handleAddItems()}
            >
              <img src="/icons/Add.svg" alt="add" className="w-4 h-4" />
              <p> Add Items</p>
            </button>

            <div className="flex justify-end w-full gap-4">
              <PrimaryBtn
                label="Cancel"
                bgColor={"#765996"}
                onClick={onCloseClick}
                width={"w-fit"}
              />
              <PrimaryBtn
                label="Create"
                bgColor={"#765996"}
                onClick={handleSubmit}
                width={"w-fit"}
              />
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AddCategoryModal;
