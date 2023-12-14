const express = require('express');
const fs = require('fs');
const axios = require('axios');
const path = require('path');

const webhookUrl = process.env.webhook;

async function sendDiscordMessage(message) {
  try {
    const payload = {
      content: message,
    };

    const response = await axios.post(webhookUrl, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Message sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending message:', error.response ? error.response.data : error.message);
  }
}


const app = express();
const port = 3000;
const orderCounterFilePath = path.join(__dirname, 'order-counter.json');

let orderCounter = loadOrderCounter();

function loadOrderCounter() {
  try {
    const data = fs.readFileSync(orderCounterFilePath, 'utf-8');
    return JSON.parse(data).orderCounter || 0;
  } catch (error) {
    console.error('Error loading order counter:', error.message);
    return 0;
  }
}

function saveOrderCounter() {
  const data = JSON.stringify({ orderCounter });
  fs.writeFileSync(orderCounterFilePath, data, 'utf-8');
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve HTML form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'order-form.html'));
});

// Handle form submission
app.post('/submit-order', (req, res) => {
  const { name, connectionMethod, connectionName, orderDescription } = req.body;

  // Increment the order counter
  orderCounter++;

  const order = {
    orderNumber: orderCounter,
    name,
    connectionMethod,
    connectionName,
    orderDescription,
  };
  const ordermsg = `Order Name : \`${name}\`\nConnection Method : \`${connectionMethod}\`\nConnection Name : \`${connectionName}\`\nOrder Description: \`${orderDescription}\`\nOrder Number: \`#${orderCounter}\`\n\n\`NOTE: Delete the message if You want to take the job and get the info save first\``;

  const orderFileName = `${order.orderNumber}-${name}.json`; // Include order number in the filename
  const orderFilePath = path.join(__dirname, 'orders', orderFileName);

  // Save order as JSON file
  fs.writeFileSync(orderFilePath, JSON.stringify(order, null, 2));
  sendDiscordMessage(ordermsg);
  
  // Save the updated order counter
  saveOrderCounter();

  // Redirect to the success page with the order number as a query parameter
  res.redirect(`/success?orderNumber=${order.orderNumber}`);
});

// Serve success page
app.get('/success', (req, res) => {
  res.sendFile(path.join(__dirname, 'success.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
