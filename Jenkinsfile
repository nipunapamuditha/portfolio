pipeline {
    agent any
    
    environment {
        DEPLOY_SERVER = "10.10.10.69"
        DEPLOY_DIR = "/var/www/portfolio"  // Changed to match your original installation path
    }
    
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/nipunapamuditha/portfolio.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install --force'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        
        stage('Deploy') {
            steps {
                sshagent(['0ff14880-bcc6-4400-a835-a66a5a3cf0ba']) {
                    sh '''
                    # Echo paths for debugging
                    echo "Deploying to ${DEPLOY_SERVER}:${DEPLOY_DIR}"
                    
                    # Create a temporary directory with correct permissions
                    ssh -o StrictHostKeyChecking=no jenkins@${DEPLOY_SERVER} "sudo mkdir -p ${DEPLOY_DIR}_temp && sudo chown jenkins:jenkins ${DEPLOY_DIR}_temp"
                    
                    # Copy files to the temporary directory
                    rsync -avz -e "ssh -o StrictHostKeyChecking=no" --exclude "node_modules" --exclude ".git" ./ jenkins@${DEPLOY_SERVER}:${DEPLOY_DIR}_temp/
                    
                    # Install production dependencies
                    ssh -o StrictHostKeyChecking=no jenkins@${DEPLOY_SERVER} "cd ${DEPLOY_DIR}_temp && npm install --omit=dev --force"
                    
                    # Backup current deployment if it exists
                    ssh -o StrictHostKeyChecking=no jenkins@${DEPLOY_SERVER} "if [ -d ${DEPLOY_DIR} ]; then sudo mv ${DEPLOY_DIR} ${DEPLOY_DIR}_backup_$(date +%Y%m%d_%H%M%S); fi"
                    
                    # Move temp directory to target location
                    ssh -o StrictHostKeyChecking=no jenkins@${DEPLOY_SERVER} "sudo mv ${DEPLOY_DIR}_temp ${DEPLOY_DIR}"
                    
                    # Set proper permissions
                    ssh -o StrictHostKeyChecking=no jenkins@${DEPLOY_SERVER} "sudo chown -R www-data:www-data ${DEPLOY_DIR}"
                    
                    # Restart PM2 process
                    ssh -o StrictHostKeyChecking=no jenkins@${DEPLOY_SERVER} "cd ${DEPLOY_DIR} && pm2 reload nextjs-app || pm2 start npm --name 'nextjs-app' -- run start"
                    
                    # Fix Nginx config with correct path and restart
                    ssh -o StrictHostKeyChecking=no jenkins@${DEPLOY_SERVER} "sudo sed -i 's/xy_pass/proxy_pass/g' /nginx/sites-enabled/portfolio && sudo systemctl restart nginx"
                    
                    # Clean old backups, keeping the 3 most recent
                    ssh -o StrictHostKeyChecking=no jenkins@${DEPLOY_SERVER} "ls -td ${DEPLOY_DIR}_backup_* 2>/dev/null | tail -n +4 | xargs -r sudo rm -rf"
                    '''
                }
            }
        }
    }
    
    post {
        success {
            echo 'Portfolio deployment completed successfully!'
        }
        failure {
            echo 'Portfolio deployment failed.'
        }
    }
}