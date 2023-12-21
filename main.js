var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
let colors=["green","red","blue","Aqua","Orange","Fuchsia","Teal","Chartreuse","crimson","darkslateblue","gold","	goldenrod"]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function fill_blackscreen(height,width,color){
    ctx.fillStyle=color;
    for (let i=0;i<height;i++){
        for (let j=0;j<width;j++){
            ctx.fillRect(i,j,1,1);
        }
    }
}

function generate_seeds(height,width,count){
    let seeds=new Object();
    for (let i=0,clr=0;i<count;i++){
        let color;
        if (clr===colors.length)clr=1;
        else {
            color=colors[clr];
            clr++;
        }
        
        let x=getRandomInt(height);
        let y=getRandomInt(width);
        seeds[color]=[x,y];
        console.log(color+" "+ x+" "+y);
    }
    return seeds;
}
function generate_voronoi(height,width,seeds,Euclid){
    for (let i=0;i<height;i++){
        for (let j=0;j<width;j++){
            let distances=[];
            for(let seed in seeds){
                let x=seeds[seed][0];
                let y=seeds[seed][1];
                let seed_with_dist={
                    color:seed,
                    distance:Euclid?Math.sqrt(Math.pow(x-i,2)+Math.pow(y-j,2)):Math.abs(x-i)+Math.abs(y-j)
                }
                distances.push(seed_with_dist);
            }
                let nearest=distances.reduce(function (prev, current) {
                return prev.distance < current.distance ? prev : current;});  
                ctx.fillStyle=nearest.color;    
                //console.log(nearest.color);       
                ctx.fillRect(i,j,1,1);
        }
    }
}
function generate_dots(seeds){
    for(let seed in seeds){
        let x =seeds[seed][0];
        let y =seeds[seed][1];
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, 2 * Math.PI, false);
        ctx.fillStyle = "black";
        ctx.fill();
    }
}
const screen_width=800;
const screen_height=800;
fill_blackscreen(screen_width,screen_height);
let seeds =generate_seeds(screen_width,screen_height,10);
generate_voronoi(screen_width,screen_height,seeds,true);//main function
generate_dots(seeds);
