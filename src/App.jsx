import { User } from "./User";
import { Card } from "./components/Card/Card";

const user1 = {
  photoSrc: "https://randomuser.me/api/portraits/women/32.jpg",
  firstName: "Elaine",
  lastName: "Little",
  email: "elaine.little@example.com",
  birthDay: "7/7/1998",
  address: "454 E Center St",
  phone: "(994) 267-6031",
  gender: "female",
};
const user2 = {
  firstName: "Clinton",
  lastName: "Franklin",
  email: "clinton.franklin@example.com",
  birthDay: "12/6/1963",
  address: "273 Valley View Ln",
  phone: "(584) 739-6815",
  photoSrc: "https://randomuser.me/api/portraits/men/46.jpg",
  gender: "male",
};
const user3 = {
  firstName: "Allen",
  lastName: "Baker",
  email: "allen.baker@example.com",
  birthDay: "9/5/1980",
  address: "2583 Cackson St",
  phone: "(414) 948-3759",
  photoSrc: "https://randomuser.me/api/portraits/men/54.jpg",
  gender: "male",
};
const user4 = {
  photoSrc: "https://randomuser.me/api/portraits/women/91.jpg",
  firstName: "Jenny",
  lastName: "Danny",
  email: "jenny.danny@example.com",
  birthDay: "3/1/1978",
  address: "6420 E Center Gan St",
  phone: "(934) 267-6531",
  gender: "female",
};

const users = [user1, user2,user3,user4];

function App() {
  return (
    <>
      <h1>React Props</h1>
      {users.map((user, index) => (
        <Card key={index}>
          <User {...user}  />np
        </Card>
      ))}
    </>
  );
}

export default App;
