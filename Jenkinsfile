pipeline {
  agent {
    docker {
      image 'node:10.15.0'
      args '-p 8082:8082'
    }
  }
  environment {
    CI = 'true'
  }
  stages {
    stage('build') {
      steps {
        sh 'npm install',
        sh 'npm run lint'
      }
    }
    stage('Test') {
      steps {
        sh 'bash ./.circleci/scripts/start-mysql.sh',
        sh 'TEST_DATABASE_URL=mysql://root:123@localhost:3306/apimicro_test npm test'
      }
    }
    stage('Deploy') {
      steps {
        sh 'bash ./.circleci/scripts/deploy.sh',
        sh 'bash ./is_healthy.sh'
      }
    }
  }
}