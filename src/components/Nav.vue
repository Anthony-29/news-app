<template>
  <nav class="navbar navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">News API</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header navbar-dark bg-dark">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            X
          </button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <!-- Adding the routing to the menu -->
              <router-link class="link link--metis" to="/"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <!-- Adding the routing to the menu -->
              <router-link class="link link--metis" to="/Top"
                >Top Headlines</router-link
              >
            </li>
            <li class="nav-item">
              <!-- Adding the routing to the menu -->
              <router-link class="link link--metis" to="/Sports"
                >Sports</router-link
              >
            </li>
            <li class="nav-item">
              <!-- Adding the routing to the menu -->
              <router-link class="link link--metis" to="/Covid"
                >Covid</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>


<style scoped>
.nav-item {
  text-align: left;
}

.btn-close {
  background: #212529;
  font-weight: bold;
  text-align: center;
}

div.offcanvas-header {
  color: white;
}

a {
  text-decoration: none;
  font-size: 2em;
  color: black;
  font-family: "Source Serif Pro", serif;
}

.link {
  cursor: pointer;
  position: relative;
  white-space: nowrap;
}

.link::before,
.link::after {
  position: absolute;
  width: 100%;
  height: 1px;
  background: currentColor;
  top: 100%;
  left: 0;
  pointer-events: none;
}

.link::before {
  content: "";
  /* show by default */
}

.link--metis {
  font-family: "Source Serif Pro", serif;
  text-transform: uppercase;
}

.link--metis::before {
  transform-origin: 100% 50%;
  transform: scale3d(0, 1, 1);
  transition: transform 0.3s;
}

.link--metis:hover::before {
  transform-origin: 0% 50%;
  transform: scale3d(1, 1, 1);
}
</style>