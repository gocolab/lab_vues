<script setup>
import NetworkGraph from "v-network-graph";

const graphData = [
  { id: "1", label: "Node 1" },
  { id: "2", label: "Node 2" },
  { id: "3", label: "Node 3" },
  { id: "4", label: "Node 4" },
  { id: "12", from: "1", to: "2" },
  { id: "23", from: "2", to: "3" },
  { id: "24", from: "2", to: "4" },
];
const graphOptions = {
  layout: {
    name: "cose",
  },
  node: {
    shape: "ellipse",
  },
  edge: {
    shape: "bezier",
  },
};
</script>

<template>
  <!-- 강의 설명 및 리스트 -->
  <div class="row g-5">
    <!-- contents left -->
    <div class="col-md-8 px-4 py-5" id="icon-grid">
      <h4 class="pb-2 border-bottom">FullStack Project</h4>

      <div
        class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5"
      >
        <table class="table table-border">
          <tr>
            <th>View</th>
            <th>Controller</th>
            <th>Model</th>
            <th>Database</th>
          </tr>
          <tr>
            <td>
              <button class="btn m-2 btn-primary">JSP</button>
              <button class="btn m-2 btn-outline-secondary">vuejs</button>
              <button class="btn m-2 btn-outline-secondary">Reactjs</button>
            </td>
            <td>
              <button class="btn m-2 btn-outline-secondary">Bean</button>
              <button class="btn m-2 btn-primary">HashMap</button>
            </td>
            <td>
              <button class="btn m-2 btn-primary">MyBatis</button>
              <button class="btn m-2 btn-outline-secondary">Hibernate</button>
              <button class="btn m-2 btn-outline-secondary">JPA</button>
            </td>
            <td>
              <button class="btn m-2 btn-outline-secondary">Oracle</button>
              <button class="btn m-2 btn-outline-secondary">MongoDB</button>
              <button class="btn m-2 btn-primary">MySQL</button>
            </td>
          </tr>
        </table>
      </div>
    </div>

    <!--- Sidebar -->
    <div class="col-md-4">
      <div class="list-group list-group-checkable d-grid gap-2 border-0 w-auto">
        <h4 class="pb-2 border-bottom">Tech Spac</h4>
        <label
          class="list-group-item rounded-3 py-3"
          for="listGroupCheckableRadios1"
        >
          FrontEnd Project
          <span class="d-block small opacity-50"
            >the development of the graphical user interface of a website</span
          >
        </label>

        <label
          class="list-group-item rounded-3 py-3"
          for="listGroupCheckableRadios2"
        >
          BackEnd Project
          <span class="d-block small opacity-50">
            parts of a computer application or a program's code that allow it to
            operate</span
          >
        </label>

        <label
          class="list-group-item rounded-3 py-3"
          for="listGroupCheckableRadios3"
        >
          FullStack Project
          <span class="d-block small opacity-50"
            >The development of an end to end application using multiple tools
            and technologies</span
          >
        </label>

        <label
          class="btn btn-primary list-group-item rounded-3 py-3"
          for="listGroupCheckableRadios4"
        >
          Mobile App Project
          <span class="d-block small opacity-50"
            >the set of processes and procedures involved in writing software
            for small, wireless computing devices</span
          >
        </label>
      </div>
    </div>
  </div>
</template>

<style></style>
