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
                    def pid = sh(script: 'lsof -ti :3000', returnStdout: true)
                    echo "PID: $pid"
                    if (pid) {
                        echo "PID: $pid 가 실행중이어서 종료합니다."
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