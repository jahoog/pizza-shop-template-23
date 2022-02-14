# Expand hard drive
sh shell/resize.sh 30

# Update the AWS CLI
pip install --user --upgrade awscli

# Install the AWS Amplify CLI
npm install -g @aws-amplify/cli

# Set Region Variable
region=$(curl http://169.254.169.254/latest/dynamic/instance-identity/document|grep region|awk -F\" '{print $4}')
# create default config file
cat <<END > ~/.aws/config
[default]
region=${region}
END

