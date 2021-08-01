<template>
  <b-container class="line-space-y">
    <template v-for="(item, index) in listLotto">
      <b-col md="12" v-bind:key="index" style="padding: 10px 10px 10px 10px">
        <b-card bg-variant="dark" text-variant="white" :title="item.name">
          <div style="display: flex; justify-content: space-between">
            <b-button
                @click="
              showDetail(item.name);
              $refs['modal-detail-lotto'].show();
            "
                variant="primary"
            >ดูข้อมูล</b-button
            >
            <b-button @click="deleteInstallment(item.name)" pill variant="danger"><font-awesome-icon icon="trash" /></b-button>
          </div>
        </b-card>
      </b-col>
    </template>
    <b-modal
      ref="modal-detail-lotto"
      size="xl"
      :title="installment"
      hide-footer
      :no-close-on-backdrop="true"
    >
      <LottoDetail
        :installment="installment"
        @fetchLotto="$refs['modal-detail-lotto'].hide()"
      />
    </b-modal>
  </b-container>
</template>
<script lang="ts" src="./lotto.list.ts" />
