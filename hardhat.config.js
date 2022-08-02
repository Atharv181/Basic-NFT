require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",

  networks:{
    rinkeby:{
      //How do we define which test network to deploy to
      url:process.env.ALCHEMY_API_KEY_URL,
      accounts:[process.env.PRIVATE_KEY],
    },
  },
};
