var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

var config = {
  host: process.env.ftp_host,
  port: 21,
  username: process.env.ftp_user,
  password: process.env.ftp_password,
  localRoot: __dirname,
  remoteRoot: '',
  exclude: ['.git', 'tmp/*']
};

ftpDeploy.on('uploaded', (data) => {
    console.log('uploaded:', data);
});

ftpDeploy.on('uploading', (data) => {
  console.log(data.percentComplete);
});

ftpDeploy.deploy(config, (err, fileName) => {
  if (err) console.log("error " + err);
  else console.log("Completed uploading");
});