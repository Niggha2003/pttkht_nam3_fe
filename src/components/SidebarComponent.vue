<script setup>
import accountImg from '@/assets/images/user.png'
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const user = store.state.user

const handleOpenNavChild = (e) => {
  const childNav = e.target.nextElementSibling
  childNav.classList.toggle('show')
}

const handleMenuItemClick = (i) => {
  menu.value.forEach((menuItem) => {
    menuItem.active = false
    if (menuItem != menu.value[i]) {
      menuItem.listChild.forEach((child) => {
        child.active = false
      })
    }
  })
  menu.value[i].active = true
}

const handleMenuItemChildClick = (index, childIndex) => {
  menu.value[index].listChild.forEach((child) => {
    child.active = false
  })

  menu.value[index].listChild[childIndex].active = true
}

// const handleResizeMousedown = (e) => {
//   if (e.clientX < 3 + e.target.clientWidth && e.clientX > +e.target.clientWidth - 3) {
//     isResizing = true
//   } else {
//     return
//   }
// }

// onMounted(() => {
//   if (sidebar.value) {
//     window.addEventListener('mousemove', (e) => {
//       if (e.clientX < 3 + sidebar.value.clientWidth && e.clientX > +sidebar.value.clientWidth - 3) {
//         document.documentElement.style.cursor = 'ew-resize'
//       } else {
//         if (isResizing) {
//           document.documentElement.style.cursor = 'ew-resize'
//           sidebar.value.style.width = `${e.clientX}px`
//         } else {
//           document.documentElement.style.cursor = 'default'
//         }
//       }
//     })

//     window.addEventListener('mouseup', (e) => {
//       if (isResizing) {
//         isResizing = false
//         document.documentElement.style.cursor = 'default'
//         sidebar.value.style.width = `${e.clientX}px`
//       } else {
//         return
//       }
//     })
//   }
// })

const menu = ref([
  {
    name: 'Quản lí lao động',
    active: true,
    listChild: [
      {
        name: 'Năng suất lao động',
        active: false
      },
      {
        name: 'Thống kê lao động',
        active: false
      },
      {
        name: 'Danh sách đen lao động',
        active: false
      }
    ]
  },
  {
    name: 'Quản lí đơn hàng',
    active: false,
    listChild: []
  },
  {
    name: 'Quản lí đơn đăng kí',
    active: false,
    listChild: [
      {
        name: 'Page 1',
        active: false
      },
      {
        name: 'Page 1',
        active: false
      },
      {
        name: 'Page 1',
        active: false
      },
      {
        name: 'Page 2',
        active: false
      },
      {
        name: 'Page 3',
        active: false
      }
    ]
  },
  {
    name: 'Quản lí đào tạo',
    active: false,
    listChild: []
  },
  {
    name: 'Danh sách người dùng',
    active: false,
    listChild: []
  }
])
</script>

<template>
  <!-- <div class="wrapper d-flex align-items-stretch"> -->
  <nav id="sidebar">
    <div class="">
      <a class="img logo rounded-circle mb-2" :style="`background-image: url(${accountImg})`"></a>
      <div class="text-center mb-3 fs-5 fw-bolder text-dark">{{ user.name }}</div>
      <ul class="list-unstyled components mb-5">
        <li
          :class="menuItem.active === true ? 'active' : ''"
          v-for="(menuItem, index) in menu"
          :key="index"
          @click="() => handleMenuItemClick(index)"
        >
          <a
            v-if="menuItem.listChild.length > 0"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle"
            @click="handleOpenNavChild"
            >{{ menuItem.name }}
          </a>
          <a v-else>{{ menuItem.name }}</a>
          <ul v-if="menuItem.listChild.length > 0" class="collapse list-unstyled">
            <li
              v-for="(menuItemChild, childIndex) in menuItem.listChild"
              :key="childIndex"
              :class="menuItemChild.active === true ? 'active' : ''"
              @click="() => handleMenuItemChildClick(index, childIndex)"
            >
              <a>{{ menuItemChild.name }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
  <!-- </div> -->
</template>
