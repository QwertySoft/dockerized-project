# dockerized-project
Proyecto integrador de ejemplo de una aplicación dockerizada acerca de podcasting (distribución de contenido multimedia) utilizando Angular en el frontend y Django en el backend con MySQL 5.7 como motor de base de datos.

# Install dependencies
- docker [https://docs.docker.com/install/]
- docker-compose [https://docs.docker.com/compose/install/]

# Build & Run with Docker
    docker-compose exec api python manage.py migrate
    docker-compose exec api python manage.py createsuperuser
    docker-compose up
    
# Traditional Build & Run
## API
    . <path_to_virtualenv>/bin/activate
    cd api
    pip install -r requirements.txt
    python manage.py runserver
    
## WEBAPP
    cd webapp
    npm install
    ng serve
    
