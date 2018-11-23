<template>
    <section>
        
        <article v-for="item in 5" :key="item.id">
            <img class="article-img" src="https://www.esrgear.com/wp-content/uploads/2018/11/iPhone-XS-Max-Mimic-Tempered-Glass-Case-Black.jpg" alt="">
            <h3>hello</h3>
            <div>just for test just for test just for test just for test just for test</div>
            <time>2018-11-23</time>
        </article> 
    </section>    
</template>


<script>
export default {
  name: "Content",
  data() {
    return {
      message: ""
    };
  }
};
</script>


<style>
section > article {
  background-color: floralwhite;
  border: 1px solid #555555;
  border-radius: 10px;
  padding: 20px;
  margin: 30px 0px;
  height: 250px;
}

article time {
  float: right;
  margin-right: 25px;
}

.article-img {
  width: 400px;
  height: 250px;
  float: left;
}
</style>
