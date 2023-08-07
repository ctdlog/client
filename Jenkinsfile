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
                    echo "asdasdasdasd"
                    def result = sh(script: 'lsof -ti :3000', returnStdout: true, returnStatus: true)
                    if (result != 0) {
                        echo "No process is running on port 3000"
                    } else {
                        def pid = result.trim()  // remove any leading/trailing white spaces
                        echo "PID: $pid is running and will be terminated"
                        sh "kill -9 $pid"
                    }
                }
            }
        }

        stage('Start in Background') {
            steps {
                sh 'nohup pnpm start > /dev/null 2>&1 &'
            }
        }
    }
}