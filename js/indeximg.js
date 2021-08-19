
productService.getCategories().then(res=>{
    let data =res.data.rows;
    let categories=data.map(obj=>obj.doc);
    console.table("category",categories);
    
let content="";
for(let img of categories)
{
    content=content+`
    <div class="indeximg" >
                <a href="product.html?category=${img.category}">
                <img src="images/${img.imageurl}" alt="img"></a>
                <br><br>
                <p> ${img.name}</p>
                
            </div>`;
            document.querySelector("#category").innerHTML=content;
}
});
