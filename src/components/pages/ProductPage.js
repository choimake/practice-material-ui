import React from "react";
import GenericTemplate from "../templates/GenericTemplate";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

const createData = (name, category, weight, price) => {
  return { name, category, weight, price };
};

const rows = [
  createData("チョコレート", "お菓子", 100, 120),
  createData("ケーキ", "お菓子", 400, 480),
  createData("りんご", "フルーツ", 500, 360),
  createData("バナナ", "フルーツ", 200, 300),
  createData("みかん", "フルーツ", 250, 180),
];

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ProductPage = () => {
  const classes = useStyles();

  return (
    <GenericTemplate title="ProductPage">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>商品名</TableCell>
              <TableCell align="right">カテゴリー</TableCell>
              <TableCell align="right">重量(g)</TableCell>
              <TableCell align="right">価格(円)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.category}</TableCell>
                <TableCell align="right">{row.weight}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </GenericTemplate>
  );
};

export default ProductPage;
