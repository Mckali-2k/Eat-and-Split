import { useState } from 'react';
import AddFriend from './components/AddFriend';
import Bill from './components/Bill';
import ListFriends from './components/ListFriends';

const initialFriends = [
  {
    id: 1,
    name: "Kalid Nuredin",
    imageUrl: "../image/dude.jpg",
    moneyOwed: 8,
  },
  {
    id: 2,
    name: "Kidus Paulos",
    imageUrl: "../image/kidus.jpg",
    moneyOwed: -5,
  },
  {
    id: 3,
    name: "Eyuel Solomon",
    imageUrl: "../image/roger.png",
    moneyOwed: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [addButtonClicked, setAddButtonClicked] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState();

  function handleAddFriend(newFriend) {
    setFriends(friends => [...friends, newFriend]);
  }

  function hanldeAddButton() {
    setAddButtonClicked(addButtonClicked => !addButtonClicked);
  }

  function handleCloseButton() {
    setAddButtonClicked(addButtonClicked => !addButtonClicked);
  }

  function handleSelectButton(id) {
    setSelectedFriend(id);
  }

  function handleSplitBill(whoPays, actualBill, selectedFriend) {
    setFriends(friends => friends.map(friend => 
      friend.id === selectedFriend
        ? {
            ...friend,
            moneyOwed: whoPays === 'you'
              ? friend.moneyOwed + Number(actualBill)
              : friend.moneyOwed - Number(actualBill)
          }
        : friend
    ));
  }

  return (
    <div className='main-container'>
      <div className='left'>
        <ListFriends friends={friends} handleSelectButton={handleSelectButton} hanldeAddButton={hanldeAddButton} addButtonClicked={addButtonClicked} selectedFriend={selectedFriend}/>
        <AddFriend onAddFriend={handleAddFriend} addButtonClicked={addButtonClicked} handleCloseButton={handleCloseButton}/>
      </div>
      <Bill friends={friends} selectedFriend={selectedFriend} handleSplitBill={handleSplitBill}/>
    </div>
  );
}

