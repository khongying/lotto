<template>
  <b-collapse id="nav-collapse" is-nav>
    <b-navbar-nav>
      <b-nav-item href="#" :active="true">Link</b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-navbar-nav>
        <b-nav-item href="#" @click="$router.push('/supplier')" :active="true"
          >ผู้ขาย</b-nav-item
        >
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-item href="#" @click="$router.push('/customer')" :active="true"
          >ลูกค้า</b-nav-item
        >
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-item href="#" @click="$router.push('/product')" :active="true"
          >สินค้า</b-nav-item
        >
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-item
          href="#"
          @click="$router.push('/bankAccount')"
          :active="true"
          >บัญชี</b-nav-item
        >
      </b-navbar-nav>
      <b-nav-item-dropdown text="ขาย" :active="true" right>
        <b-row>
          <b-col>
            <b-dropdown-item href="#" @click="$router.push('/pos')">
              <font-awesome-icon icon="plus-circle" />
              รายการขาย
            </b-dropdown-item>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-dropdown-item
              href="#"
              @click="$router.push('/sale/invoice/view')"
            >
              <font-awesome-icon icon="plus-circle" />
              view
            </b-dropdown-item>
          </b-col>
        </b-row>
      </b-nav-item-dropdown>
      <b-nav-item-dropdown text="ตั้งค่า" :active="true" right>
        <b-row>
          <b-col>
            <b-dropdown-item href="#" @click="$router.push('/company')">
              <font-awesome-icon icon="building" />
              Company
            </b-dropdown-item>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-dropdown-item href="#" @click="$router.push('/product')">
              <font-awesome-icon icon="boxes" />
              ProductFilter
            </b-dropdown-item>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-dropdown-item href="#" @click="$router.push('/employee')">
              <font-awesome-icon icon="user-plus" />
              Employee
            </b-dropdown-item>
          </b-col>
        </b-row>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown right>
        <template v-slot:button-content>
          <b-avatar
            size="sm"
            variant="info"
            src="https://placekitten.com/300/300"
          ></b-avatar>
        </template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item @click="LogOut">
          <font-awesome-icon icon="sign-out-alt" />
          ออกจากระบบ
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-collapse>
</template>

<script lang="ts" src="./navbar.layout.controller.ts" />
