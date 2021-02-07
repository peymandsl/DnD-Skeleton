import React,{useState, useEffect} from 'react'
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {Typography, CardContent, CardMedia, List, Link, Card} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  media: {
    width: "100%",
    paddingTop: '56.25%'
  },
  continue:{
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

const preventDefault = (event) => event.preventDefault();

const CardItem= ({item, onDragEndHandler})=> {
  const [loading, setLoading] = useState(true)
  const {content, image}=item
  useEffect(() => {
    setTimeout(
      () => setLoading(false), 
      2000
    );
  }, [])

  const classes = useStyles();

  return (
    <>
    <Card>
        <CardContent>
        {loading ?
      <Skeleton width="70%" height={50}/>
          :
          <Typography gutterBottom variant="h5" component="h2">
            {item.title}
            </Typography>}
            {loading ? 
      <Skeleton width="20%" height={20}/>
      :
            <Typography variant="body2" color="textSecondary" component="p">
              {item.location}
            </Typography>}
        </CardContent>
      <DragDropContext onDragEnd={onDragEndHandler}>
        <Droppable droppableId="ItemDroppable">
        {(provided) => {
         return (
          <List
          {...provided.droppableProps}
          ref={provided.innerRef}
          >
{ image.map((iamgeItem,index)=>{
  return(
          <Draggable key={iamgeItem.id} draggableId="ImagedraggableId" index={index}>
          {(provided) => (
            <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            >
              {loading ? 
      <Skeleton width="100%" height='300px' />
      :
            <CardMedia
            className={classes.media}
            image={iamgeItem.image}
            />}
          </div>
          )}
          </Draggable>)
          })}
{content.map((contentItem,index)=>{
  return(
  <Draggable key={contentItem.id} draggableId="ContentDraggableId" index={index}>
          {(provided) => (
            <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            >
            <CardContent>
            {loading ? 
      <Skeleton width="17%" height={20}/>
      :
      <div className={classes.continue}>
        <Typography variant="body2" color="initial" component="p" gutterBottom>
          Price:
        </Typography>
        <ArrowForwardIcon color="primary"/>
      </div>
      }
             { loading ? 
      <Skeleton width="19%" height={20}/>
      :
              <Typography variant="body2" color="initial" component="p">
                Min: {contentItem.min_price}
              </Typography>}
             { loading ? 
      <Skeleton width="18%" height={20}/>
      :
              <Typography variant="body2" color="initial" component="p">
                Max: {contentItem.max_price}
              </Typography>}
            </CardContent>
            <CardContent>
           { loading ? 
           <>
       <Skeleton animation="wave" height={20} style={{ marginBottom: 6 }} />
       <Skeleton animation="wave" height={20} width="80%" />
       </>
      :
              <Typography variant="body2"  color="initial" component="p">
                {contentItem.description}
              </Typography>}
            </CardContent>
            <CardContent>
           { loading ? 
      <Skeleton width="30%" height={25}/>
      :
      <Link href="#" variant="body2" color= "primary" onClick={preventDefault}>
      {contentItem.web_addres}
    </Link>
              }
            </CardContent>
          </div>
           )} 
          </Draggable>)
      }) }
        {provided.placeholder}
        </List>
        )
      }
    }
        </Droppable>
      </DragDropContext>
      </Card>
      </>
  )}

export default CardItem