// Import necessary modules or dependencies
// Example: const { MessageEmbed } = require('discord.js');

// Command properties
module.exports = {
    name: 'ping',   // The name of your command (without prefix)
    description: 'Pong!',  // Brief description of the command
    // aliases: ['alias1', 'alias2'],  // Optional: Command aliases for alternative names
  
    // Command execution function
    execute(message, args) {
      // Your command logic goes here
  
      try {
        // Example: Send a simple text response
        message.channel.send('Your command response goes here');
  
        // Example: Send an embed
        // const embed = new MessageEmbed()
        //   .setTitle('Command Result')
        //   .setDescription('Your command response goes here')
        //   .setColor('#3498db');
        // message.channel.send(embed);
  
        // Additional logic as needed
      } catch (error) {
        console.error(error);
        // Handle errors gracefully, e.g., send an error message to the channel
        message.reply('An error occurred while executing the command.');
      }
    },
  };
  