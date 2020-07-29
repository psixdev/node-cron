const { CronJob } = require('./lib/cron');

const job = new CronJob(
	'*/5 * * * * *',
	() => {
		console.log('current time is', new Date().toISOString());
	},
	() => {
		console.log('\x1b[41m%s\x1b[0m', 'job was stopped');
		process.exit(1);
	},
	true,
	'Europe/Moscow'
);

job.start();
