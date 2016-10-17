echo "Node Modules installation is starting ........"
npm install
echo "Node Modules installation is ended"
echo "grunt server is going to start"
chrome "http://localhost:8080"
grunt default
