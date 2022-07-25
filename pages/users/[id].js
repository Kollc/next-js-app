import MainContainer from "../../components/MainContainer";

export default function ({ user }) {
  return (
    <MainContainer>
      <h1>Пользователь {user.name}</h1>
    </MainContainer>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.query.id}`
  );
  const user = await response.json();

  return {
    props: { user },
  };
}
