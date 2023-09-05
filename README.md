
Welcome to Pop Up Magic Shop, a front-end capstone project created with JavaScript and React.js. This tool is designed for Dungeon Masters (DMs) to enhance their Dungeons & Dragons (D&D) games. Pop Up Magic Shop allows DMs to set parameters based on their party's current situation and generates a list of magical items that could be sold in a magic shop within their game world.

This app will let you generate a list of items based on average party level, the type of area they are encountering this shop in, as well as the amount of wealth the shop may have.

Getting Started

Prerequisites

Before you begin, be sure to install the following dependencies:
``npm install react``
``npm install react-router-dom``
``npm install @mui/material @emotion/react @emotion/styled``

1. Fork or clone this repository to your local computer.
2. Using your GitBash terminal ``cd`` into the directory.
3. Follow the instructions for the Pop Up Magic Shop API below.

[Pop Up Magic Shop API](https://github.com/Nic338/Pop-Up-Magic-Shop-API) -- to run the JSON server for our database.

4. After your database is running, ``npm start`` while in the ``Pop-Up-Magic-Shop`` folder.

Instructions:
1. Select three options from the drop downs provided and click generate.
 
  ![Select Options](https://user-images.githubusercontent.com/125293336/265758244-f329ea9c-2e32-4256-a3de-932313973de8.png)
  
2. The shop page is randomly generated based on your previous choices. All items have been assigned a price based on community feedback and official pricing from WotC.

  ![Shop Page](https://user-images.githubusercontent.com/125293336/265758253-e0cd515c-65da-42e6-91d5-306823320990.png)
  
3. Use the dropdown on each item to read the description and other useful info.

  ![Item Info](https://user-images.githubusercontent.com/125293336/265758264-4b19ec01-8915-4e40-99f1-1bd700f295dd.png)
  
4. Click the ADD TO ORDER button if its an item your party wishes to buy.
5. Click the GO TO MY ORDER button at the bottom of the page to see the checkout page.
6. At the checkout page you can change the prices of the items based on your own discretion.

  ![Haggle](https://user-images.githubusercontent.com/125293336/265758282-fb67ce86-0ce2-4b4f-962d-1cf38cca626f.png)
7. Each item has its own price listed, as well as a total for the entire order.

  ![Checkout](https://user-images.githubusercontent.com/125293336/265758274-e75eb8de-cd0a-4c4a-95bc-670a053ca1f4.png)
8. If you want to give a discount to the entire order, the field at the bottom of the page will calculate a percentage discount based on what you would like.

9. Once you are done shopping, click REMOVE ORDERS and you may generate a new shop with all new items.


Technologies Used
React.js
JavaScript
HTML
CSS
