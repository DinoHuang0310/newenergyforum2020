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
                      <select v-model="active">
                        <option value="A" selected>A. 永續發展場</option>
                        <option value="B">B. 風電人才培育暨技術發展場</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
                <tbody v-if="afternoonA" v-html="afternoonA" v-show="active === 'A'" />
                <tbody v-if="afternoonB" v-html="afternoonB" v-show="active === 'B'" />
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
.controller td {
  color: white;
  text-align: center;
  padding: 1.5em 1em;
  background: #3FB2AA;
  background-image: url('../assets/images/background.png');
}
.controller td select {
  padding: 0.3em 0.6em;
  margin: 0;
  font-size: 1em;
  font-weight: 500;
  min-width: 40%;
  color: #505050;
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
  .agenda-table tbody.controller td:first-child:before {
    content: '請選擇下午場:';
    display: block;
    margin-bottom: 0.5em;
  }
  .controller td select {
    width: 90%;
    margin-bottom: 0.6em;
  }
  .controller:before, .controller:after {
    content: '';
    width: 50%;
    height: 1.5em;
    display: block;
    border-right: dotted 3px #505050;
  }
}

</style>
