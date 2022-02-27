import redis from 'redis';

const redisClient = redis.createClient();

(async () => {
  const article = JSON.stringify({
    id: '12345',
    name: 'LoremIpsum',
    blog: 'This is a blog post',
  })

  await redisClient.connect();

  await redisClient.publish('article', article);
})();
