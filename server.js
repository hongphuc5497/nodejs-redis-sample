import { createClient } from 'redis';

(async () => {
	try {
		const client = createClient();
		await client.connect();
		await client.publish(
			'article',
			JSON.stringify({
				id: '12345',
				name: 'LoremIpsum',
				blog: 'This is a blog post',
			})
		);

		//* Subscribe to the channel
		const subscriber = client.duplicate();
		await subscriber.connect();
		await subscriber.subscribe('article', (msg) => console.log(msg));
	} catch (err) {
		console.log(err);
	} finally {
		process.exit();
	}
})();
