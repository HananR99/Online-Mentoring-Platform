// pipeline {
//     agent any

//     environment {
//         DOCKER_REGISTRY = 'docker.io'  
//         FRONTEND_IMAGE = 'hanan99/Docker-frontend' 
//         BACKEND_IMAGE = 'hanan99/Docker-backend'    
//     }

//     stages {
//         stage('Build Frontend') {
//             steps {
//                 script {
//                     // Build frontend Docker image
//                     docker.build("${env.FRONTEND_IMAGE}:${env.BUILD_NUMBER}", "-f frontend/Dockerfile .")
//                 }
//             }
//         }

//         stage('Build Backend') {
//             steps {
//                 script {
//                     // Build backend Docker image
//                     docker.build("${env.BACKEND_IMAGE}:${env.BUILD_NUMBER}", "-f backend/Dockerfile .")
//                 }
//             }
//         }

//         stage('Push Images to Registry') {
//             steps {
//                 script {
//                     // Push frontend image to Docker registry
//                     docker.withRegistry("https://${env.DOCKER_REGISTRY}", '1487cdf8-1e4f-4199-8076-d827b1c52520') {
//                         docker.image("${env.FRONTEND_IMAGE}:${env.BUILD_NUMBER}").push()
//                     }

//                     // Push backend image to Docker registry
//                     docker.withRegistry("https://${env.DOCKER_REGISTRY}", '1487cdf8-1e4f-4199-8076-d827b1c52520') {
//                         docker.image("${env.BACKEND_IMAGE}:${env.BUILD_NUMBER}").push()
//                     }
//                 }
//             }
//         }

//         stage('Deploy') {
//             steps {
//                 // SSH into your deployment server and execute commands to deploy Docker containers
//                 sshPublisher(publishers: [
//                     sshPublisherDesc(
//                         configName: 'your-ssh-server',
//                         transfers: [
//                             sshTransfer(
//                                 execCommand: """
//                                     docker pull ${env.FRONTEND_IMAGE}:${env.BUILD_NUMBER}
//                                     docker pull ${env.BACKEND_IMAGE}:${env.BUILD_NUMBER}
//                                     docker stop frontend-container || true
//                                     docker rm frontend-container || true
//                                     docker run -d --name frontend-container -p 5173:80 ${env.FRONTEND_IMAGE}:${env.BUILD_NUMBER}
//                                     docker stop backend-container || true
//                                     docker rm backend-container || true
//                                     docker run -d --name backend-container -p 5000:5000 ${env.BACKEND_IMAGE}:${env.BUILD_NUMBER}
//                                 """,
//                                 usePty: true
//                             )
//                         ]
//                     )
//                 ])
//             }
//         }
//     }
// }




pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from your version control system
                checkout scm
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Deploy the Docker Compose application
                   
                    bat 'docker-compose up --build -d'
                }
            }
        }
    }

    post {

        success {
            // Notify on successful build
            echo 'Build and deployment successful!'
        }
        failure {
            // Notify on failed build
            echo 'Build or deployment failed!'
        }
    }
}