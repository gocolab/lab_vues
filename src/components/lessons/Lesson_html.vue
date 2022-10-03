<template>
  <!-- 강의 설명 및 리스트 -->
  <div class="row g-5">
    <!-- contents left -->
    <div class="col-md-8 px-4 py-5" id="icon-grid">
      <h2 class="pb-2 border-bottom">ERD</h2>

      <div
        class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5"
      >
        <div class="col d-flex align-items-start">
          <svg
            class="bi text-muted flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
          >
            <use xlink:href="#bootstrap"></use>
          </svg>
          <div>
            <h3 class="fw-bold mb-0 fs-4">Featured title</h3>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <svg
            class="bi text-muted flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
          >
            <use xlink:href="#cpu-fill"></use>
          </svg>
          <div>
            <h3 class="fw-bold mb-0 fs-4">Featured title</h3>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <svg
            class="bi text-muted flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
          >
            <use xlink:href="#calendar3"></use>
          </svg>
          <div>
            <h3 class="fw-bold mb-0 fs-4">Featured title</h3>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <svg
            class="bi text-muted flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
          >
            <use xlink:href="#home"></use>
          </svg>
          <div>
            <h3 class="fw-bold mb-0 fs-4">Featured title</h3>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <svg
            class="bi text-muted flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
          >
            <use xlink:href="#speedometer2"></use>
          </svg>
          <div>
            <h3 class="fw-bold mb-0 fs-4">Featured title</h3>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <svg
            class="bi text-muted flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
          >
            <use xlink:href="#toggles2"></use>
          </svg>
          <div>
            <h3 class="fw-bold mb-0 fs-4">Featured title</h3>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <svg
            class="bi text-muted flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
          >
            <use xlink:href="#geo-fill"></use>
          </svg>
          <div>
            <h3 class="fw-bold mb-0 fs-4">Featured title</h3>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <svg
            class="bi text-muted flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
          >
            <use xlink:href="#tools"></use>
          </svg>
          <div>
            <h3 class="fw-bold mb-0 fs-4">Featured title</h3>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
      </div>
    </div>

    <!--- Sidebar -->
    <div class="col-md-4">
      <div class="list-group list-group-checkable d-grid gap-2 border-0 w-auto">
        <input
          class="list-group-item-check pe-none"
          type="radio"
          name="listGroupCheckableRadios"
          id="listGroupCheckableRadios1"
          value=""
          checked=""
        />
        <label
          class="list-group-item rounded-3 py-3"
          for="listGroupCheckableRadios1"
        >
          강의 설명
          <span class="d-block small opacity-50"
            >With support text underneath to add more detail</span
          >
        </label>

        <input
          class="list-group-item-check pe-none"
          type="radio"
          name="listGroupCheckableRadios"
          id="listGroupCheckableRadios2"
          value=""
        />
        <label
          class="list-group-item rounded-3 py-3"
          for="listGroupCheckableRadios2"
        >
          사전 필요 지식
          <span class="d-block small opacity-50"
            >Some other text goes here</span
          >
        </label>

        <input
          class="list-group-item-check pe-none"
          type="radio"
          name="listGroupCheckableRadios"
          id="listGroupCheckableRadios3"
          value=""
        />
        <label
          class="list-group-item rounded-3 py-3"
          for="listGroupCheckableRadios3"
        >
          사용 기술과 도구 버전
          <span class="d-block small opacity-50"
            >And we end with another snippet of text</span
          >
        </label>

        <input
          class="list-group-item-check pe-none"
          type="radio"
          name="listGroupCheckableRadios"
          id="listGroupCheckableRadios4"
          value=""
          disabled=""
        />
        <label
          class="list-group-item rounded-3 py-3"
          for="listGroupCheckableRadios4"
        >
          이어지는 과정
          <span class="d-block small opacity-50">This option is disabled</span>
        </label>
      </div>
    </div>
  </div>
  <!-- 강의 영상 -->
  <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="0"
        class=""
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="1"
        aria-label="Slide 2"
        class="active"
        aria-current="true"
      ></button>
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="2"
        aria-label="Slide 3"
        class=""
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item">
        <svg
          class="bd-placeholder-img"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <rect width="100%" height="100%" fill="#777"></rect>
        </svg>

        <div class="container">
          <div class="carousel-caption text-start">
            <h1>Example headline.</h1>
            <p>
              Some representative placeholder content for the first slide of the
              carousel.
            </p>
            <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item active">
        <svg
          class="bd-placeholder-img"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <rect width="100%" height="100%" fill="#777"></rect>
        </svg>

        <div class="container">
          <div class="carousel-caption">
            <h1>Another example headline.</h1>
            <p>
              Some representative placeholder content for the second slide of
              the carousel.
            </p>
            <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <svg
          class="bd-placeholder-img"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <rect width="100%" height="100%" fill="#777"></rect>
        </svg>

        <div class="container">
          <div class="carousel-caption text-end">
            <h1>One more for good measure.</h1>
            <p>
              Some representative placeholder content for the third slide of
              this carousel.
            </p>
            <p><a class="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
          </div>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <!-- 강의별 상세 설명 -->
  <div class="px-4 py-5 my-5 text-center">
    <h1 class="display-5 fw-bold">Centered hero</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">
        Quickly design and customize responsive mobile-first sites with
        Bootstrap, the world’s most popular front-end open source toolkit,
        featuring Sass variables and mixins, responsive grid system, extensive
        prebuilt components, and powerful JavaScript plugins.
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
