pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from your version control system
                checkout scm
            }
        }

        stage('Build Backend') {
            steps {
                dir('backend') {
                    bat 'docker build -t backend:latest .'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    
                    script {
                        try {
                            bat 'docker build -t frontend:latest .'
                        } catch (Exception e) {
                            
                            echo "Error building frontend: ${e}"
                            currentBuild.result = 'FAILURE'
                            error "Frontend build failed"
                        }
                    }
                }
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                
                bat 'docker-compose up -d --build'
            }
        }
    }

    post {
        success {
            echo 'Build and deployment successful!'
        }
        failure {
            echo 'Build or deployment failed!'
        }
    }
}
