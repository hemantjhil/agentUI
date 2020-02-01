<template>
    <div>


<p>{{items.name}}</p>
    <p>{{items.id}}</p>


    </div>
    
</template>




<script>
export default {
    name:"marketingdetails",
    props:{
        items:{
            type:Object,
            default: () =>{}
        }
    }
}
</script>