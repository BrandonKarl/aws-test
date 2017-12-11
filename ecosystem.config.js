module.exports = {
  apps: [{
    name: 'tutorial-2',
    script: './index.js',
    exec_interpreter: "./node_modules/.bin/babel-node",
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-217-45-1.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/tutorial.pem',
      ref: 'origin/master',
      repo: 'https://github.com/BrandonKarl/aws-test.git',
      path: '/home/ubuntu/tutorial-2',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}