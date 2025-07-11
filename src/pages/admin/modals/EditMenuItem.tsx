import { Backdrop, Box, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import SelectInput from "../../../components/common/SelectInput";
import Input from "../../../components/common/Input";
import PrimaryBtn from "../../../components/common/PrimaryBtn";
import axios from "axios";

const initial_states = {
  item: "",
  category: "",
  price: "",
};

const style = {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
};

const EditMenuItem = ({ open, data, handleClose, categoryList }: any) => {
  console.log(data, "foreditcheck");
  const [params, setParams] = useState(initial_states);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setParams((prev) => ({ ...prev, [name]: value }));
  };

  const onCloseClick = () => {
    handleClose();
  };

  useEffect(() => {
    setParams((prev) => ({
      ...prev,
      category: data.category.categoryName,
      item: data.name,
      price: data.price,
    }));
  }, [data]);

  const handleSubmit = () => {
    const payload = {
      item: params?.item,
      category: params?.category,
      price: params?.price,
    };
    axios
      .put(`http://localhost:3333/menus?${data.id}`, payload)
      .then((response) => console.log(response))
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
          <div className="lg:w-[525px] w-[90vw] bg-white min-h-[205px] lg:p-8 p-6 rounded-2xl flex flex-col gap-4 items-center">
            <div className="flex justify-between items-center w-full">
              <h2 className="lg:text-lg text-lg font-semibold">Add Item</h2>
              <img
                src="/icons/Close.svg"
                alt="close"
                onClick={onCloseClick}
                className="cursor-pointer"
              />
            </div>

            <div className="w-full flex flex-col gap-4">
              <SelectInput
                label={"Category"}
                name="category"
                value={params?.category}
                handleChange={handleChange}
                options={categoryList}
              />

              <div className="grid grid-cols-6 gap-3 items-center">
                <div className="col-span-3">
                  <Input
                    name="item"
                    label="Item Name"
                    value={params?.item}
                    handleChange={handleChange}
                  />
                </div>
                <div className="col-span-3">
                  <Input
                    name="price"
                    label="Price"
                    value={params.price}
                    handleChange={handleChange}
                  />
                </div>
              </div>
            </div>

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
export default EditMenuItem;
