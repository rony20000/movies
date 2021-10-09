import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      maxWidth: 400,
      margin: "0 auto"
    },
    media: {
      height: 400,
    },
});

const CustomCard = ({plot, poster, country, title}) => {
    const classes = useStyles()
    
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={poster}
                    title="Contemplative Reptile"
                    className={classes.media}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography gutterBottom variant="body1" component="h3">
                        Country: {country}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {plot}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CustomCard
