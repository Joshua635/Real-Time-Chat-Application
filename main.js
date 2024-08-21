// document.addEventListener('DOMContentLoaded', () => {
//     const chatInput = document.getElementById('chat-input');
//     const sendBtn = document.getElementById('send-btn');
//     const chatMessages = document.getElementById('chat-messages');

//     // Mock a simple chat service
//     const mockChatService = {
//         sendMessage: (message) => {
//             return new Promise((resolve) => {
//                 setTimeout(() => {
//                     resolve(`Echo: ${message}`);
//                 }, 1000);
//             });
//         }
//     };

//     function addMessageToChat(message, sender = 'sent') {
//         const messageDiv = document.createElement('div');
//         messageDiv.className = sender;
//         messageDiv.textContent = message;
//         chatMessages.appendChild(messageDiv);
//         chatMessages.scrollTop = chatMessages.scrollHeight;
//     }

//     sendBtn.addEventListener('click', async () => {
//         const message = chatInput.value.trim();
//         if (message) {
//             addMessageToChat(message);
//             chatInput.value = '';

//             // Simulate sending and receiving a message
//             const response = await mockChatService.sendMessage(message);
//             addMessageToChat(response, 'received');
//         }
//     });

//     chatInput.addEventListener('keyup', (event) => {
//         if (event.key === 'Enter') {
//             sendBtn.click();
//         }
//     });
// });



document.addEventListener('DOMContentLoaded', () => {
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    const chatMessages = document.getElementById('chat-messages');

    // Mock a simple chat service
    const mockChatService = {
        sendMessage: (message) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    // Example of keyword detection
                    if (message.toLowerCase().includes('help')) {
                        resolve("Sure, how can I assist you?");
                    } else {
                        resolve(`Echo: ${message}`);
                    }
                }, 1000);
            });
        }
    };

    function addMessageToChat(message, sender = 'sent') {
        const messageDiv = document.createElement('div');
        messageDiv.className = sender;

        // Example of filtering or styling based on content
        if (message.toLowerCase().includes('important')) {
            messageDiv.style.fontWeight = 'bold';
        }

        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    sendBtn.addEventListener('click', async () => {
        const message = chatInput.value.trim();

        // Example of an if condition to check if the input is empty
        if (!message) {
            alert("Please enter a message!");
            return;
        }

        // Add the user's message to the chat
        addMessageToChat(message);

        // Clear the input field after sending
        chatInput.value = '';

        // Simulate sending and receiving a message
        const response = await mockChatService.sendMessage(message);

        // Add the received message to the chat
        addMessageToChat(response, 'received');
    });

    chatInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            sendBtn.click();
        }
    });
});

