pipeline{

    environment{
        DOCKER_IMAGE_NAME = "kt-ec-netshop"
        HOME = "${WORKSPACE}"
    }

    agent {
        dockerfile {
            filename 'Dockerfile'
            dir '.'
            label env.DOCKER_IMAGE_NAME
        }
    }

    stages {

        stage('Pre-Build') {
            options {
                timestamps()
            }
            steps {
                script{
                    dir('.'){
                        sh 'npm --version'
                        sh 'npm config list'
                        sh 'npm install --no-optional'
                    }
                }
            }
        }

        stage('Static Analysis') {
            options {
                timestamps()
            }
            steps {
                script {
                    dir('.') {
                        sh 'tslint --project . --format checkstyle --out tslint-result.xml --force'
                        recordIssues tool: tsLint(pattern: 'tslint-result.xml')
                    }
                }
            }
        }

    }
}
