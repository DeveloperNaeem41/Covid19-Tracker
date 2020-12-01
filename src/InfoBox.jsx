import React from 'react';
import './infoBox.css';
import { Card, CardContent, Typography } from "@material-ui/core";

const InfoBox = ({title,cases,isRed,active,total,...props}) => {

    return (

        <Card onClick={props.onClick} className={`infoBox ${active && "infoBox--selected"} ${
            isRed && "infoBox--red"
          }`}>
            <CardContent>
                <Typography className="infoBox_title" color="textSecondary">
                    {title}
                </Typography>
                <Typography  className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
                    <h2>{cases} </h2>
                </Typography>
                <Typography className="infoBox_Total"  color="textSecondary">
                    {total} Total
                </Typography>
            </CardContent>
        </Card>

    )
}

export default InfoBox
