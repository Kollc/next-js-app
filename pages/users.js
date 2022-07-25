import Link from "next/link";
import MainContainer from "../components/MainContainer";
import styles from "./../styles/users.module.scss";

const Users = ({ users }) => {
  return (
    <MainContainer>
      <div className={styles.users}>
        <h1>Users Page</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link href={`/users/${user.id}`}>
                <a>{user.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: { users },
  };
}
