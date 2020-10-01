import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({ title, cases, total }) {
  return (
    <Card className="infoBox">
      <CardContent>
        {/* Title */}
        <Typography color="textSecondary" className="infoBox__title">
          {title}
        </Typography>
        {/* Cases */}
        <h2 className="infoBox__cases">{cases}</h2>
        {/* Total */}
        <Typography color="textSecondary" className="infoBox__total">
          {total}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
