import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';


export default function ShipCard({ship}) {
  return (
    <Card sx={{ maxWidth: 280, minWidth:280, maxHeight: 280, minHeight:280, backgroundColor:'gray', borderRadius:10 }}>
      <CardActionArea>
        <CardMedia 
        sx={{borderRadius:6 }}
          component="img"
          height="140"
          image ="/public/images/ship.jpeg"
          alt="ship"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" sx={{fontSize:20, fontWeight:600, lineHeight:1}}>
            {ship.name}
          </Typography>
          <br />
          <Typography variant="body2" sx={{ color: 'text.secondary',lineHeight:1.5}}>
            <b>Model:</b> {ship.model}
            <br />
            <b>Hyperdrive Rating:</b> {ship.hyperdrive_rating}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

