var theInput = document.getElementById('message')

//I added in an event listener that would be used for completing theChat function. The fetch is pulling in from the /chats endpoint which is defined within the routes. We are posting the value of the input field. JSON.stringify is making a string out of the value of theInput variable.

theInput.addEventListener('keypress', function(event){
    if (event.key === 'Enter') {
    console.log('Press Enter')
        theChat()
    }
})

function theChat() {
    fetch('/chats', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        message: theInput.value
    	})
    });
}

var pusher = new Pusher('6e5f67bde794d28881ed', {
  encrypted: true
})



var pusherChannel = pusher.subscribe('chat_app')

pusherChannel.bind('new_chat', function(chat) {
  addingChats(chat)
})
//first, the messages variable is grabbing the messages div (messages is the ID). theCohort variable is creating an 'li' element. theCohortText variable is equal to the chat argument's message value. The message value defined within pusher.trigger('chat_app', 'new_chat', {message: message}) in the ChatsController file. theCohort.innerHTML = theCohortText is defining the HTML value so that its the same value as the text within the input field. The Node.insertBefore() method inserts the specified node before the reference node as a child of the current node. (theCohort, messages.childNodes[0]) states that theCohort is creating the child nodes, and messages.childNodes[0] inserts it at the beginning of the list, so its the first item. theInput.value = '' places the value back to null at the end of the function's processes. If theInput.value = '' is removed, the value of the input field does not refresh after posting. chat is the user generated argument that i used as the value for this.

//we could name it foo or anything else, and it would still serve the same purpose.

function addingChats(chat) {
    var messages = document.getElementById('messages')
    var theCohort = document.createElement('li')
    var theCohortText = chat.message
    theCohort.classList.add('list-group-item')
    theCohort.innerHTML = theCohortText
    messages.insertBefore(theCohort, messages.childNodes[0])
    theInput.value = ''
    console.log(chat.message)
}
