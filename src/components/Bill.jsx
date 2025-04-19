import { useState } from "react";

function Bill({friends, selectedFriend, handleSplitBill}) {

  const selectedFriendData = friends.find(f => f.id === selectedFriend);
  const [bill, setBill] = useState();
  const [yourExpense, setyourExpense] = useState();
  let friendsExpense = Number(bill - yourExpense);

  const [whoPays, setWhoPays] = useState('you');
  let acutalBill = whoPays === 'you' ? friendsExpense : yourExpense;

  friendsExpense = isNaN(friendsExpense) ? 0 : friendsExpense;

  function handleSubmit(e) {
    e.preventDefault();

    if(whoPays && bill && selectedFriend){
      handleSplitBill(whoPays, acutalBill, selectedFriend);
    }
  }

    return(
      <div className='bill-container'>
        <form onSubmit={handleSubmit}> 
        <h1>SPLIT A BILL WITH <span>{selectedFriendData?.name || "a friend"}</span></h1>
  
          <div className='inputs tag-input'>
            <tag className='tags'>💰 Bill Value</tag>
            <input type='text' placeholder='' value={bill} onChange={(e) => setBill(e.target.value)}></input>
            {console.log(bill)}
          </div>
  
          <div className='inputs tag-input'>
            <tag className='tags'>🧍‍♀️ Your expense</tag>
            <input type='text' placeholder='' value={yourExpense} onChange={(e) => setyourExpense(e.target.value)}></input>
          </div>
  
          {
            selectedFriend != null ?           
            <div className='inputs tag-input'>

            <tag className='tags'>👭 {selectedFriendData.name} expense</tag>
            <input type='text' placeholder='' readOnly value={friendsExpense}></input>
          </div> : null
          }
  
          <div className='inputs tag-input'>
            <tag>🤑 Who is paying the bill?</tag>

            <select value={whoPays} onChange={(e) => setWhoPays(e.target.value)}>
              <option value="you">You</option>
              {selectedFriend != null && (
                <option value="friend">{selectedFriendData.name}</option>
              )}
            </select>
          </div>
  
          <button type="submit" className='bill-btn'>Split bill </button>
        </form>
      </div>
  
    )
  }

  
export default Bill

