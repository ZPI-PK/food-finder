import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import Add from "@material-ui/icons/Add";
import React, { FC } from "react";

interface DishListProps {
  dishes: any[];
}

const DishList: FC<DishListProps> = ({ dishes }) => {
  return (
    <List>
      {dishes.map((d) => (
        <ListItem key={d.id}>
          <Card>
            <CardHeader title={d.name}></CardHeader>
            <CardContent>
              {d.description}
              <Typography
                component="h5"
                variant="h5"
                style={{ paddingTop: "1em" }}
              >
                {d.price}PLN
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton>
                <Add></Add>
              </IconButton>
            </CardActions>
          </Card>
        </ListItem>
      ))}
    </List>
  );
};
export default DishList;
