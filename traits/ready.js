const chalk = require('chalk');
const rpc = require("discordrpcgenerator");
const config = require(".././config.json")
module.exports = (client) => {

rpc.getRpcImage(config.applicationid, config.imagenamesatu).then(large => {

  
      
          let presence = new rpc.Rpc()
             .setName(config.name)
              .setUrl('https://www.twitch.tv/hml_cp0')
              .setType("PLAYING")
              .setApplicationId(config.applicationid)
            
              
             .setState(config.state)
             .setDetails(config.details)
             .setAssetsLargeImage(large.id)
             .serAssetsSmallImage(small.id)           
              
         
              .setStartTimestamp(Date.now())
              
       
                  client.user.setPresence(presence.toDiscord()).catch(console.error);
    
})

console.log(chalk.hex("#0000ff")("Succesfully enabled Demon"))
}




