git clone https://github.com/jahoog/pizza-shop-template-23.git andy-pizza-shop
cd andy-pizza-shop
REPO_URL=$(aws codecommit get-repository --repository-name workshoprepo --query 'repositoryMetadata.cloneUrlHttp' --output text)
git remote set-url origin ${REPO_URL}
