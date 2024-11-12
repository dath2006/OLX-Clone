
const express = require("express");
const app = express();
const port= 3000;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public/css")));
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended : true}));

let products = [
    {
        id: uuidv4(),
        iurl : "https://images-na.ssl-images-amazon.com/images/I/71YO97sdkEL.jpg",
        pname : "HP omen pro",
        pprice : 69999,
        pinfo : {
            pdamage : "Little scratches , small dents in corner",
            pacc : "charger,stand",
            pdetails : "Up to Intel® Core™ i9-12900H (up to 5.0 GHz with Intel® Turbo Boost Technology1 Up to a NVIDIA® GeForce RTX™ 3070 Ti Laptop GPU (8 GB GDDR6 dedicated) with DLSS, Ray Tracing and Max-Q technologies Up to 32 GB DDR5-4800 MHz RAM "
        }
    },

    {
        id: uuidv4(),
        iurl : "https://www.lowyat.net/wp-content/uploads/2023/07/Nothing-Phone-2-now-official-3.jpg",
        pname : "Nothing Phone 2",
        pprice : 31999,
        pinfo : {
            pdamage : "No damage",
            pacc : "charger",
            pdetails : "Android 13 smartphone with a 6.7-inch LTPO OLED display, Snapdragon 8+ Gen 1 chipset, and a dual camera with LED lights. It has a 4700 mAh battery"
        }
    }
];

app.get("/products", (req,res) => {
   res.render("Main.ejs" , {products});
});



app.post("/products/new" , (req,res) => {
  let product = req.body;
  products.push({
    id : uuidv4(),
    iurl : product.iurl,
    pname : product.pname,
    pprice : product.pprice,
    pinfo : {
        pdamage : product.pdamage,
        pacc : product.pacc ,
        pdetails : product.pdetails
    }
  });
  res.redirect("/products");
});

app.get("/products/new" , (req,res) => {
    res.render("new.ejs");
});

app.patch("/products/:id" ,methodOverride((req,res) => {
    let {id} = req.params;
   let product = products.find((p) => id ===p.id);
   let info =req.body;
   product.iurl = info.iurl,
   product.pname = info.pname,
   product.pprice = info.pprice,
   product.pinfo = {
       pdamage : info.pdamage,
       pacc : info.pacc ,
       pdetails : info.pdetails
   }
   res.redirect("/products"); 
}));

app.get("/products/:id/edit" , (req,res) => {
   let {id} = req.params;
   let product = products.find((p) => id ===p.id);
   res.render("edit.ejs" , {product});
});

app.get("/products/:id/details" , (req,res) => {
    let {id} = req.params;
    let product = products.find((p) => id ===p.id);
    res.render("Details.ejs" , {product});
});

app.delete("/products/:id" ,(req,res) => {
    let {id} = req.params;
    let product = products.find((p) => id ===p.id);
   let index = products.indexOf(product);
   products.splice(index,1);
   res.redirect("/products"); 
});



app.listen(port , () => {
    console.log("server activated");
=======
const express = require("express");
const app = express();
const port= 3000;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public/css")));
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended : true}));

let products = [
    {
        id: uuidv4(),
        iurl : "https://images-na.ssl-images-amazon.com/images/I/71YO97sdkEL.jpg",
        pname : "HP omen pro",
        pprice : 69999,
        pinfo : {
            pdamage : "Little scratches , small dents in corner",
            pacc : "charger,stand",
            pdetails : "Up to Intel® Core™ i9-12900H (up to 5.0 GHz with Intel® Turbo Boost Technology1 Up to a NVIDIA® GeForce RTX™ 3070 Ti Laptop GPU (8 GB GDDR6 dedicated) with DLSS, Ray Tracing and Max-Q technologies Up to 32 GB DDR5-4800 MHz RAM "
        }
    },

    {
        id: uuidv4(),
        iurl : "https://www.lowyat.net/wp-content/uploads/2023/07/Nothing-Phone-2-now-official-3.jpg",
        pname : "Nothing Phone 2",
        pprice : 31999,
        pinfo : {
            pdamage : "No damage",
            pacc : "charger",
            pdetails : "Android 13 smartphone with a 6.7-inch LTPO OLED display, Snapdragon 8+ Gen 1 chipset, and a dual camera with LED lights. It has a 4700 mAh battery"
        }
    }
];

app.get("/products", (req,res) => {
   res.render("Main.ejs" , {products});
});



app.post("/products/new" , (req,res) => {
  let product = req.body;
  products.push({
    id : uuidv4(),
    iurl : product.iurl,
    pname : product.pname,
    pprice : product.pprice,
    pinfo : {
        pdamage : product.pdamage,
        pacc : product.pacc ,
        pdetails : product.pdetails
    }
  });
  res.redirect("/products");
});

app.get("/products/new" , (req,res) => {
    res.render("new.ejs");
});

app.patch("/products/:id" ,methodOverride((req,res) => {
    let {id} = req.params;
   let product = products.find((p) => id ===p.id);
   let info =req.body;
   product.iurl = info.iurl,
   product.pname = info.pname,
   product.pprice = info.pprice,
   product.pinfo = {
       pdamage : info.pdamage,
       pacc : info.pacc ,
       pdetails : info.pdetails
   }
   res.redirect("/products"); 
}));

app.get("/products/:id/edit" , (req,res) => {
   let {id} = req.params;
   let product = products.find((p) => id ===p.id);
   res.render("edit.ejs" , {product});
});

app.get("/products/:id/details" , (req,res) => {
    let {id} = req.params;
    let product = products.find((p) => id ===p.id);
    res.render("Details.ejs" , {product});
});

app.delete("/products/:id" ,(req,res) => {
    let {id} = req.params;
    let product = products.find((p) => id ===p.id);
   let index = products.indexOf(product);
   products.splice(index,1);
   res.redirect("/products"); 
});



app.listen(port , () => {
    console.log("server activated");

});