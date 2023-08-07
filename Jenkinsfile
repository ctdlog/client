pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                sh 'pnpm install'
            }
        }

        stage('Build') {
            steps {
                sh 'pnpm build'
            }
        }

        stage('Check and Kill Process on Port 3000') {
            steps {
                script {
                    def result = sh(script: 'lsof -ti :3000', returnStdout: true, returnStatus: true)
                    if (result != 0) {
                        echo "No process is running on port 3000"
                    } else {
                        def pid = sh(script: 'lsof -ti :3000', returnStdout: true)
                        echo "PID: $pid is running and will be terminated"
                        sh "kill -9 $pid"
                    }
                }
            }
        }

        stage('Start in Background') {
            steps {
                sh 'JENKINS_NODE_COOKIE=dontKillMe && nohup pnpm start > /dev/null 2>&1 &'
            }
        }
    }
}