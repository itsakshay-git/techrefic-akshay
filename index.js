const divContener = document.getElementById("headercontent");
const contener = document.getElementById("headercontentone");

let showContent = function(event){
    if(event.target.id === "test2"){
        console.log(event.target.id)
        divContener.innerHTML = `
        <h2>Lorem, ipsum dolor.Vel</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel consequatur, iure excepturi eos voluptatum dignissimos! consectetur adipisicing elit. Vel consequatur, Iusto dolorem natus odio beatae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio ducimus quam rerum quos tempora deleniti consequatur quidem quia incidunt excepturi! Assumenda, quisquam magni. Quos voluptatum exercitationem adipisci facilis, delectus porro.</p>
        <button class="specialbtn">
            Learn More 
            <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
        </button>`
    }
    if(event.target.id === "test3"){
        console.log(event.target.id)
        divContener.innerHTML = `
        <h2>Lorem, ipsum dolor.sit amet</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel consequatur, iure excepturi eos voluptatum dignissimos! Iusto dolorem natus odio beatae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio ducimus quam rerum quos tempora deleniti consequatur quidem quia incidunt excepturi! Assumenda, quisquam magni. Quos voluptatum exercitationem adipisci facilis, delectus porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, sapiente.</p>
        <button class="specialbtn">
            Learn More 
            <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
        </button>`
    }
    if(event.target.id === "test4"){
        console.log(event.target.id)
        divContener.innerHTML = `
        <h2>Lorem, ipsum dolor.amet consectetur</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel consequatur, iure excepturi eos voluptatum dignissimos! Iusto dolorem natus odio beatae? Lorem ipsum,  Vel consequatur, iure excepturi eos voluptatum dignissimos! Iusto dolor sit amet consectetur adipisicing elit. Optio ducimus quam rerum quos tempora deleniti consequatur quidem quia incidunt excepturi! Assumenda, quisquam magni. Quos voluptatum exercitationem adipisci facilis, delectus porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, sapiente.</p>
        <button class="specialbtn">
            Learn More 
            <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
        </button>`
    }

}

let Content = function(event){
    console.log("test")
        if(event.target.id === "test6"){
            console.log(event.target.id)
            contener.innerHTML = `
            <h2>Lorem, ipsum dolor.</h2>          
            <div class="imageflex">
                <div>
                    <img class="image" src="./assets/marvin-meyer-SYTO3xs06fU-unsplash.jpg" alt="image">
                </div>
                <div class="contentone">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel consequatur, iure excepturi eos voluptatum dignissimos! Iusto dolorem natus odio beatae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio ducimus quam rerum quos tempora deleniti consequatur quidem quia incidunt excepturi! Assumenda, quisquam magni. Quos voluptatum exercitationem adipisci facilis, delectus porro.</p>
                    <button class="specialbtn">
                        Learn More 
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
                    </button>
                </div>
            </div>`
        }
        if(event.target.id === "test7"){
            console.log(event.target.id)
            contener.innerHTML = `
            <h2>Lorem, ipsum dolor.</h2>          
            <div class="imageflex">
                <div>
                    <img class="image" src="./assets/luca-bravo-XJXWbfSo2f0-unsplash.jpg" alt="image">
                </div>
                <div class="contentone">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel consequatur, iure excepturi eos voluptatum dignissimos! Iusto dolorem natus odio beatae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio ducimus quam rerum quos tempora deleniti consequatur quidem quia incidunt excepturi! Assumenda, quisquam magni. Quos voluptatum exercitationem adipisci facilis, delectus porro.</p>
                    <button class="specialbtn">
                        Learn More 
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
                    </button>
                </div>
            </div>`
        }
        if(event.target.id === "test8"){
            console.log(event.target.id)
            contener.innerHTML = `
            <h2>Lorem, ipsum dolor.</h2>          
            <div class="imageflex">
                <div>
                    <img class="image" src="./assets/michal-kubalczyk-WecngmAT-KY-unsplash.jpg" alt="image">
                </div>
                <div class="contentone">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel consequatur, iure excepturi eos voluptatum dignissimos! Iusto dolorem natus odio beatae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio ducimus quam rerum quos tempora deleniti consequatur quidem quia incidunt excepturi! Assumenda, quisquam magni. Quos voluptatum exercitationem adipisci facilis, delectus porro.</p>
                    <button class="specialbtn">
                        Learn More 
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
                    </button>
                </div>
            </div>`
        }
    
}