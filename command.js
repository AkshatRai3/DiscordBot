const { REST, Routes } = require('discord.js');

const commands = [
    {
        name:"create",
        description: "Creates a short url"
    },
  
]

const rest = new REST().setToken("MTM4NTE4MzE5ODUxMzcyNTQ3MA.GHrdcj.L-DbIgICUs3d3auMfy77lMon1YFxfPGH69jZRA");

(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
			Routes.applicationCommands("1385183198513725470"),
			{ body: commands },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})(); 