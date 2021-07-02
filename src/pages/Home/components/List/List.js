import ListItem from "@material-ui/core/ListItem";
import { List as BaseList } from "./List.style";

const List = ({ places = [], onItemClick }) => {
  return (
    <BaseList>
      {places.map((place) => (
        <ListItem button onClick={() => onItemClick(place.id)}>
          {place.title}
        </ListItem>
      ))}
    </BaseList>
  );
};

export default List;
