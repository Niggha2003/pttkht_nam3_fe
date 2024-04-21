<script setup>
import { ref } from 'vue'
import { get } from '@/utils/httpRequest'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

// Trong một hàm action của Vuex
const store = useStore()
const router = useRouter()

const wrongAccess = ref(false)
const loading = ref(false)
const accountName = ref('')
const accountPassword = ref('')

const login = async () => {
  try {
    const response = get('/api_login', {
      params: {
        accountName: accountName.value,
        accountPassword: accountPassword.value
      },
      withCredentials: true // Cho phép gửi cookie từ VueJS đến ExpressJS
    })
    return response
  } catch (error) {
    console.log(error)
  }
}

async function handleLogin() {
  try {
    loading.value = true
    setTimeout(async () => {
      const resultLogin = await login()

      loading.value = false
      if (resultLogin) {
        sessionStorage.setItem('jwtToken', resultLogin)
        store.commit('login')
        router.push('/')
      } else {
        wrongAccess.value = true
      }
    }, 700)
  } catch (error) {
    // Xử lý lỗi khi đăng nhập không thành công
    console.error('Login failed:', error)
  }
}
</script>

<template>
  <div class="container vh-100 d-flex align-items-center">
    <div class="row w-100">
      <div class="mx-auto col-lg-5">
        <div class="card card-plain box-shadow-custom">
          <div class="card-header text-center bg-danger bg-opacity-75 p-4 text-white mb-3">
            <h4 class="font-weight-bolder">Đăng nhập</h4>
          </div>
          <div class="card-body">
            <form role="form" @submit.prevent="handleLogin">
              <div class="mb-3">
                <div class="form-group">
                  <div class="">
                    <!----><input
                      type="text"
                      class="form-control fs-6 form-control-lg invalid focus-input-custom"
                      name="accountName"
                      placeholder="Account Name"
                      isrequired="true"
                      fdprocessedid="1h1ryb"
                      v-model="accountName"
                    /><!---->
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <div class="form-group">
                  <div class="">
                    <!----><input
                      type="password"
                      class="form-control fs-6 form-control-lg invalid focus-input-custom"
                      name="accountPassword"
                      placeholder="Password"
                      isrequired="true"
                      fdprocessedid="b8c7z9"
                      v-model="accountPassword"
                    /><!---->
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <div class="form-group">
                  <div class="">
                    <!---->
                    <label class="text-danger" v-if="wrongAccess">**Đăng nhập sai**</label>
                    <!---->
                  </div>
                </div>
              </div>
              <div class="text-center">
                <button
                  class="btn btn-lg bg-gradient-success w-100 mt-4 fs-6 text-white fw-bolder"
                  fdprocessedid="ycmkz9"
                  v-if="!loading"
                  type="submit"
                >
                  ĐĂNG NHẬP
                </button>
                <button
                  class="btn btn-lg bg-gradient-success w-100 mt-4 fs-6 text-white fw-bolder"
                  fdprocessedid="ycmkz9"
                  v-if="loading"
                  type="submit"
                >
                  <font-awesome-icon class="spinner-border-sm spinner-border" :icon="faSpinner" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box-shadow-custom {
  box-shadow: 0px 0px 20px rgba(128, 128, 128, 0.615);
}

.focus-input-custom:focus {
  border-color: #ff6c6c;
  box-shadow: 0 0 0 0.1rem rgb(255 0 0 / 25%);
}

.bg-gradient-success {
  background-image: linear-gradient(310deg, #98636c, #c69f9f);
}

.bg-gradient-success:hover {
  background-image: linear-gradient(310deg, #c96374, #d06767);
}
</style>
