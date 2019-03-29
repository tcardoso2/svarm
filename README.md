SVARM
=====

Implementation examples of vermon (svarm is read "swarm"), a swarm of vermon proces who communicate with each other.  
These examples require an ActiveMQ server to be up. See connection details in each of the examples in the "examples" folder     

- *v0.1.2*:
  - updated to vermon-core-entities v0.5.4, to include Stomp pub-sub
  - added Hello Stomp vermon implementation of the same example as 0.1.1 
- *v0.1.1*:
  - adding initial tests folder, vermon dependencies
  - created basic vermon-web server in ./bin/server
  - created rpmbuild (to add in future), packaging all required tools (e.g. ActiveMQ)
  - added Hello World stomp example script  
- *v0.1.0*: Initial version
