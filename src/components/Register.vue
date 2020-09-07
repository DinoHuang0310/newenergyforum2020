<template>
  <div id="register" class="area">
    <h2 data-en="Register">立即報名</h2>
    <div class="register-box">
      <div class="wrapper">
        <div :class="loading ? 'signup-form submit' : 'signup-form'">
          <input v-model="name" type="text" placeholder="姓名*" maxlength="50" />
          <input
            v-model="mobile"
            type="text"
            placeholder="手機*"
            maxlength="10"
            @keyup="resetMobile($event.target.value)"
          />
          <input v-model="mail" type="mail" placeholder="信箱*" maxlength="100" />
          <input v-model="company" type="text" placeholder="公司*" maxlength="50" />
          <input v-model="title" type="text" placeholder="職稱*" maxlength="50" />
          <h4>報名場次 <small>(可複選)</small>*</h4>
          <div>
            <input v-model="session" id="morning" type="checkbox" value="上午場" />
            <label for="morning">上午場</label>
          </div>
          <div>
            <input v-model="session" id="afternoonA" type="checkbox" value="下午場A" />
            <label for="afternoonA">下午分場A：永續發展場</label>
          </div>
          <div>
            <input v-model="session" id="afternoonB" type="checkbox" value="下午場B" />
            <label for="afternoonB">下午分場B：風電人才培育暨技術發展場</label>
          </div>
          <hr />
          <input v-model="agree" id="agree" type="checkbox" />
          <label for="agree">
            我已閱讀<mark @click.prevent="show('personalData')">個資條款</mark>且同意送出資料
          </label>
          <modal
            name="personalData"
            width="90%"
            height="70%"
            @closed="closed"
          >
            <div slot="top-right">
              <button
                class="closebox"
                @click="$modal.hide('personalData')"
              >
                <i class="far fa-times-circle" />
              </button>
            </div>
            <p>謹依個人資料保護法第8條規定告知以下事項：</p>
            <p>您為本次活動的參與者（以下簡稱參與人）。參與人所填寫的資料將會提供予今周刊。請確認所有參與人在勾選同意前已詳閱並同意以下條款：今周刊基於客戶管理、統計及調查分析、行銷及其他合於營業登記項目或章程所定業務需要或其他法令所准許之特定目的，向參與人蒐集前述個人資料，並管理維護及處理利用。</p>
          </modal>
          <button @click="submit">確認送出</button>
        </div>
        <div class="alert">
          <h3>報名注意事項</h3>
          <ol>
            <li>本論壇免費參加，當天憑簡訊報名序號報到入場，因席次有限，當天敬請提早入場。</li>
            <li>國外講者全程英文演說，現場同步即時口譯，請自備身份證以便辦理租借口譯設備，數量有限，向隅請見諒。</li>
            <li>為維護健康安全，本活動遵照防疫公告實施辦理，凡參與本論壇之貴賓於活動期間，請主動配帶醫療級口罩，同時請於活動報到當天協助主辦單位填寫健康聲明書及進行體溫測量 。</li>
            <li>中午不供餐 / 中午休息時間進行環境清場整理。</li>
            <li>主辦單位保留隨時更改活動內容以及終止之權利。</li>
          </ol>
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
      name: null,
      mobile: null,
      mail: null,
      company: null,
      title: null,
      session: [],
      agree: false,
      loading: false
    }
  },
  methods: {
    show(target) {
      this.$modal.show(target);
      const el = document.getElementsByTagName("html")[0];
      el.classList.add('fixed');
    },
    closed() {
      const el = document.getElementsByTagName("html")[0];
      el.classList.remove('fixed');
    },
    resetMobile(val) {
      this.mobile = val.replace(/\D/g, '');
    },
    submit() {
      if(!this.name || !this.mobile || !this.mail || !this.company || !this.title) {
        alert('尚有欄位未填寫');
        return false;
      }
      if(this.session.length < 1) {
        alert('請選擇報名場次');
        return false;
      }
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!pattern.test(this.mail)) {
        alert('E-mail格式錯誤');
        return false;
      }
      if(this.mobile.length < 10) {
        alert('手機號碼錯誤');
        return false;
      }
      if(!this.agree) {
        alert('尚未同意個資條款');
        return false;
      }
      // 前端驗證完成 封裝送出
      this.loading = true;
      let self = this;
      axios.post('https://events.businesstoday.com.tw/event_backend/backend/newenergyforum2020/sign_up', {
        name: this.name,
        mobile: this.mobile,
        mail: this.mail,
        company: this.company,
        title: this.title,
        session: this.session
      })
      .then(function(response) {
        // 檢測結果
        if(response.data.status === "ok") {
          alert('您已報名成功，活動三天前將寄發提醒報名序號簡訊，當天憑簡訊報到入場。\n感謝您的報名。');
          self.name = null,
          self.mobile = null,
          self.mail = null,
          self.company = null,
          self.title = null,
          self.session = [],
          self.agree = false,
          self.loading = false
        } else {
          alert(`報名失敗- ${response.data.message}`);
          self.loading = false;
          console.log(response);
        }
      })
      .catch(function(error) {
        alert('報名失敗');
        self.loading = false;
        console.log(error);
      });
    }
  },
}
</script>

