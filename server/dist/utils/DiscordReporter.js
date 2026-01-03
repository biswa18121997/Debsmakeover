export const DiscordConnect = async (message) => {
    const webhookURL = process.env.DISCORD_UPDATES_URL;
    try {
        //	console.log("WebhookURL", webhookURL)
        const response = await fetch(webhookURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: `🚨 App Update: ${message}`,
            }),
        });
        if (!response.ok) {
            throw new Error(`Failed to send: ${response.statusText}, ${message}`);
        }
        console.log('✅ Message sent to Discord!', message);
    }
    catch (error) {
        console.error('❌ Error sending message:', error);
    }
};
// Usage
//# sourceMappingURL=DiscordReporter.js.map