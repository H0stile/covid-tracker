import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({ title, cases, isBlack, isRed, total, active, ...props }) {
  return (
    // Gives the onClick ability to the infobox component
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      } ${isBlack && "infoBox--black"}`}
    >
      <CardContent>
        {/* Title */}
        <Typography color="textSecondary" className="infoBox__title">
          {title}
        </Typography>
        {/* Cases */}
        <h2
          className={`infoBox__cases ${!isRed && "infoBox__cases--green"} ${
            isBlack && "infoBox__cases--black"
          }`}
        >
          {cases}
        </h2>
        {/* Total */}
        <Typography color="textSecondary" className="infoBox__total">
          {total}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
