let searchNews = async (value) =>{
    try{
        let res= await fetch (`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`);

        let data= await res.json();
        console.log(data);
        return data;

    }catch(err){
        console.log(err);
    }
};

let append=(data,container)=>{
    data.forEach((el) => {
        let div=document.createElement("div");
        div.setAttribute("class","news");
        let img=document.createElement("img");
        img.src=el.urlToImage;
        // console.log(img);
        let h3=document.createElement("h3");
        h3.innerText=el.title;
        // console.log(h3);
        let p=document.createElement("p");
        p.innerText=el.description;
        // console.log(p);
        div.append(img, h3, p);
        container.append(div);
    });
};
export {searchNews,append};
