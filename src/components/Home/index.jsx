import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Container, Grid} from '@material-ui/core';

import CardItem from '../Card'
import data from '../../data.js'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    title: {
        padding: theme.spacing(2),
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            height: 300
        }
      },
  
  }));

const Home =()=> {
const [dataItems, setDataItems] = useState(data)

const onDragEndHandler = (result)=>{
        const { destination, source } = result;
        if (!result.destination) return;
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
            }

        const items = Array.from(dataItems)
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setDataItems(items)
  }

    const classes = useStyles();

    const items = dataItems.map ((item, index)=>{
        return(
        <Grid key={index} item md={4} sm={4} xs={6}>
            <CardItem
            index= {index}
            item= {item}
            onDragEndHandler={onDragEndHandler}
            />
        </Grid>
        )
    }
    )
    
    return (
        <div className={classes.root}>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                            <p>Offers</p>
                        </Typography>
                    </Grid>
                        {items}
                </Grid>
            </Container>
        </div>
    )
}

export default Home