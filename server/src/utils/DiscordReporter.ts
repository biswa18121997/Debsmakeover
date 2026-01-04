
export const DiscordConnect = async (message: any): Promise<void> => {

	const webhookURL = process.env.DISCORD_UPDATES_URL as string;
	try {
		//	console.log("WebhookURL", webhookURL)
		const response = await fetch(webhookURL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(message),
		});

		if (!response.ok) {
			throw new Error(`Failed to send: ${response.statusText}, ${message}`);
		}

		console.log('✅ Message sent to Discord!', message);
	} catch (error) {
		console.error('❌ Error sending message:', error);
	}
};

// Usage

