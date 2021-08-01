<template>
  <LogoLayout>
    <b-modal
      ref="forgot-password-modal"
      size="lg"
      hide-footer
      :no-close-on-backdrop="true"
      title="ลืมรหัสผ่าน"
    >
      <b-form-input
        class="input-login"
        v-model="form.email"
        type="email"
        placeholder="อีเมล"
      ></b-form-input>
      <!--      <CustomerCreate @fetchCustomer="$refs['forgot-password-modal'].hide()" />-->

      <div class="row">
        <div class="offset-md-4 col-4">
          <b-button @click="forgotPassword" variant="outline-info" block
            >ยืนยัน
          </b-button>
        </div>
        <div class="col-4">
          <b-button
            @click="$refs['forgot-password-modal'].hide()"
            variant="outline-danger"
            block
            >ยกเลิก
          </b-button>
        </div>
      </div>
    </b-modal>
    <b-form
      class="formValidate"
      @submit="onSubmit"
      @reset="onReset"
      v-if="show"
    >
      <b-form-input
        class="input-login"
        v-model="form.email"
        type="email"
        placeholder="อีเมล"
      ></b-form-input>
      <b-form-input
        class="input-login"
        v-model="form.password"
        autocomplete="on"
        placeholder="รหัสผ่าน"
        type="password"
      ></b-form-input>

      <div class="row">
        <div class="col-6">
          <b-form-checkbox v-model="form.rememberMe">
            จำฉันไว้
          </b-form-checkbox>
        </div>
        <div class="col-6" style="text-align: end;">
          <a
            class="pointer text-info"
            @click="$refs['forgot-password-modal'].show()"
            >ลืมรหัสผ่าน ?</a
          >
        </div>
      </div>

      <div class="row">
        <div class="offset-md-4 col-4">
          <b-button @click="onSubmit" variant="outline-info" block
            >เข้าสู่ระบบ
          </b-button>
        </div>
      </div>
    </b-form>
  </LogoLayout>
</template>

<script lang="ts" src="./login.controller.ts"></script>
