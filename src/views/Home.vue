<template>
<div class="content-wrapper home">
        <div class="content-body">
    	<div class="card-content">
    		<div class="card-body">
      <div class="row">
        
        <left-side></left-side>
        <div class="col-lg-1 col-12 ">
                        </div>
        <right-side></right-side>
      </div>
    		</div>
        </div>
        </div>
</div>
</template>

<script>
import LeftSide from "./HomePage/LeftSide.vue";
import RightSide from "./HomePage/RightSide.vue";
export default {
  name: "home",
  components: {
    LeftSide,
    RightSide
  }
};
</script>

<style>
.home{
  margin-left: 19em
}
</style>

