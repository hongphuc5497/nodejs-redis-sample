import { createClient } from 'redis';

(async () => {
	try {
		// const client = createClient({
		// 	host: '127.0.0.1',
		// 	port: 6379,
		// });
    const client = createClient({});

		//* Subscribe to the channel
		const subscriber = client.duplicate();
		await subscriber.connect();
		await subscriber.subscribe('article', (msg) => console.log(msg));

		await client.connect();
		await client.publish(
			'article',
			JSON.stringify({
				id: '12345',
				name: 'LoremIpsum',
				blog: 'This is a blog post',
			})
		);
	} catch (err) {
		console.log(err);
	} finally {
		process.exit();
	}
})();
