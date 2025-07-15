import React, { useEffect, useState } from "react";
import PrimaryBtn from "../../components/common/PrimaryBtn";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
} from "@mui/material";
import axios from "axios";
import AddMenuModal from "./modals/AddMenuModal";
import AddCategoryModal from "./modals/AddCategoryModal";
import SelectInput from "../../components/common/SelectInput";
import EditMenuItem from "./modals/EditMenuItem";
import { showToastMessage } from "../../utils/helper";

const initial_fields = {
  category: "",
};
const menuItems: any = {
  Starters: [
    { id: 200, name: "Samosa", price: 50 },
    { id: 201, name: "Baby Corn", price: 100 },
    { id: 202, name: "Gobi Manchurian", price: 110 },
    { id: 203, name: "Mushroom Manchurian", price: 120 },
    { id: 204, name: "Chilli Gobi", price: 150 },
    { id: 205, name: "Chilli Mushroom", price: 180 },
    { id: 206, name: "Chilli Panner", price: 200 },
  ],
  "Main Course": [
    { id: 207, name: "Veg Curry", price: 100 },
    { id: 208, name: "Matar Panner", price: 120 },
    { id: 209, name: "kadai Panner", price: 120 },
    { id: 210, name: "Aloo Mushroom", price: 150 },
    { id: 211, name: "Dal Tadka", price: 160 },
    { id: 212, name: "Dal Makhani", price: 169 },
  ],
  Rices: [
    { id: 213, name: "Plain Rice", price: 70 },
    { id: 214, name: "Jeera Rice", price: 100 },
    { id: 215, name: "Pulihora", price: 120 },
    { id: 216, name: "Mushroom Rice", price: 130 },
    { id: 217, name: "Veg Fried Rice", price: 130 },
    { id: 218, name: "Panner Rice", price: 140 },
  ],
  Shakes: [
    { id: 219, name: "Banana Shake", price: 60 },
    { id: 220, name: "Apple Shake", price: 70 },
    { id: 221, name: "Mango Shake", price: 70 },
    { id: 222, name: "vanilla Shake", price: 80 },
    { id: 223, name: "Oreo Shake", price: 80 },
    { id: 224, name: "Butterscotch Shake", price: 90 },
    { id: 225, name: "Kiwi Shake", price: 100 },
    { id: 226, name: "Dry Fruits Shake", price: 120 },
  ],
  Juices: [
    { id: 227, name: "Lemonaid", price: 40 },
    { id: 228, name: "Butter Milk", price: 40 },
    { id: 229, name: "Watermelon Juice", price: 50 },
  ],
};
const MenuManagement = () => {
  const [menuData, setMenuData] = useState<any>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [showFilters, setShowFilters] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [params, setParams] = useState(initial_fields);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setParams((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [mStates, setMStates] = useState({
    category: { isOpen: false },
    menu: { isOpen: false },
    edit_menu: { isOpen: false, data: {} },
  });

  const handleDeleteMenu = (id: number) => {
    axios
      .delete(`http://localhost:3333/menus/${id}`)
      .then((response) => {
        const data = response.data;
        console.log(response, data?.message, "deleteItemCheck");
        showToastMessage(data?.message, "success");
        fetchData(params);
      })
      .catch((err) => console.log(err));

    fetchData(params);
  };
  const fetchData = async (params: any) => {
    const cat = params?.category ?? "";
    await axios
      .get(`http://localhost:3333/menus?category=${cat}`)
      .then((response) => {
        const data = response.data;
        setMenuData(data);
      })
      .catch((err) => console.log(err));
  };

  const fetchCategories = async () => {
    await axios
      .get("http://localhost:3333/categories")
      .then((response) => {
        const data = response.data;
        const catList = data?.map((item: any) => ({
          id: item?.id,
          name: item?.categoryName,
        }));
        setCategoryList(catList);
        console.log(data, "checkData");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData(params);
    fetchCategories();
  }, []);

  const handleOpen = (type: any) => {
    const temp = { ...mStates } as any;
    temp[type].isOpen = !temp[type].isOpen;
    if (type === "edit_menu") {
      temp[type].data = {};
    }
    setMStates(temp);
  };

  const handleEdit = (item: any, type: any) => {
    const temp = { ...mStates } as any;
    temp[type].isOpen = !temp[type].isOpen;
    temp[type].data = item;
    setMStates(temp);
  };

  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="flex gap-6 justify-between items-center">
        <h1 className="font-semibold lg:text-xl text-[#765996]">
          Menu Listing
        </h1>
        <div className="flex gap-6">
          <button onClick={() => setShowFilters(!showFilters)}>
            <img
              src="/icons/Filter.svg"
              className={`border border-[#765996] p-3 rounded-lg sm:w-10 sm:h-10 ${
                showFilters ? "bg-[#7f6699]" : ""
              }`}
              alt="filter"
            />
          </button>
          <PrimaryBtn
            label={"Add Category"}
            bgColor={"#765996"}
            onClick={() => handleOpen("category")}
            width={"w-fit"}
          />
          <PrimaryBtn
            label={"Add Item(s)"}
            bgColor={"#765996"}
            onClick={() => handleOpen("menu")}
            width={"w-fit"}
          />
        </div>
      </div>

      {showFilters && (
        <div className="flex flex-wrap gap-4">
          <div className="w-[250px]">
            <SelectInput
              label={"Category"}
              name="category"
              value={params?.category}
              handleChange={handleChange}
              options={categoryList}
              height={"45px"}
            />
          </div>
          <PrimaryBtn
            label="Clear All"
            width={"w-fit"}
            bgColor={"#765996"}
            onClick={() => setParams(initial_fields)}
          />
          <PrimaryBtn
            label="Search"
            width={"w-fit"}
            bgColor={"#765996"}
            onClick={() => fetchData(params)}
          />
        </div>
      )}

      <Paper sx={{ width: "100%" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table sx={{ minWidth: 700 }} aria-label="custom pagination table">
            <TableHead sx={{ backgroundColor: "#765996" }}>
              <TableRow>
                <TableCell align="left" sx={{ color: "#FFFFFF" }}>
                  S.No.
                </TableCell>
                <TableCell align="left" sx={{ color: "#FFFFFF" }}>
                  Category
                </TableCell>
                <TableCell align="left" sx={{ color: "#FFFFFF" }}>
                  Item Name
                </TableCell>
                <TableCell align="left" sx={{ color: "#FFFFFF" }}>
                  Price
                </TableCell>
                <TableCell align="left" sx={{ color: "#FFFFFF" }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {menuData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item: any, index: number) => (
                  <TableRow>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{item?.category?.categoryName}</TableCell>
                    <TableCell>{item?.name}</TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell
                      sx={{
                        display: "flex",
                        gap: "6px",
                        alignItems: "center",
                      }}
                    >
                      <Tooltip title="Edit" placement="top">
                        <img
                          src="/icons/Edit.svg"
                          onClick={() => handleEdit(item, "edit_menu")}
                          className="cursor-pointer"
                          alt="edit"
                        />
                      </Tooltip>
                      <Tooltip title="Delete" placement="top">
                        <img
                          src="/icons/Delete.svg"
                          onClick={() => handleDeleteMenu(item.id)}
                          className="cursor-pointer"
                          alt="delete"
                        />
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={menuData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      {mStates.menu.isOpen && (
        <AddMenuModal
          open={mStates.menu.isOpen}
          handleClose={() => handleOpen("menu")}
          categoryList={categoryList}
          fetchData={() => fetchData(params)}
        />
      )}
      {mStates.category.isOpen && (
        <AddCategoryModal
          open={mStates.category.isOpen}
          handleClose={() => handleOpen("category")}
          fetchData={() => fetchData(params)}
        />
      )}
      {mStates.edit_menu.isOpen && (
        <EditMenuItem
          open={mStates.edit_menu.isOpen}
          data={mStates.edit_menu.data}
          handleClose={() => handleOpen("edit_menu")}
          categoryList={categoryList}
        />
      )}
    </div>
  );
};

export default MenuManagement;
