pipeline {
    agent any
    
    environment {
        DEPLOY_SERVER = "10.10.10.69"
        DEPLOY_DIR = "/var/www/portfolio"
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
                    # Backup current deployment
                    ssh -o StrictHostKeyChecking=no jenkins@${DEPLOY_SERVER} "if [ -d ${DEPLOY_DIR} ]; then sudo mv ${DEPLOY_DIR} ${DEPLOY_DIR}_backup_$(date +%Y%m%d_%H%M%S); fi"
                    
                    # Create new directory
                    ssh -o StrictHostKeyChecking=no jenkins@${DEPLOY_SERVER} "sudo mkdir -p ${DEPLOY_DIR}"
                    
                    # Copy build files using rsync
                    rsync -avz -e "ssh -o StrictHostKeyChecking=no" --exclude "node_modules" --exclude ".git" ./ jenkins@${DEPLOY_SERVER}:${DEPLOY_DIR}/
                    
                    # Install production dependencies on the server
                    ssh -o StrictHostKeyChecking=no jenkins@${DEPLOY_SERVER} "cd ${DEPLOY_DIR} && npm install --production --force"
                    
                    # Restart PM2 process
                    ssh -o StrictHostKeyChecking=no jenkins@${DEPLOY_SERVER} "cd ${DEPLOY_DIR} && pm2 reload nextjs-app || pm2 start npm --name 'nextjs-app' -- run start"
                    
                    # Restart nginx
                    ssh -o StrictHostKeyChecking=no jenkins@${DEPLOY_SERVER} "sudo systemctl restart nginx"
                    
                    # Set proper permissions
                    ssh -o StrictHostKeyChecking=no jenkins@${DEPLOY_SERVER} "sudo chown -R www-data:www-data ${DEPLOY_DIR}"
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
            sh '''
            # Attempt to restore backup if deployment failed
            ssh -o StrictHostKeyChecking=no jenkins@${DEPLOY_SERVER} "LATEST_BACKUP=\$(ls -td ${DEPLOY_DIR}_backup_* | head -1); if [ -n \"\$LATEST_BACKUP\" ]; then sudo rm -rf ${DEPLOY_DIR}; sudo mv \$LATEST_BACKUP ${DEPLOY_DIR}; sudo systemctl restart nginx; fi"
            '''
        }
        always {
            // Clean old backups, keeping the 3 most recent
            sh '''
            ssh -o StrictHostKeyChecking=no jenkins@${DEPLOY_SERVER} "ls -td ${DEPLOY_DIR}_backup_* | tail -n +4 | xargs -r sudo rm -rf"
            '''
        }
    }
}