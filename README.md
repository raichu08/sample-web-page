This is a sample web page using Node.js (Express) for the backend and HTML with embedded JavaScript on the frontend.

💡 Goal:
We’ll build a web page that:
-- Takes user input (name)
-- Sends it to the server
-- Displays a personalized greeting

📂 Folder Structure
![image](https://github.com/user-attachments/assets/790892f0-d286-481d-81be-945671e1b6f8)


📂 Pre-Req
-- nodejs
-- npm
-- express

▶️ To Run
use "npm start" and then open "http://localhost:3000" in browser.

------------------------------------------------------------------

To run this website in ubuntu ec2, use below commands:

sudo apt update
sudo apt upgrade -y

-- install pre-req :
sudo apt install nodejs npm -y

-- to verify pre-req insyalled successfuly : 
node -v
npm -v

-- then pull the code 

-- go inside the project directory and then install express : 
npm install express

-- use "npm start" to run the website and then open "http://localhost:3000" in browser
replace localhost from your ec2 public ip

NOTE: Make sure you have allowed access to ec2 uing port 3000 through security group.


![image](https://github.com/user-attachments/assets/c0ed825e-ed6d-440c-b089-b44322c16bfc)


