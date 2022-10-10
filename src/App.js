import UserProfile from "./Components/profiles/profile"
const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl:
      'https://i.ibb.co/rQg1q5T/dennis-ritchie6.webp',
    name: 'Dennis Ritchie',
    role: 'Father of C programming language'
  },
  {
    uniqueNo: 2,
    imageUrl:
      'https://i.ibb.co/ypQYfzN/origin.jpg',
    name: 'Linus Torvalds',
    role: 'Founder of Linux kernel Operating system'
  },
  {
    uniqueNo: 3,
    imageUrl:
      'https://i.ibb.co/BKqqSSJ/316-Kj-DKB7y-L-UY200.jpg',
    name: 'Bjarne Stroustrup',
    role: 'Invented C++ language'
  },
  {
    uniqueNo: 4,
    imageUrl:
      'https://i.ibb.co/b5QpLgq/JAG2001.jpg',
    name: 'James Gosling',
    role: 'Father of JAVA programming language'
  }
]

const App = () => (
  <div className="list-container">
    <h1 className="title">Pillars of Programming</h1>
    <ul>
      {userDetailsList.map((eachItem) => (
        <UserProfile userDetails={eachItem} />
      ))}
    </ul>
  </div>
)
export default App