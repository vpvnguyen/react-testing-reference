import { useRandomUsers } from "../hooks/useRandomUsers";

const style = {
  container: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  card: {
    padding: "2rem",
    margin: "1rem",
    border: "1px solid #FFF",
    borderRadius: "1rem",
  },
};
export const UsersList = () => {
  const { users, loading, error } = useRandomUsers(5);

  return (
    <div style={style.container}>
      {loading && <div>Loading users...</div>}

      {!loading &&
        users.map((user, index) => (
          <div style={style.card} key={`user-${index}`}>
            <div>{user.name.first}</div>
            <div>{user.name.last}</div>
          </div>
        ))}

      {error && <div>There was an error loading users.</div>}
    </div>
  );
};
