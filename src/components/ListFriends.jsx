import Friend from './Friend.jsx';
import allFriends from '../Friend.json';

function ListFriends({friends, hanldeAddButton, addButtonClicked, handleSelectButton, selectedFriend}) {
    return(
          <div className='list'> {
            friends.map((friend) => (
                <Friend handleSelectButton={handleSelectButton} friends={friend} selectedFriend={selectedFriend}/>
            ))
                                 }

            {addButtonClicked ? null: <button className='addFriend-btn' onClick={hanldeAddButton}>Add friend</button>}
              
          </div>
    )
  } 

export default ListFriends
