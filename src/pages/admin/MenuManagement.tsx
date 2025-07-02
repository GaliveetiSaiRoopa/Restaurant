import React from "react";
import PrimaryBtn from "../../components/common/PrimaryBtn";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const MenuManagement = () => {
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
  return (
    <div className="p-6">
      <div className="flex gap-6 justify-end">
        <PrimaryBtn label={"Add Category"} />
        <PrimaryBtn label={"Add New Item"} />
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="custom pagination table">
          <TableHead sx={{ backgroundColor: "#000000" }}>
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
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(menuItems).map(([category, item]) => (
              <TableRow
                sx={{
                  textAlign: "center",
                }}
              ></TableRow>
            ))}

            {/* {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )} */}
          </TableBody>
          {/* <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={ordersData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                slotProps={{
                  select: {
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  },
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter> */}
        </Table>
      </TableContainer>
    </div>
  );
};

export default MenuManagement;
