import React, { useState } from "react";
import SelectInput from "../../components/common/SelectInput";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TablePaginationActions,
  TableRow,
} from "@mui/material";
const initial_states = { table_no: "", order_id: "", status: "" };
const Orders = () => {
  const [params, setParams] = useState(initial_states);
  const [page, setPage] = useState(0);
  const [ordersData, setOrdersData] = useState([
    {
      table_no: 1,
      id: 1,
      name: "SaiRoopa",
      phone: "932234322",
      items: [
        { item_id: 211, name: "Pizza", quantity: 3, price: 200 },
        { item_id: 200, name: "Idly", quantity: 1, price: 60 },
      ],
      status: "Placed",
    },
    {
      table_no: 2,
      id: 2,
      name: "Roopa",
      phone: "822234322",
      items: [
        { item_id: 215, name: "Dosa", quantity: 1, price: 70 },
        { item_id: 200, name: "Idly", quantity: 1, price: 60 },
      ],
      status: "Placed",
    },
  ]);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - ordersData.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setParams((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="flex flex-col gap-6 p-8">
      <h1 className="font-bold text-2xl">Order Details</h1>
      <div className="flex gap-4">
        <SelectInput
          name="table_no"
          options={[
            { id: 1, name: "1" },
            { id: 2, name: "2" },
            { id: 3, name: "3" },
            { id: 4, name: "4" },
            { id: 5, name: "5" },
          ]}
          value={params?.table_no}
          handleChange={handleChange}
          bgColor={"#E5E7EB"}
          label={"Table No"}
        />
        <SelectInput
          name="order_id"
          options={[
            { id: 1, name: "1" },
            { id: 2, name: "2" },
            { id: 3, name: "3" },
            { id: 4, name: "4" },
            { id: 5, name: "5" },
          ]}
          value={params?.order_id}
          handleChange={handleChange}
          bgColor={"#E5E7EB"}
          label={"Order ID"}
        />
        <SelectInput
          name="status"
          options={[
            { id: "Placed", name: "Placed" },
            { id: "Delivered", name: "Delivered" },
          ]}
          value={params?.status}
          handleChange={handleChange}
          bgColor={"#E5E7EB"}
          label={"Status"}
        />
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="custom pagination table">
          <TableHead sx={{ backgroundColor: "#000000" }}>
            <TableRow>
              <TableCell align="left" sx={{ color: "#FFFFFF" }}>
                S.No.
              </TableCell>
              <TableCell align="left" sx={{ color: "#FFFFFF" }}>
                Table No.
              </TableCell>
              <TableCell align="left" sx={{ color: "#FFFFFF" }}>
                Order ID
              </TableCell>
              <TableCell align="left" sx={{ color: "#FFFFFF" }}>
                Name
              </TableCell>
              <TableCell align="left" sx={{ color: "#FFFFFF" }}>
                Phone Number
              </TableCell>
              <TableCell align="left" sx={{ color: "#FFFFFF" }}>
                Item Details
              </TableCell>
              <TableCell align="left" sx={{ color: "#FFFFFF" }}>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? ordersData.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : ordersData
            ).map((item, index) => (
              <TableRow
                key={item.id}
                sx={{
                  textAlign: "center",
                }}
              >
                <TableCell component="th" scope="row" align="left">
                  {index + 1}.
                </TableCell>
                <TableCell align="left">{item.table_no}</TableCell>
                <TableCell align="left">{item.id}</TableCell>
                <TableCell align="left">{item.name}</TableCell>
                <TableCell align="left">{item.phone ?? "-"}</TableCell>
                <TableCell align="left">
                  {item.items.map((it) => (
                    <div className="">
                      {it.name},{it.quantity}, {it.price}
                    </div>
                  ))}
                </TableCell>
                <TableCell align="left">{item.status}</TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
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
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Orders;
