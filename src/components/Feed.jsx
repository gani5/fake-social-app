import React from 'react'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography } from '@mui/material'
import { ExpandMore, ExpandMoreOutlined, Favorite, MoreVert, Share } from '@mui/icons-material'
import { red } from '@mui/material/colors'
function Data() {
  return (
    <Box flex={4} p={2} >
      <Box marginTop={'64px'}>
      <Card >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="300px"
          image="https://source.unsplash.com/random"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Favorite />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
          <ExpandMore
            // expand={expanded}
            // onClick={}
            // aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreOutlined />
          </ExpandMore>
        </CardActions>
        
      </Card>
      <Card >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="John Cartes"
          subheader="October 21, 2021"
        />
        <CardMedia
          component="img"
          height="300px"
          image="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Favorite />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
          <ExpandMore
            // expand={expanded}
            // onClick={}
            // aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreOutlined />
          </ExpandMore>
        </CardActions>
        
      </Card>
      <Card >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Lucky champ"
          subheader="January 12, 2023"
        />
        <CardMedia
          component="img"
          height="300px"
          image="https://images.unsplash.com/photo-1588436706487-9d55d73a39e3"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Favorite />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
          <ExpandMore
            // expand={expanded}
            // onClick={}
            // aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreOutlined />
          </ExpandMore>
        </CardActions>
        
      </Card>
      <Card >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Gopi Krishna"
          subheader="December 4, 2022"
        />
        <CardMedia
          component="img"
          height="300px"
          image="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Favorite />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
          <ExpandMore
            // expand={expanded}
            // onClick={}
            // aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreOutlined />
          </ExpandMore>
        </CardActions>
        
      </Card>
      <Card >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="August 12, 2022"
        />
        <CardMedia
          component="img"
          height="300px"
          image="https://images.unsplash.com/photo-1533827432537-70133748f5c8"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Favorite />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
          <ExpandMore
            // expand={expanded}
            // onClick={}
            // aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreOutlined />
          </ExpandMore>
        </CardActions>
        
      </Card>
      <Card >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="300px"
          image="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Favorite />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
          <ExpandMore
            // expand={expanded}
            // onClick={}
            // aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreOutlined />
          </ExpandMore>
        </CardActions>
        
      </Card>
      <Card >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="300px"
          image="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Favorite />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
          <ExpandMore
            // expand={expanded}
            // onClick={}
            // aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreOutlined />
          </ExpandMore>
        </CardActions>
        
      </Card>
      <Card >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="300px"
          image="https://images.unsplash.com/photo-1589118949245-7d38baf380d6"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Favorite />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
          <ExpandMore
            // expand={expanded}
            // onClick={}
            // aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreOutlined />
          </ExpandMore>
        </CardActions>
        
      </Card>
      <Card >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="300px"
          image="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Favorite />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
          <ExpandMore
            // expand={expanded}
            // onClick={}
            // aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreOutlined />
          </ExpandMore>
        </CardActions>
        
      </Card>
      <Card >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="300px"
          image="https://source.unsplash.com/random"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Favorite />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
          <ExpandMore
            // expand={expanded}
            // onClick={}
            // aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreOutlined />
          </ExpandMore>
        </CardActions>
        
      </Card>
      </Box>
    </Box>
  )
}

export default Data
