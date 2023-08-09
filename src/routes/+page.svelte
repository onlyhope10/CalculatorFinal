<script >
// @ts-nocheck

import {onMount} from 'svelte';
import {evaluate} from 'mathjs';

let list ;
let item =[];
let result = [] ;



 onMount(async () => {
    const res = await fetch(`/data`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    list = await res.json();
    
    
 });
 
 function addItem(value){
    item += value;
 }


</script>

<svelte:head>
    <title>Simple Calculator</title>
    <meta name="description" content="Simple Calculator">
</svelte:head>

<div class="container">

    <div>
        <h1>Calculator</h1>
    </div>

    <div class="screen" >
        <p class="p1">{item }</p>
        <p class="p2">{result}</p>
    </div>

    <div class="btn ">
        
        <button on:click={()=> addItem(list.l1)}>1</button>
        <button on:click={()=> addItem(list.l2)}>2</button>
        <button on:click={()=> addItem(list.l3)}>3</button>
        <button on:click={()=> addItem(list.l4)}>4</button>
        <button on:click={()=> addItem(list.l5)}>5</button>
        <button on:click={()=> addItem(list.l6)}>6</button>
        <button on:click={()=> addItem(list.l7)}>7</button>
        <button on:click={()=> addItem(list.l8)}>8</button>
        <button on:click={()=> addItem(list.l9)}>9</button>
        <button on:click={()=> addItem(list.l0)}>0</button>
        <button on:click={()=> result = evaluate(item)}>=</button>
        <button on:click={()=> item = result =[]}>Clear</button>
        <button on:click={()=> addItem(list.m)}>x</button>
        <button on:click={()=> addItem(list.d)}>/</button>
        <button on:click={()=> addItem(list.a)}>+</button>
        <button on:click={()=> addItem(list.s)}>-</button>
    </div>

</div>

<style>
    * {
    box-sizing: border-box;
    margin: 0;
    width: 0;
}


.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;
    background-color: dodgerblue;
    padding:12px 30px;
    width: 392px;
       
}



.btn {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 362px;
    margin: 2px;
}


button {
    width:82px;
    height:82px;
    font-size: 22px;
}

.screen {
    padding: 2px;
}
p {
    background-color: #ffff;
    width:326px;
    height:34px;
    font-size: 22px;
    overflow: hidden;
}

.p2 {
    text-align: right;
}
</style>