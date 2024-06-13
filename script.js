
function cancel() {
    let chatbotcomplete = document.querySelector(".chatBot");
    if (chatbotcomplete.style.display != 'none') {
        chatbotcomplete.style.display = "none";
        let lastMsg = document.createElement("p");
        lastMsg.textContent = 'Thanks for using our Chatbot!';
        lastMsg.classList.add('lastMessage');
        document.body.appendChild(lastMsg)

        //clear chatbox
        let chatbox = document.querySelector('.chatbox');
        chatbox.innerHTML = '<li class ="chat-incoming chat"><p> Hey can i assist you today?</p></li>';

        //clear input field
        let messageInput = document.getElementById('messageInput');
        messageInput.value = ' ';
    }
}

function toggleChatBot(){    //visibility of the chatbot when the chatbot btn is clicked
    let chatbotcomplete = document.querySelector(".chatBot");
    if(chatbotcomplete.style.display === 'none' || !chatbotcomplete.style.display){
        chatbotcomplete.style.display = "block";
    }else{
        chatbotcomplete.style.display = "none";
    }

    //Remove thansk msg
    let lastMsg = document.querySelector('.lastMessage');
    if (lastMsg){
        lastMsg.remove();
    }

    //Reset chatbox and input field when opening
    if ( chatbotcomplete.style.display === 'block'){
        let chatbox = document.querySelector('.chatbox');
        chatbox.innerHTML = '<li class="chat-incoming chat"><p>Hey! How can I assist you today?</p></li> ';

        let messageInput = document.getElementById('messageInput');
        messageInput.value = '';
    }
}

function toggleModal(){
    let modal = document.querySelector(".modal");
    if (modal.style.visibility === 'visible'){
        modal.style.visibility = 'hidden';
        modal.style.opacity = '0';
        modal.style.transform = 'scale(1.1)';
    }else {
        modal.style.visibility = 'visible';
        modal.style.opacity = '1';
        modal.style.transform = 'scale(1)';
    }
}

function sendMessage(){
    let messageInput = document.getElementById('messageInput');
    let messageText = messageInput.value.trim();
    if (messageText !== " "){
        let chatbox = document.querySelector('.chatbox');

        //Create and append outgoing message
        let newMessage = document.createElement('li');
        newMessage.classList.add('chat-outgoing', 'chat');
        newMessage.innerHTML = `<p>${messageText}</p>`;
        chatbox.appendChild(newMessage);

        // Simulate bot response (This can be replaced with an actual API call)
        let botMessage = document.createElement('li');
        botMessage.classList.add('chat-incoming', 'chat');
        botMessage.innerHTML = `<p>Bot: "${messageText}"</p>`;
        chatbox.appendChild(botMessage);

        //clear input
        messageInput.value = '';

        //Scroll chatbox to the bottom
        chatbox.scrollTop = chatbox.scrollHeight;
    }
}

document.getElementById('sendBTN').addEventListener('click', sendMessage);

document.getElementById('messageInput').addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        event.preventDefault();
        sendMessage();
    }
});