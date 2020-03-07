<template>
  <!--   @if(!empty($educations)) -->
  <div class="card">
    <div class="card-header">
      <h2 class="card-title">Education</h2>
    </div>

    <div class="card-content">
      <div class="card-body">
        <!--  @foreach($educations as $key=>$value) -->

        <div class="col-md-6 col-sm">
          <h4>
            <!--{{$value->school}}-->
            Computers and Information System
          </h4>
          <h5>
            <!--{{$value->degree}}, {{$value->grade}}-->
            Master
          </h5>
          <small>
            <!--{{ $value->startDate }}  ~  {{ $value->endDate }}-->
            12-12-2012 : 13-13-2013
          </small>
          <br />
          <small>
            Activities and Societies:
            <!--{{$value->activites}}-->
            Mafesh
          </small>
          <br />
          <br />
          <h6>
            <!--{{$value->description}}-->
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h6>
        </div>
        <hr />
        <!--     @endforeach -->
      </div>
    </div>
  </div>
  <!--   @endif -->
</template>

<script>
export default {
  name: "Education"
};
</script>