<style>
#register {
  overflow: hidden;
}
.register-box {
  background-image: url('../assets/images/background.png');
  background-color: #3FB2AA;
}
.signup-form {
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 2em 0;
  text-align: center;
}
.signup-form input,
.signup-form button {
  display: block;
  width: 100%;
  font-size: inherit;
  padding: 0.5em 1em;
  margin: 0.8em 0;
  border: none;
}
.signup-form input[type="checkbox"] {
  display: inline-block;
  vertical-align: middle;
  width: 1em;
  height: 1em;
  margin: 0;
}
.signup-form label {
  color: white;
  padding-left: 0.5em;
  display: inline-block;
  vertical-align: middle;
}
.signup-form h4 {
  text-align: left;
  color: white;
  font-size: 1.2em;
  font-weight: 500;
  margin: 0.4em 0;
}
.signup-form div {
  text-align: left;
  margin-bottom: 0.2em;
}
.signup-form > div:not(.vm--container) {
  white-space: nowrap;
}
.signup-form hr {
  border: none;
  border-bottom: solid 1px white;
}
.signup-form mark {
  color: #FFE576;
  font-weight: 500;
  text-decoration: underline;
  padding: 0 0.2em;
  cursor: pointer;
}
.signup-form button {
  font-weight: 500;
  color: #21948C;
  background: #FFE576;
  opacity: 1;
  transition: .5s;
}
.alert {
  color: white;
  padding: 0 4em 2em;
}
.alert h3 {
  font-size: 1.4em;
  margin: 0;
}
.alert ol li {
  list-style-type: disc;
  margin: 1em 0;
}
.signup-form.submit::before {
  content: '';
  position: absolute;
  width: 120%;
  height: 100%;
  top: 0;
  left: -10%;
  background: rgba(0, 0, 0, .5);
}
.signup-form.submit::after {
  content: '\f110';
  position: absolute;
  display: inline-block;
  width: 40px;
  height: 40px;
  top: 50%;
  left: 50%;
  margin: -20px 0 0 -20px;
  color: white;
  font-size: 40px;
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  font-style: normal;
  font-variant: normal;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: auto;
  line-height: 1;
  -webkit-animation: setRotate 2s linear infinite;
  -moz-animation: setRotate 2s linear infinite;
  animation: setRotate 2s linear infinite;
}

@media (hover: hover) {
  .signup-form > button:hover {
    opacity: .7;
  }
}

@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .signup-form > button:hover {
    opacity: .7;
  }
}

@media screen and (max-width: 1900px) {
  .signup-form {
    max-width: 420px;
  }
}

@media screen and (max-width: 1024px) {
  .signup-form {
    max-width: 360px;
  }
}

@media screen and (max-width: 640px) {
  .signup-form {
    max-width: none;
  }
  .alert {
    padding: 0.4em 0;
  }
}

@media screen and (max-width: 480px) {
  .signup-form {
    padding: 2em 2.5vw 1em;
  }
  .alert {
    padding: 0.4em 2.5vw;
  }
  .alert ol {
    padding-left: 1em;
  }
}

@media screen and (max-width: 320px) {
  .signup-form label {
    font-size: .95em;
    padding-left: 0.2em;
  }
}

</style>
