<template>
  <!--     @if(!empty($skills)) -->
  <div class="card">
    <div class="card-header">
      <h2 class="card-title">Skills</h2>
    </div>

    <div class="card-content">
      <div class="card-body">
        <!--       @foreach($skills as $key=>$value) -->

        <div class="col-md-6 col-sm">
          <p>
            <!--{{ $value->skill}} -->
            Skills kter
          </p>
        </div>
        <hr />
        <!--      @endforeach -->
      </div>
    </div>
  </div>
  <!--   @endif -->
</template>

<script>
export default {
  name: "Skills"
};
</script>
