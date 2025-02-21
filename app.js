const { CronJob } = require('./dist');

const job = CronJob.from({
	cronTime: '*/5 * * * * *',
	onTick: () => {
		console.log('current time is', new Date().toISOString());
	},
	onComplete: () => {
		console.log('\x1b[41m%s\x1b[0m', 'job was stopped');
		// process.exit(1);
	},
	start: true,
	runOnInit: true,
	timeZone: 'Europe/Moscow'
});

job.start();

new Promise((resolve) => setTimeout(resolve, 3000)).then(() => {
	console.log('then');
});
