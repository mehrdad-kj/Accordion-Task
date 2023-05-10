import ListItem from "./ListItem";

const ListItems = ({ data }) => {
  return (
    <section>
      {data.map((each) => (
        <ListItem key={each.id} {...each} />
      ))}
    </section>
  );
};

export default ListItems;
