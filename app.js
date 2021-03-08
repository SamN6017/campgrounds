var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine","ejs");
var	camps = [
	{name:"frienship hill",img:"https://www.photosforwork.com/download/pixabay-1149402?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e1d14a4e52ae14f6da8c7dda793f7f1636dfe2564c704c7d2b7cd3954dc45b_960.jpg&user=Free-Photos"},
	{name:"mountain valley",img:"https://photosforclass.com/download/pixabay-1845719?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e8d1464d53a514f6da8c7dda793f7f1636dfe2564c704c7d2d7ed59249c45f_960.jpg&user=Pexels"},
	{name:"lonavala",img:"https://photosforclass.com/download/pixabay-4363073?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F52e3d3404a55af14f6da8c7dda793f7f1636dfe2564c704c7d2d7ed59249c45f_960.png&user=bowl_of_nicole"},
	{name:"calm lake",img:"https://www.photosforwork.com/download/pixabay-3779280?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F55e7d24a485aac14f6da8c7dda793f7f1636dfe2564c704c7d2b73d69e4acd5a_960.jpg&user=skeeze"
	},
	{name:"Bonfire",img:"https://pixabay.com/get/57e8d34b4c50a814f6da8c7dda793f7f1636dfe2564c704c7d2b7cd3954dc45b_340.jpg"
	},
	{name:"woods path",img:"https://www.photosforwork.com/download/pixabay-4900188?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F52e9d5434b5aa414f6da8c7dda793f7f1636dfe2564c704c7d2b73d69e4acd5a_960.jpg&user=Trevor205"
	}
];
app.get("/",(req,res)=>{
	res.render("landing");
});

app.get("/camps",(req,res)=>{
	res.render("camps",{camps:camps});
});

app.post("/camps",(req,res)=>{
	var name=req.body.name;
	var image=req.body.image;
	var newone={name:name,img:image};
	camps.push(newone);
	res.redirect("/camps");
});

app.get("/camps/new",(req,res)=>{
	res.render("new");
});

app.listen(3000,()=>{console.log("yelp camp server has started")})