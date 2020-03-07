<template>
  <!-- @if(!empty($experiences))-->
  <div class="card">
    <div class="card-header">
      <h2 class="card-title">Experience</h2>
    </div>

    <div class="card-content">
      <div class="card-body">
        <!--    @foreach($experiences as $key=>$value)-->

        <div class="col-md-6 col-sm">
          <h4>
            <!--{{$value->title}} -->
            Front End Developer at
            <strong title="Location: ">
              <!--{{ $value->company }}-->
              CB-MART
            </strong>
          </h4>
          <p>
            <!--{{ $value->startDate }}  ~  {{ $value->endDate }}-->
            12-12-2012 : 13-13-2013
          </p>
          <p>
            <!--{{$value->location}}-->
            Cairo, Egypt.
          </p>
          <small>
            <!--{{ $value->description }}-->
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </small>
        </div>
        <hr />
        <!--  @endforeach -->
      </div>
    </div>
  </div>
  <!--        @endif -->
</template>

<script>
export default {
  name: "Experience"
};
</script>

