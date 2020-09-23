
let merch = [
    {
      id: 1,
      name: "hrx t-shirt",
      size: "m",
      color: "yellow",
      price: 560,
      image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/1700944/2019/6/8/972c9498-3a37-4d5d-976c-4493b4d5c0021559989322793-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Round-Neck-T-Shirt--1.jpg",
      description: "dry fit",
    },
    {
      id: 2,
      name: "roadster tshirt",
      size: "L",
      color: "red",
      price: 710,
      image: "https://i.pinimg.com/originals/53/69/3f/53693ff752ea542b7d6a895c6a7b4568.jpg",
      description: "comfortable and sweatfree",
    },
  
    {
      id: 3,
  
      name: "girl top",
      size: "M",
      color: "red",
      price: 960,
      image:
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/6722431/2018/7/13/5dba3343-3995-4314-9420-ff090ca665551531484055928-HERENOW-Women-Tshirts-6751531484055801-1.jpg",
      description: "fully cotton",
    },
  
    {
      id: 4,
      name: "Shorts for girls",
      size: "M",
      color: "blue",
      price: 780,
      image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9684285/2019/6/11/7baa7cad-e5a0-4105-8a38-a08b3b7966b91560246730697-FOREVER-21-Women-Blue-Washed-Regular-Fit-Denim-Shorts-762156-1.jpg",
      description: "strechable and comfortable to wear",
    },
  
    {
      id: 5,
      name: "Popeye T-Shirt",
      size: "S",
      color: "purple",
      price: 800,
      image:
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/6940099/2018/7/12/67965b94-e114-40af-b01a-6655e9e5951c1531394910278-Popeye-By-Free-Authority-Mens-T-Shirt-3811531394910080-1.jpg",
      description: "comfortable t-shirt",
    },
  
    {
      id: 6,
      name: "sports shoes ",
      size: "M",
      color: "white and blue",
      price: 2000,
      image:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/7487547/2018/10/26/34ac3cfc-1720-4fc3-8879-1ea6347266501540538213382-Nike-Men-Sports-Shoes-1591540538213274-1.jpg",
      description: "running shoes",
    },
    {
      id: 7,
      name: "black  dotted shirt",
      size: "M",
      color: "black",
      price: 8000,
      image:
        "https://sc01.alicdn.com/kf/UTB8ezIFFpfFXKJk43Otq6xIPFXaK.jpg",
      description: "Good looking Traditional Dress",
    },
    {
      id: 8,
      name: "blazer",
      size: "xl",
      color: "grey",
      price: 20000,
      image:
        "https://5.imimg.com/data5/PU/BN/GY/SELLER-9537682/mens-stylish-three-piece-suit-500x500.jpg",
      description: "for enhancing your style",
    },
    {
      id: 9,
      name: "boat earphones",
      size: "-",
      color: "blue",
      price: 1200,
      image: "https://images-na.ssl-images-amazon.com/images/I/61HX1RD3HyL._SL1500_.jpg",
      description: "hifi sound",
    },
    {
      id: 10,
      name: "jeans",
      size: "M",
      color: "dark blue",
      price: 4000,
      image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/4451374/2019/12/24/80a3e1fa-006e-4775-8c69-6ec3b08558bc1577179172175-Roadster-Fast-and-Furious-Men-Blue-Slim-Fit-Mid-Rise-Mildly--1.jpg",
      description: "light and strechable",
    },
    {
      id: 11,
      name: "Casio G-Shock Watch",
      size: "one size",
      color: "army print",
      price: 12000,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71mbIiIeuYL._UL1100_.jpg",
      description: "Black oxford for gentlemen's collection",
    },
    {
      id: 12,
      name: " boots",
      size: "M",
      color: "black",
      price: 12000,
      image:
        "https://img5.cfcdn.club/04/15/04f379b4517421c0b05c758db3333f15_350x350.jpg",
      description: "comfortable and light",
    },
  ];
   let cart=[];
   let count=0;
  function displaymerch(merchd, type="main", place="card") {
      console.log(merchd);
      let strmerch = "";
      let arrmerch="";
      merchd.forEach(function (ele, index) {
          if(type=="main"){
              strmerch = ` <div class="productcardbg">
          <div class="image">
            <img src="${ele.image}" width="100%" />
          </div>
          <div>
          <h3 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px">${ele.name}</h3>
          <p>Size : ${ele.size}</p>
          <p>Color : ${ele.color}</p>
          <p>price : ${ele.price}</p>
          <h5 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px ;padding-top : 10px">${ele.description}</h5>
          <p style="padding-top: 5px">
            <button class="buttonbg" onclick="addToCart(${ele.id})">Add to Cart</button>
          </p>
        </div>
        </div>`;
        arrmerch+=strmerch;
          }
          
      if(type=="cartd"){
                  strmerch = ` <div class="productcardbg">
          <div class="image">
            <img src="/images/${ele.image}" width="100%" />
          </div>
          <div>
          <h3 style="font-family : 'Times New Roman', Times, serif; padding-left : 10px">${ele.name}</h3>
          <p>Size : ${ele.size}</p>
          <p>Color : ${ele.color}</p>
          <p>price : ${ele.price}</p>
          <h5 style="font-family : 'Times New Roman', Times, serif; padding-left : 10px ;padding-top : 10px">${ele.description}</h5>
          <p style="padding-top: 5px">
            <button class="buttonbg" onclick="deletemerch(${ele.id})">Delete item</button>
          </p>
        </div>
        </div>`;
              
          arrmerch += strmerch;    
  
          }
      });
      
  document.getElementById(place).innerHTML = arrmerch;
      
  }
  
  
  function getProductByID(mercha, id) {
    return mercha.find(function (ele) {
      return ele.id == id;
    });
  }
  let flag=false;
  function addToCart(id) {
  flag=false;
    let item = getProductByID(merch, id);
  
    cart.forEach(function(element){
        if(element.id==item.id){
            flag=true;
            
        }
        
  
    })
    if (flag) {
        alert("WARNING:You are repeating the same item\ndont add the same product twice");
      return 0;
    }
    cart.push(item);
    count+=1;
    document.getElementById("numb").innerText=count;
    let type="cartd";
    let place="cartcard";
    displaymerch(cart, type, place);
  
  }
  
  
  function search(){
      console.log("calling");
  }
  function deletemerch(id){
    let item = getProductByID(merch, id);
    let index = cart.findIndex(function (item1) {
      return item1.id == id;
    });
    cart.splice(index, 1);
    count-=1;
     document.getElementById("numb").innerText = count;
     let type = "cartd";
     let place = "cartcard";
     displaymerch(cart, type, place);
  }
  
  function filter(){
      let minv=document.getElementById("minp").value;
      let maxv = document.getElementById("maxp").value;
      let items= merch.filter(function(itemsl){
          return itemsl.price>=minv && itemsl.price<=maxv;
      })
       displaymerch(items);
      document.getElementById("minp").value="";
        document.getElementById("maxp").value="";
  }
  
  function search(){
      let str= document.getElementById("serstr").value;
      console.log(str);
      let items = merch.filter(function(ele) {
        return ele.name.indexOf(str)!=-1;
      });
      displaymerch(items);
  
  
  }
  displaymerch(merch)