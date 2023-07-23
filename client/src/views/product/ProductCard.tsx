import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Product } from '../../models/product';

const ProductCard: React.FC<Product> = ({name, description, imageUrl}) =>{
  return (
    <Card sx={{ minWidth: 300, height:300, marginLeft:2, marginRight: 2 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={imageUrl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to cart</Button>
        <Button size="small">Like</Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;