<template>
  <div id="agenda" class="area" v-if="morning">
    <h2 data-en="Agenda">論壇議程</h2>
    <div class="wrapper">
      <div class="area-box float-box">
        <div class="content">
          <div class="shadow-box">
            <div class="agenda-table">
              <table>
                <thead>
                    <tr>
                      <th>時間</th>
                      <th>流程</th>
                      <th>講者</th>
                    </tr>
                </thead>
                <tbody v-if="morning" v-html="morning" />
                <tbody class="controller">
                  <tr>
                    <td colspan="3">
                      <label :class="active === 'A' ? 'active' : null" data-title="下午場A">
                        <input type="radio" v-model="active" value="A">A. 永續發展場
                      </label>
                      <label :class="active === 'B' ? 'active' : null" data-title="下午場B">
                        <input type="radio" v-model="active" value="B">B. 風電人才培育暨技術發展場
                      </label>
                    </td>
                  </tr>
                </tbody>
                <tbody class="afternoon" v-if="afternoonA" v-html="afternoonA" v-show="active === 'A'" />
                <tbody class="afternoon" v-if="afternoonB" v-html="afternoonB" v-show="active === 'B'" />
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: function() {
    return {
      morning: null,
      afternoonA: null,
      afternoonB: null,
      active: 'A'
    }
  },
  mounted() {
    const timestr = new Date().getTime();

    axios.get(`morning.html?${timestr}`).then(response => {
      this.morning = response.data;
    }).catch(error => {
      console.log(error);
    });

    axios.get(`afternoonA.html?${timestr}`).then(response => {
      this.afternoonA = response.data;
    }).catch(error => {
      console.log(error);
    });

    axios.get(`afternoonB.html?${timestr}`).then(response => {
      this.afternoonB = response.data;
    }).catch(error => {
      console.log(error);
    });
  }
}
</script>

<style>
.agenda-table {
  position: relative;
  background: white;
  padding: 1em;
  color: #505050;
}
.agenda-table table {
  width: 100%;
  border-collapse: collapse;
}
.agenda-table th {
  padding: 0.6em 0.8em;
}
.agenda-table td {
  padding: 0.8em;
}
.agenda-table td span {
  display: inline-block;
  background: #3FB2AA;
  color: white;
  padding: 0.2em 0.8em;
}
.agenda-table .controller tr:last-child td {
  color: white;
  text-align: center;
  padding: 1.5em 1em;
  border-top: solid 1px #ccc;
  border-bottom: solid 1px #ccc;
}
.controller td label {
  display: inline-block;
  min-width: 30%;
  margin: 0 2.5%;
  cursor: pointer;
  padding: 0.4em 0.6em;
  border-radius: 10px;
  background: #b4b4b4;
  transition: .5s;
}
.controller td label.active {
  background: #3FB2AA;
}
.controller td label input {
  display: none;
}
.agenda-table thead th {
  color: white;
  font-weight: 400;
  letter-spacing: 0.2em;
  background: #3FB2AA;
  border-right: solid 2px white;
}
.agenda-table thead th:last-child {
  border-right: none;
}
.agenda-table tbody td:first-child {
  width: 1px;
  white-space: nowrap;
}

@media (hover: hover) {
  .controller td label:hover {
    background: #3FB2AA;
  }
}

@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .controller td label:hover {
    background: #3FB2AA;
  }
}

@media screen and (max-width: 640px) {
  .agenda-table {
    padding: 0.5em;
  }
}

@media screen and (min-width: 481px) {
  .agenda-table td,
  .agenda-table th {
    border-bottom: solid 1px #ccc;
  }
  .agenda-table tr:last-child td,
  .agenda-table tr:last-child th {
    border-bottom: none;
  }
  .agenda-table td span {
    font-size: .9em;
  }
}

@media screen and (max-width: 480px) {
  #agenda .content {
    padding: 0;
  }
  .agenda-table {
    padding: 0;
  }
  #agenda .area-box::before {
    display: none;
  }
  .agenda-table table,
  .agenda-table tbody,
  .agenda-table tr,
  .agenda-table td,
  .agenda-table th {
    display: block;
    text-align: center;
  }
  .agenda-table thead {
    display: none;
  }
  .agenda-table tr {
    margin: 0.8em 0;
    border: solid 1px #ccc;
  }
  .agenda-table tbody td:first-child {
    width: 100%;
    background-color: #3FB2AA;
    color: white;
    padding: 0.6em 0.8em;
  }
  .agenda-table tbody td:first-child:before {
    content: '時間: ';
  }
  .agenda-table .controller tr {
    border: none;
  }
  .agenda-table .controller tr:last-child td {
    background: none;
    border: none;
    padding-left: 0;
    padding-right: 0;
  }
  .controller td:before {
    display: none;
  }
  .controller td label {
    width: 45%;
    font-size: 0;
  }
  .controller td label::before {
    content: attr(data-title);
    font-size: 1rem;
    display: block;
    padding: 1em 0.6em;
  }
}

</style>
