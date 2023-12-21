# VoronoiJs
[Voronoi Diagram](https://en.wikipedia.org/wiki/Voronoi_diagram) using Js and Html Canvas.

# Usage 
## Firstly: Use function 'generate_seeds()' with paramethers you want:
```
function generate_seeds(screen_width,screen_height,number of dots)
```
## Secondly:Use function 'generate_voronoi()':
```
generate_voronoi(screen_width,screen_height,seeds,true);
```
Last boolean parameter is responsible for using [Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance) formula for calculating distance between dots (if it is True),
if it`s false function will use [Manhattan distance](https://en.wikipedia.org/wiki/Taxicab_geometry) for calculations.
Diagram generates when you load a page. In code 

# Example
![image](https://github.com/opermaster/VoronoiJs/assets/82831888/6692a7a6-e43f-4235-b7b0-d46b6268110a)

# Example after fix
![image](https://github.com/opermaster/VoronoiJs/assets/82831888/39422118-9b90-486b-bdc0-82ba7df2273c)

# Not implemented:
Now user cant change number of dots and pick colors on the page.
